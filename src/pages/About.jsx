import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, Target, Heart, Globe, Award, Sparkles, 
  Shield, Zap, Coins, Building2, MapPin, Mail, UserCheck
} from 'lucide-react';

const ValueCard = ({ icon: Icon, title, description, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay, duration: 0.5 }}
        whileHover={{ y: -5 }}
        className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-card-hover transition-all cursor-default group"
    >
        <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
            <Icon size={28} strokeWidth={1.5} className="text-primary" />
        </div>
        <h3 className="text-xl font-display font-bold text-slate-800 mb-3 group-hover:text-primary transition-colors">{title}</h3>
        <p className="text-slate-500 leading-relaxed text-sm">
            {description}
        </p>
    </motion.div>
);

const About = () => {
    const whyGigDial = [
        {
            icon: Users,
            title: "Direct Connection",
            description: "Direct customer-to-professional connection for absolute clarity and direct relationship building."
        },
        {
            icon: Shield,
            title: "45+ Service Categories",
            description: "Plumbers, electricians, carpenters, painters, AC technicians, cleaners, appliance repair, and many more."
        },
        {
            icon: Coins,
            title: "No Commission on Earnings",
            description: "We charge no commissions on workers' hard-earned money. What they earn is entirely theirs."
        },
        {
            icon: Zap,
            title: "Affordable Discovery",
            description: "A highly affordable service discovery platform that doesn't put a burden on users or providers."
        },
        {
            icon: Target,
            title: "Increased Opportunities",
            description: "Unlocking digital visibility and local business opportunities for skilled workers across regions."
        },
        {
            icon: UserCheck,
            title: "Fast & Convenient",
            description: "Instant access to local verified services, simplifying home management for customers."
        }
    ];

    return (
        <div className="min-h-screen bg-slate-50 overflow-hidden font-sans">
            {/* Hero Section */}
            <section className="relative py-20 md:py-28">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-indigo-50/40 to-transparent -z-10"></div>
                <div className="container mx-auto px-6 max-w-5xl">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                        <div className="lg:col-span-7">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                            >
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-500 text-xs font-bold uppercase tracking-widest mb-6 shadow-sm">
                                    <Sparkles size={12} className="text-primary" /> About GigDial
                                </div>
                                <h1 className="text-4xl md:text-6xl font-display font-extrabold text-slate-900 mb-6 tracking-tight leading-tight">
                                    Simplifying Local Services. <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-indigo-600">Empowering Professionals.</span>
                                </h1>
                                <p className="text-lg text-slate-600 leading-relaxed mb-6">
                                    GigDial Private Limited is a technology-enabled local services marketplace that connects customers with skilled service professionals across 45+ service categories, including plumbers, electricians, carpenters, painters, AC technicians, cleaners, appliance repair experts, and many other local professionals.
                                </p>
                                <p className="text-slate-500 leading-relaxed">
                                    Our platform is designed to simplify local service discovery by enabling direct connections between customers and service providers, helping both parties communicate and transact more efficiently while providing digital visibility and business opportunities.
                                </p>
                            </motion.div>
                        </div>
                        <div className="lg:col-span-5 relative">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="relative rounded-[2.5rem] overflow-hidden shadow-2xl bg-primary text-white p-10 flex flex-col justify-between min-h-[350px]"
                            >
                                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none"></div>
                                <div className="relative z-10">
                                    <Award size={48} className="text-secondary mb-6" />
                                    <h3 className="text-2xl font-bold font-display mb-4">Our Promise</h3>
                                    <p className="text-lg text-indigo-100 leading-relaxed font-medium">
                                        "Empowering Skilled Professionals. Simplifying Local Services."
                                    </p>
                                </div>
                                <div className="border-t border-white/20 pt-6 mt-8 relative z-10">
                                    <p className="text-xs uppercase tracking-widest text-slate-300 font-bold">100% Commission-Free</p>
                                    <p className="text-sm text-slate-200 mt-1 font-medium">Supporting India's independent skilled workforce.</p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision Section */}
            <section className="py-16 md:py-24 bg-white border-y border-slate-100">
                <div className="container mx-auto px-6 max-w-5xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="bg-slate-50 p-8 md:p-10 rounded-[2rem] border border-slate-100 hover:shadow-lg transition-all"
                        >
                            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6">
                                <Target size={24} />
                            </div>
                            <h3 className="text-2xl font-bold font-display text-slate-900 mb-4">Our Mission</h3>
                            <p className="text-slate-600 leading-relaxed">
                                To empower local skilled professionals by providing digital business opportunities while enabling customers to access trusted, affordable, and direct local services.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="bg-slate-50 p-8 md:p-10 rounded-[2rem] border border-slate-100 hover:shadow-lg transition-all"
                        >
                            <div className="w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center text-secondary mb-6">
                                <Globe size={24} className="text-primary" />
                            </div>
                            <h3 className="text-2xl font-bold font-display text-slate-900 mb-4">Our Vision</h3>
                            <p className="text-slate-600 leading-relaxed">
                                To become India's most trusted and accessible local services marketplace by creating a transparent and sustainable ecosystem for both customers and service professionals.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Why GigDial Section */}
            <section className="py-20">
                <div className="container mx-auto px-6 max-w-5xl">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4">Why GigDial?</h2>
                        <p className="text-slate-500">Creating a transparent and sustainable ecosystem for Bharat's service professionals.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {whyGigDial.map((item, i) => (
                            <ValueCard
                                key={i}
                                icon={item.icon}
                                title={item.title}
                                description={item.description}
                                delay={i * 0.1}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Company Structure & Information */}
            <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-indigo-900/30 via-slate-900 to-slate-950"></div>
                <div className="container mx-auto px-6 max-w-5xl relative z-10">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Corporate Information</h2>
                        <p className="text-slate-400">GigDial Private Limited is a registered corporate entity in India.</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                        {/* Company Stats card */}
                        <div className="lg:col-span-7 bg-white/5 border border-white/10 p-8 md:p-10 rounded-[2.5rem] backdrop-blur-md">
                            <h3 className="text-2xl font-bold font-display mb-8 text-secondary flex items-center gap-2">
                                <Building2 size={24} /> Registration Details
                            </h3>
                            <div className="space-y-6">
                                <div className="grid grid-cols-3 border-b border-white/10 pb-4">
                                    <span className="text-slate-400 font-medium">Company Name</span>
                                    <span className="col-span-2 font-semibold">GigDial Private Limited</span>
                                </div>
                                <div className="grid grid-cols-3 border-b border-white/10 pb-4">
                                    <span className="text-slate-400 font-medium">CIN</span>
                                    <span className="col-span-2 font-mono font-semibold tracking-wider text-indigo-300">U82990GJ2026PTC178384</span>
                                </div>
                                <div className="grid grid-cols-3 border-b border-white/10 pb-4">
                                    <span className="text-slate-400 font-medium">GSTIN</span>
                                    <span className="col-span-2 font-mono font-semibold tracking-wider text-indigo-300">24AANCG0880E1ZP</span>
                                </div>
                                <div className="grid grid-cols-3 pb-2">
                                    <span className="text-slate-400 font-medium">Directors</span>
                                    <span className="col-span-2 font-semibold text-slate-200">
                                        Mr. Jitendra Singh <br />
                                        Mr. Bhupendra Singh
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Registered Office card */}
                        <div className="lg:col-span-5 bg-gradient-to-br from-indigo-950/40 to-slate-950/40 border border-indigo-500/20 p-8 md:p-10 rounded-[2.5rem] flex flex-col justify-between">
                            <div>
                                <h3 className="text-2xl font-bold font-display mb-6 text-white flex items-center gap-2">
                                    <MapPin size={24} className="text-indigo-400" /> Registered Office
                                </h3>
                                <p className="text-slate-300 leading-relaxed font-medium mb-6">
                                    Shop No. 9, Murli Manohar Complex,<br />
                                    Naroda Kubernagar,<br />
                                    Ahmedabad, Gujarat, India
                                </p>
                            </div>
                            <div className="border-t border-white/10 pt-6">
                                <div className="flex items-center gap-3 text-slate-300">
                                    <Mail size={18} className="text-indigo-400 shrink-0" />
                                    <div className="text-sm font-semibold">
                                        <a href="mailto:support@gigdial.com" className="hover:underline">support@gigdial.com</a> <br />
                                        <a href="mailto:gigdial@gmail.com" className="hover:underline text-slate-400">gigdial@gmail.com</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
