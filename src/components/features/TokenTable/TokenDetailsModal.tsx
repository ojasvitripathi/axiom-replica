'use client';

import Image from 'next/image';
import { Token } from '@/types';
import { Modal } from '@/components/ui/Modal';

interface TokenDetailsModalProps {
    token: Token | null;
    isOpen: boolean;
    onClose: () => void;
}

export function TokenDetailsModal({ token, isOpen, onClose }: TokenDetailsModalProps) {
    if (!token) return null;

    return (
        <Modal isOpen={isOpen} onClose={onClose} title={token.name}>
            <div className="grid gap-4 py-4">
                <div className="flex items-center justify-center mb-4">
                    {token.logoUrl && (
                        <div className="relative w-16 h-16 rounded-full overflow-hidden">
                            <Image
                                src={token.logoUrl}
                                alt={token.name}
                                fill
                                className="object-cover"
                                unoptimized
                            />
                        </div>
                    )}
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                        <p className="text-sm font-medium text-muted-foreground">Price</p>
                        <p className="text-2xl font-bold">${token.price.toLocaleString()}</p>
                    </div>
                    <div className="space-y-1">
                        <p className="text-sm font-medium text-muted-foreground">24h Change</p>
                        <p className={`text-2xl font-bold ${token.change24h >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                            {token.change24h > 0 ? '+' : ''}{token.change24h}%
                        </p>
                    </div>
                    <div className="space-y-1">
                        <p className="text-sm font-medium text-muted-foreground">Market Cap</p>
                        <p className="text-lg font-semibold">${(token.marketCap / 1000000000).toFixed(2)}B</p>
                    </div>
                    <div className="space-y-1">
                        <p className="text-sm font-medium text-muted-foreground">Volume (24h)</p>
                        <p className="text-lg font-semibold">${(token.volume24h / 1000000).toFixed(2)}M</p>
                    </div>
                </div>
                <div className="mt-4">
                    <button
                        onClick={onClose}
                        className="w-full rounded-md bg-primary px-4 py-2 text-primary-foreground hover:bg-primary/90"
                    >
                        Close
                    </button>
                </div>
            </div>
        </Modal>
    );
}
