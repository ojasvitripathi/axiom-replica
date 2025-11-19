'use client';

import { MoreHorizontal, Eye, TrendingUp, Info } from 'lucide-react';
import { useState } from 'react';

export function TokenActions() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 hover:bg-muted rounded-full transition-colors"
            >
                <MoreHorizontal className="h-4 w-4" />
            </button>

            {isOpen && (
                <div className="absolute right-0 top-full mt-2 w-48 rounded-md border bg-popover p-1 text-popover-foreground shadow-md z-50">
                    <button className="flex w-full items-center gap-2 rounded-sm px-2 py-1.5 text-sm hover:bg-accent hover:text-accent-foreground">
                        <Eye className="h-4 w-4" />
                        View Details
                    </button>
                    <button className="flex w-full items-center gap-2 rounded-sm px-2 py-1.5 text-sm hover:bg-accent hover:text-accent-foreground">
                        <TrendingUp className="h-4 w-4" />
                        Trade
                    </button>
                    <div className="my-1 h-px bg-muted" />
                    <button className="flex w-full items-center gap-2 rounded-sm px-2 py-1.5 text-sm hover:bg-accent hover:text-accent-foreground">
                        <Info className="h-4 w-4" />
                        More Info
                    </button>
                </div>
            )}
        </div>
    );
}
