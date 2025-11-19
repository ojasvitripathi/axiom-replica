import { cn } from '@/lib/utils';

interface SkeletonProps {
    className?: string;
}

export function Skeleton({ className }: SkeletonProps) {
    return (
        <div
            className={cn(
                "animate-pulse rounded-md bg-white/10",
                className
            )}
        />
    );
}

export function TableSkeleton({ rows = 8 }: { rows?: number }) {
    return (
        <div className="w-full">
            {/* Header Skeleton */}
            <div className="glass-header h-14 px-5 flex items-center gap-4 border-b border-white/5">
                <Skeleton className="h-4 w-20" />
                <Skeleton className="h-4 w-16" />
                <Skeleton className="h-4 w-24" />
                <Skeleton className="h-4 w-24" />
                <Skeleton className="h-4 w-24" />
                <Skeleton className="h-4 w-20" />
            </div>

            {/* Rows Skeleton */}
            {[...Array(rows)].map((_, i) => (
                <div
                    key={i}
                    className="h-20 px-5 flex items-center gap-4 border-b border-white/5"
                    style={{
                        animationDelay: `${i * 0.05}s`
                    }}
                >
                    <div className="flex items-center gap-3">
                        <Skeleton className="w-8 h-8 rounded-full" />
                        <div className="space-y-2">
                            <Skeleton className="h-4 w-20" />
                            <Skeleton className="h-3 w-12" />
                        </div>
                    </div>
                    <Skeleton className="h-4 w-24 ml-auto" />
                    <Skeleton className="h-6 w-16 rounded-full" />
                    <Skeleton className="h-4 w-20" />
                    <Skeleton className="h-4 w-24" />
                    <Skeleton className="h-8 w-8 rounded-full" />
                </div>
            ))}
        </div>
    );
}
