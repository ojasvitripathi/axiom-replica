'use client';

import { ArrowUpDown, ArrowUp, ArrowDown } from 'lucide-react';
import { SortConfig, Token } from '@/types';
import { Tooltip } from '@/components/ui/Tooltip';

interface TableHeaderProps {
    sortConfig: SortConfig | null;
    onSort: (key: keyof Token) => void;
}

export function TableHeader({ sortConfig, onSort }: TableHeaderProps) {
    const renderSortIcon = (key: keyof Token) => {
        if (sortConfig?.key !== key) return <ArrowUpDown className="ml-2 h-4 w-4" />;
        return sortConfig.direction === 'asc' ? <ArrowUp className="ml-2 h-4 w-4" /> : <ArrowDown className="ml-2 h-4 w-4" />;
    };

    const headers: { key: keyof Token; label: string; tooltip: string; tooltipPosition?: 'top' | 'bottom' | 'left' | 'right' }[] = [
        { key: 'name', label: 'Name', tooltip: 'Token name and symbol', tooltipPosition: 'right' },
        { key: 'price', label: 'Price', tooltip: 'Current market price in USD', tooltipPosition: 'top' },
        { key: 'change24h', label: '24h Change', tooltip: 'Price change in the last 24 hours', tooltipPosition: 'top' },
        { key: 'volume24h', label: '24h Volume', tooltip: 'Trading volume in the last 24 hours', tooltipPosition: 'top' },
        { key: 'marketCap', label: 'Market Cap', tooltip: 'Total market capitalization', tooltipPosition: 'top' },
    ];

    return (
        <thead className="glass-header">
            <tr>
                {headers.map(({ key, label, tooltip, tooltipPosition }) => (
                    <th
                        key={key}
                        className="h-14 px-5 text-left align-middle text-xs font-semibold uppercase tracking-wider text-white/40 transition-colors hover:text-white/80 cursor-pointer select-none"
                        onClick={() => onSort(key)}
                    >
                        <Tooltip content={tooltip} position={tooltipPosition || 'top'}>
                            <div className="flex items-center gap-2">
                                {label}
                                {renderSortIcon(key)}
                            </div>
                        </Tooltip>
                    </th>
                ))}
                <th className="h-14 px-5 text-left align-middle text-xs font-semibold uppercase tracking-wider text-white/40">
                    <Tooltip content="Additional actions for this token" position="left">
                        <span>Actions</span>
                    </Tooltip>
                </th>
            </tr>
        </thead>
    );
}
