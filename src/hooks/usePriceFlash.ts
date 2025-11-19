import { useState, useEffect } from 'react';

/**
 * Custom hook for price flash effect
 * Tracks price changes and returns flash state
 * @param currentPrice - Current price value
 * @param flashDuration - Duration of flash effect in ms (default: 1000)
 * @returns 'up' | 'down' | null - Flash state
 */
export function usePriceFlash(currentPrice: number, flashDuration: number = 1000) {
    const [priceFlash, setPriceFlash] = useState<'up' | 'down' | null>(null);
    const [prevPrice, setPrevPrice] = useState(currentPrice);

    /**
     * Price Flash Effect Logic
     * 
     * Purpose: Visual feedback for real-time price changes
     * - Green flash: Price increased
     * - Red flash: Price decreased
     * - No flash: Price unchanged or timeout complete
     * 
     * State Machine:
     * 1. Price changes → Compare with previous price
     * 2. Set flash direction ('up' or 'down')
     * 3. Update previous price for next comparison
     * 4. Start timeout timer
     * 5. After duration, reset flash to null
     * 
     * Why setTimeout?
     * - CSS transition needs time to animate
     * - User needs time to perceive the change
     * - Prevents flash from staying permanently
     * 
     * Cleanup:
     * - clearTimeout prevents memory leaks
     * - Runs when component unmounts or price changes again
     * - Prevents stale timeouts from firing
     */
    useEffect(() => {
        if (currentPrice !== prevPrice) {
            setPriceFlash(currentPrice > prevPrice ? 'up' : 'down');
            setPrevPrice(currentPrice);

            const timer = setTimeout(() => setPriceFlash(null), flashDuration);
            return () => clearTimeout(timer);
        }
    }, [currentPrice, prevPrice, flashDuration]);

    return priceFlash;
}
