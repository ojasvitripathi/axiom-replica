'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface FAQItem {
    question: string;
    answer: string;
}

const faqs: FAQItem[] = [
    {
        question: 'What is Axiom?',
        answer: 'Axiom is a trading platform designed to be the only application you need to trade onchain. We offer a suite of integrations that allow you to trade the hottest assets, all in one place.',
    },
    {
        question: 'How secure is Axiom?',
        answer: 'Axiom uses industry-leading security practices including non-custodial wallet architecture, air-gapped infrastructure powered by Turnkey, and robust encryption. Your private keys are never exposed, and all transactions require your explicit approval.',
    },
    {
        question: 'Can I buy crypto on Axiom?',
        answer: 'Yes! Axiom supports direct cryptocurrency purchases through integrated on-ramps. You can buy crypto using various payment methods including credit cards, bank transfers, and other supported payment options.',
    },
    {
        question: 'How does Axiom offer yield?',
        answer: 'Axiom integrates with leading DeFi protocols to offer competitive yields on your crypto assets. You can earn passive income through staking, liquidity provision, and lending across multiple blockchains, all from a single interface.',
    },
    {
        question: 'Is Axiom decentralized?',
        answer: 'Axiom combines the best of both worlds: a decentralized, non-custodial wallet that gives you full control of your assets, with a centralized interface that provides a seamless user experience. Your funds remain fully in your control at all times.',
    },
];

export function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number>(0);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? -1 : index);
    };

    return (
        <section className="relative py-32 overflow-hidden border-t border-white/10">
            {/* Distinct Background with Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-[#050505] to-black" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(59,130,246,0.03)_0%,_transparent_50%)]" />

            <div className="relative z-10 px-4 mx-auto max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-12">
                    {/* FAQ Heading */}
                    <div>
                        <h2 className="text-5xl font-bold tracking-tight text-white sm:text-6xl">
                            FAQ
                        </h2>
                    </div>

                    {/* FAQ Items */}
                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className="border border-white/10 rounded-xl overflow-hidden bg-[#0A0A0A]"
                            >
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors cursor-pointer"
                                >
                                    <span className="text-lg font-semibold text-white">
                                        {faq.question}
                                    </span>
                                    <ChevronDown
                                        className={`w-5 h-5 text-white/60 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''
                                            }`}
                                    />
                                </button>

                                <AnimatePresence>
                                    {openIndex === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="px-6 pb-6 text-white/60 leading-relaxed">
                                                {faq.answer}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
