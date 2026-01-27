import React, { useState } from 'react';
import { FiArrowUpRight, FiDownload, FiSearch, FiTag } from 'react-icons/fi';

const articles = [
    {
        id: 1,
        type: "Featured",
        date: "Oct 15, 2026",
        title: "Global VCs Commit Record ₹50Cr to Central India's Startup Ecosystem",
        image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1600&auto=format&fit=crop",
        tag: "Investment"
    },
    {
        id: 2,
        type: "Press Release",
        date: "Sep 28, 2026",
        title: "Sam Altman to Keynote MP Startup Expo: 'The Age of Agents'",
        tag: "Speakers"
    },
    {
        id: 3,
        type: "Community",
        date: "Aug 10, 2026",
        title: "5000+ Founders. 3 Days. One City. The Full Agenda Revealed.",
        tag: "Event"
    },
    {
        id: 4,
        type: "Report",
        date: "Jul 22, 2026",
        title: "State of Central India Tech Report 2026 Download Available",
        tag: "Research"
    }
];

const Newsroom = () => {
    return (
        <section className="min-h-screen pt-32 pb-24 relative" style={{ backgroundColor: 'var(--color-bg)' }}>
            <div className="max-w-7xl mx-auto px-6">

                {/* 1. Editor Header */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b pb-8" style={{ borderColor: 'var(--color-border)' }}>
                    <div>
                        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border mb-6 text-xs font-bold uppercase tracking-widest"
                            style={{ borderColor: 'var(--color-border)', color: 'var(--color-text-muted)' }}>
                            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                            Live Updates
                        </span>
                        <h1 className="text-5xl md:text-[7vw] font-black tracking-tighter leading-[0.85]" style={{ color: 'var(--color-text)' }}>
                            THE PRESS<br />
                            <span style={{ color: 'var(--color-text-muted)' }}>CHRONICLES.</span>
                        </h1>
                    </div>
                    <div className="w-full md:w-auto mt-8 md:mt-0 flex gap-4">
                        <div className="relative group">
                            <input
                                type="text"
                                placeholder="Search archives..."
                                className="w-full md:w-64 px-12 py-4 rounded-full border bg-transparent outline-none focus:border-white/50 transition-colors"
                                style={{ borderColor: 'var(--color-border)', color: 'var(--color-text)' }}
                            />
                            <FiSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-xl" style={{ color: 'var(--color-text-muted)' }} />
                        </div>
                    </div>
                </div>

                {/* 2. Bento Grid Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">

                    {/* Featured Article (Large) */}
                    <div className="lg:col-span-2 relative group rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden min-h-[400px] md:min-h-[600px] border"
                        style={{ borderColor: 'var(--color-border)' }}>
                        <img
                            src={articles[0].image}
                            alt="Featured"
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>

                        <div className="absolute top-6 left-6 md:top-8 md:left-8">
                            <span className="px-3 py-1.5 md:px-4 md:py-2 bg-white text-black text-[10px] md:text-xs font-bold uppercase tracking-widest rounded-lg">
                                {articles[0].type}
                            </span>
                        </div>

                        <div className="absolute bottom-0 left-0 p-6 md:p-12 w-full">
                            <div className="flex items-center gap-4 mb-3 md:mb-4 text-xs md:text-sm font-medium text-gray-400">
                                <span>{articles[0].date}</span>
                                <span className="w-1 h-1 bg-gray-500 rounded-full"></span>
                                <span className="text-white">{articles[0].tag}</span>
                            </div>
                            <h2 className="text-2xl md:text-5xl font-bold text-white mb-4 md:mb-6 leading-tight max-w-2xl group-hover:underline decoration-2 underline-offset-4">
                                {articles[0].title}
                            </h2>
                            <div className="flex items-center gap-2 text-white font-bold uppercase tracking-widest text-xs md:text-sm">
                                Read Article <FiArrowUpRight className="text-lg md:text-xl" />
                            </div>
                        </div>
                    </div>

                    {/* Side Column: Recent List & Assets */}
                    <div className="space-y-4 md:space-y-6">

                        {/* Download Press Kit Card */}
                        <div className="p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] border transition-colors hover:bg-[var(--color-surface)] relative group overflow-hidden"
                            style={{ borderColor: 'var(--color-border)', backgroundColor: 'var(--color-bg)' }}>
                            <div className="absolute top-0 right-0 p-6 md:p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                                <FiDownload className="text-6xl md:text-8xl" style={{ color: 'var(--color-text)' }} />
                            </div>
                            <h3 className="text-xl md:text-2xl font-bold mb-2" style={{ color: 'var(--color-text)' }}>Media Kit 2026</h3>
                            <p className="mb-6 md:mb-8 text-sm opacity-70" style={{ color: 'var(--color-text-secondary)' }}>
                                Official logos, executive bios, and high-res event photography.
                            </p>
                            <button className="w-full py-3 md:py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-transform hover:scale-[1.02] text-sm md:text-base"
                                style={{ backgroundColor: 'var(--color-text)', color: 'var(--color-bg)' }}>
                                <FiDownload /> Download .ZIP (128MB)
                            </button>
                        </div>

                        {/* Recent Updates List */}
                        <div className="p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] border flex flex-col"
                            style={{ borderColor: 'var(--color-border)', backgroundColor: 'var(--color-surface)' }}>
                            <h4 className="text-[10px] md:text-xs font-bold uppercase tracking-widest mb-6 md:mb-8 opacity-50" style={{ color: 'var(--color-text)' }}>
                                Latest Dispatches
                            </h4>
                            <div className="space-y-6 md:space-y-8">
                                {articles.slice(1).map((item) => (
                                    <div key={item.id} className="group cursor-pointer">
                                        <div className="flex items-center justify-between mb-1 md:mb-2">
                                            <span className="text-[10px] md:text-xs font-bold" style={{ color: 'var(--color-primary)' }}>{item.tag}</span>
                                            <span className="text-[10px] md:text-xs opacity-50" style={{ color: 'var(--color-text-secondary)' }}>{item.date}</span>
                                        </div>
                                        <h3 className="text-base md:text-lg font-bold leading-snug group-hover:text-[var(--color-primary)] transition-colors"
                                            style={{ color: 'var(--color-text)' }}>
                                            {item.title}
                                        </h3>
                                    </div>
                                ))}
                            </div>
                            <button className="mt-8 pt-4 md:pt-8 w-full text-center text-[10px] md:text-xs font-bold uppercase tracking-widest hover:underline border-t"
                                style={{ color: 'var(--color-text-muted)', borderColor: 'var(--color-border)' }}>
                                View All Archive
                            </button>
                        </div>

                    </div>
                </div>

                {/* 3. Newsletter / PR Contact Strip */}
                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-10 rounded-[2.5rem] border flex flex-col md:flex-row items-center justify-between gap-8"
                        style={{ backgroundColor: 'var(--color-primary)', borderColor: 'var(--color-primary)' }}>
                        <div className="text-white">
                            <h3 className="text-2xl font-black mb-2">Subscribe to Updates</h3>
                            <p className="opacity-80">Get breaking news directly to your inbox.</p>
                        </div>
                        <div className="flex w-full md:w-auto bg-black/20 p-2 rounded-full">
                            <input type="email" placeholder="email@company.com" className="bg-transparent px-4 py-2 outline-none text-white placeholder-white/50 w-full md:w-48" />
                            <button className="px-6 py-2 bg-white text-black rounded-full font-bold text-sm">Join</button>
                        </div>
                    </div>

                    <div className="p-10 rounded-[2.5rem] border flex items-center justify-between transition-colors hover:bg-[var(--color-surface)]"
                        style={{ borderColor: 'var(--color-border)' }}>
                        <div>
                            <h3 className="text-2xl font-bold mb-1" style={{ color: 'var(--color-text)' }}>Press Inquiries?</h3>
                            <div className="text-sm opacity-70" style={{ color: 'var(--color-text-secondary)' }}>Contact our communications team.</div>
                        </div>
                        <a href="mailto:press@mpstartupexpo.com" className="w-16 h-16 rounded-full border flex items-center justify-center text-2xl group transition-all hover:rotate-45"
                            style={{ borderColor: 'var(--color-text)', color: 'var(--color-text)' }}>
                            <FiArrowUpRight />
                        </a>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Newsroom;
