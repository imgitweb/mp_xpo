import React, { useState } from 'react';
import { FiX, FiCheckCircle } from 'react-icons/fi';

const RegistrationModal = ({ isOpen, onClose, planName }) => {
    const [step, setStep] = useState('form'); // 'form' | 'success'
    const [loading, setLoading] = useState(false);

    if (!isOpen) return null;

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        // Simulate API call
        setTimeout(() => {
            setLoading(false);
            setStep('success');
        }, 1500);
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            ></div>

            {/* Modal Content */}
            <div
                className="relative w-full max-w-md rounded-3xl overflow-hidden border animate-in fade-in zoom-in-95 duration-200"
                style={{
                    backgroundColor: 'var(--color-surface)',
                    borderColor: 'var(--color-border)',
                    boxShadow: 'var(--shadow-xl)'
                }}
            >

                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 rounded-full transition-colors z-10 hover:opacity-70"
                    style={{
                        color: 'var(--color-text-muted)',
                        backgroundColor: 'var(--color-bg-secondary)'
                    }}
                >
                    <FiX className="w-5 h-5" />
                </button>

                <div className="p-8">
                    {step === 'form' ? (
                        <>
                            <div className="mb-8">
                                <span className="text-xs font-bold uppercase tracking-widest mb-2 block" style={{ color: 'var(--color-primary)' }}>
                                    {planName}
                                </span>
                                <h3 className="text-3xl font-black tracking-tighter mb-2" style={{ color: 'var(--color-text)' }}>
                                    Secure Your Spot
                                </h3>
                                <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                                    Fill in your details to generate your digital pass.
                                </p>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="space-y-1">
                                    <label className="text-xs font-bold uppercase" style={{ color: 'var(--color-text-muted)' }}>Full Name</label>
                                    <input
                                        required
                                        type="text"
                                        placeholder="John Doe"
                                        className="w-full px-4 py-3 rounded-xl border focus:outline-none transition-colors"
                                        style={{
                                            backgroundColor: 'var(--color-bg-secondary)',
                                            borderColor: 'var(--color-border)',
                                            color: 'var(--color-text)',
                                        }}
                                    />
                                </div>

                                <div className="space-y-1">
                                    <label className="text-xs font-bold uppercase" style={{ color: 'var(--color-text-muted)' }}>Email Address</label>
                                    <input
                                        required
                                        type="email"
                                        placeholder="john@example.com"
                                        className="w-full px-4 py-3 rounded-xl border focus:outline-none transition-colors"
                                        style={{
                                            backgroundColor: 'var(--color-bg-secondary)',
                                            borderColor: 'var(--color-border)',
                                            color: 'var(--color-text)',
                                        }}
                                    />
                                </div>

                                <div className="space-y-1">
                                    <label className="text-xs font-bold uppercase" style={{ color: 'var(--color-text-muted)' }}>Phone</label>
                                    <input
                                        required
                                        type="tel"
                                        placeholder="+91 98765 43210"
                                        className="w-full px-4 py-3 rounded-xl border focus:outline-none transition-colors"
                                        style={{
                                            backgroundColor: 'var(--color-bg-secondary)',
                                            borderColor: 'var(--color-border)',
                                            color: 'var(--color-text)',
                                        }}
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full py-4 mt-4 rounded-xl font-bold text-lg active:scale-95 transition-all flex items-center justify-center gap-2"
                                    style={{
                                        backgroundColor: 'var(--color-text)',
                                        color: 'var(--color-bg)'
                                    }}
                                >
                                    {loading ? (
                                        <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin"></div>
                                    ) : (
                                        'Confirm Registration'
                                    )}
                                </button>
                            </form>
                        </>
                    ) : (
                        <div className="text-center py-8">
                            <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-4xl animate-bounce"
                                style={{
                                    backgroundColor: 'color-mix(in srgb, var(--color-primary), transparent 80%)',
                                    color: 'var(--color-primary)'
                                }}>
                                <FiCheckCircle />
                            </div>
                            <h3 className="text-3xl font-black tracking-tighter mb-4" style={{ color: 'var(--color-text)' }}>
                                You're In!
                            </h3>
                            <p className="mb-8 max-w-xs mx-auto" style={{ color: 'var(--color-text-secondary)' }}>
                                We've sent a confirmation email with your QR code ticket. See you at the summit!
                            </p>
                            <button
                                onClick={onClose}
                                className="w-full py-3 rounded-xl font-bold border transition-colors hover:opacity-80"
                                style={{
                                    borderColor: 'var(--color-border)',
                                    color: 'var(--color-text)'
                                }}
                            >
                                Close
                            </button>
                        </div>
                    )}
                </div>

                {/* Decorative Bottom Line */}
                <div className={`h-1.5 w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-opacity duration-300 ${loading ? 'opacity-100 animate-pulse' : 'opacity-0'}`}></div>
            </div>
        </div>
    );
};

export default RegistrationModal;
