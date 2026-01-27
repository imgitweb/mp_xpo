import React, { useState } from 'react';
import { FiArrowUpRight, FiArrowRight } from 'react-icons/fi';

const panels = [
    {
        id: 1,
        title: "INNOVATE",
        subtitle: "The Future is Built Here",
        desc: "Join 5000+ developers and founders building the next generation of tech.",
        image: "https://images.unsplash.com/photo-1768947563931-e53cabb7bd2c?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        stat: "200+ Startups",
        color: "var(--color-primary)"
    },
    {
        id: 2,
        title: "FUND",
        subtitle: "Capital Meets Courage",
        desc: "Pitch directly to top-tier VCs with a dedicated term-sheet track.",
        image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?q=80&w=1600&auto=format&fit=crop",
        stat: "₹50Cr Pool",
        color: "var(--color-accent)"
    },
    {
        id: 3,
        title: "NETWORK",
        subtitle: "Power of Community",
        desc: "Connect with industry titans, mentors, and potential co-founders.",
        image: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1600&auto=format&fit=crop",
        stat: "50+ Speakers",
        color: "var(--color-text)"
    }
];

const Hero6 = () => {
    const [activeId, setActiveId] = useState(2); // Start with middle active

    return (
        <div className="relative h-[80vh] w-full bg-[#050505] overflow-hidden flex flex-col md:flex-row">

            {panels.map((panel) => (
                <div
                    key={panel.id}
                    onMouseEnter={() => setActiveId(panel.id)}
                    className={`relative h-[33vh] md:h-full border-b md:border-b-0 md:border-r border-white/10 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] overflow-hidden cursor-crosshair group ${activeId === panel.id ? 'flex-[10]' : 'flex-[1]'}`}
                >
                    {/* Background Image */}
                    <div className="absolute inset-0">
                        <img
                            src={panel.image}
                            alt={panel.title}
                            className={`w-full h-full object-cover transition-all duration-1000 ${activeId === panel.id ? 'opacity-60 scale-100 grayscale-0' : 'opacity-30 scale-110 grayscale'}`}
                        />
                        <div className="absolute inset-0 bg-black/40"></div>
                        <div className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent transition-opacity duration-500 ${activeId === panel.id ? 'opacity-100' : 'opacity-50'}`}></div>
                    </div>

                    {/* Content Container */}
                    <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-between">

                        {/* Top: Stat & Number */}
                        <div className={`flex justify-between items-start transition-all duration-500 delay-100 ${activeId === panel.id ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
                            <span className="inline-block px-3 py-1 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-xs font-bold uppercase tracking-widest text-white">
                                0{panel.id}
                            </span>
                            <span className="text-4xl font-black text-transparent text-stroke-1 opacity-50">
                                {panel.stat}
                            </span>
                        </div>

                        {/* Middle: Vertical Title (Collapsed State) */}
                        <div className={`absolute inset-0 flex items-center justify-center pointer-events-none transition-opacity duration-300 ${activeId === panel.id ? 'opacity-0' : 'opacity-100'}`}>
                            <h2 className="text-4xl md:text-6xl font-black text-white md:-rotate-90 tracking-widest uppercase opacity-50 group-hover:text-[var(--color-primary)] transition-colors">
                                {panel.title}
                            </h2>
                        </div>

                        {/* Bottom: Expanded Content */}
                        <div className={`mt-auto transition-all duration-500 delay-200 ${activeId === panel.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                            <h2 className={`text-6xl md:text-9xl font-black tracking-tighter mb-4 leading-none text-white`}>
                                {panel.title}
                            </h2>
                            <div className="flex flex-col md:flex-row items-end justify-between gap-8">
                                <div className="max-w-xl">
                                    <h3 className="text-2xl font-bold text-[var(--color-primary)] mb-4" style={{ color: panel.color }}>
                                        {panel.subtitle}
                                    </h3>
                                    <p className="text-lg text-gray-300 leading-relaxed border-l-2 border-white/20 pl-6">
                                        {panel.desc}
                                    </p>
                                </div>
                                <button className="w-20 h-20 md:w-32 md:h-32 rounded-full bg-white text-black flex items-center justify-center hover:scale-105 transition-transform group/btn">
                                    <FiArrowUpRight className="text-4xl md:text-6xl group-hover/btn:rotate-45 transition-transform duration-500" />
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            ))}

            <style>{`
                .text-stroke-1 { -webkit-text-stroke: 1px white; }
            `}</style>
        </div>
    );
};

export default Hero6;
