import React from 'react';
import { FiMic, FiUsers, FiBookOpen, FiArrowRight } from 'react-icons/fi';
import { RiStore3Line } from 'react-icons/ri';

const Features = () => {
    return (
        <section id="why-attend" className="py-24 sm:py-32 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <div className="mb-16 md:mb-24 flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
                    <div>
                        <h2 className="text-4xl sm:text-6xl font-black tracking-tighter mb-4" style={{ color: 'var(--color-text)' }}>
                            WHY <span style={{ color: 'var(--color-text-muted)' }}>JOIN US?</span>
                        </h2>
                        <p className="max-w-md text-lg" style={{ color: 'var(--color-text-secondary)' }}>
                            The ultimate launchpad for your startup journey. Experience 2 days of rapid growth.
                        </p>
                    </div>
                    <button
                        className="px-6 py-3 rounded-full border transition-all hover:bg-white/5 active:scale-95 text-sm font-medium tracking-wide uppercase"
                        style={{ borderColor: 'var(--color-border)', color: 'var(--color-text)' }}
                    >
                        View Full Agenda
                    </button>
                </div>

                {/* Bento Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 grid-rows-[auto] gap-4 sm:gap-6">

                    {/* Item 1: Large Box (Pitch) */}
                    <div
                        className="md:col-span-2 lg:col-span-2 row-span-2 p-8 sm:p-12 rounded-[2rem] border relative overflow-hidden group"
                        style={{
                            backgroundColor: 'var(--color-surface)',
                            borderColor: 'var(--color-border)'
                        }}
                    >
                        <div className="relative z-10 h-full flex flex-col justify-between">
                            <div className="space-y-4">
                                <div className="w-12 h-12 rounded-full flex items-center justify-center bg-white/10 text-2xl" style={{ color: 'var(--color-text)' }}>
                                    <FiMic />
                                </div>
                                <h3 className="text-3xl sm:text-4xl font-bold" style={{ color: 'var(--color-text)' }}>Startup Pitch Battle</h3>
                                <p className="max-w-sm" style={{ color: 'var(--color-text-muted)' }}>
                                    Showcase your MVP to 50+ VCs and angel investors. Win equity-free grants up to ₹50 Lakhs.
                                </p>
                            </div>
                            <div className="mt-8 flex items-center gap-2 text-sm font-medium underline underline-offset-4 cursor-pointer" style={{ color: 'var(--color-text)' }}>
                                Apply for Pitch
                                <FiArrowRight />
                            </div>
                        </div>
                        {/* Abstract Decor */}
                        <div className="absolute right-0 bottom-0 w-64 h-64 bg-gradient-to-tr from-blue-500/20 to-purple-500/0 rounded-tl-full opacity-50 group-hover:scale-110 transition-transform duration-500"></div>
                    </div>

                    {/* Item 2: Vertical Box (Network) */}
                    <div
                        className="md:col-span-1 lg:col-span-1 row-span-1 md:row-span-2 p-8 rounded-[2rem] border relative overflow-hidden group"
                        style={{ backgroundColor: 'var(--color-bg-secondary)', borderColor: 'var(--color-border)' }}
                    >
                        <div className="h-full flex flex-col justify-between">
                            <div>
                                <h3 className="text-2xl font-bold mb-2" style={{ color: 'var(--color-text)' }}>Speed Dating</h3>
                                <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                                    1-on-1 sessions with mentors and industry titans.
                                </p>
                            </div>
                            {/* Visual Representation of Network */}
                            <div className="mt-8 grid grid-cols-3 gap-2 opacity-50 text-2xl flex items-center justify-center h-full">
                                <div className="col-span-3 flex justify-center text-4xl opacity-80" style={{ color: 'var(--color-primary)' }}>
                                    <FiUsers />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Item 3: Standard Box (Workshops) */}
                    <div
                        className="md:col-span-1 p-8 rounded-[2rem] border group transition-colors hover:bg-white/5"
                        style={{ backgroundColor: 'transparent', borderColor: 'var(--color-border)' }}
                    >
                        <div className="w-10 h-10 rounded-full flex items-center justify-center bg-white/5 text-xl mb-4" style={{ color: 'var(--color-text)' }}>
                            <FiBookOpen />
                        </div>
                        <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--color-text)' }}>Masterclasses</h3>
                        <p className="text-sm" style={{ color: 'var(--color-text-muted)' }}>
                            Learn from founders of unicorns like PhysicsWallah & Boat.
                        </p>
                    </div>

                    {/* Item 4: Highlight Box (Expo) */}
                    <div
                        className="md:col-start-3 lg:col-start-4 md:row-start-2 p-8 rounded-[2rem] border relative overflow-hidden"
                        style={{ borderColor: 'var(--color-border)' }}
                    >
                        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>
                        <div className="relative z-10">
                            <div className="absolute top-4 right-4 text-2xl opacity-50" style={{ color: 'var(--color-text)' }}>
                                <RiStore3Line />
                            </div>
                            <h3 className="text-3xl font-bold mb-2" style={{ color: 'var(--color-text)' }}>200+</h3>
                            <p className="text-sm uppercase tracking-wide" style={{ color: 'var(--color-text-muted)' }}>Expo Stalls</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Features;
