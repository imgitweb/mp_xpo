import React, { useState } from 'react';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);
        // Simulate login API
        setTimeout(() => {
            setIsLoading(false);
            alert('Investor Portal authentication is currently invite-only. Please contact support.');
        }, 1500);
    };

    return (
        <div
            className="min-h-screen flex items-center justify-center relative overflow-hidden p-2"
            style={{ backgroundColor: 'var(--color-bg)' }}
        >
            {/* Background Decor */}
            <div
                className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none"
                style={{
                    backgroundImage: 'radial-gradient(circle at 50% 50%, var(--color-primary), transparent 70%)'
                }}
            ></div>
            <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-[100px] animate-pulse"
                style={{ backgroundColor: 'color-mix(in srgb, var(--color-primary), transparent 90%)' }}></div>

            {/* Glass Card */}
            <div
                className="relative z-10 w-full max-w-md p-8 rounded-3xl border backdrop-blur-xl animate-in fade-in zoom-in-95 duration-500"
                style={{
                    backgroundColor: 'var(--color-surface)',
                    borderColor: 'var(--color-border)',
                    boxShadow: 'var(--shadow-xl)'
                }}
            >
                <div className="text-center mb-10">
                    <h1 className="text-3xl font-black tracking-tighter mb-2" style={{ color: 'var(--color-text)' }}>
                        INVESTOR <span style={{ color: 'var(--color-text-muted)' }}>PORTAL</span>
                    </h1>
                    <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                        Secure access for accredited VCs and Angels.
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest" style={{ color: 'var(--color-text-muted)' }}>Email</label>
                        <input
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-1 transition-all"
                            style={{
                                backgroundColor: 'var(--color-bg-secondary)',
                                borderColor: 'var(--color-border)',
                                color: 'var(--color-text)',
                                '--tw-ring-color': 'var(--color-primary)'
                            }}
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest" style={{ color: 'var(--color-text-muted)' }}>Password</label>
                        <input
                            type="password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-1 transition-all"
                            style={{
                                backgroundColor: 'var(--color-bg-secondary)',
                                borderColor: 'var(--color-border)',
                                color: 'var(--color-text)',
                                '--tw-ring-color': 'var(--color-primary)'
                            }}
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full py-4 rounded-xl font-bold text-lg transition-transform active:scale-95 flex items-center justify-center gap-2"
                        style={{
                            backgroundColor: 'var(--color-text)',
                            color: 'var(--color-bg)'
                        }}
                    >
                        {isLoading ? (
                            <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin"></div>
                        ) : (
                            <>Sign In <FiArrowRight /></>
                        )}
                    </button>
                </form>

                <div className="mt-8 text-center space-y-4">
                    <a href="#" className="block text-sm hover:underline" style={{ color: 'var(--color-text-muted)' }}>
                        Forgot Password?
                    </a>
                    <div className="w-full h-px" style={{ backgroundColor: 'var(--color-border)' }}></div>
                    <p className="text-xs" style={{ color: 'var(--color-text-secondary)' }}>
                        Not a member? <a href="mailto:invest@mpstartupexpo.com" className="font-bold hover:underline" style={{ color: 'var(--color-text)' }}>Request Access</a>
                    </p>
                </div>

                {/* Back to Home */}
                <div className="absolute top-10 left-4">
                    <a
                        href="/"
                        className="text-2xl hover:opacity-70 transition-opacity"
                        style={{ color: 'var(--color-text-muted)' }}
                        title="Back to Home"
                    >
                        <FiArrowLeft />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Login;
