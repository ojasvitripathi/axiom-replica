'use client';

import { Gift, Trophy, Users, Sparkles, ChevronRight, CheckCircle2, Circle } from 'lucide-react';
import { motion } from 'framer-motion';

export function RewardsSection() {
    return (
        <section className="relative py-32 overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-950/20 to-black" />

            <div className="relative z-10 px-4 mx-auto max-w-7xl">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="mb-6 text-5xl font-bold tracking-tight text-white sm:text-6xl">
                        Rewards
                    </h2>
                    <p className="text-xl text-white/60">
                        Get paid to trade.
                    </p>
                </motion.div>

                {/* 2x2 Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
                    {/* Rewards Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="bg-[#0A0A0A] border border-white/10 rounded-2xl p-8"
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <Gift className="w-6 h-6 text-white" />
                            <h3 className="text-2xl font-bold text-white">Rewards</h3>
                        </div>
                        <p className="text-white/60 mb-6">Earn SOL from trading.</p>

                        <div className="bg-white/5 border border-white/10 rounded-xl p-4 mb-4">
                            <div className="flex items-center justify-between mb-2">
                                <div className="flex items-center gap-2">
                                    <Gift className="w-4 h-4 text-emerald-400" />
                                    <span className="text-white font-semibold">0.12 SOL Received!</span>
                                </div>
                                <span className="text-xs text-white/40">Now</span>
                            </div>
                            <p className="text-sm text-white/60">Congratulations! Trade more to earn more!</p>
                        </div>

                        <button className="w-full bg-white/10 hover:bg-white/20 text-white font-semibold py-3 rounded-full transition-colors border border-white/10">
                            Buy Trump 12 🚀
                        </button>
                    </motion.div>

                    {/* Progress through Ranks Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-[#0A0A0A] border border-white/10 rounded-2xl p-8"
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <Trophy className="w-6 h-6 text-white" />
                            <h3 className="text-2xl font-bold text-white">Progress through the Ranks</h3>
                        </div>
                        <p className="text-white/60 mb-8">Earn higher reward rates.</p>

                        <div className="flex items-center justify-between px-4">
                            <div className="text-center">
                                <div className="w-16 h-16 mx-auto mb-2 flex items-center justify-center border-2 border-white/20 rounded-lg">
                                    <Sparkles className="w-8 h-8 text-white/60" />
                                </div>
                                <div className="text-sm font-bold text-white">Wood</div>
                                <div className="text-xs text-white/40">1x Rewards</div>
                            </div>

                            <ChevronRight className="w-6 h-6 text-white/40" />

                            <div className="text-center">
                                <div className="w-16 h-16 mx-auto mb-2 flex items-center justify-center border-2 border-yellow-500/60 rounded-lg bg-yellow-500/10">
                                    <Trophy className="w-8 h-8 text-yellow-500" />
                                </div>
                                <div className="text-sm font-bold text-white">Champion</div>
                                <div className="text-xs text-white/40">5x Rewards</div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Referrals Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="bg-[#0A0A0A] border border-white/10 rounded-2xl p-8"
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <Users className="w-6 h-6 text-white" />
                            <h3 className="text-2xl font-bold text-white">Referrals</h3>
                        </div>
                        <p className="text-white/60 mb-8">Earn points and SOL from your friends.</p>

                        {/* Network Visualization */}
                        <div className="relative h-40 flex items-center justify-center">
                            {/* Center node */}
                            <div className="absolute z-10 w-16 h-16 rounded-full bg-blue-500/20 border-2 border-blue-500 flex items-center justify-center">
                                <Users className="w-8 h-8 text-blue-500" />
                            </div>

                            {/* Connected nodes - pre-calculated positions to avoid hydration errors */}
                            {[
                                { x: 80, y: 0, points: 5 },
                                { x: 40, y: 69.28, points: 100 },
                                { x: -40, y: 69.28, points: 304 },
                                { x: -80, y: 0, points: 37 },
                                { x: -40, y: -69.28, points: 304 },
                                { x: 40, y: -69.28, points: 13 },
                            ].map((node, i) => (
                                <div
                                    key={i}
                                    className="absolute w-12 h-12 rounded-full bg-white/5 border border-white/20 flex items-center justify-center"
                                    style={{
                                        transform: `translate(${node.x}px, ${node.y}px)`
                                    }}
                                >
                                    <Users className="w-5 h-5 text-white/40" />
                                    {node.points > 0 && (
                                        <div className="absolute -top-2 -right-2 bg-emerald-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                                            {node.points}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Axiom Points Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="bg-[#0A0A0A] border border-white/10 rounded-2xl p-8"
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <Sparkles className="w-6 h-6 text-white" />
                            <h3 className="text-2xl font-bold text-white">Axiom Points</h3>
                        </div>
                        <p className="text-white/60 mb-8">Earn points through trading, referrals, and quests.</p>

                        {/* Axiom Logo */}
                        <div className="flex justify-center mb-6">
                            <div className="relative">
                                <div className="w-12 h-12 flex items-center justify-center">
                                    {/* Triangle logo representation */}
                                    <div className="w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-b-[35px] border-b-white"></div>
                                </div>
                                <div className="flex gap-1 justify-center mt-2">
                                    <div className="w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-b-[20px] border-b-white/60"></div>
                                    <div className="w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-b-[20px] border-b-white/60"></div>
                                </div>
                            </div>
                        </div>

                        {/* Quest Items */}
                        <div className="space-y-3">
                            <div className="flex items-center justify-between bg-white/5 border border-white/10 rounded-lg p-3">
                                <div className="flex items-center gap-3">
                                    <Circle className="w-4 h-4 text-blue-400" />
                                    <span className="text-white text-sm">Refer 3 people</span>
                                </div>
                                <span className="text-white/60 text-sm">+1,500 Points</span>
                            </div>

                            <div className="flex items-center justify-between bg-white/5 border border-white/10 rounded-lg p-3">
                                <div className="flex items-center gap-3">
                                    <Circle className="w-4 h-4 text-blue-400" />
                                    <span className="text-white text-sm">Share 1 PnL card</span>
                                </div>
                                <span className="text-white/60 text-sm">+50 Points</span>
                            </div>

                            <div className="flex items-center justify-between bg-white/5 border border-white/10 rounded-lg p-3">
                                <div className="flex items-center gap-3">
                                    <Circle className="w-4 h-4 text-blue-400" />
                                    <span className="text-white text-sm">Trade 1 SOL in Volume</span>
                                </div>
                                <span className="text-white/60 text-sm">+500 Points</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
