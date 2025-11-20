'use client';

import { Token } from '@/types';
import { TokenActions } from './TokenActions';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { Tooltip } from '@/components/ui/Tooltip';
import { usePriceFlash } from '@/hooks/usePriceFlash';
import { formatCurrency, formatPercentage } from '@/lib/formatters';
import { TRANSITIONS } from '@/lib/styles';

interface TokenRowProps {
    token: Token;
    onClick?: () => void;
}

export function TokenRow({ token, onClick }: TokenRowProps) {
    const priceFlash = usePriceFlash(token.price);

    return (
        <tr
            onClick={onClick}
            className="group cursor-pointer transition-all duration-200 hover:bg-white/5"
        >
            <td className="p-5 align-middle font-medium text-white/90">
                <Tooltip content={`${token.name} (${token.symbol}) - Click for details`} position="right">
                    <div className="flex items-center gap-3">
                        {token.logoUrl && (
                            <div className="relative h-8 w-8 overflow-hidden rounded-full ring-2 ring-white/10 transition-transform group-hover:scale-110">
                                <Image
                                    src={token.logoUrl}
                                    alt={token.name}
                                    width={32}
                                    height={32}
                                    className="object-cover"
                                    loading="lazy"
                                    unoptimized
                                />
                            </div>
                        )}
                        <div className="flex flex-col">
                            <span className="text-base font-semibold tracking-tight">{token.name}</span>
                            <span className="text-xs font-medium text-white/40">{token.symbol}</span>
                        </div>
                    </div>
                </Tooltip>
            </td>
            <td className={cn(
                "p-5 align-middle text-sm font-medium",
                TRANSITIONS.flashPrice,
                priceFlash === 'up' && "text-emerald-400 bg-emerald-400/10",
                priceFlash === 'down' && "text-rose-400 bg-rose-400/10",
                !priceFlash && "text-white/80"
            )}>
                ${token.price.toLocaleString()}
            </td>
            <td className={cn("p-5 align-middle text-sm font-medium", token.change24h >= 0 ? "text-emerald-400" : "text-rose-400")}>
                <div className={cn("inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold bg-opacity-10",
                    token.change24h >= 0 ? "bg-emerald-400/10" : "bg-rose-400/10"
                )}>
                    {formatPercentage(token.change24h, 1)}
                </div>
            </td>
            <td className="p-5 align-middle text-sm text-white/60">{formatCurrency(token.volume24h)}</td>
            <td className="p-5 align-middle text-sm text-white/60">{formatCurrency(token.marketCap)}</td>
            <td className="p-5 align-middle">
                <div className="opacity-0 transition-opacity group-hover:opacity-100">
                    <TokenActions />
                </div>
            </td>
        </tr>
    );
}
