import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Users, ShieldCheck, BarChart3, MessageSquare, Bell } from 'lucide-react';

const features = [
    {
        id: 'workers',
        icon: Users,
        title: "Verified Worker Pool",
        description: "Access thousands of verified skilled workers ready for instant hiring.",
        color: "blue"
    },
    {
        id: 'campaigns',
        icon: MessageSquare,
        title: "Instant Communication",
        description: "Chat directly with workers or broadcast your requirements efficiently.",
        color: "green"
    },
    {
        id: 'secure',
        icon: ShieldCheck,
        title: "Secure Payments",
        description: "Escrow-protected payments ensure satisfaction for both parties.",
        color: "indigo"
    },
    {
        id: 'tracking',
        icon: BarChart3,
        title: "Real-time Tracking",
        description: "Monitor work progress and worker location in real-time.",
        color: "purple"
    },
    {
        id: 'support',
        icon: Phone,
        title: "24/7 Support",
        description: "Dedicated support team to help resolve any disputes instantly.",
        color: "orange"
    },
    {
        id: 'alerts',
        icon: Bell,
        title: "Smart Alerts",
        description: "Get notified immediately when a worker accepts your gig.",
        color: "pink"
    }
];

const AppShowcase = () => {
    const [activeFeature, setActiveFeature] = useState(features[0].id);

    return (
        <section className="py-24 bg-slate-50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
                        One Mobile App to Manage <br className="hidden md:block" />
                        <span className="bg-gradient-to-r from-blue-600 to-lime-500 bg-clip-text text-transparent">All Your Requirements</span>
                    </h2>
                    <p className="text-slate-600 text-lg max-w-2xl mx-auto">
                        Powerful features packaged in a simple, intuitive mobile interface designed for speed and reliability.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Side - Feature Grid */}
                    <div className="grid sm:grid-cols-2 gap-4">
                        {features.map((feature, index) => (
                            <motion.div
                                key={feature.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                onClick={() => setActiveFeature(feature.id)}
                                className={`p-6 rounded-2xl cursor-pointer border transition-all duration-300 ${activeFeature === feature.id
                                        ? 'bg-white border-blue-500 shadow-xl shadow-blue-500/10 scale-105 z-10'
                                        : 'bg-white border-slate-100 hover:border-blue-200 hover:shadow-lg'
                                    }`}
                            >
                                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${activeFeature === feature.id ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-600'
                                    }`}>
                                    <feature.icon size={24} />
                                </div>
                                <h3 className={`text-xl font-bold mb-2 ${activeFeature === feature.id ? 'text-slate-900' : 'text-slate-700'
                                    }`}>
                                    {feature.title}
                                </h3>
                                <p className="text-slate-500 text-sm leading-relaxed">
                                    {feature.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Right Side - Phone Mockup (Sticky/Interactive) */}
                    <div className="relative flex justify-center lg:h-[800px] items-center">
                        <motion.div
                            className="relative w-[300px] h-[600px] bg-slate-900 rounded-[3rem] border-8 border-slate-900 shadow-2xl overflow-hidden"
                            initial={{ rotate: -5 }}
                            whileInView={{ rotate: 0 }}
                            transition={{ type: "spring", stiffness: 50 }}
                        >
                            {/* Inner Bezel */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-900 rounded-b-xl z-20"></div>

                            {/* Screen Content */}
                            <div className="w-full h-full bg-white relative overflow-hidden flex flex-col">
                                {/* Status Bar Mock */}
                                <div className="h-8 bg-slate-900 w-full"></div>

                                {/* App Header */}
                                <div className="bg-blue-600 p-4 text-white pt-8 pb-6 rounded-b-[2rem] shadow-lg z-10">
                                    <div className="flex justify-between items-center">
                                        <div className="flex items-center gap-2">
                                            <div className="w-8 h-8 bg-white/20 rounded-full"></div>
                                            <span className="font-bold">GigHome</span>
                                        </div>
                                        <Bell size={20} />
                                    </div>
                                    <div className="mt-4">
                                        <h4 className="text-xl font-bold opacity-90">Hello, User</h4>
                                        <p className="text-blue-100 text-sm">Find your next worker</p>
                                    </div>
                                </div>

                                {/* Dynamic Content Area based on Active Feature */}
                                <div className="flex-1 p-4 bg-slate-50 relative">
                                    <AnimatePresence mode="wait">
                                        <motion.div
                                            key={activeFeature}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -20 }}
                                            transition={{ duration: 0.3 }}
                                            className="h-full flex flex-col gap-4"
                                        >
                                            {/* Mock Content Blocks */}
                                            <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100">
                                                <div className="flex items-center gap-3 mb-3">
                                                    <div className={`p-2 rounded-lg bg-${features.find(f => f.id === activeFeature)?.color || 'blue'}-100`}>
                                                        {React.createElement(features.find(f => f.id === activeFeature)?.icon || Users, { size: 20, className: "text-blue-600" })}
                                                    </div>
                                                    <span className="font-bold text-slate-800">
                                                        {features.find(f => f.id === activeFeature)?.title}
                                                    </span>
                                                </div>
                                                <div className="h-24 bg-slate-100 rounded-lg animate-pulse"></div>
                                            </div>

                                            <div className="grid grid-cols-2 gap-3">
                                                <div className="h-32 bg-white rounded-xl shadow-sm border border-slate-100 p-3">
                                                    <div className="w-8 h-8 bg-blue-50 rounded-full mb-2"></div>
                                                    <div className="h-2 w-16 bg-slate-100 rounded mb-1"></div>
                                                    <div className="h-2 w-10 bg-slate-100 rounded"></div>
                                                </div>
                                                <div className="h-32 bg-white rounded-xl shadow-sm border border-slate-100 p-3">
                                                    <div className="w-8 h-8 bg-lime-50 rounded-full mb-2"></div>
                                                    <div className="h-2 w-16 bg-slate-100 rounded mb-1"></div>
                                                </div>
                                            </div>

                                            <div className="bg-blue-600 text-white p-4 rounded-xl mt-auto shadow-lg shadow-blue-600/20 text-center font-bold">
                                                Action Button
                                            </div>
                                        </motion.div>
                                    </AnimatePresence>
                                </div>

                                {/* Bottom Nav */}
                                <div className="bg-white border-t p-4 pb-6 flex justify-around text-slate-400">
                                    <div className="w-6 h-6 bg-slate-200 rounded-full"></div>
                                    <div className="w-6 h-6 bg-blue-600 rounded-full"></div>
                                    <div className="w-6 h-6 bg-slate-200 rounded-full"></div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Decorative Circles behind Phone */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-slate-200 rounded-full -z-10 opacity-50"></div>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] border border-slate-100 rounded-full -z-20 opacity-30"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AppShowcase;
