import React from 'react';

const NotFound = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center text-center p-4 relative overflow-hidden" style={{ backgroundColor: 'var(--color-bg)' }}>
            {/* Glitch Effect Text */}
            <h1 className="text-9xl font-black tracking-tighter mb-4 opacity-50 relative animate-pulse" style={{ color: 'var(--color-text)' }}>
                404
            </h1>

            <h2 className="text-3xl font-bold mb-6" style={{ color: 'var(--color-text)' }}>
                Page Not Found
            </h2>

            <p className="max-w-md mb-10 text-lg" style={{ color: 'var(--color-text-secondary)' }}>
                The innovation you are looking for hasn't been invented yet (or the link is broken).
            </p>

            <a
                href="/"
                className="px-8 py-4 rounded-full font-bold transition-transform hover:scale-105"
                style={{ backgroundColor: 'var(--color-text)', color: 'var(--color-bg)' }}
            >
                Back to Home
            </a>

            {/* Decorative Blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px] -z-10 pointer-events-none"></div>
        </div>
    );
};

export default NotFound;
