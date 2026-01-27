import React from 'react';
import { FiPlay, FiCalendar, FiMapPin, FiArrowRight } from 'react-icons/fi';

const Hero4 = () => {
    return (
        <div className="relative h-screen w-full overflow-hidden flex items-center justify-center p-4"
            style={{ backgroundColor: 'var(--color-bg)' }}>

            {/* 1. Background Abstract */}
            <div className="absolute inset-0 z-0 opacity-40">
                <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full blur-[120px] mix-blend-screen opacity-20"
                    style={{ backgroundColor: 'var(--color-primary)' }}></div>
                <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full blur-[120px] mix-blend-screen opacity-20"
                    style={{ backgroundColor: 'var(--color-accent)' }}></div>

                {/* Grid Overlay */}
                <div className="absolute inset-0"
                    style={{ backgroundImage: 'linear-gradient(90deg, var(--color-border) 1px, transparent 1px)', backgroundSize: '40px 100%', opacity: 0.1 }}>
                </div>
            </div>

            {/* 2. Main Content */}
            <div className="relative z-10 text-center max-w-7xl w-full">

                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border mb-8 animate-in fade-in slide-in-from-top-4 duration-700 backdrop-blur-md"
                    style={{ borderColor: 'var(--color-border)', backgroundColor: 'var(--color-surface)' }}>
                    <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: 'var(--color-primary)' }}></span>
                    <span className="text-xs font-bold uppercase tracking-widest" style={{ color: 'var(--color-text)' }}>Live Registrations Open</span>
                </div>

                <h1 className="text-6xl md:text-[10rem] font-black tracking-tighter leading-[0.85] mb-8 relative mix-blend-screen">
                    <span className="block" style={{ color: 'var(--color-text)' }}>IGNITING</span>
                    <span className="block" style={{ color: 'var(--color-text-muted)' }}>
                        REVOLUTIONS.
                    </span>
                </h1>

                <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-12 font-light"
                    style={{ color: 'var(--color-text-secondary)' }}>
                    Central India's premier gathering of 5000+ disruptors, dreamers, and doers.
                </p>

                <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                    <button className="px-10 py-5 font-bold text-lg rounded-none uppercase tracking-widest skew-x-[-10deg] transition-all hover:skew-x-0 outline-none"
                        style={{ backgroundColor: 'var(--color-text)', color: 'var(--color-bg)' }}>
                        <span className="inline-block skew-x-[10deg] group-hover:skew-x-0 flex gap-2 items-center">
                            Get Pass <FiArrowRight />
                        </span>
                    </button>

                    <button className="flex items-center gap-4 px-10 py-5 border font-bold text-lg rounded-none uppercase tracking-widest group transition-all"
                        style={{ borderColor: 'var(--color-border)', color: 'var(--color-text)' }}>
                        <div className="w-10 h-10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform"
                            style={{ backgroundColor: 'var(--color-surface)' }}>
                            <FiPlay className="ml-1" />
                        </div>
                        Watch Trailer
                    </button>
                </div>
            </div>

            {/* 3. Bottom Bar */}
            <div className="absolute bottom-0 left-0 w-full border-t border-white/5 backdrop-blur-md py-6 px-4 md:px-12 hidden md:flex justify-between items-center font-mono text-sm uppercase tracking-widest"
                style={{ borderColor: 'var(--color-border)', backgroundColor: 'var(--color-surface)' }}>
                <div className="flex items-center gap-8" style={{ color: 'var(--color-text-secondary)' }}>
                    <span className="flex items-center gap-2" style={{ color: 'var(--color-text)' }}><FiCalendar /> Nov 19-20, 2026</span>
                    <span className="flex items-center gap-2" style={{ color: 'var(--color-text)' }}><FiMapPin /> Brilliant Convention Center</span>
                </div>
                <div className="flex gap-12" style={{ color: 'var(--color-text-muted)' }}>
                    <div><span className="font-bold block" style={{ color: 'var(--color-text)' }}>50+</span> Speakers</div>
                    <div><span className="font-bold block" style={{ color: 'var(--color-text)' }}>200+</span> Startups</div>
                    <div><span className="font-bold block" style={{ color: 'var(--color-text)' }}>₹50Cr</span> Funding</div>
                </div>
            </div>

        </div>
    );
};

export default Hero4;
