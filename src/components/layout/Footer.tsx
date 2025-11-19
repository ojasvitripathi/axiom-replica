'use client';

import { Triangle } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export function Footer() {
    return (
        <footer className="relative border-t border-white/10">
            {/* CTA Section with Gradient Background */}
            <div className="relative overflow-hidden">
                {/* Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-b from-blue-950/30 via-blue-900/20 to-black" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(59,130,246,0.15)_0%,_transparent_70%)]" />

                {/* CTA Content */}
                <div className="relative z-10 py-24 px-4 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 max-w-3xl mx-auto">
                        Optimize Your Trades with the Right Tools
                    </h2>
                    <Button className="h-12 px-8 text-lg font-semibold bg-[#4C6FFF] hover:bg-[#3b5bdb] text-white rounded-full shadow-[0_0_30px_-5px_rgba(76,111,255,0.5)] transition-shadow hover:shadow-[0_0_40px_-5px_rgba(76,111,255,0.7)]">
                        Launch Axiom
                    </Button>
                </div>
            </div>

            {/* Footer Bar */}
            <div className="bg-black border-t border-white/10">
                <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
                    {/* Logo and Copyright */}
                    <div className="flex items-center gap-3">
                        <div className="flex items-center gap-2">
                            <Triangle className="w-6 h-6 fill-white text-white" />
                            <span className="text-lg font-bold text-white">AXIOM</span>
                            <span className="text-sm text-white/60">Pro</span>
                        </div>
                        <span className="text-sm text-white/40">
                            © 2025 Axiom. All rights reserved.
                        </span>
                    </div>

                    {/* Links */}
                    <div className="flex items-center gap-6">
                        <a
                            href="#contact"
                            className="text-sm text-white/60 hover:text-white transition-colors cursor-pointer"
                        >
                            Contact
                        </a>
                        <a
                            href="#docs"
                            className="text-sm text-white/60 hover:text-white transition-colors cursor-pointer"
                        >
                            Docs
                        </a>
                        <a
                            href="https://twitter.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white/60 hover:text-white transition-colors cursor-pointer"
                            aria-label="Twitter"
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                            </svg>
                        </a>
                        <a
                            href="https://discord.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white/60 hover:text-white transition-colors cursor-pointer"
                            aria-label="Discord"
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
