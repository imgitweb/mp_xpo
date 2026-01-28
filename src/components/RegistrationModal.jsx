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