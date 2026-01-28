// import React, { useState } from 'react';
// import { FiX, FiCheckCircle } from 'react-icons/fi';

// const RegistrationModal = ({ isOpen, onClose, planName }) => {
//     const [step, setStep] = useState('form'); // 'form' | 'success'
//     const [loading, setLoading] = useState(false);

//     if (!isOpen) return null;

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         setLoading(true);
//         // Simulate API call
//         setTimeout(() => {
//             setLoading(false);
//             setStep('success');
//         }, 1500);
//     };

//     return (
//         <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
//             {/* Backdrop */}
//             <div
//                 className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
//                 onClick={onClose}
//             ></div>

//             {/* Modal Content */}
//             <div
//                 className="relative w-full max-w-md rounded-3xl overflow-hidden border animate-in fade-in zoom-in-95 duration-200"
//                 style={{
//                     backgroundColor: 'var(--color-surface)',
//                     borderColor: 'var(--color-border)',
//                     boxShadow: 'var(--shadow-xl)'
//                 }}
//             >

//                 {/* Close Button */}
//                 <button
//                     onClick={onClose}
//                     className="absolute top-4 right-4 p-2 rounded-full transition-colors z-10 hover:opacity-70"
//                     style={{
//                         color: 'var(--color-text-muted)',
//                         backgroundColor: 'var(--color-bg-secondary)'
//                     }}
//                 >
//                     <FiX className="w-5 h-5" />
//                 </button>

//                 <div className="p-8">
//                     {step === 'form' ? (
//                         <>
//                             <div className="mb-8">
//                                 <span className="text-xs font-bold uppercase tracking-widest mb-2 block" style={{ color: 'var(--color-primary)' }}>
//                                     {planName}
//                                 </span>
//                                 <h3 className="text-3xl font-black tracking-tighter mb-2" style={{ color: 'var(--color-text)' }}>
//                                     Secure Your Spot
//                                 </h3>
//                                 <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
//                                     Fill in your details to generate your digital pass.
//                                 </p>
//                             </div>

//                             <form onSubmit={handleSubmit} className="space-y-4">
//                                 <div className="space-y-1">
//                                     <label className="text-xs font-bold uppercase" style={{ color: 'var(--color-text-muted)' }}>Full Name</label>
//                                     <input
//                                         required
//                                         type="text"
//                                         placeholder="John Doe"
//                                         className="w-full px-4 py-3 rounded-xl border focus:outline-none transition-colors"
//                                         style={{
//                                             backgroundColor: 'var(--color-bg-secondary)',
//                                             borderColor: 'var(--color-border)',
//                                             color: 'var(--color-text)',
//                                         }}
//                                     />
//                                 </div>

//                                 <div className="space-y-1">
//                                     <label className="text-xs font-bold uppercase" style={{ color: 'var(--color-text-muted)' }}>Email Address</label>
//                                     <input
//                                         required
//                                         type="email"
//                                         placeholder="john@example.com"
//                                         className="w-full px-4 py-3 rounded-xl border focus:outline-none transition-colors"
//                                         style={{
//                                             backgroundColor: 'var(--color-bg-secondary)',
//                                             borderColor: 'var(--color-border)',
//                                             color: 'var(--color-text)',
//                                         }}
//                                     />
//                                 </div>

//                                 <div className="space-y-1">
//                                     <label className="text-xs font-bold uppercase" style={{ color: 'var(--color-text-muted)' }}>Phone</label>
//                                     <input
//                                         required
//                                         type="tel"
//                                         placeholder="+91 98765 43210"
//                                         className="w-full px-4 py-3 rounded-xl border focus:outline-none transition-colors"
//                                         style={{
//                                             backgroundColor: 'var(--color-bg-secondary)',
//                                             borderColor: 'var(--color-border)',
//                                             color: 'var(--color-text)',
//                                         }}
//                                     />
//                                 </div>

//                                 <button
//                                     type="submit"
//                                     disabled={loading}
//                                     className="w-full py-4 mt-4 rounded-xl font-bold text-lg active:scale-95 transition-all flex items-center justify-center gap-2"
//                                     style={{
//                                         backgroundColor: 'var(--color-text)',
//                                         color: 'var(--color-bg)'
//                                     }}
//                                 >
//                                     {loading ? (
//                                         <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin"></div>
//                                     ) : (
//                                         'Confirm Registration'
//                                     )}
//                                 </button>
//                             </form>
//                         </>
//                     ) : (
//                         <div className="text-center py-8">
//                             <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-4xl animate-bounce"
//                                 style={{
//                                     backgroundColor: 'color-mix(in srgb, var(--color-primary), transparent 80%)',
//                                     color: 'var(--color-primary)'
//                                 }}>
//                                 <FiCheckCircle />
//                             </div>
//                             <h3 className="text-3xl font-black tracking-tighter mb-4" style={{ color: 'var(--color-text)' }}>
//                                 You're In!
//                             </h3>
//                             <p className="mb-8 max-w-xs mx-auto" style={{ color: 'var(--color-text-secondary)' }}>
//                                 We've sent a confirmation email with your QR code ticket. See you at the summit!
//                             </p>
//                             <button
//                                 onClick={onClose}
//                                 className="w-full py-3 rounded-xl font-bold border transition-colors hover:opacity-80"
//                                 style={{
//                                     borderColor: 'var(--color-border)',
//                                     color: 'var(--color-text)'
//                                 }}
//                             >
//                                 Close
//                             </button>
//                         </div>
//                     )}
//                 </div>

//                 {/* Decorative Bottom Line */}
//                 <div className={`h-1.5 w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-opacity duration-300 ${loading ? 'opacity-100 animate-pulse' : 'opacity-0'}`}></div>
//             </div>
//         </div>
//     );
// };

// export default RegistrationModal;


import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const GOOGLE_FORM_URL = "https://forms.gle/kGkTVRkG6T5QTdWF9";

const RegistrationModal = ({ isOpen, onClose, plan }) => {
    if (!plan) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop with Blur */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm px-4 flex items-end sm:items-center justify-center"
                    >
                        {/* Modal Container */}
                        <motion.div
                            initial={{ y: "100%", opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: "100%", opacity: 0 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-[var(--color-surface)] w-full max-w-lg rounded-t-[2.5rem] sm:rounded-[2rem] p-6 sm:p-10 shadow-2xl overflow-hidden relative"
                            style={{ 
                                border: '1px solid rgba(255,255,255,0.1)',
                                background: 'linear-gradient(145deg, var(--color-surface), var(--color-bg))'
                            }}
                        >
                            {/* Decorative Accent */}
                            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-transparent via-[var(--color-text)] to-transparent opacity-20" />

                            {/* Header */}
                            <div className="mb-6">
                                <span className="inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-2 bg-[var(--color-text)] text-[var(--color-bg)]">
                                    Selected Plan
                                </span>
                                <h3 className="text-3xl sm:text-4xl font-black tracking-tight leading-none italic uppercase">
                                    {plan.name}
                                </h3>
                            </div>

                            {/* Description */}
                            <p className="text-[var(--color-text)] opacity-70 text-base sm:text-lg mb-8 leading-relaxed">
                                {plan.desc}
                            </p>

                            {/* Features List */}
                            <div className="space-y-4 mb-10">
                                {plan.features.map((f, i) => (
                                    <motion.div 
                                        initial={{ x: -10, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        transition={{ delay: i * 0.1 }}
                                        key={i} 
                                        className="flex items-center gap-3"
                                    >
                                        <div className="h-1.5 w-1.5 rounded-full bg-[var(--color-text)]" />
                                        <span className="text-sm font-medium opacity-90">{f}</span>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4">
                                <button
                                    onClick={() => window.open(GOOGLE_FORM_URL, "_blank")}
                                    className="group relative flex-1 py-4 rounded-2xl font-black text-lg transition-transform active:scale-95 overflow-hidden"
                                    style={{
                                        backgroundColor: 'var(--color-text)',
                                        color: 'var(--color-bg)'
                                    }}
                                >
                                    <span className="relative z-10">PROCEED TO FORM</span>
                                    <motion.div 
                                        className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform" 
                                    />
                                </button>

                                <button
                                    onClick={onClose}
                                    className="px-8 py-4 rounded-2xl border-2 border-[var(--color-text)] opacity-50 hover:opacity-100 font-bold transition-all active:scale-95"
                                >
                                    BACK
                                </button>
                            </div>

                            {/* Mobile Indicator */}
                            <div className="mt-6 flex justify-center sm:hidden">
                                <div className="w-12 h-1 rounded-full bg-[var(--color-text)] opacity-20" />
                            </div>
                        </motion.div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default RegistrationModal;