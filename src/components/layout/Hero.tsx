'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { Triangle } from 'lucide-react';

export function Hero() {
    return (
        <section className="relative flex min-h-screen flex-col items-center justify-center px-4 pt-20 text-center overflow-hidden">
            {/* Enhanced Gradient Background */}
            <div className="absolute inset-0 z-0 bg-black" />

            {/* Main gradient overlay */}
            <div className="absolute inset-0 z-0 bg-gradient-to-b from-blue-950/50 via-purple-950/40 to-transparent" />

            {/* Radial glow effects */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] z-0 bg-blue-500/30 rounded-full blur-[150px]" />
            <div className="absolute top-1/3 right-1/4 w-[700px] h-[700px] z-0 bg-purple-500/25 rounded-full blur-[120px]" />
            <div className="absolute bottom-1/3 left-1/4 w-[600px] h-[600px] z-0 bg-cyan-500/20 rounded-full blur-[100px]" />

            {/* Content - needs relative positioning to be above background */}
            <div className="relative z-10 flex flex-col items-center">
                {/* Logo */}
                <div className="mb-8 animate-fade-in-up">
                    <Triangle className="w-16 h-16 fill-white text-white" />
                </div>

                {/* Headline */}
                <h1 className="mb-4 text-5xl font-bold tracking-tight text-white sm:text-7xl animate-fade-in-up delay-100">
                    The Gateway to DeFi
                </h1>

                {/* Subheadline */}
                <p className="mb-10 text-xl text-white/60 sm:text-2xl animate-fade-in-up delay-200">
                    Axiom is the only trading platform you'll ever need.
                </p>

                {/* CTA */}
                <div className="mb-16 animate-fade-in-up delay-300">
                    <Button className="h-12 px-8 text-lg font-semibold bg-[#4C6FFF] hover:bg-[#3b5bdb] text-white rounded-full shadow-[0_0_30px_-5px_rgba(76,111,255,0.5)] transition-shadow hover:shadow-[0_0_40px_-5px_rgba(76,111,255,0.7)] cursor-pointer">
                        Start Trading
                    </Button>
                </div>

                {/* YC Badge */}
                <div className="flex flex-col items-center gap-2 animate-fade-in-up delay-400">
                    <span className="text-xs font-medium uppercase tracking-widest text-white/40">Backed by</span>
                    <a
                        href="https://www.ycombinator.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 rounded-full bg-black/80 border border-white/10 backdrop-blur-sm hover:bg-black/90 hover:border-white/20 transition-all cursor-pointer"
                    >
                        <div className="flex items-center justify-center w-6 h-6 bg-[#F26522] rounded-sm text-white font-bold text-xs">Y</div>
                        <span className="text-sm font-medium text-white/80">Combinator</span>
                    </a>
                </div>
            </div>
        </section>
    );
}
