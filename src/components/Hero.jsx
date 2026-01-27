import React, { useEffect, useRef } from 'react';
import { FiArrowRight } from 'react-icons/fi';

const Hero = () => {
    const containerRef = useRef(null);

    // Mouse move effect for spotlight
    // useEffect(() => {
    //     const handleMouseMove = (e) => {
    //         if (!containerRef.current) return;
    //         const { left, top } = containerRef.current.getBoundingClientRect();
    //         const x = e.clientX - left;
    //         const y = e.clientY - top;
    //         containerRef.current.style.setProperty('--mouse-x', `${x}px`);
    //         containerRef.current.style.setProperty('--mouse-y', `${y}px`);
    //     };
    //     window.addEventListener('mousemove', handleMouseMove);
    //     return () => window.removeEventListener('mousemove', handleMouseMove);
    // }, []);

    return (
        <div
            ref={containerRef}
            className="relative min-h-[100vh] flex flex-col justify-center items-center overflow-hidden pt-20"
            style={{
                '--mouse-x': '50%',
                '--mouse-y': '50%',
                backgroundColor: 'var(--color-bg)'
            }}
        >
            {/* 1. Atmospheric Background */}
            <div className="absolute inset-0 z-0">
                {/* Spotlight Gradient following mouse */}
                <div
                    className="absolute inset-0 opacity-40 transition-opacity duration-300 pointer-events-none"
                    style={{
                        background: 'radial-gradient(1000px circle at var(--mouse-x) var(--mouse-y), var(--color-primary-light), transparent 40%)'
                    }}
                ></div>


                {/* Grid grid-cols-[repeat(auto-fill,minmax(50px,1fr))] opacity-[0.03] border-white/5 */}
                <div
                    className="absolute inset-0 opacity-10"
                    style={{
                        backgroundImage: `linear-gradient(var(--color-border) 1px, transparent 1px), 
                                linear-gradient(90deg, var(--color-border) 1px, transparent 1px)`,
                        backgroundSize: '50px 50px',
                        maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)'
                    }}
                ></div>

                {/* Glowing Orbs */}
                <div
                    className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-[120px] animate-pulse opacity-10"
                    style={{ backgroundColor: 'var(--color-surface)' }}
                ></div>
                <div
                    className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-[120px] animate-pulse opacity-10"
                    style={{ backgroundColor: 'var(--color-surface)', animationDelay: '1s' }}
                ></div>
            </div>

            <div className="relative z-10 max-w-8xl mx-auto px-4 text-center space-y-10">

                {/* Badge */}
                <div
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border backdrop-blur-sm animate-fade-in-up"
                    style={{
                        borderColor: 'var(--color-border)',
                        backgroundColor: 'rgba(255,255,255,0.03)',
                    }}
                >
                    <span className="flex h-2 w-2 relative">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ backgroundColor: 'var(--color-text-muted)' }}></span>
                        <span className="relative inline-flex rounded-full h-2 w-2" style={{ backgroundColor: 'var(--color-text)' }}></span>
                    </span>
                    <span
                        className="text-[8px] md:text-xs font-medium tracking-wide uppercase"
                        style={{ color: 'var(--color-text-secondary)' }}
                    >
                        Largest Startup Summit in Central India
                    </span>
                </div>

                {/* Hero Title */}
                <h1 className="text-5xl sm:text-7xl md:text-9xl font-black tracking-tighter leading-[0.9] mix-blend-screen" style={{ color: 'var(--color-text)' }}>
                    <span className="block hover:opacity-80 transition-opacity duration-300 cursor-default">
                        UNLEASH
                    </span>
                    <span
                        className="block text-transparent bg-clip-text"
                        style={{
                            backgroundImage: 'linear-gradient(to bottom, var(--color-text), var(--color-text-muted))'
                        }}
                    >
                        INNOVATION
                    </span>
                </h1>

                <p
                    className="max-w-2xl mx-auto text-lg sm:text-xl leading-relaxed font-light"
                    style={{ color: 'var(--color-text-muted)' }}
                >
                    Join 5000+ founders, investors, and visionaries shaping the future.
                    <br className="hidden sm:block" />
                    The stage is set for the next big breakthrough.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 pt-8 w-full px-4">
                    {/* Primary Button */}
                    <button
                        className="group relative w-full sm:w-auto px-8 py-4 font-bold text-lg rounded-full overflow-hidden transition-transform active:scale-95 shadow-lg"
                        style={{
                            backgroundColor: 'var(--color-text)',
                            color: 'var(--color-bg)'
                        }}
                    >
                        <div
                            className="absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300"
                            style={{ backgroundColor: 'var(--color-text-secondary)' }}
                        ></div>
                        <span className="relative z-10 flex items-center justify-center gap-2">
                            Get Your Pass
                            <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </span>
                    </button>

                    {/* Secondary Button */}
                    <button
                        className="w-full sm:w-auto px-8 py-4 font-medium text-lg rounded-full border transition-all hover:bg-white/5 active:scale-95"
                        style={{
                            borderColor: 'var(--color-border)',
                            color: 'var(--color-text)'
                        }}
                    >
                        Sponsorship Deck
                    </button>
                </div>
                {/* Floating Abstract Elements (Decor) */}
                <div
                    className="absolute -left-20 top-1/2 -translate-y-1/2 w-40 h-40 border rounded-full flex items-center justify-center animate-[spin_10s_linear_infinite] -z-10"
                    style={{ borderColor: 'var(--color-border)' }}
                >
                    <div
                        className="w-32 h-32 border border-dashed rounded-full"
                        style={{ borderColor: 'var(--color-border)' }}
                    ></div>
                    
                </div>
                <div
                    className="hidden md:block absolute -right-20 top-1/3 w-24 h-24 rounded-xl rotate-12 blur-md opacity-40 animate-bounce"
                    style={{
                        background: 'linear-gradient(to bottom right, var(--color-primary), var(--color-accent))',
                        animationDuration: '4s'
                    }}
                ></div>

            </div>


        </div>
    );
};

export default Hero;
