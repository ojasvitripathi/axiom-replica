import { useQuery } from '@tanstack/react-query';
import { Token } from '@/types';

const MOCK_TOKENS: Token[] = [
    { id: '1', name: 'Bitcoin', symbol: 'BTC', price: 65000, change24h: 2.5, volume24h: 35000000000, marketCap: 1200000000000, logoUrl: '/btc.png' },
    { id: '2', name: 'Ethereum', symbol: 'ETH', price: 3500, change24h: -1.2, volume24h: 15000000000, marketCap: 400000000000, logoUrl: '/eth.png' },
    { id: '3', name: 'Solana', symbol: 'SOL', price: 145, change24h: 5.8, volume24h: 4000000000, marketCap: 65000000000, logoUrl: '/sol.png' },
    { id: '4', name: 'Cardano', symbol: 'ADA', price: 0.45, change24h: 0.5, volume24h: 300000000, marketCap: 16000000000, logoUrl: '/ada.png' },
    { id: '5', name: 'Ripple', symbol: 'XRP', price: 0.62, change24h: 1.1, volume24h: 1200000000, marketCap: 34000000000, logoUrl: '/xrp.png' },
];

export function useTokens() {
    return useQuery({
        queryKey: ['tokens'],
        queryFn: async () => {
            // Simulate network delay
            await new Promise((resolve) => setTimeout(resolve, 1000));
            return MOCK_TOKENS;
        },
        refetchInterval: 5000, // Simulate real-time updates
    });
}
