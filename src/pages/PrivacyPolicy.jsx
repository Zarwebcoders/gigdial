import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Eye, Lock, FileText, Database, Heart, Mail, Calendar, ArrowRight } from 'lucide-react';

const PolicySection = ({ id, icon: Icon, title, children }) => (
    <motion.section
        id={id}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="scroll-mt-24 mb-12 bg-white p-8 md:p-10 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300"
    >
        <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary shrink-0">
                <Icon size={24} />
            </div>
            <h2 className="text-xl md:text-2xl font-bold font-display text-slate-800">{title}</h2>
        </div>
        <div className="text-slate-600 leading-relaxed space-y-4 text-sm md:text-base">
            {children}
        </div>
    </motion.section>
);

const PrivacyPolicy = () => {
    const lastUpdated = new Date().toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
    });

    const menuItems = [
        { id: "collect", label: "Information We Collect", icon: Database },
        { id: "use", label: "How We Use Information", icon: Eye },
        { id: "share", label: "Information Sharing", icon: ArrowRight },
        { id: "payment", label: "Payment Security", icon: Lock },
        { id: "security", label: "Data Security", icon: Shield },
        { id: "thirdparty", label: "Third-Party Services", icon: FileText },
        { id: "updates", label: "Policy Updates", icon: Calendar }
    ];

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="min-h-screen bg-slate-50 py-16 md:py-24 font-sans">
            <div className="container mx-auto px-4 max-w-6xl">
                {/* Header */}
                <div className="relative rounded-[2.5rem] bg-[#003366] text-white p-8 md:p-16 overflow-hidden mb-16 shadow-xl">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none"></div>
                    <div className="absolute bottom-0 left-10 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>
                    
                    <div className="relative z-10 max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-indigo-200 text-xs font-bold uppercase tracking-widest mb-6">
                            <Shield size={12} className="text-secondary" /> Legal & Privacy
                        </div>
                        <h1 className="text-4xl md:text-5xl font-display font-extrabold mb-4 leading-tight">
                            Privacy Policy
                        </h1>
                        <p className="text-indigo-100 text-base md:text-lg mb-6 leading-relaxed max-w-2xl">
                            GigDial Private Limited is committed to protecting personal information collected through our platform. This policy outlines how we handle and protect your data.
                        </p>
                        <div className="flex items-center gap-2 text-xs md:text-sm text-slate-300 font-semibold bg-white/5 inline-flex px-4 py-2 rounded-full border border-white/5">
                            <Calendar size={14} className="text-secondary" />
                            <span>Last Updated: {lastUpdated}</span>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    {/* Navigation Sidebar */}
                    <div className="lg:col-span-4 sticky top-28 hidden lg:block bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
                        <h3 className="font-bold text-slate-800 text-sm uppercase tracking-wider mb-4 px-2">Table of Contents</h3>
                        <nav className="space-y-1">
                            {menuItems.map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => scrollToSection(item.id)}
                                    className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left text-sm font-semibold text-slate-600 hover:text-primary hover:bg-indigo-50/50 transition-all group"
                                >
                                    <item.icon size={16} className="text-slate-400 group-hover:text-primary shrink-0 transition-colors" />
                                    <span>{item.label}</span>
                                </button>
                            ))}
                        </nav>
                        
                        <div className="border-t border-slate-100 mt-6 pt-6 px-2">
                            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                                <h4 className="font-bold text-slate-800 text-xs uppercase mb-2">Need Help?</h4>
                                <p className="text-xs text-slate-500 mb-3 leading-relaxed">Have questions about our privacy policy or how we store your information?</p>
                                <a 
                                    href="mailto:support@gigdial.com" 
                                    className="inline-flex items-center gap-2 text-xs font-bold text-primary hover:underline"
                                >
                                    <Mail size={12} /> support@gigdial.com
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Policy Content */}
                    <div className="lg:col-span-8">
                        <PolicySection id="collect" icon={Database} title="Information We Collect">
                            <p>
                                In order to provide our commission-free local services marketplace, we may collect the following personal and device-related information when you register or use the platform:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 mt-4 text-slate-600">
                                <li><strong>Full Name:</strong> To identify users, customers, and service professionals.</li>
                                <li><strong>Mobile Number:</strong> Used as a primary identifier, and for login verification and communication.</li>
                                <li><strong>Email Address:</strong> To send invoice updates, notifications, support communications, and news.</li>
                                <li><strong>City and Location:</strong> To pair customers with service professionals located closest to their requested service area.</li>
                                <li><strong>Service Requirements:</strong> Categories and descriptions submitted by customers to fulfill specific tasks.</li>
                                <li><strong>Worker Profile Information:</strong> Experience details, service rates, certificates, and ID documents uploaded for professional verification.</li>
                                <li><strong>Technical Information:</strong> IP Address, browser type, device information, and usage statistics detailing how you interact with the platform.</li>
                            </ul>
                        </PolicySection>

                        <PolicySection id="use" icon={Eye} title="How We Use Information">
                            <p>We process your personal information based on legitimate business purposes, contract fulfillment, compliance with legal obligations, and consent. Specifically, we use it to:</p>
                            <ul className="list-disc pl-6 space-y-2 mt-4 text-slate-600">
                                <li>Facilitate direct and efficient connections between customers and independent service professionals.</li>
                                <li>Deliver real-time customer service requests, inquiries, and business leads to professionals.</li>
                                <li>Verify the accounts, background details, and profile quality of service professionals.</li>
                                <li>Understand platform metrics, troubleshoot performance, and enhance user experience.</li>
                                <li>Provide high-fidelity customer support and manage grievances.</li>
                                <li>Audit registration details to prevent fraud, spam, and platform misuse.</li>
                                <li>Comply with necessary tax, safety, and legal regulations in India.</li>
                            </ul>
                        </PolicySection>

                        <PolicySection id="share" icon={ArrowRight} title="Information Sharing">
                            <p>
                                To enable the core utility of our marketplace, GigDial shares relevant contact details and requirements between customers and service professionals who express interest or match the criteria for a specific booking.
                            </p>
                            <blockquote className="border-l-4 border-primary bg-indigo-50/50 p-4 rounded-r-2xl my-4 text-sm text-slate-700">
                                <strong>Important:</strong> GigDial operates with a strict commitment to user privacy. We do not sell, rent, lease, or trade your personal information to third parties for marketing purposes.
                            </blockquote>
                            <p>
                                We may share information with law enforcement, regulatory bodies, or legal authorities when required by applicable laws in India, or to protect the rights, property, and safety of GigDial, our users, or the public.
                            </p>
                        </PolicySection>

                        <PolicySection id="payment" icon={Lock} title="Payment Information">
                            <p>
                                GigDial takes sensitive banking and payment details very seriously.
                            </p>
                            <p className="mt-2">
                                We do not store complete credit card numbers, debit card numbers, UPI PINs, net banking credentials, or other sensitive payment gateway information on our servers.
                            </p>
                            <p className="mt-2">
                                All online payments, including subscription plans for workers, are processed securely through authorized third-party payment service providers (e.g., Razorpay). These platforms use secure, encrypted gateways compliant with PCI-DSS standards. We encourage users to separately review the privacy policies of our payment service providers.
                            </p>
                        </PolicySection>

                        <PolicySection id="security" icon={Shield} title="Data Security">
                            <p>
                                We have implemented reasonable technical and organizational security measures designed to protect the security of any personal information we process.
                            </p>
                            <p className="mt-2">
                                However, please also remember that we cannot guarantee that the internet itself is 100% secure. Although we will do our best to protect your personal information, transmission of personal information to and from our services is at your own risk. You should only access the services within a secure network environment.
                            </p>
                        </PolicySection>

                        <PolicySection id="thirdparty" icon={FileText} title="Third-Party Services">
                            <p>
                                The platform may contain links to third-party websites, apps, or advertisements. GigDial is not responsible for the privacy practices, terms of service, or content of external platforms. We encourage you to read the privacy statements of each website you choose to visit.
                            </p>
                        </PolicySection>

                        <PolicySection id="updates" icon={Calendar} title="Policy Updates">
                            <p>
                                We may update this privacy policy from time to time to reflect changes in our operational procedures or regulations. The updated version will be indicated by a revised "Last Updated" date, and the updated version will become effective as soon as it is published on the platform.
                            </p>
                        </PolicySection>

                        {/* Contact Information card */}
                        <div className="bg-[#020617] text-white p-8 rounded-3xl border border-slate-800 shadow-xl mt-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                            <div>
                                <h3 className="text-xl font-bold font-display text-white mb-2">Have privacy concerns?</h3>
                                <p className="text-slate-400 text-sm leading-relaxed max-w-md">Our team is ready to address any queries regarding how your data is handled.</p>
                            </div>
                            <a 
                                href="mailto:support@gigdial.com" 
                                className="btn-primary py-3 px-6 rounded-xl hover:bg-blue-600 transition-colors flex items-center gap-2 group whitespace-nowrap text-sm"
                            >
                                <Mail size={16} /> Contact Privacy Team
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
