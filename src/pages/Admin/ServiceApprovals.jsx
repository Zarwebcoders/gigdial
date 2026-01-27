import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, X, Eye, Clock, MapPin, DollarSign } from 'lucide-react';

const mockServices = [
    {
        id: 1,
        title: "Professional Home Cleaning",
        provider: "Priya Sharma",
        providerImg: "https://i.pravatar.cc/150?img=5",
        category: "Cleaning",
        price: "$40/hr",
        location: "Mumbai, MH",
        submitted: "2 hours ago",
        image: "https://images.unsplash.com/photo-1581578731117-104f8a746929?auto=format&fit=crop&w=400&q=80"
    },
    {
        id: 2,
        title: "Wedding Photography Package",
        provider: "Rahul Verma",
        providerImg: "https://i.pravatar.cc/150?img=3",
        category: "Photography",
        price: "$500/day",
        location: "Delhi, DL",
        submitted: "5 hours ago",
        image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=400&q=80"
    },
    {
        id: 3,
        title: "Advanced React.js Tutoring",
        provider: "Amit Patel",
        providerImg: "https://i.pravatar.cc/150?img=11",
        category: "Education",
        price: "$25/hr",
        location: "Online",
        submitted: "1 day ago",
        image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=400&q=80"
    }
];

const ServiceApprovals = () => {
    const [services, setServices] = useState(mockServices);

    const handleAction = (id) => {
        setServices(services.filter(s => s.id !== id));
    };

    return (
        <div className="space-y-8">
            <div className="flex justify-between items-end">
                <div>
                    <h1 className="text-3xl font-bold text-slate-900">Service Approvals</h1>
                    <p className="text-slate-500 mt-2">Review and approve new worker services.</p>
                </div>
                <div className="px-4 py-2 bg-blue-50 text-blue-700 rounded-lg font-bold text-sm">
                    {services.length} Pending Requests
                </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <AnimatePresence>
                    {services.map((service) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            layout
                            className="bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 group overflow-hidden"
                        >
                            {/* Card Image */}
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-slate-700 shadow-sm">
                                    {service.category}
                                </div>
                                <div className="absolute top-3 right-3 bg-black/50 backdrop-blur p-2 rounded-full text-white cursor-pointer hover:bg-black/70 transition-colors">
                                    <Eye size={16} />
                                </div>
                            </div>

                            {/* Card Content */}
                            <div className="p-5">
                                <div className="flex items-center gap-3 mb-3">
                                    <img src={service.providerImg} alt={service.provider} className="w-8 h-8 rounded-full border border-slate-200" />
                                    <span className="text-sm font-medium text-slate-600">{service.provider}</span>
                                </div>
                                <h3 className="text-lg font-bold text-slate-900 mb-2 leading-tight group-hover:text-blue-600 transition-colors">
                                    {service.title}
                                </h3>

                                <div className="flex items-center gap-4 text-xs font-medium text-slate-500 mb-6">
                                    <span className="flex items-center gap-1 bg-slate-50 px-2 py-1 rounded">
                                        <MapPin size={12} /> {service.location}
                                    </span>
                                    <span className="flex items-center gap-1 bg-green-50 text-green-700 px-2 py-1 rounded">
                                        <DollarSign size={12} /> {service.price}
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <Clock size={12} /> {service.submitted}
                                    </span>
                                </div>

                                {/* Actions */}
                                <div className="grid grid-cols-2 gap-3">
                                    <button
                                        onClick={() => handleAction(service.id)}
                                        className="flex items-center justify-center gap-2 py-2.5 rounded-xl border border-red-100 text-red-600 hover:bg-red-50 hover:border-red-200 font-bold transition-all"
                                    >
                                        <X size={18} /> Reject
                                    </button>
                                    <button
                                        onClick={() => handleAction(service.id)}
                                        className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-green-600 text-white hover:bg-green-700 shadow-lg shadow-green-600/20 font-bold transition-all"
                                    >
                                        <Check size={18} /> Approve
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>

                {services.length === 0 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="col-span-full py-20 text-center bg-slate-50 rounded-2xl border border-dashed border-slate-200"
                    >
                        <div className="bg-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-sm">
                            <Check size={32} className="text-green-500" />
                        </div>
                        <h3 className="text-lg font-bold text-slate-900">All Caught Up!</h3>
                        <p className="text-slate-500">No pending service approvals at the moment.</p>
                    </motion.div>
                )}
            </div>
        </div>
    );
};

export default ServiceApprovals;
