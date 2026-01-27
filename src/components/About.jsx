import React from 'react';

const About = () => {
    return (
        <div className="min-h-screen pt-32 pb-20 relative overflow-hidden" style={{ backgroundColor: 'var(--color-bg)' }}>
            {/* Background Decor */}
            <div
                className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-[150px] pointer-events-none opacity-20"
                style={{ backgroundColor: 'var(--color-primary)' }}
            ></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">

                {/* 1. Hero Grid Layout */}
                <div className="grid lg:grid-cols-[1.5fr_1fr] gap-12 lg:gap-24 mb-32">
                    <div>
                        <div className="inline-block px-4 py-1.5 rounded-full border mb-8 animate-fade-in-up"
                            style={{ borderColor: 'var(--color-border)', backgroundColor: 'var(--color-surface)' }}>
                            <span className="text-xs font-bold uppercase tracking-widest" style={{ color: 'var(--color-text-muted)' }}>Est. 2023 • Bhopal</span>
                        </div>

                        <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] mb-8" style={{ color: 'var(--color-text)' }}>
                            WE BUILD <br />
                            <span style={{ color: 'var(--color-text-muted)' }}>GIANTS.</span>
                        </h1>

                        <p className="text-xl md:text-2xl leading-relaxed max-w-2xl font-light" style={{ color: 'var(--color-text-secondary)' }}>
                            MP Startup Expo is the bridge between audacity and opportunity. We don't just host events; we engineer ecosystems.
                        </p>
                    </div>

                    <div className="hidden lg:block relative">
                        <div className="absolute inset-0 border border-dashed rounded-3xl " style={{ borderColor: 'var(--color-border)' }}></div>
                        <div className="absolute inset-4 border rounded-3xl" style={{ borderColor: 'var(--color-border)' }}></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-center">
                                <div className="text-6xl font-black mb-2" style={{ color: 'var(--color-text)' }}>50K+</div>
                                <div className="text-sm uppercase tracking-widest" style={{ color: 'var(--color-text-muted)' }}>Community Strong</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 2. The Story (Editorial Layout) */}
                <section className="mb-32">
                    <h2 className="text-sm font-bold uppercase tracking-widest mb-12 py-4 border-t border-b"
                        style={{ borderColor: 'var(--color-border)', color: 'var(--color-text-muted)' }}>
                        Our Trajectory
                    </h2>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { year: '2023', title: 'The Spark', desc: 'Started with 50 founders in a coffee shop. No budget, just pure hustle.' },
                            { year: '2025', title: 'The Surge', desc: 'Partnered with Startup India. Crossed 5000+ attendees and ₹20Cr in funding deployed.' },
                            { year: '2026', title: 'The Global Stage', desc: 'Central India’s largest summit. 50+ VCs, AI focus, and international delegations.' }
                        ].map((item, idx) => (
                            <div key={idx} className="group p-8 border-l hover:border-l-4 transition-all duration-300"
                                style={{ borderColor: 'var(--color-border)', borderLeftColor: 'var(--color-text)' }}>
                                <span className="text-5xl font-black mb-4 block opacity-20 group-hover:opacity-100 transition-opacity"
                                    style={{ color: 'var(--color-text)' }}>{item.year}</span>
                                <h3 className="text-xl font-bold mb-4" style={{ color: 'var(--color-text)' }}>{item.title}</h3>
                                <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* 3. Team Grid (Bento Style) */}
                <section>
                    <div className="flex justify-between items-end mb-12">
                        <h2 className="text-4xl font-black tracking-tighter" style={{ color: 'var(--color-text)' }}>THE ARCHITECTS</h2>
                        <button className="hidden md:block px-6 py-3 rounded-full font-bold border hover:bg-white/5 transition-colors"
                            style={{ borderColor: 'var(--color-border)', color: 'var(--color-text)' }}>
                            Join the Team
                        </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 h-[600px] md:h-[400px]">
                        {/* Large Featured Card */}
                        <div className="md:col-span-2 md:row-span-2 rounded-3xl p-8 flex flex-col justify-end relative overflow-hidden group border"
                            style={{ borderColor: 'var(--color-border)', backgroundColor: 'var(--color-surface)' }}>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                            <div className="relative z-10">
                                <h3 className="text-2xl font-bold text-white">Ankit Jatav</h3>
                                <p className="text-gray-400 text-sm uppercase tracking-widest">Founder & CEO</p>
                            </div>
                        </div>

                        {/* Smaller Cards */}
                        {[1, 2].map((i) => (
                            <div key={i} className="rounded-3xl p-6 flex flex-col justify-end relative overflow-hidden group border"
                                style={{ borderColor: 'var(--color-border)', backgroundColor: 'var(--color-bg-secondary)' }}>
                                <h3 className="text-lg font-bold" style={{ color: 'var(--color-text)' }}>Team Member</h3>
                                <p className="text-xs uppercase tracking-widest" style={{ color: 'var(--color-text-muted)' }}>Core Team</p>
                            </div>
                        ))}

                        {/* Join Card */}
                        <div className="rounded-3xl p-6 flex items-center justify-center border border-dashed cursor-pointer hover:bg-white/5 transition-colors"
                            style={{ borderColor: 'var(--color-border)' }}>
                            <span className="font-bold" style={{ color: 'var(--color-text-muted)' }}>+ You?</span>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    );
};

export default About;
