import React from 'react';
import { FiArrowDown, FiCpu, FiGlobe, FiZap } from 'react-icons/fi';

const Hero5 = () => {
    return (
        <div className="relative min-h-screen w-full flex flex-col pt-20"
            style={{ backgroundColor: 'var(--color-bg)' }}>

            {/* Absolute Decor */}
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[var(--color-border)] to-transparent opacity-50"></div>
            <div className="absolute top-0 right-20 w-px h-screen bg-[var(--color-border)] opacity-20 hidden md:block"></div>
            <div className="absolute top-0 left-20 w-px h-screen bg-[var(--color-border)] opacity-20 hidden md:block"></div>

            {/* Main Content Area */}
            <div className="flex-grow flex flex-col justify-center items-center relative z-10 px-6 mt-12 md:mt-0">

                <div className="text-center mb-12">
                    <span className="inline-block px-4 py-1.5 rounded-full border mb-8 uppercase tracking-[0.2em] text-xs font-bold"
                        style={{ borderColor: 'var(--color-border)', color: 'var(--color-text-muted)' }}>
                        Est. 2026 • Central India
                    </span>

                    <h1 className="text-[12vw] leading-[0.8] font-black tracking-tighter mix-blend-difference select-none"
                        style={{ color: 'var(--color-text)' }}>
                        STARTUP
                    </h1>
                    <h1 className="text-[12vw] leading-[0.8] font-black tracking-tighter mix-blend-difference select-none flex items-center justify-center gap-[2vw]"
                        style={{ color: 'var(--color-text)' }}>
                        EXPO <span className="block w-[12vw] h-[10vw] rounded-full mt-2 bg-[var(--color-text)] animate-pulse"></span>
                    </h1>
                </div>

                <p className="max-w-xl text-center text-lg md:text-xl font-light mb-16"
                    style={{ color: 'var(--color-text-secondary)' }}>
                    Bridging the gap between auditing dreams and funding realities. The largest confluence of capital and code in the heart of India.
                </p>

                <div className="flex gap-4 mb-10">
                    <button className="px-12 py-4 rounded-full font-bold text-lg transition-all hover:scale-105"
                        style={{ backgroundColor: 'var(--color-text)', color: 'var(--color-bg)' }}>
                        Get Tickets
                    </button>
                    <button className="w-16 h-16 rounded-full border flex items-center justify-center transition-colors hover:bg-[var(--color-surface)]"
                        style={{ borderColor: 'var(--color-border)', color: 'var(--color-text)' }}>
                        <FiArrowDown className="animate-bounce" />
                    </button>
                </div>
            </div>

            {/* Bottom Grid Info */}
            <div className="w-full border-t grid grid-cols-1 md:grid-cols-3"
                style={{ borderColor: 'var(--color-border)' }}>

                <div className="p-8 border-b md:border-b-0 md:border-r flex items-start gap-6 group hover:bg-[var(--color-surface)] transition-colors"
                    style={{ borderColor: 'var(--color-border)' }}>
                    <div className="p-3 rounded-xl border" style={{ borderColor: 'var(--color-border)' }}>
                        <FiGlobe className="w-6 h-6" style={{ color: 'var(--color-text)' }} />
                    </div>
                    <div>
                        <div className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: 'var(--color-text-muted)' }}>Scale</div>
                        <div className="text-xl font-bold" style={{ color: 'var(--color-text)' }}>Global Network</div>
                        <div className="text-sm mt-2 opacity-60" style={{ color: 'var(--color-text-secondary)' }}>Delegates from 30+ countries.</div>
                    </div>
                </div>

                <div className="p-8 border-b md:border-b-0 md:border-r flex items-start gap-6 group hover:bg-[var(--color-surface)] transition-colors"
                    style={{ borderColor: 'var(--color-border)' }}>
                    <div className="p-3 rounded-xl border" style={{ borderColor: 'var(--color-border)' }}>
                        <FiZap className="w-6 h-6" style={{ color: 'var(--color-text)' }} />
                    </div>
                    <div>
                        <div className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: 'var(--color-text-muted)' }}>Speed</div>
                        <div className="text-xl font-bold" style={{ color: 'var(--color-text)' }}>Fast-Track Funding</div>
                        <div className="text-sm mt-2 opacity-60" style={{ color: 'var(--color-text-secondary)' }}>On-spot term sheets for top 1%.</div>
                    </div>
                </div>

                <div className="p-8 flex items-start gap-6 group hover:bg-[var(--color-surface)] transition-colors">
                    <div className="p-3 rounded-xl border" style={{ borderColor: 'var(--color-border)' }}>
                        <FiCpu className="w-6 h-6" style={{ color: 'var(--color-text)' }} />
                    </div>
                    <div>
                        <div className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: 'var(--color-text-muted)' }}>Future</div>
                        <div className="text-xl font-bold" style={{ color: 'var(--color-text)' }}>Deep Tech Zone</div>
                        <div className="text-sm mt-2 opacity-60" style={{ color: 'var(--color-text-secondary)' }}>AI, Robotics & SpaceTech focus.</div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Hero5;
