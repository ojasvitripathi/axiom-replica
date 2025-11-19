'use client';

import { useState, useEffect } from 'react';
import { TokenTable } from '@/components/features/TokenTable/TokenTable';
import { TableSkeleton } from '@/components/ui/Skeleton';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

export function TableSection() {
    const { ref, isIntersecting } = useIntersectionObserver(0.1);
    const [hasLoaded, setHasLoaded] = useState(false);

    useEffect(() => {
        if (isIntersecting && !hasLoaded) {
            // Show skeleton for 1 second, then show table
            const timer = setTimeout(() => {
                setHasLoaded(true);
            }, 1000);
            return () => clearTimeout(timer);
        }
    }, [isIntersecting, hasLoaded]);

    return (
        <div ref={ref as any} className="relative rounded-xl border border-white/10 bg-black/50 backdrop-blur-xl shadow-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-purple-500/5 pointer-events-none" />
            <div className="p-1 bg-white/5 border-b border-white/5 flex gap-2 items-center px-4 h-10">
                <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
                <div className="ml-4 text-xs text-white/20 font-mono">axiom.trade</div>
            </div>

            {!hasLoaded && isIntersecting ? (
                <TableSkeleton rows={8} />
            ) : hasLoaded ? (
                <TokenTable />
            ) : (
                <div className="h-[600px]" /> // Placeholder height
            )}
        </div>
    );
}
