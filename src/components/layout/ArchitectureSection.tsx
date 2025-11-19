'use client';

import { motion } from 'framer-motion';

export function ArchitectureSection() {
    return (
        <section className="relative py-32 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-black" />

            <div className="relative z-10 px-4 mx-auto max-w-7xl">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <h2 className="text-5xl font-bold tracking-tight text-white sm:text-6xl">
                        Architecture
                    </h2>
                </motion.div>

                {/* Two Column Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Integrations Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="bg-[#0A0A0A] border border-white/10 rounded-2xl p-8"
                    >
                        <h3 className="text-2xl font-bold text-white mb-4">Integrations</h3>
                        <p className="text-white/60 mb-8">
                            Axiom integrates all the different protocols and applications you use, giving you a seamless trading experience.
                        </p>

                        {/* Integration Diagram */}
                        <div className="relative h-64 flex items-center justify-center">
                            {/* Center Axiom Logo */}
                            <div className="absolute z-10 w-20 h-20 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/50">
                                <div className="w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-b-[20px] border-b-white"></div>
                            </div>

                            {/* Connecting Lines */}
                            <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 0 }}>
                                <line x1="50%" y1="50%" x2="20%" y2="80%" stroke="rgb(59, 130, 246)" strokeWidth="2" strokeDasharray="4 4" />
                                <line x1="50%" y1="50%" x2="30%" y2="80%" stroke="rgb(59, 130, 246)" strokeWidth="2" strokeDasharray="4 4" />
                                <line x1="50%" y1="50%" x2="40%" y2="80%" stroke="rgb(59, 130, 246)" strokeWidth="2" strokeDasharray="4 4" />
                                <line x1="50%" y1="50%" x2="50%" y2="80%" stroke="rgb(59, 130, 246)" strokeWidth="2" strokeDasharray="4 4" />
                                <line x1="50%" y1="50%" x2="60%" y2="80%" stroke="rgb(59, 130, 246)" strokeWidth="2" strokeDasharray="4 4" />
                                <line x1="50%" y1="50%" x2="70%" y2="80%" stroke="rgb(59, 130, 246)" strokeWidth="2" strokeDasharray="4 4" />
                                <line x1="50%" y1="50%" x2="80%" y2="80%" stroke="rgb(59, 130, 246)" strokeWidth="2" strokeDasharray="4 4" />
                            </svg>

                            {/* Protocol Icons */}
                            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-4">
                                {/* Icon placeholders - using colored circles to represent different protocols */}
                                <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
                                    C
                                </div>
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-400 to-pink-500 flex items-center justify-center text-white font-bold">
                                    M
                                </div>
                                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-black font-bold">
                                    U
                                </div>
                                <div className="w-12 h-12 rounded-full bg-purple-500 flex items-center justify-center text-white font-bold">
                                    P
                                </div>
                                <div className="w-12 h-12 rounded-full bg-pink-500 flex items-center justify-center text-white font-bold">
                                    R
                                </div>
                                <div className="w-12 h-12 rounded-full bg-cyan-500 flex items-center justify-center text-white font-bold">
                                    S
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Non-Custodial Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-[#0A0A0A] border border-white/10 rounded-2xl p-8"
                    >
                        <h3 className="text-2xl font-bold text-white mb-4">Non-Custodial</h3>
                        <p className="text-white/60 mb-8">
                            The Axiom wallet is fully non-custodial, secured by Turnkey's scalable infrastructure for managing private keys across blockchains. With air-gapped architecture, it ensures robust security, seamless recovery, and protection from vulnerabilities.
                        </p>

                        {/* Security Diagram */}
                        <div className="relative h-64 flex items-center justify-center gap-8">
                            {/* Left side - X mark (blocked) */}
                            <div className="flex flex-col items-center gap-4">
                                <div className="w-16 h-16 rounded-lg border-2 border-rose-500 flex items-center justify-center">
                                    <svg className="w-8 h-8 text-rose-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </div>
                            </div>

                            {/* Center - Secure box with dashed line */}
                            <div className="flex flex-col items-center">
                                <div className="text-xs text-blue-400 font-semibold mb-2">Secure</div>
                                <div className="relative">
                                    <div className="w-32 h-24 border-2 border-blue-500 rounded-lg flex items-center justify-center">
                                        <div className="text-4xl font-bold text-emerald-400">
                                            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <circle cx="12" cy="12" r="10" strokeWidth="2" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                                            </svg>
                                        </div>
                                    </div>
                                    {/* Dashed line extending right */}
                                    <div className="absolute top-1/2 left-full w-16 h-0 border-t-2 border-dashed border-blue-400"></div>
                                </div>
                            </div>

                            {/* Right side - Checkmark and User */}
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-lg border-2 border-emerald-500 flex items-center justify-center">
                                    <svg className="w-6 h-6 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>

                                <div className="w-24 h-20 border-2 border-emerald-500 rounded-lg flex flex-col items-center justify-center gap-1 bg-emerald-500/5">
                                    <svg className="w-8 h-8 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                    </svg>
                                    <span className="text-xs text-emerald-400 font-semibold">User</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
