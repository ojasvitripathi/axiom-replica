import { ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'default' | 'ghost' | 'outline';
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = 'default', ...props }, ref) => {
        return (
            <button
                ref={ref}
                className={cn(
                    "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 cursor-pointer",
                    "h-9 px-4 py-2",
                    variant === 'default' && "bg-primary text-primary-foreground shadow hover:bg-primary/90",
                    variant === 'ghost' && "hover:bg-accent hover:text-accent-foreground",
                    variant === 'outline' && "border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground",
                    className
                )}
                {...props}
            />
        );
    }
);
Button.displayName = "Button";
