import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, X, Mouse } from 'lucide-react';

const HowItWorks = () => {
    const [activeVideo, setActiveVideo] = useState(null);

    const videos = [
        {
            id: 1,
            thumbnail: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1000&q=80",
            title: "GigDial Process",
            subtitle: "Verified Workers Instantly",
            langButton: "Watch Demo",
            lang: "en"
        },
        {
            id: 2,
            thumbnail: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1000&q=80",
            title: "GigDial प्रक्रिया",
            subtitle: "सत्यापित कामगार तुरंत",
            langButton: "डेमो देखें",
            lang: "hi"
        }
    ];

    return (
        <section className="py-20 bg-slate-50 relative overflow-hidden">
            {/* Background Gradients similar to Hero */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
                <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full bg-blue-100/50 blur-[100px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full bg-lime-100/50 blur-[120px]" />
            </div>

            {/* Decorative top element */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white border-4 border-slate-50 rounded-full flex items-center justify-center z-10 shadow-sm">
                <Mouse className="text-blue-600 w-6 h-6" />
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
                        How <span className="bg-gradient-to-r from-blue-600 to-lime-500 bg-clip-text text-transparent">GigDial</span> Works
                    </h2>
                    <p className="text-slate-600 max-w-2xl mx-auto text-lg">
                        See how easy it is to find verified workers for your needs.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {videos.map((video, index) => (
                        <motion.div
                            key={video.id}
                            className="bg-white p-3 rounded-3xl shadow-xl shadow-blue-900/5 border border-slate-100 overflow-hidden relative group cursor-pointer"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            onClick={() => setActiveVideo(video.id)}
                        >
                            <div className="relative aspect-video rounded-2xl overflow-hidden bg-slate-900">
                                <img
                                    src={video.thumbnail}
                                    alt={video.title}
                                    className="w-full h-full object-cover opacity-80 group-hover:opacity-60 transition-opacity duration-300 transform group-hover:scale-105"
                                />
                                <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
                                    <div className="flex flex-col items-center gap-2 mb-4 text-center">
                                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center shadow-lg mb-2">
                                            <Play className="w-6 h-6 text-white fill-current ml-1" />
                                        </div>
                                        <h3 className="text-xl font-bold">{video.title}</h3>
                                        <p className="text-lg font-medium text-blue-100">{video.subtitle}</p>
                                    </div>

                                    <button className="mt-4 px-6 py-2.5 rounded-full font-semibold text-white bg-white/20 backdrop-blur-md border border-white/30 hover:bg-white/30 transition-all flex items-center gap-2 group-hover:px-8">
                                        {video.langButton} <Play size={14} className="fill-current" />
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Video Modal Overlay */}
            {activeVideo && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/95 backdrop-blur-sm p-4">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="relative w-full max-w-5xl bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/10"
                    >
                        <button
                            onClick={(e) => { e.stopPropagation(); setActiveVideo(null); }}
                            className="absolute top-4 right-4 text-white hover:text-blue-500 z-10 bg-black/50 p-2 rounded-full transition-colors"
                        >
                            <X size={24} />
                        </button>
                        <div className="aspect-video w-full flex items-center justify-center bg-gray-900">
                            {/* Placeholder for actual video embed */}
                            <iframe
                                className="w-full h-full"
                                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1"
                                title="Video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </motion.div>
                </div>
            )}
        </section>
    );
};

export default HowItWorks;
