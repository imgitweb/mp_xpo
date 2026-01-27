import React, { useState } from 'react';
import { FiArrowRight, FiArrowDownRight } from 'react-icons/fi';

const themes = [
    {
        id: 'innovate',
        text: "INNOVATE",
        sub: "The new era of startups",
        bg: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2672&auto=format&fit=crop",
        color: "#3b82f6" // Blue
    },
    {
        id: 'scale',
        text: "SCALE_UP",
        sub: "Growth strategies that work",
        bg: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2670&auto=format&fit=crop",
        color: "#10b981" // Emerald
    },
    {
        id: 'disrupt',
        text: "DISRUPT",
        sub: "Break the conventional",
        bg: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2670&auto=format&fit=crop",
        color: "#f43f5e" // Rose
    }
];

const Hero3 = () => {
    const [activeTheme, setActiveTheme] = useState(themes[0]);

    return (
        <div className="relative h-screen w-full bg-black overflow-hidden flex flex-col justify-center">

            {/* Background Layer */}
            {themes.map((theme) => (
                <div
                    key={theme.id}
                    className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${activeTheme.id === theme.id ? 'opacity-60' : 'opacity-0'}`}
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent z-10"></div>
                    <img
                        src={theme.bg}
                        alt={theme.text}
                        className="w-full h-full object-cover scale-105"
                    />
                </div>
            ))}

            <div className="absolute inset-0 bg-black/20 z-0"></div>

            {/* Content Layer */}
            <div className="relative z-20 container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between">

                {/* Left: Huge Navigation */}
                <div className="flex flex-col gap-2 md:gap-6 w-full md:w-2/3">
                    {themes.map((theme) => (
                        <div
                            key={theme.id}
                            onMouseEnter={() => setActiveTheme(theme)}
                            className="group cursor-pointer flex items-center gap-4 md:gap-8"
                        >
                            <span className={`text-sm font-mono transition-colors duration-300 ${activeTheme.id === theme.id ? 'text-white opacity-100' : 'text-gray-600 opacity-50'}`}>
                                0{themes.indexOf(theme) + 1}
                            </span>
                            <h1 className={`text-6xl md:text-9xl font-black tracking-tighter transition-all duration-300 transform origin-left ${activeTheme.id === theme.id ? 'text-white scale-105 translate-x-4' : 'text-transparent text-stroke-2 opacity-30 hover:opacity-60 hover:text-white/10'}`}
                                style={{ WebkitTextStroke: activeTheme.id === theme.id ? '0px' : '1px rgba(255,255,255,0.5)' }}>
                                {theme.text}
                            </h1>
                        </div>
                    ))}
                </div>

                {/* Right: Detail Card */}
                <div className="w-full md:w-1/3 mt-12 md:mt-0">
                    <div className="bg-white/10 backdrop-blur-3xl border border-white/10 p-8 md:p-12 rounded-[2rem] transform transition-all duration-500 hover:bg-white/20">
                        <div className="flex justify-between items-start mb-12">
                            <div className="w-12 h-12 rounded-full flex items-center justify-center bg-white text-black text-xl">
                                <FiArrowDownRight />
                            </div>
                            <span className="text-xs font-bold uppercase tracking-widest text-white/60 border border-white/20 px-3 py-1 rounded-full">
                                Nov 19-20
                            </span>
                        </div>

                        <div className="overflow-hidden h-24 mb-6">
                            {themes.map((theme) => (
                                activeTheme.id === theme.id && (
                                    <div key={theme.id} className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                                        <h3 className="text-3xl font-bold text-white mb-2 leading-tight">
                                            {theme.sub}
                                        </h3>
                                        <div className="h-1 w-20 rounded-full" style={{ backgroundColor: theme.color }}></div>
                                    </div>
                                )
                            ))}
                        </div>

                        <p className="text-gray-300 mb-8 max-w-sm leading-relaxed">
                            Join Central India's biggest startup confluence. Pitch to 50+ VCs and win grants up to ₹50L.
                        </p>

                        <button className="w-full py-4 rounded-xl font-bold text-lg bg-white text-black flex items-center justify-center gap-2 group hover:bg-[var(--color-primary)] hover:text-white transition-colors">
                            Grab Tickets <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </div>

            </div>

            {/* Bottom Info */}
            <div className="absolute bottom-8 left-0 w-full px-12 flex justify-between items-end text-white/40 text-xs font-mono uppercase tracking-widest hidden md:flex">
                <div>Scroll to Explore</div>
                <div>Bhopal • MP • India</div>
            </div>

        </div>
    );
};

export default Hero3;
