import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Star, Zap } from 'lucide-react';

const Pricing = () => {
    const plans = [
        {
            title: "Pro Worker",
            price: "599",
            period: "/month",
            features: [
                { text: "Priority Listing" },
                { text: "Unlimited Bids" },
                { text: "Verified Badge" },
                { text: "Direct WhatsApp Access" }
            ],
            highlight: true,
            color: "blue"
        },
        {
            title: "Starter",
            price: "Free",
            period: "",
            features: [
                { text: "Basic Listing" },
                { text: "10 Bids/month" },
                { text: "Standard Support" }
            ],
            highlight: false,
            color: "slate"
        }
    ];

    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-7xl pointer-events-none">
                <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl opacity-50" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-lime-100/40 rounded-full blur-3xl opacity-50" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">
                        Simple, Transparent <span className="text-blue-600">Pricing</span>
                    </h2>
                    <p className="text-slate-600 max-w-2xl mx-auto text-lg">
                        Choose the plan that fits your needs. No hidden fees.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className={`relative rounded-3xl overflow-hidden transition-all duration-300 ${plan.highlight
                                    ? 'bg-gradient-to-br from-blue-600 to-blue-700 text-white shadow-2xl shadow-blue-600/20 transform md:-translate-y-4'
                                    : 'bg-white text-slate-900 border border-slate-200 shadow-xl'
                                }`}
                        >
                            {plan.highlight && (
                                <div className="absolute top-0 right-0 bg-lime-400 text-blue-900 text-xs font-bold px-3 py-1 rounded-bl-lg">
                                    RECOMMENDED
                                </div>
                            )}

                            <div className="p-8">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className={`p-3 rounded-xl ${plan.highlight ? 'bg-white/10 text-white' : 'bg-blue-50 text-blue-600'}`}>
                                        <Zap size={24} fill="currentColor" />
                                    </div>
                                    <h3 className="text-xl font-bold">{plan.title}</h3>
                                </div>

                                <div className="flex items-baseline mb-8">
                                    <span className="text-5xl font-extrabold">
                                        {plan.price !== "Free" ? `₹${plan.price}` : "Free"}
                                    </span>
                                    {plan.period && <span className={`text-lg ml-2 ${plan.highlight ? 'text-blue-100' : 'text-slate-500'}`}>{plan.period}</span>}
                                </div>

                                <ul className="space-y-4 mb-8">
                                    {plan.features.map((feature, i) => (
                                        <li key={i} className="flex items-center gap-3">
                                            <div className={`rounded-full p-1 ${plan.highlight ? 'bg-blue-500 text-white' : 'bg-green-100 text-green-600'}`}>
                                                <Check size={14} strokeWidth={3} />
                                            </div>
                                            <span className={`font-medium ${plan.highlight ? 'text-blue-50' : 'text-slate-600'}`}>
                                                {feature.text}
                                            </span>
                                        </li>
                                    ))}
                                </ul>

                                <button className={`w-full py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-[1.02] active:scale-[0.98] ${plan.highlight
                                        ? 'bg-white text-blue-600 hover:bg-blue-50'
                                        : 'bg-slate-900 text-white hover:bg-slate-800'
                                    }`}>
                                    Get Started
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Floating Action Button (Play Store) */}
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1, type: "spring" }}
                    className="fixed bottom-8 right-8 z-50 group"
                >
                    <div className="absolute inset-0 bg-blue-600 rounded-full blur opacity-40 group-hover:opacity-60 transition-opacity animate-pulse"></div>
                    <a href="#" className="relative w-16 h-16 bg-slate-900 rounded-full flex items-center justify-center border-2 border-slate-700 shadow-2xl hover:scale-110 transition-transform duration-300">
                        <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current text-white">
                            <path d="M3,20.5l1.9-1.9l11.6-6.6l-8-4.5L3,20.5z M20.5,12l-5.6-3.2l-1.6,3.2l1.6,3.2L20.5,12z M5.5,3.5L3.6,5.3l4.9,9.4L18,8L5.5,3.5z M4.5,4.6L4.6,4.5L4.5,4.6z" />
                            <path d="M5,3.8L3.4,5.4l5.3,10.2L18,8.2L5,3.8z" fill="#00E26B" />
                            <path d="M21,12l-6.2-3.4l-1.8,3.4l1.8,3.4L21,12z" fill="#FFC900" />
                            <path d="M3.4,5.4v13.3L10.7,12L3.4,5.4z" fill="#00A2F9" />
                            <path d="M3.4,18.7l1.6,1.6l13-7.3l-9.3-5.2L3.4,18.7z" fill="#FF3D00" />
                        </svg>
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Pricing;
