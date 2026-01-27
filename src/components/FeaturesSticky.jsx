import React, { useRef, useState, useEffect } from 'react';
import { FiTarget, FiTrendingUp, FiCpu, FiGlobe, FiArrowRight } from 'react-icons/fi';

const features = [
    {
        id: 1,
        title: "Global Reach",
        tag: "Connect",
        desc: "Access a worldwide network of investors and founders. Break geographical barriers.",
        icon: <FiGlobe />,
        color: "#3b82f6", // Blue
        image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=1600&auto=format&fit=crop"
    },
    {
        id: 2,
        title: "Hyper Growth",
        tag: "Scale",
        desc: "Strategies from unicorn founders to take your startup from zero to one hundred.",
        icon: <FiTrendingUp />,
        color: "#10b981", // Emerald
        image: "https://images.unsplash.com/photo-1556761175-129418cb2d38?q=80&w=1600&auto=format&fit=crop"
    },
    {
        id: 3,
        title: "Future Tech",
        tag: "Innovate",
        desc: "Deep dive into AI, Blockchain, and Quantum Computing. The future is here.",
        icon: <FiCpu />,
        color: "#8b5cf6", // Violet
        image: "https://images.unsplash.com/photo-1485827404703-89f5513eaf27?q=80&w=1600&auto=format&fit=crop"
    },
    {
        id: 4,
        title: "Funding Access",
        tag: "Capital",
        desc: "Direct line to top-tier VCs looking for the next big thing. Don't miss out.",
        icon: <FiTarget />,
        color: "#f43f5e", // Rose
        image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?q=80&w=1600&auto=format&fit=crop"
    }
];

const FeaturesSticky = () => {
    return (
        <section className="py-24 relative" style={{ backgroundColor: 'var(--color-bg)' }}>
            <div className="max-w-7xl mx-auto px-6">

                <div className="text-center mb-20 animate-in fade-in slide-in-from-bottom-6 duration-700">
                    <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-4" style={{ color: 'var(--color-text)' }}>
                        WHY <span style={{ color: 'var(--color-text-muted)' }}>ATTEND?</span>
                    </h2>
                    <p className="max-w-2xl mx-auto text-lg" style={{ color: 'var(--color-text-secondary)' }}>
                        A curated experience designed for maximum impact.
                    </p>
                </div>

                <div className="space-y-8">
                    {features.map((feature, index) => (
                        <div
                            key={feature.id}
                            className="sticky top-24 min-h-[500px] rounded-[3rem] overflow-hidden border shadow-2xl transition-all duration-500 hover:-translate-y-2"
                            style={{
                                backgroundColor: 'var(--color-surface)',
                                borderColor: 'var(--color-border)',
                                top: `calc(100px + ${index * 40}px)`, // Stacking offset
                                zIndex: index
                            }}
                        >
                            <div className="grid lg:grid-cols-2 h-full">

                                {/* Content Side */}
                                <div className="p-12 md:p-20 flex flex-col justify-center">
                                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full w-fit mb-8"
                                        style={{ backgroundColor: `${feature.color}20`, color: feature.color }}>
                                        <span className="text-xl">{feature.icon}</span>
                                        <span className="text-xs font-bold uppercase tracking-widest">{feature.tag}</span>
                                    </div>

                                    <h3 className="text-4xl md:text-6xl font-black mb-6 leading-tight" style={{ color: 'var(--color-text)' }}>
                                        {feature.title}
                                    </h3>

                                    <p className="text-xl leading-relaxed mb-10 max-w-md" style={{ color: 'var(--color-text-secondary)' }}>
                                        {feature.desc}
                                    </p>

                                    <button className="flex items-center gap-3 text-sm font-bold uppercase tracking-widest hover:gap-4 transition-all"
                                        style={{ color: 'var(--color-text)' }}>
                                        Learn More <FiArrowRight />
                                    </button>
                                </div>

                                {/* Image Side */}
                                <div className="relative h-64 lg:h-full overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent z-10"></div>
                                    <img
                                        src={feature.image}
                                        alt={feature.title}
                                        className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-1000"
                                    />
                                    <div className="absolute top-8 right-8 z-20 font-black text-9xl opacity-10 text-white leading-none select-none">
                                        0{feature.id}
                                    </div>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default FeaturesSticky;
