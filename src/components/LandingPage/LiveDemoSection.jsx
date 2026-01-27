import React from 'react';
import { motion } from 'framer-motion';
import { Play, Calendar, ArrowRight, CheckCircle2 } from 'lucide-react';

const LiveDemoSection = () => {
    return (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative overflow-hidden rounded-[3rem] bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-800 shadow-2xl shadow-blue-900/20"
                >
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-10">
                        <svg className="h-full w-full" width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                            <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white" />
                        </svg>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8 items-center p-8 md:p-12 lg:p-16 relative z-10">
                        {/* Left Content */}
                        <div className="space-y-8 text-white">
                            <div>
                                <h2 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight">
                                    See GigDial In Action
                                </h2>
                                <div className="inline-flex items-center gap-3 bg-lime-400 text-blue-900 px-4 py-2 rounded-full font-bold text-sm md:text-base mb-4 shadow-lg">
                                    <span className="relative flex h-3 w-3">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-900 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-900"></span>
                                    </span>
                                    LIVE
                                    <span className="border-l border-blue-900/30 h-4 mx-1"></span>
                                    Monday To Friday - 2 PM IST
                                </div>
                            </div>

                            <div className="space-y-4">
                                <p className="text-blue-100 text-lg md:text-xl font-medium max-w-lg">
                                    Join our <span className="text-lime-300 font-bold">FREE Daily Demo</span> at 2 PM and learn how to hire verified workers instantly for your needs.
                                </p>
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-white text-blue-700 px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl hover:bg-blue-50 transition-all flex items-center gap-2"
                            >
                                Book a Demo <ArrowRight className="w-5 h-5" />
                            </motion.button>
                        </div>

                        {/* Right Content - Video/Image Container */}
                        <div className="relative">
                            <div className="relative rounded-3xl overflow-hidden border-4 border-white/20 shadow-2xl bg-slate-900 aspect-video md:aspect-auto md:h-[400px] flex items-center justify-center group cursor-pointer">
                                {/* Decorative Elements */}
                                <div className="absolute top-0 right-0 w-32 h-32 bg-lime-500/20 rounded-full blur-3xl" />
                                <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl" />

                                <img
                                    src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1600&q=80"
                                    alt="Demo Preview"
                                    className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                                />

                                <div className="relative z-10 flex flex-col items-center gap-4">
                                    <div
                                        className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/40 shadow-xl transition-transform hover:scale-105"
                                    >
                                        <Play className="w-8 h-8 text-white fill-current ml-1" />
                                    </div>
                                    <span className="text-white font-bold text-lg tracking-wide">Watch Demo Video</span>
                                </div>

                                {/* Floating Badge */}
                                <motion.div
                                    animate={{ y: [0, -10, 0] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                    className="absolute bottom-6 left-6 bg-white/95 backdrop-blur text-blue-900 px-4 py-3 rounded-2xl shadow-lg flex items-center gap-3 max-w-[200px]"
                                >
                                    <div className="bg-green-100 p-2 rounded-full">
                                        <CheckCircle2 className="w-5 h-5 text-green-600" />
                                    </div>
                                    <div className="text-xs font-bold leading-tight">
                                        Trusted by 10k+ Daily Users
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default LiveDemoSection;
