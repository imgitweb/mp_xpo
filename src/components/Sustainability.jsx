import React from 'react';
import { FiArrowUpRight, FiCheck } from 'react-icons/fi';
import { RiLeafLine, RiDropLine, RiSunFill } from 'react-icons/ri';

const Sustainability = () => {
    return (
        <section className="min-h-screen pt-32 pb-24 relative overflow-hidden" style={{ backgroundColor: 'var(--color-bg)' }}>

            {/* Background Abstract: Glowing Orbs */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full blur-[120px] pointer-events-none opacity-20"
                style={{ backgroundColor: 'var(--color-primary)' }}></div>
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full blur-[120px] pointer-events-none opacity-20"
                style={{ backgroundColor: 'var(--color-accent)' }}></div>

            <div className="max-w-7xl mx-auto px-6">

                {/* 1. Header Section */}
                <div className="flex flex-col md:flex-row justify-between items-start mb-5">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border mb-6 md:mb-8"
                            style={{
                                borderColor: 'var(--color-border)',
                                backgroundColor: 'var(--color-surface)',
                                color: 'var(--color-primary)'
                            }}>
                            <RiLeafLine />
                            <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest">Sustainability First Mission</span>
                        </div>
                        <h1 className="text-5xl sm:text-7xl md:text-9xl font-black tracking-tighter leading-[0.9]" style={{ color: 'var(--color-text)' }}>
                            NET <span style={{ color: 'var(--color-primary)' }}>ZERO.</span><br />
                            <span style={{ color: 'var(--color-text-muted)' }}>SUMMIT.</span>
                        </h1>
                    </div>
                    <div className="hidden md:block">
                        <p className="text-right text-sm font-mono opacity-50 uppercase tracking-widest" style={{ color: 'var(--color-text)' }}>
                            Impact Report<br />Est. 2026
                        </p>
                    </div>
                </div>
                <div className="h-px w-full mb-10 md:mb-20" style={{ backgroundColor: 'var(--color-border)' }}></div>


                {/* 2. Main Visual Feature */}
                <div className="relative rounded-[2rem] md:rounded-[3rem] overflow-hidden min-h-[400px] md:min-h-[600px] border mb-16 md:mb-24 group"
                    style={{ borderColor: 'var(--color-border)' }}>

                    {/* Background Image */}
                    <img
                        src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2600&auto=format&fit=crop"
                        alt="Nature"
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>

                    {/* Floating Overlay Content */}
                    <div className="absolute inset-0 p-6 md:p-16 flex flex-col justify-between">
                        <div className="flex justify-between items-start">
                            <h2 className="text-2xl md:text-5xl font-bold text-white max-w-xl leading-tight text-shadow-sm">
                                "We treat the planet as our primary shareholder."
                            </h2>
                            <button className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 transition-transform">
                                <FiArrowUpRight className="text-xl md:text-2xl" />
                            </button>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
                            <div className="backdrop-blur-md bg-white/10 p-4 md:p-6 rounded-2xl border border-white/10">
                                <div className="text-2xl md:text-4xl font-black text-white mb-1 md:mb-2">12k+</div>
                                <div className="text-[10px] md:text-sm font-bold uppercase tracking-widest" style={{ color: 'var(--color-primary)' }}>Trees Planted</div>
                            </div>
                            <div className="backdrop-blur-md bg-white/10 p-4 md:p-6 rounded-2xl border border-white/10">
                                <div className="text-2xl md:text-4xl font-black text-white mb-1 md:mb-2">100%</div>
                                <div className="text-[10px] md:text-sm font-bold uppercase tracking-widest" style={{ color: 'var(--color-primary)' }}>Renewable Energy</div>
                            </div>
                            <div className="backdrop-blur-md bg-white/10 p-4 md:p-6 rounded-2xl border border-white/10">
                                <div className="text-2xl md:text-4xl font-black text-white mb-1 md:mb-2">0%</div>
                                <div className="text-[10px] md:text-sm font-bold uppercase tracking-widest" style={{ color: 'var(--color-primary)' }}>Single-use Plastic</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 3. Detailed Initiatives List */}
                <div className="grid md:grid-cols-2 gap-10 md:gap-24">
                    <div>
                        <h3 className="text-3xl md:text-5xl font-bold mb-6 md:mb-8" style={{ color: 'var(--color-text)' }}>
                            The Green Blueprint.
                        </h3>
                        <p className="text-base md:text-lg leading-relaxed mb-6 md:mb-8" style={{ color: 'var(--color-text-secondary)' }}>
                            We've re-engineered every aspect of the conference experience to minimize carbon footprint. From digital-only brochures to locally sourced vegan customized menus, every detail counts.
                        </p>
                        <button className="px-6 py-3 md:px-8 md:py-4 rounded-full border font-bold transition-colors hover:bg-white/5 text-sm md:text-base"
                            style={{ borderColor: 'var(--color-border)', color: 'var(--color-text)' }}>
                            Download Sustainability Report
                        </button>
                    </div>

                    <div className="space-y-6 md:space-y-8">
                        {[
                            { icon: <RiSunFill />, title: "Solar Powered Venue", desc: "Our venue partnership ensures 100% grid offset via on-site solar arrays during the event days." },
                            { icon: <RiDropLine />, title: "Water Conservation", desc: "Smart dispensing systems save 5,000+ liters. No plastic bottles, only reusable stunning steel flasks provided." },
                            { icon: <RiLeafLine />, title: "Carbon Offsetting", desc: "A portion of every ticket goes directly to reforesting the Satpura ranges in Madhya Pradesh." }
                        ].map((item, i) => (
                            <div key={i} className="flex gap-4 md:gap-6 group">
                                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border flex items-center justify-center text-lg md:text-xl shrink-0 transition-all group-hover:bg-white/5"
                                    style={{ borderColor: 'var(--color-border)', color: 'var(--color-primary)' }}>
                                    {item.icon}
                                </div>
                                <div>
                                    <h4 className="text-lg md:text-xl font-bold mb-1 md:mb-2 transition-colors group-hover:text-[var(--color-primary)]" style={{ color: 'var(--color-text)' }}>
                                        {item.title}
                                    </h4>
                                    <p className="text-sm md:text-base opacity-70 leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Sustainability;
