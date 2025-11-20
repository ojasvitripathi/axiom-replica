'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { Zap, Wallet, BarChart3, Coins, Crosshair, Shield, Cpu } from 'lucide-react';

const features = [
    {
        id: 'execution',
        label: 'Order Execution Engine',
        subLabel: 'Trade with confidence.',
        title: 'Land in ≤ 1 Block',
        description: 'Our limit order execution engine is the fastest in the market.',
        detail: 'With our proprietary order execution engine and colocated nodes, our limit orders land in ≤ 1 block.',
        icon: Zap,
    },
    {
        id: 'wallet',
        label: 'Wallet and Twitter Tracker',
        subLabel: 'Trade and track all in one place.',
        title: 'Track Smart Money',
        description: 'Follow the most profitable wallets and influencers in real-time.',
        detail: 'Get instant notifications when your favorite traders make a move. Copy trade with a single click.',
        icon: Wallet,
    },
    {
        id: 'perpetuals',
        label: 'Hyperliquid Perpetuals',
        subLabel: 'Trade leveraged Perps.',
        title: 'Trade with Leverage',
        description: 'Access deep liquidity and up to 50x leverage on your favorite assets.',
        detail: 'Seamlessly trade perpetual futures with low fees and lightning-fast execution.',
        icon: BarChart3,
    },
    {
        id: 'yield',
        label: 'Yield',
        subLabel: 'Earn while you sleep.',
        title: 'Earn While You Sleep',
        description: 'Maximize your returns with our automated yield generation strategies.',
        detail: 'Deposit your assets into our vetted vaults and let our algorithms do the work for you.',
        icon: Coins,
    },
];

export function FeatureSection() {
    const [activeFeature, setActiveFeature] = useState(features[0]);

    return (
        <section className="relative z-10 px-4 py-24 mx-auto max-w-7xl">
            <div className="mb-16 text-center">
                <h2 className="mb-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
                    Advanced Features to <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                        Streamline Your Trading.
                    </span>
                </h2>
                <p className="text-lg text-white/60">
                    From wallet tracking to real-time analytics, we've got you covered.
                </p>
            </div>

            {/* Tabs */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12 border-b border-white/10">
                {features.map((feature) => (
                    <button
                        key={feature.id}
                        onClick={() => setActiveFeature(feature)}
                        className={cn(
                            "pb-6 text-left transition-all relative group",
                            activeFeature.id === feature.id ? "opacity-100" : "opacity-40 hover:opacity-70"
                        )}
                    >
                        <div className="text-lg font-bold text-white mb-2">{feature.label}</div>
                        <div className="text-sm text-white/60 font-medium">{feature.subLabel}</div>

                        {activeFeature.id === feature.id && (
                            <motion.div
                                layoutId="activeTab"
                                className="absolute bottom-0 left-0 right-0 h-0.5 bg-white"
                            />
                        )}
                    </button>
                ))}
            </div>

            {/* Feature Content */}
            <div className="grid gap-8 lg:grid-cols-2 h-[500px]">
                {/* Text Content */}
                <motion.div
                    key={activeFeature.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col justify-center p-12 rounded-2xl bg-[#0A0A0A] border border-white/5"
                >
                    <div className="flex items-center gap-3 mb-6">
                        <activeFeature.icon className="w-6 h-6 text-white" />
                        <h3 className="text-2xl font-bold text-white">{activeFeature.title}</h3>
                    </div>
                    <p className="mb-6 text-xl font-medium text-white/90">{activeFeature.description}</p>
                    <p className="text-base leading-relaxed text-white/50">{activeFeature.detail}</p>
                </motion.div>

                {/* Visual/Placeholder */}
                <motion.div
                    key={`${activeFeature.id}-visual`}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                    className="relative overflow-hidden rounded-2xl bg-[#0A0A0A] border border-white/5 flex items-center justify-center group"
                >
                    {/* Video */}
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        preload="none"
                        className="absolute inset-0 w-full h-full object-cover"
                    >
                        <source src="/land-on-two-blocks.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </motion.div>
            </div>
        </section>
    );
}
