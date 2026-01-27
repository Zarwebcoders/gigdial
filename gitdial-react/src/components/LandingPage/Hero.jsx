/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';
import { Search, Briefcase } from 'lucide-react';


const Hero = () => {
    return (
        <div className="relative overflow-hidden bg-white pt-20 pb-24 lg:pt-6 lg:pb-24">
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
                <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-blue-100/80 blur-[100px] animate-pulse" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-lime-100/80 blur-[120px] animate-pulse" style={{ animationDuration: '4s' }} />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
                    {/* Left Column: Content */}
                    <div className="flex flex-col items-start text-left">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="inline-flex items-center space-x-2 py-2 px-4 rounded-full bg-blue-50 border border-blue-100 backdrop-blur-md text-blue-700 text-sm font-medium mb-8 shadow-sm">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
                                </span>
                                <span>#1 Marketplace for Gig Workers</span>
                            </div>
                        </motion.div>

                        <motion.h1
                            className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 mb-6 leading-[1.1]"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            Ek Kaam, <br />
                            <span className="bg-gradient-to-r from-blue-500 to-lime-500 bg-clip-text text-transparent">Ek Time</span>,
                            <br /> Ek Paisa
                        </motion.h1>

                        <motion.p
                            className="max-w-xl text-lg text-slate-600 mb-8 leading-relaxed"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            Digital Marketplace for Verified Gig Workers & On-Demand Services.
                            Find the right person for the job, instantly.
                        </motion.p>

                        <motion.div
                            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                        >
                            <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 rounded-full text-white font-bold shadow-xl shadow-blue-600/20 transition-all hover:scale-105 active:scale-95 flex items-center justify-center overflow-hidden w-full sm:w-auto">
                                <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></span>
                                <Search className="w-5 h-5 mr-2 relative z-10" />
                                <span className="relative z-10">Find a Gig Worker</span>
                            </button>

                            <button className="px-8 py-4 bg-white hover:bg-slate-50 rounded-full text-slate-700 font-semibold border border-slate-200 shadow-lg shadow-slate-200/50 transition-all hover:scale-105 active:scale-95 flex items-center justify-center hover:border-slate-300 w-full sm:w-auto">
                                <Briefcase className="w-5 h-5 mr-2 text-slate-500" />
                                Become a Worker
                            </button>
                        </motion.div>
                    </div>

                    {/* Right Column: Image */}
                    <motion.div
                        className="relative lg:h-[600px] w-full flex items-center justify-center"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="relative w-full aspect-square max-w-[500px] lg:max-w-none">
                            {/* Blob Background */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-full blur-[80px] opacity-20 animate-pulse"></div>

                            {/* Main Image Container */}
                            <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-2xl shadow-blue-900/10 bg-slate-100">
                                <img
                                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1000&q=80"
                                    alt="Gig Workers Collaboration"
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                                />

                                {/* Floating Card 1 */}
                                <motion.div
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.8, duration: 0.5 }}
                                    className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md p-4 rounded-xl border border-slate-200 shadow-xl shadow-black/5 flex items-center gap-3"
                                >
                                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                                        <Briefcase size={20} />
                                    </div>
                                    <div>
                                        <p className="text-xs text-slate-500">Jobs Posted</p>
                                        <p className="text-lg font-bold text-slate-900">1,240+</p>
                                    </div>
                                </motion.div>

                                {/* Floating Card 2 */}
                                <motion.div
                                    initial={{ y: -20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 1, duration: 0.5 }}
                                    className="absolute top-6 right-6 bg-white/90 backdrop-blur-md p-4 rounded-xl border border-slate-200 shadow-xl shadow-black/5"
                                >
                                    <div className="flex -space-x-2 mb-2">
                                        {[1, 2, 3].map(i => (
                                            <div key={i} className="w-8 h-8 rounded-full bg-slate-200 border-2 border-white"></div>
                                        ))}
                                    </div>
                                    <p className="text-xs text-green-600 font-medium">10k+ Verified Workers</p>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
