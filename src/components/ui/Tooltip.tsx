'use client';

import { ReactNode, useState } from 'react';

interface TooltipProps {
    children: ReactNode;
    content: string;
    position?: 'top' | 'bottom' | 'left' | 'right';
}

export function Tooltip({ children, content, position = 'top' }: TooltipProps) {
    const [isVisible, setIsVisible] = useState(false);

    const positionClasses = {
        top: 'bottom-full left-1/2 -translate-x-1/2 mb-2',
        bottom: 'top-full left-1/2 -translate-x-1/2 mt-2',
        left: 'right-full top-1/2 -translate-y-1/2 mr-2',
        right: 'left-full top-1/2 -translate-y-1/2 ml-2',
    };

    return (
        <div
            className="relative inline-flex"
            onMouseEnter={() => setIsVisible(true)}
            onMouseLeave={() => setIsVisible(false)}
        >
            {children}
            {isVisible && (
                <div
                    className={`absolute z-[9999] px-3 py-2 text-sm text-white bg-gray-900 border border-white/10 rounded-lg shadow-lg whitespace-nowrap pointer-events-none ${positionClasses[position]}`}
                >
                    {content}
                    {/* Arrow */}
                    <div
                        className={`absolute w-2 h-2 bg-gray-900 border-white/10 transform rotate-45 ${position === 'top'
                                ? 'bottom-[-5px] left-1/2 -translate-x-1/2 border-r border-b'
                                : position === 'bottom'
                                    ? 'top-[-5px] left-1/2 -translate-x-1/2 border-l border-t'
                                    : position === 'left'
                                        ? 'right-[-5px] top-1/2 -translate-y-1/2 border-t border-r'
                                        : 'left-[-5px] top-1/2 -translate-y-1/2 border-b border-l'
                            }`}
                    />
                </div>
            )}
        </div>
    );
}
