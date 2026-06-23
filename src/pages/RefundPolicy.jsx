import React from 'react';
import { motion } from 'framer-motion';
import { 
  RefreshCw, ShieldCheck, AlertCircle, XOctagon, Calendar, Mail, 
  FileCheck, HelpCircle, Coins, Clock, ArrowRight
} from 'lucide-react';

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

const RefundPolicy = () => {
    const lastUpdated = new Date().toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
    });

    const menuItems = [
        { id: "model", label: "Subscription Model", icon: Coins },
        { id: "guarantee", label: "Lead Guarantee Policy", icon: ShieldCheck },
        { id: "eligibility", label: "Refund Eligibility", icon: FileCheck },
        { id: "nonrefundable", label: "Non-Refundable Situations", icon: XOctagon },
        { id: "cancellation", label: "Cancellation Policy", icon: AlertCircle },
        { id: "duplicate", label: "Duplicate Payments", icon: RefreshCw },
        { id: "processing", label: "Refund Processing", icon: Clock },
        { id: "finaldecision", label: "Final Decision", icon: ShieldCheck }
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
                            <RefreshCw size={12} className="text-secondary" /> Billing & Refunds
                        </div>
                        <h1 className="text-4xl md:text-5xl font-display font-extrabold mb-4 leading-tight">
                            Refund & Cancellation Policy
                        </h1>
                        <p className="text-indigo-100 text-base md:text-lg mb-6 leading-relaxed max-w-2xl">
                            This policy governs subscription-related refunds and cancellations for service professionals using the GigDial platform.
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
                                <h4 className="font-bold text-slate-800 text-xs uppercase mb-2">Billing Support</h4>
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
                        <PolicySection id="model" icon={Coins} title="Subscription Model">
                            <p>
                                GigDial operates on a subscription-based model. Service professionals pay a recurring or fixed subscription fee to unlock premium platform visibility, business tools, and access to direct customer inquiries and leads.
                            </p>
                        </PolicySection>

                        <PolicySection id="guarantee" icon={ShieldCheck} title="Lead Guarantee Policy">
                            <p>
                                We stand behind our discovery marketplace. GigDial may review refund requests if **no valid lead** has been delivered during an active subscription period.
                            </p>
                            <p className="mt-2">
                                <strong>What is a valid lead?</strong> A valid lead is defined as a genuine customer inquiry or request submitted through the GigDial platform for service categories in your registered location.
                            </p>
                        </PolicySection>

                        <PolicySection id="eligibility" icon={FileCheck} title="Refund Eligibility">
                            <p>To qualify for a refund review, the service professional must meet all of the following verification requirements:</p>
                            <ul className="list-disc pl-6 space-y-2 mt-4 text-slate-600">
                                <li>The subscription must remain active and uninterrupted throughout the subscription period.</li>
                                <li>Your worker profile must be 100% complete and accurate, including valid identity documents and correct category/location configurations.</li>
                                <li>Absolutely no valid lead must have been delivered to your profile during the active billing cycle.</li>
                                <li>Your account must be in compliance with all platform policies and Terms & Conditions.</li>
                            </ul>
                        </PolicySection>

                        <PolicySection id="nonrefundable" icon={XOctagon} title="Non-Refundable Situations">
                            <p>Refunds will not be granted under the following circumstances:</p>
                            <ul className="list-disc pl-6 space-y-2 mt-4 text-slate-600">
                                <li>One or more valid leads have been delivered to your profile, regardless of whether you responded.</li>
                                <li>The professional failed to respond, negotiate, or follow up appropriately with customers.</li>
                                <li>False, misleading, or plagiarized information was provided during signup or profile completion.</li>
                                <li>The account was suspended or terminated due to policy violations, fraud, abuse, or harassment.</li>
                                <li>The request is based solely on customer hiring decisions, pricing negotiations, or local market demand conditions.</li>
                            </ul>
                        </PolicySection>

                        <PolicySection id="cancellation" icon={AlertCircle} title="Cancellation Policy">
                            <p>
                                Service professionals can cancel future subscription renewals at any time directly through their dashboard or by contacting support.
                            </p>
                            <p className="mt-2 text-slate-500 text-sm">
                                Note: Subscription cancellations apply only to future billing periods and do not trigger a retrospective refund for currently active subscription terms.
                            </p>
                        </PolicySection>

                        <PolicySection id="duplicate" icon={RefreshCw} title="Duplicate Payments">
                            <p>
                                If your bank account or payment method is charged multiple times due to a gateway error or technical issues, GigDial will verify the transaction logs and process a refund for any eligible excess payment.
                            </p>
                        </PolicySection>

                        <PolicySection id="processing" icon={Clock} title="Refund Processing">
                            <p>
                                Approved refunds will be processed and returned to the original payment method (debit card, credit card, netbanking, or UPI) used to purchase the subscription.
                            </p>
                            <p className="mt-2">
                                <strong>Timeline:</strong> Processing and settlement usually take approximately **5 to 15 business days**, depending on your bank, credit card network, or the payment gateway provider.
                            </p>
                        </PolicySection>

                        <PolicySection id="finaldecision" icon={ShieldCheck} title="Final Decision">
                            <p>
                                GigDial Private Limited reserves the absolute right to inspect and audit all transaction histories, lead delivery records, and account activity logs to make the final determination regarding refund eligibility.
                            </p>
                        </PolicySection>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RefundPolicy;
