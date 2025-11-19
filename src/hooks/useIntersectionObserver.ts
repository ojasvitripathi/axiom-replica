import { useState, useEffect, MutableRefObject } from 'react';

/**
 * Custom hook for Intersection Observer API
 * Detects when an element enters the viewport
 * @param threshold - Percentage of target's visibility needed to trigger (0-1)
 * @returns { ref, isIntersecting } - Ref to attach to element and intersection state
 */
export function useIntersectionObserver(threshold: number = 0.1) {
    const [isIntersecting, setIsIntersecting] = useState(false);
    const [element, setElement] = useState<HTMLElement | null>(null);

    /**
     * IntersectionObserver Setup
     * 
     * Purpose: Detect when an element becomes visible in the viewport
     * Use case: Lazy loading, scroll-triggered animations, analytics
     * 
     * How it works:
     * 1. Browser API observes target element's intersection with viewport
     * 2. Callback fires when intersection ratio crosses threshold
     * 3. State updates trigger React re-renders
     * 
     * Threshold Parameter:
     * - 0.0 = fires as soon as any pixel is visible
     * - 0.5 = fires when 50% of element is visible
     * - 1.0 = fires when entire element is visible
     * 
     * Performance Benefits:
     * - Native browser API (hardware accelerated)
     * - Much more efficient than scroll event listeners
     * - Doesn't block main thread
     * 
     * Memory Management:
     * - observer.disconnect() in cleanup prevents memory leaks
     * - Stops observing when component unmounts
     */
    useEffect(() => {
        if (!element) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    setIsIntersecting(entry.isIntersecting);
                });
            },
            { threshold }
        );

        observer.observe(element);

        // Cleanup: disconnect observer when component unmounts or element changes
        return () => {
            observer.disconnect();
        };
    }, [element, threshold]);

    return { ref: setElement, isIntersecting };
}
