/**
 * Formatting utilities for currency and numbers
 * @module lib/formatters
 */

/**
 * Format number as currency with M/B/K suffixes for large values
 *
 * @param value - Number to format (in USD)
 * @param decimals - Number of decimal places (default: 2)
 * @returns Formatted string with $ prefix and suffix
 *
 * @example
 * ```ts
 * formatCurrency(1500000)       // "$1.50M"
 * formatCurrency(2500000000)    // "$2.50B"
 * formatCurrency(999, 0)        // "$999"
 * formatCurrency(1234.56, 2)    // "$1.23K"
 * ```
 */
export function formatCurrency(value: number, decimals: number = 2): string {
    if (!isFinite(value) || isNaN(value)) {
        return '$0.00';
    }

    if (value >= 1_000_000_000) {
        return `$${(value / 1_000_000_000).toFixed(decimals)}B`;
    }
    if (value >= 1_000_000) {
        return `$${(value / 1_000_000).toFixed(decimals)}M`;
    }
    if (value >= 1_000) {
        return `$${(value / 1_000).toFixed(decimals)}K`;
    }
    return `$${value.toFixed(decimals)}`;
}

/**
 * Format percentage with + or - prefix
 *
 * @param value - Percentage value (e.g., 5.23 for 5.23%)
 * @param decimals - Number of decimal places (default: 2)
 * @returns Formatted string with % suffix
 *
 * @example
 * ```ts
 * formatPercentage(5.23, 1)   // "+5.2%"
 * formatPercentage(-2.4, 1)   // "-2.4%"
 * formatPercentage(0, 0)      // "0%"
 * ```
 */
export function formatPercentage(value: number, decimals: number = 2): string {
    if (!isFinite(value) || isNaN(value)) {
        return '0%';
    }

    const prefix = value > 0 ? '+' : '';
    return `${prefix}${value.toFixed(decimals)}%`;
}

/**
 * Format number with thousands separators
 *
 * @param value - Number to format
 * @param decimals - Number of decimal places (default: 2)
 * @returns Formatted string with commas
 *
 * @example
 * ```ts
 * formatNumber(1234567.89)      // "1,234,567.89"
 * formatNumber(1000)            // "1,000.00"
 * formatNumber(42, 0)           // "42"
 * ```
 */
export function formatNumber(value: number, decimals: number = 2): string {
    if (!isFinite(value) || isNaN(value)) {
        return '0';
    }

    return value.toLocaleString('en-US', {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
    });
}
