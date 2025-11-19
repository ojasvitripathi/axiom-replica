/**
 * Core token data structure
 * Represents a cryptocurrency token with pricing and market data
 */
export interface Token {
    /** Unique identifier for the token (e.g., 'bitcoin', 'ethereum') */
    id: string;
    /** Full name of the token (e.g., 'Bitcoin') */
    name: string;
    /** Token symbol/ticker (e.g., 'BTC') */
    symbol: string;
    /** Current price in USD */
    price: number;
    /** 24-hour price change percentage */
    change24h: number;
    /** 24-hour trading volume in USD */
    volume24h: number;
    /** Total market capitalization in USD */
    marketCap: number;
    /** Optional URL to token logo image */
    logoUrl?: string;
}

/**
 * Global UI state managed by Redux
 */
export interface UIState {
    /** Modal open/close state */
    isModalOpen: boolean;
    /** Currently selected token for detail view */
    selectedToken: Token | null;
    /** Current table sorting configuration */
    sortConfig: SortConfig | null;
}

/**
 * Table sorting configuration
 */
export interface SortConfig {
    /** Token property to sort by */
    key: keyof Token;
    /** Sort direction */
    direction: 'asc' | 'desc';
}

/**
 * Binance WebSocket ticker event
 * @see https://binance-docs.github.io/apidocs/spot/en/#individual-symbol-ticker-streams
 */
export interface BinanceTickerEvent {
    /** Event type - always '24hrTicker' */
    e: '24hrTicker';
    /** Event time */
    E: number;
    /** Symbol (e.g., 'BTCUSDT') */
    s: string;
    /** Price change */
    p: string;
    /** Price change percent */
    P: string;
    /** Weighted average price */
    w: string;
    /** First trade(F)-1 price (first trade before the 24hr rolling window) */
    x: string;
    /** Last price */
    c: string;
    /** Last quantity */
    Q: string;
    /** Best bid price */
    b: string;
    /** Best bid quantity */
    B: string;
    /** Best ask price */
    a: string;
    /** Best ask quantity */
    A: string;
    /** Open price */
    o: string;
    /** High price */
    h: string;
    /** Low price */
    l: string;
    /** Total traded base asset volume */
    v: string;
    /** Total traded quote asset volume */
    q: string;
    /** Statistics open time */
    O: number;
    /** Statistics close time */
    C: number;
    /** First trade ID */
    F: number;
    /** Last trade Id */
    L: number;
    /** Total number of trades */
    n: number;
}

/**
 * Price flash animation state
 */
export type PriceFlashState = 'up' | 'down' | null;

/**
 * Tooltip position options
 */
export type TooltipPosition = 'top' | 'bottom' | 'left' | 'right';

/**
 * Type guard to check if value is a valid number
 */
export function isValidNumber(value: unknown): value is number {
    return typeof value === 'number' && !isNaN(value) && isFinite(value);
}

/**
 * Type guard to check if value is a valid Token
 */
export function isToken(value: unknown): value is Token {
    if (!value || typeof value !== 'object') return false;

    const token = value as Record<string, unknown>;

    return (
        typeof token.id === 'string' &&
        typeof token.name === 'string' &&
        typeof token.symbol === 'string' &&
        isValidNumber(token.price) &&
        isValidNumber(token.change24h) &&
        isValidNumber(token.volume24h) &&
        isValidNumber(token.marketCap)
    );
}
