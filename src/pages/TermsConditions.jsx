import React from 'react';
import { motion } from 'framer-motion';
import { 
  FileText, Scale, UserCheck, Briefcase, CreditCard, 
  TrendingUp, AlertTriangle, UserX, ShieldAlert, Edit3, Mail, Calendar
} from 'lucide-react';

const TermsSection = ({ id, icon: Icon, title, children }) => (
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

const TermsConditions = () => {
    const lastUpdated = new Date().toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
    });

    const menuItems = [
        { id: "overview", label: "Platform Overview", icon: Scale },
        { id: "eligibility", label: "User Eligibility", icon: UserCheck },
        { id: "customer", label: "Customer Responsibilities", icon: FileText },
        { id: "worker", label: "Worker Responsibilities", icon: Briefcase },
        { id: "subscription", label: "Subscription Services", icon: CreditCard },
        { id: "payments", label: "Payments & Billing", icon: CreditCard },
        { id: "leads", label: "Lead Delivery", icon: TrendingUp },
        { id: "prohibited", label: "Prohibited Activities", icon: AlertTriangle },
        { id: "suspension", label: "Account Suspension", icon: UserX },
        { id: "liability", label: "Limitation of Liability", icon: ShieldAlert },
        { id: "changes", label: "Changes to Terms", icon: Edit3 }
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
                            <Scale size={12} className="text-secondary" /> Agreement
                        </div>
                        <h1 className="text-4xl md:text-5xl font-display font-extrabold mb-4 leading-tight">
                            Terms & Conditions
                        </h1>
                        <p className="text-indigo-100 text-base md:text-lg mb-6 leading-relaxed max-w-2xl">
                            Please read these Terms & Conditions carefully. By accessing or using GigDial, you agree to comply with and be bound by this agreement.
                        </p>
                        <div className="flex items-center gap-2 text-xs md:text-sm text-slate-300 font-semibold bg-white/5 inline-flex px-4 py-2 rounded-full border border-white/5">
                            <Calendar size={14} className="text-secondary" />
                            <span>Last Updated: {lastUpdated}</span>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    {/* Navigation Sidebar */}
                    <div className="lg:col-span-4 sticky top-28 hidden lg:block bg-white p-6 rounded-3xl border border-slate-100 shadow-sm max-h-[75vh] overflow-y-auto">
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
                                <h4 className="font-bold text-slate-800 text-xs uppercase mb-2">Support</h4>
                                <a 
                                    href="mailto:support@gigdial.com" 
                                    className="inline-flex items-center gap-2 text-xs font-bold text-primary hover:underline"
                                >
                                    <Mail size={12} /> support@gigdial.com
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Terms Content */}
                    <div className="lg:col-span-8">
                        <PolicySection id="overview" icon={Scale} title="Platform Overview">
                            <p>
                                GigDial Private Limited operates a technology-enabled marketplace that facilitates connections between customers and independent service professionals.
                            </p>
                            <blockquote className="border-l-4 border-amber-500 bg-amber-50/60 p-4 rounded-r-2xl my-4 text-sm text-slate-700">
                                <strong>Notice:</strong> GigDial acts solely as a facilitator. We do not directly provide plumbing, electrical, carpentry, painting, AC repair, cleaning, appliance repair, or any other listed services. All services are performed independently by the registered professionals.
                            </blockquote>
                        </PolicySection>

                        <PolicySection id="eligibility" icon={UserCheck} title="User Eligibility">
                            <p>
                                To use our platform, you must be of legal age and capable of entering into binding contracts. You agree to provide accurate, current, and complete registration information and comply with all applicable local, state, and national laws in India.
                            </p>
                        </PolicySection>

                        <PolicySection id="customer" icon={FileText} title="Customer Responsibilities">
                            <p>As a customer using GigDial to find service providers, you agree to:</p>
                            <ul className="list-disc pl-6 space-y-2 mt-4 text-slate-600">
                                <li>Submit genuine service requests and inquiries.</li>
                                <li>Provide accurate contact details, service description, and service location.</li>
                                <li>Communicate respectfully with service professionals.</li>
                                <li>Independently evaluate, check references, and verify the credentials of service providers before hiring or authorizing work.</li>
                            </ul>
                        </PolicySection>

                        <PolicySection id="worker" icon={Briefcase} title="Service Professional Responsibilities">
                            <p>As an independent service professional registered on GigDial, you agree to:</p>
                            <ul className="list-disc pl-6 space-y-2 mt-4 text-slate-600">
                                <li>Maintain accurate profile information, including skills, rates, photos, and verification documents.</li>
                                <li>Provide professional, safe, and lawful services to customers.</li>
                                <li>Respond appropriately and in a timely manner to customer inquiries and leads.</li>
                                <li>Comply with all applicable local regulations, licensing requirements, and taxation laws.</li>
                            </ul>
                        </PolicySection>

                        <PolicySection id="subscription" icon={CreditCard} title="Subscription Services">
                            <p>
                                Certain platform features and the availability of direct customer business leads require paid subscription plans for service professionals.
                            </p>
                            <p className="mt-2">
                                GigDial reserves the right to modify subscription plans, pricing structure, features, duration, and benefits at its sole discretion at any time. Any changes to pricing will be communicated to users in advance of billing cycles.
                            </p>
                        </PolicySection>

                        <PolicySection id="payments" icon={CreditCard} title="Payments and Billing">
                            <p>
                                Online subscription payments are processed through authorized third-party payment providers (such as Razorpay).
                            </p>
                            <p className="mt-2">By initiating a payment, you confirm that:</p>
                            <ul className="list-disc pl-6 space-y-2 text-slate-600">
                                <li>The billing and payment information you provide is accurate and complete.</li>
                                <li>You are authorized to use the selected payment method (debit card, credit card, netbanking, or UPI).</li>
                                <li>The payment is made voluntarily for the subscription plan of your choice.</li>
                            </ul>
                            <blockquote className="border-l-4 border-red-500 bg-red-50/50 p-4 rounded-r-2xl my-4 text-sm text-slate-700">
                                <strong>Payment Disclaimer:</strong> GigDial shall not be held responsible for payment gateway failures, banking/network delays, transaction declines, or any third-party technical issues.
                            </blockquote>
                        </PolicySection>

                        <PolicySection id="leads" icon={TrendingUp} title="Lead Delivery">
                            <p>
                                GigDial facilitates customer inquiries and distributes business leads to professionals. However, lead availability and delivery frequency may vary based on factors such as location, service category, user demand, profile quality, and customer requirements.
                            </p>
                            <p className="mt-2 font-semibold text-slate-700">
                                GigDial does not guarantee project confirmation, job conversion, service completion, or any guaranteed level of earnings from any lead delivered.
                            </p>
                        </PolicySection>

                        <PolicySection id="prohibited" icon={AlertTriangle} title="Prohibited Activities">
                            <p>Users shall not under any circumstances engage in the following prohibited behaviors:</p>
                            <ul className="list-disc pl-6 space-y-2 mt-4 text-slate-600">
                                <li>Create fake profiles, duplicate accounts, or impersonate other individuals.</li>
                                <li>Submit false, misleading, or fraudulent information in reviews, requests, or profiles.</li>
                                <li>Engage in payment fraud or try to bypass platform payment gateways.</li>
                                <li>Abuse platform features, harvest user lists, or scrap directory information.</li>
                                <li>Harass, threaten, or display abusive behavior towards other customers, workers, or GigDial support staff.</li>
                                <li>Violate any local, state, or federal laws of India.</li>
                            </ul>
                        </PolicySection>

                        <PolicySection id="suspension" icon={UserX} title="Account Suspension">
                            <p>
                                GigDial reserves the right to suspend, freeze, or permanently terminate any user account (customer or professional) found involved in policy violations, fraudulent actions, platform abuse, harassment, or unlawful acts.
                            </p>
                            <p className="mt-2 font-semibold text-red-600">
                                No refund shall be provided for subscription balances of accounts suspended due to violations of our platform policies.
                            </p>
                        </PolicySection>

                        <PolicySection id="liability" icon={ShieldAlert} title="Limitation of Liability">
                            <p className="font-bold text-slate-800">
                                GigDial acts solely as a marketplace facilitator.
                            </p>
                            <p className="mt-2">
                                To the maximum extent permitted by law, GigDial Private Limited and its directors, employees, or partners shall not be held liable for:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 mt-2 text-slate-600">
                                <li>Service quality issues, unfinished tasks, or professional conduct of service providers.</li>
                                <li>Pricing disputes, bargaining outcomes, or financial transactions between customers and workers.</li>
                                <li>Property damage, loss, or theft during the fulfillment of any local service.</li>
                                <li>Personal injury, accident, or distress suffered by any party.</li>
                                <li>Delays in service delivery or communications.</li>
                                <li>Any dispute, mediation, or legal issue arising between customers and service professionals.</li>
                            </ul>
                        </PolicySection>

                        <PolicySection id="changes" icon={Edit3} title="Changes to Terms">
                            <p>
                                GigDial reserves the right to update or modify these Terms & Conditions at any time without prior notice. Updated versions will be published immediately on this page and will apply to all subsequent platform usage.
                            </p>
                        </PolicySection>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TermsConditions;
