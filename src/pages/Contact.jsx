import React from 'react';
import { 
  Mail, MapPin, Send, MessageSquare, Clock, 
  ShieldCheck, HelpCircle, Briefcase, UserPlus, CreditCard, Users2 
} from 'lucide-react';
import { motion } from 'framer-motion';

const ContactItem = ({ icon: Icon, title, value, subtext, color }) => (
    <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-card-hover transition-all duration-300">
        <div className={`w-12 h-12 rounded-2xl ${color} bg-opacity-10 flex items-center justify-center text-indigo-600 mb-4`}>
            <Icon size={24} />
        </div>
        <h3 className="font-bold text-lg text-slate-800 mb-1">{title}</h3>
        <div className="text-primary font-semibold mb-2 text-sm md:text-base leading-relaxed">{value}</div>
        <p className="text-sm text-slate-500">{subtext}</p>
    </div>
);

const SupportCategoryCard = ({ icon: Icon, label }) => (
    <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100 hover:border-indigo-100 transition-colors">
        <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-primary shadow-sm">
            <Icon size={18} />
        </div>
        <span className="font-semibold text-slate-700 text-sm">{label}</span>
    </div>
);

const Contact = () => {
    const categories = [
        { icon: Users2, label: "Customer Support" },
        { icon: HelpCircle, label: "Service Requests" },
        { icon: UserPlus, label: "Worker Registration" },
        { icon: CreditCard, label: "Subscription Support" },
        { icon: Briefcase, label: "Partnership Inquiries" },
        { icon: MessageSquare, label: "General Business Queries" }
    ];

    return (
        <div className="min-h-screen bg-slate-50 py-20 font-sans">
            <div className="container mx-auto px-4 max-w-5xl">

                {/* Header */}
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block"
                    >
                        Get in Touch
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6"
                    >
                        We're here to help you.
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-slate-500"
                    >
                        Have a question about our services, subscription plans, or need assistance? Drop us a line.
                    </motion.p>
                </div>

                {/* Top Contact Details Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 relative z-10">
                    <ContactItem
                        icon={Mail}
                        title="Email Support"
                        value={
                            <div>
                                <a href="mailto:support@gigdial.com" className="hover:underline">support@gigdial.com</a>
                                <br />
                                <a href="mailto:gigdial@gmail.com" className="hover:underline text-slate-400 text-xs">gigdial@gmail.com</a>
                            </div>
                        }
                        subtext="Response within 24 hours"
                        color="bg-blue-50"
                    />
                    <ContactItem
                        icon={MapPin}
                        title="Registered Office"
                        value="Shop No. 9, Murli Manohar Complex, Naroda Kubernagar, Ahmedabad, Gujarat"
                        subtext="GigDial Private Limited"
                        color="bg-purple-50"
                    />
                    <ContactItem
                        icon={Clock}
                        title="Business Hours"
                        value="Mon - Sat, 09:00 AM – 06:00 PM"
                        subtext="Closed on Sundays & National Holidays"
                        color="bg-green-50"
                    />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
                    {/* Grievance Officer details */}
                    <div className="lg:col-span-5 bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm flex flex-col justify-between">
                        <div>
                            <div className="w-12 h-12 rounded-2xl bg-amber-50 flex items-center justify-center text-amber-600 mb-6">
                                <ShieldCheck size={24} />
                            </div>
                            <h3 className="font-bold text-xl text-slate-800 mb-3">Grievance Officer</h3>
                            <p className="text-sm text-slate-500 leading-relaxed mb-6">
                                Under applicable consumer protection rules, GigDial has designated a Grievance Officer to address user complaints and safety concerns.
                            </p>
                            <div className="space-y-4 border-t border-slate-100 pt-6">
                                <div>
                                    <span className="text-xs uppercase tracking-wider text-slate-400 font-bold">Entity</span>
                                    <p className="font-semibold text-slate-700 text-sm">GigDial Private Limited</p>
                                </div>
                                <div>
                                    <span className="text-xs uppercase tracking-wider text-slate-400 font-bold">Email Address</span>
                                    <p className="font-semibold text-primary text-sm">
                                        <a href="mailto:support@gigdial.com" className="hover:underline">support@gigdial.com</a>
                                    </p>
                                </div>
                                <div>
                                    <span className="text-xs uppercase tracking-wider text-slate-400 font-bold">Response SLA</span>
                                    <p className="font-semibold text-slate-700 text-sm">Within 7 Business Days</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Support Categories */}
                    <div className="lg:col-span-7 bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm">
                        <h3 className="font-bold text-xl text-slate-800 mb-6">Support Categories</h3>
                        <p className="text-sm text-slate-500 mb-6">
                            To help us assist you faster, please choose the correct category when submitting an inquiry.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {categories.map((cat, idx) => (
                                <SupportCategoryCard key={idx} icon={cat.icon} label={cat.label} />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Form Section */}
                <div className="bg-white rounded-[2.5rem] shadow-xl border border-slate-100 overflow-hidden flex flex-col md:flex-row">
                    {/* Visual Side */}
                    <div className="md:w-5/12 bg-[#003366] relative p-12 text-white flex flex-col justify-between overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary to-indigo-900 opacity-90 z-0"></div>
                        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?auto=format&fit=crop&q=80')] bg-cover bg-center mix-blend-overlay opacity-30 z-0"></div>

                        <div className="relative z-10">
                            <h3 className="text-3xl font-display font-bold mb-4">Let's start a conversation</h3>
                            <p className="text-indigo-100 leading-relaxed text-sm">
                                Whether you're a customer looking for services, a service professional seeking leads, or have questions about subscription billing, our team is ready to help.
                            </p>
                        </div>

                        <div className="relative z-10 mt-12 space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                                    <ShieldCheck size={18} className="text-secondary" />
                                </div>
                                <div>
                                    <h5 className="font-bold text-sm">Secure Communication</h5>
                                    <p className="text-xs text-indigo-200">Your details are protected under our privacy policies.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Form Side */}
                    <div className="md:w-7/12 p-8 md:p-12">
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-slate-700">First Name</label>
                                    <input type="text" placeholder="John" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-slate-800" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-slate-700">Last Name</label>
                                    <input type="text" placeholder="Doe" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-slate-800" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-700">Email Address</label>
                                <input type="email" placeholder="john@example.com" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-slate-800" />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-700">Message</label>
                                <textarea rows="4" placeholder="How can we help you?" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none text-slate-800"></textarea>
                            </div>

                            <button type="button" className="btn-primary w-full py-4 text-lg rounded-xl flex items-center justify-center gap-2 group shadow-lg shadow-primary/25">
                                Send Message <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
