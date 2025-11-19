'use client';

import { useState, useMemo, useEffect } from 'react';
import { Token, SortConfig } from '@/types';
import { TableHeader } from '@/components/features/TokenTable/TableHeader';
import { TokenRow } from '@/components/features/TokenTable/TokenRow';
import { TokenDetailsModal } from '@/components/features/TokenTable/TokenDetailsModal';
import { useBinanceWebSocket } from '@/hooks/useBinanceWebSocket';
import { ErrorBoundary } from '@/components/ui/ErrorBoundary';
import { TableSkeleton } from '@/components/ui/Skeleton';
import Image from 'next/image'; // Initial mock data to populate the table before WS updates
const INITIAL_TOKENS: Token[] = [
    { id: 'bitcoin', name: 'Bitcoin', symbol: 'BTC', price: 64000, change24h: 2.5, volume24h: 35000000000, marketCap: 1200000000000, logoUrl: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png' },
    { id: 'ethereum', name: 'Ethereum', symbol: 'ETH', price: 3400, change24h: 1.2, volume24h: 15000000000, marketCap: 400000000000, logoUrl: 'https://cryptologos.cc/logos/ethereum-eth-logo.png' },
    { id: 'solana', name: 'Solana', symbol: 'SOL', price: 145, change24h: 5.8, volume24h: 4000000000, marketCap: 65000000000, logoUrl: 'https://cryptologos.cc/logos/solana-sol-logo.png' },
    { id: 'binancecoin', name: 'BNB', symbol: 'BNB', price: 590, change24h: 0.5, volume24h: 1200000000, marketCap: 87000000000, logoUrl: 'https://cryptologos.cc/logos/bnb-bnb-logo.png' },
    { id: 'ripple', name: 'XRP', symbol: 'XRP', price: 0.62, change24h: -1.5, volume24h: 1500000000, marketCap: 34000000000, logoUrl: 'https://cryptologos.cc/logos/xrp-xrp-logo.png' },
    { id: 'cardano', name: 'Cardano', symbol: 'ADA', price: 0.45, change24h: -0.8, volume24h: 400000000, marketCap: 16000000000, logoUrl: 'https://cryptologos.cc/logos/cardano-ada-logo.png' },
    { id: 'dogecoin', name: 'Dogecoin', symbol: 'DOGE', price: 0.16, change24h: 8.4, volume24h: 2500000000, marketCap: 23000000000, logoUrl: 'https://cryptologos.cc/logos/dogecoin-doge-logo.png' },
    { id: 'polkadot', name: 'Polkadot', symbol: 'DOT', price: 7.2, change24h: 1.1, volume24h: 200000000, marketCap: 10000000000, logoUrl: 'https://cryptologos.cc/logos/polkadot-new-dot-logo.png' },
];

export function TokenTable() {
    const { tokens, connectionState, error } = useBinanceWebSocket(INITIAL_TOKENS);
    const [sortConfig, setSortConfig] = useState<SortConfig>({ key: 'marketCap', direction: 'desc' });
    const [selectedToken, setSelectedToken] = useState<Token | null>(null);
    const [isInitialLoad, setIsInitialLoad] = useState(true);

    // Show skeleton for first 2 seconds
    useEffect(() => {
        const timer = setTimeout(() => setIsInitialLoad(false), 2000);
        return () => clearTimeout(timer);
    }, []);

    /**
     * Sorting Algorithm for Token Table
     * 
     * Handles both string and numeric sorting with proper type detection
     * Uses useMemo for performance optimization (only re-sorts when dependencies change)
     * 
     * Algorithm:
     * 1. Check if tokens array exists
     * 2. Create a shallow copy to avoid mutating original state
     * 3. Sort based on the configured key and direction
     * 
     * Type Handling:
     * - String values (name, symbol): Use localeCompare for proper alphabetical sorting
     *   - Handles special characters and internationalization
     *   - Case-insensitive comparison
     * 
     * - Numeric values (price, volume, marketCap): Direct numeric comparison
     *   - Converts to number to handle edge cases
     *   - Defaults to 0 for invalid values (defensive programming)
     * 
     * Performance Considerations:
     * - useMemo prevents unnecessary re-sorts on unrelated renders
     * - Only re-computes when tokens or sortConfig changes
     * - O(n log n) time complexity (built-in JS sort uses Timsort)
     */
    const sortedTokens = useMemo(() => {
        if (!tokens) return [];
        const config = sortConfig;
        if (!config) return tokens;

        return [...tokens].sort((a, b) => {
            const aValue = a[config.key];
            const bValue = b[config.key];

            // String comparison (e.g., name, symbol)
            if (typeof aValue === 'string' && typeof bValue === 'string') {
                return config.direction === 'asc'
                    ? aValue.localeCompare(bValue)  // A-Z
                    : bValue.localeCompare(aValue); // Z-A
            }

            // Numeric comparison (e.g., price, volume, marketCap)
            const aNum = Number(aValue) || 0;  // Convert to number, default to 0
            const bNum = Number(bValue) || 0;

            return config.direction === 'asc'
                ? aNum - bNum  // Low to high
                : bNum - aNum; // High to low
        });
    }, [tokens, sortConfig]);

    const handleSort = (key: keyof Token) => {
        setSortConfig((prev) => ({
            key,
            direction: prev?.key === key && prev.direction === 'asc' ? 'desc' : 'asc',
        }));
    };

    const handleRowClick = (token: Token) => {
        setSelectedToken(token);
    };

    if (isInitialLoad) {
        return (
            <div className="relative w-full">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-accent/20 to-secondary/20 rounded-xl blur-2xl opacity-50 -z-10" />
                <div className="w-full rounded-xl border border-white/10 bg-black/40 backdrop-blur-xl shadow-2xl ring-1 ring-white/5">
                    <TableSkeleton rows={8} />
                </div>
            </div>
        );
    }

    return (
        <ErrorBoundary>
            <div className="relative w-full">
                {/* Glow Effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-accent/20 to-secondary/20 rounded-xl blur-2xl opacity-50 -z-10" />

                <div className="w-full rounded-xl border border-white/10 bg-black/40 backdrop-blur-xl shadow-2xl ring-1 ring-white/5">
                    <table className="w-full caption-bottom text-sm">
                        <TableHeader sortConfig={sortConfig} onSort={handleSort} />
                        <tbody className="divide-y divide-white/5">
                            {sortedTokens.map((token) => (
                                <TokenRow
                                    key={token.id}
                                    token={token}
                                    onClick={() => handleRowClick(token)}
                                />
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {selectedToken && (
                <TokenDetailsModal
                    token={selectedToken}
                    isOpen={!!selectedToken}
                    onClose={() => setSelectedToken(null)}
                />
            )}
        </ErrorBoundary>
    );
}
