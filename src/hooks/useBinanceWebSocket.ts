import { useEffect, useRef, useState, useCallback } from 'react';
import { Token, BinanceTickerEvent, isValidNumber } from '@/types';

/**
 * Map of Binance trading pairs to our internal token IDs
 */
const SYMBOL_MAP: Readonly<Record<string, string>> = {
    'BTCUSDT': 'bitcoin',
    'ETHUSDT': 'ethereum',
    'SOLUSDT': 'solana',
    'BNBUSDT': 'binancecoin',
    'XRPUSDT': 'ripple',
    'ADAUSDT': 'cardano',
    'DOGEUSDT': 'dogecoin',
    'DOTUSDT': 'polkadot',
} as const;

/**
 * WebSocket connection states
 */
type ConnectionState = 'connecting' | 'connected' | 'disconnected' | 'error';

/**
 * Custom hook for real-time crypto price updates via Binance WebSocket
 *
 * @param initialTokens - Initial token data to display before WebSocket updates
 * @returns {Object} Real-time token data and connection state
 * @returns {Token[]} returns.tokens - Array of tokens with live price updates
 * @returns {ConnectionState} returns.connectionState - Current WebSocket connection state
 * @returns {Error|null} returns.error - Last error that occurred, if any
 *
 * @example
 * ```tsx
 * const { tokens, connectionState, error } = useBinanceWebSocket(INITIAL_TOKENS);
 *
 * if (connectionState === 'error') {
 *     return <div>Error: {error?.message}</div>;
 * }
 * ```
 */
export function useBinanceWebSocket(initialTokens: Token[]) {
    const [tokens, setTokens] = useState<Token[]>(initialTokens);
    const [connectionState, setConnectionState] = useState<ConnectionState>('connecting');
    const [error, setError] = useState<Error | null>(null);
    const wsRef = useRef<WebSocket | null>(null);
    const reconnectTimeoutRef = useRef<NodeJS.Timeout | undefined>(undefined);
    const reconnectAttemptsRef = useRef(0);

    const MAX_RECONNECT_ATTEMPTS = 5;
    const RECONNECT_DELAY = 3000;

    /**
     * Safely parse and validate incoming WebSocket data
     */
    const parseTickerData = useCallback((data: string): BinanceTickerEvent | null => {
        try {
            const parsed = JSON.parse(data);

            // Validate event type
            if (parsed.e !== '24hrTicker') {
                return null;
            }

            return parsed as BinanceTickerEvent;
        } catch (err) {
            console.error('[WebSocket] Failed to parse ticker data:', err);
            return null;
        }
    }, []);

    /**
     * Update token state with new price data
     * Includes validation to prevent invalid data from entering state
     */
    const updateTokenPrice = useCallback((tickerEvent: BinanceTickerEvent) => {
        const { s: symbol, c: currentPrice, P: priceChangePercent, q: quoteVolume } = tickerEvent;
        const tokenId = SYMBOL_MAP[symbol];

        if (!tokenId) {
            console.warn(`[WebSocket] Unknown symbol: ${symbol}`);
            return;
        }

        // Parse and validate numeric values
        const price = parseFloat(currentPrice);
        const change24h = parseFloat(priceChangePercent);
        const volume24h = parseFloat(quoteVolume);

        if (!isValidNumber(price) || !isValidNumber(change24h) || !isValidNumber(volume24h)) {
            console.error(`[WebSocket] Invalid numeric data for ${symbol}`);
            return;
        }

        setTokens(prevTokens => prevTokens.map(token => {
            if (token.id === tokenId) {
                /**
                 * Market Cap Estimation Algorithm
                 * 
                 * Problem: Binance WebSocket doesn't provide market cap directly
                 * Solution: Estimate based on price ratio
                 * 
                 * Formula: newMarketCap = oldMarketCap * (newPrice / oldPrice)
                 * 
                 * Example:
                 * - Old price: $100, Old market cap: $1B
                 * - New price: $110 (10% increase)
                 * - Price ratio: 110/100 = 1.1
                 * - New market cap: $1B * 1.1 = $1.1B
                 * 
                 * Assumptions:
                 * - Circulating supply remains constant between updates
                 * - Market cap = Price * Circulating Supply
                 * 
                 * Limitations:
                 * - Not accurate if circulating supply changes
                 * - Only an approximation for real-time display
                 * - For production, fetch actual market cap from API
                 */
                const priceRatio = price / token.price;
                const newMarketCap = token.marketCap * priceRatio;

                if (!isValidNumber(newMarketCap)) {
                    console.error(`[WebSocket] Invalid market cap calculation for ${symbol}`);
                    return token; // Return unchanged token
                }

                return {
                    ...token,
                    price,
                    change24h,
                    volume24h,
                    marketCap: newMarketCap,
                };
            }
            return token;
        }));
    }, []);

    /**
     * Initialize WebSocket connection with error handling
     */
    const connectWebSocket = useCallback(() => {
        try {
            setConnectionState('connecting');
            const ws = new WebSocket('wss://stream.binance.com:9443/ws');
            wsRef.current = ws;

            ws.onopen = () => {
                console.log('[WebSocket] Connected to Binance');
                setConnectionState('connected');
                setError(null);
                reconnectAttemptsRef.current = 0;

                // Subscribe to ticker streams for all mapped symbols
                const streams = Object.keys(SYMBOL_MAP).map(s => `${s.toLowerCase()}@ticker`);
                const subscribeMsg = {
                    method: "SUBSCRIBE",
                    params: streams,
                    id: 1
                };

                try {
                    ws.send(JSON.stringify(subscribeMsg));
                } catch (err) {
                    console.error('[WebSocket] Failed to send subscription:', err);
                    setError(err instanceof Error ? err : new Error('Subscription failed'));
                }
            };

            ws.onmessage = (event) => {
                try {
                    const tickerData = parseTickerData(event.data);
                    if (tickerData) {
                        updateTokenPrice(tickerData);
                    }
                } catch (err) {
                    console.error('[WebSocket] Message handling error:', err);
                }
            };

            ws.onerror = (event) => {
                console.error('[WebSocket] Connection error:', event);
                const err = new Error('WebSocket connection error');
                setError(err);
                setConnectionState('error');
            };

            ws.onclose = () => {
                console.log('[WebSocket] Connection closed');
                setConnectionState('disconnected');

                /**
                 * Automatic reconnection with exponential backoff strategy
                 * 
                 * Why exponential backoff?
                 * - Prevents overwhelming the server with rapid reconnection attempts
                 * - Gives transient issues time to resolve
                 * - Industry standard for retry logic
                 * 
                 * Formula: delay = BASE_DELAY * 2^(attempt - 1)
                 * Example progression:
                 * - Attempt 1: 3000ms (3s)
                 * - Attempt 2: 6000ms (6s)
                 * - Attempt 3: 12000ms (12s)
                 * - Attempt 4: 24000ms (24s)
                 * - Attempt 5: 48000ms (48s)
                 * 
                 * After 5 failed attempts, we stop trying and set error state
                 * Total retry duration: ~93 seconds
                 */
                if (reconnectAttemptsRef.current < MAX_RECONNECT_ATTEMPTS) {
                    reconnectAttemptsRef.current += 1;

                    // Calculate exponential backoff delay
                    const delay = RECONNECT_DELAY * Math.pow(2, reconnectAttemptsRef.current - 1);

                    console.log(`[WebSocket] Reconnecting in ${delay}ms (attempt ${reconnectAttemptsRef.current}/${MAX_RECONNECT_ATTEMPTS})`);

                    // Schedule reconnection attempt
                    reconnectTimeoutRef.current = setTimeout(() => {
                        connectWebSocket();
                    }, delay);
                } else {
                    // Max attempts reached - give up and notify user
                    const err = new Error('Max reconnection attempts reached');
                    setError(err);
                    setConnectionState('error');
                }
            };
        } catch (err) {
            console.error('[WebSocket] Failed to create connection:', err);
            setError(err instanceof Error ? err : new Error('Connection failed'));
            setConnectionState('error');
        }
    }, [parseTickerData, updateTokenPrice]);

    useEffect(() => {
        connectWebSocket();

        return () => {
            // Cleanup on unmount
            if (reconnectTimeoutRef.current) {
                clearTimeout(reconnectTimeoutRef.current);
            }

            if (wsRef.current) {
                const ws = wsRef.current;
                if (ws.readyState === WebSocket.OPEN) {
                    ws.close();
                }
            }
        };
    }, [connectWebSocket]);

    return { tokens, connectionState, error };
}
