/**
 * Shared CSS class name constants
 * Use these for consistent styling across the app
 */

export const GRADIENTS = {
    hero: 'bg-gradient-to-b from-blue-950/50 via-purple-950/40 to-transparent',
    footer: 'bg-gradient-to-b from-blue-950/30 via-blue-900/20 to-black',
    faq: 'bg-gradient-to-b from-[#0A0A0A] via-[#050505] to-black',
    rewards: 'bg-gradient-to-b from-black via-blue-950/20 to-black',
    tablePreview: 'bg-gradient-to-b from-blue-500/5 to-purple-500/5',
} as const;

export const GLASS = {
    panel: 'bg-black/40 backdrop-blur-xl border border-white/10',
    card: 'bg-white/5 backdrop-blur-md border border-white/5',
    header: 'bg-black/20 backdrop-blur-lg border-b border-white/5',
} as const;

export const GLOW = {
    blue: 'shadow-[0_0_30px_-5px_rgba(76,111,255,0.5)]',
    blueHover: 'hover:shadow-[0_0_40px_-5px_rgba(76,111,255,0.7)]',
    border: 'shadow-[0_0_20px_rgba(59,130,246,0.1)]',
} as const;

export const TRANSITIONS = {
    default: 'transition-all duration-300',
    fast: 'transition-all duration-150',
    slow: 'transition-all duration-500',
    colors: 'transition-colors duration-300',
    flashPrice: 'transition-all duration-1000',
} as const;

export const SPACING = {
    sectionPy: 'py-32',
    containerPx: 'px-4 mx-auto max-w-7xl',
} as const;
