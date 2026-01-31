import React from 'react';
import { FiArrowRight, FiCheckCircle } from 'react-icons/fi';

const CTAMinimal = () => {
    return (
        <section className="py-24 relative overflow-hidden" style={{ backgroundColor: 'var(--color-bg)' }}>
            <div className="max-w-7xl mx-auto px-6">

                <div className="relative rounded-[3rem] overflow-hidden border p-8 md:p-20"
                    style={{ borderColor: 'var(--color-border)', backgroundColor: 'var(--color-surface)' }}>

                    
                    <div className="absolute inset-0 opacity-10"
                        style={{ backgroundImage: 'radial-gradient(var(--color-text) 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
                    </div>

                    <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">

                      
                        <div>
                            <span className="inline-block px-4 py-1.5 rounded-full bg-white text-black text-xs font-bold uppercase tracking-widest mb-6 animate-pulse">
                                Last 50 Early Bird Tickets
                            </span>

                            <h2 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 leading-[0.9]" style={{ color: 'var(--color-text)' }}>
                                DON'T MISS <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
                                    THE SHIP.
                                </span>
                            </h2>

                            <p className="text-xl leading-relaxed mb-10 max-w-md" style={{ color: 'var(--color-text-secondary)' }}>
                                The future doesn't wait. Secure your access to the most influential startup gathering in Central India.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <button className="px-5 py-3 rounded-xl bg-[var(--color-text)] text-[var(--color-bg)] font-bold text-sm flex items-center justify-center gap-3 hover:scale-105 transition-transform shadow-xl">
                                    Get Tickets Now <FiArrowRight />
                                </button>
                                <div className="flex items-center gap-2 px-6 py-4">
                                    <div className="flex -space-x-3">
                                        {[1, 2, 3].map(i => (
                                            <div key={i} className="w-10 h-10 rounded-full border-2 border-[var(--color-surface)] bg-gray-300">
                                                <img src={`https://i.pravatar.cc/100?img=${i + 10}`} className="w-full h-full rounded-full" alt="User" />
                                            </div>
                                        ))}
                                    </div>
                                    <span className="text-sm font-bold" style={{ color: 'var(--color-text-muted)' }}>+2k registered today</span>
                                </div>
                            </div>
                        </div>

                        {/* Right: The Ticket Visual */}
                        <div className="relative group perspective-1000">
                            {/* The Ticket */}
                            <div className="relative w-full max-w-md mx-auto aspect-[3/5] md:aspect-square bg-white text-black rounded-3xl p-8 flex flex-col justify-between transform transition-transform duration-700 rotate-y-12 rotate-x-6 hover:rotate-0 shadow-2xl skew-y-3 group-hover:skew-y-0">

                                <div className="flex justify-between items-start">
                                    <div className="text-2xl font-black tracking-tighter">MP<br />STARTUP<br />EXPO</div>
                                    <div className="text-right">
                                        <div className="text-xs font-bold uppercase tracking-widest text-gray-500">Admit One</div>
                                        <div className="text-4xl font-black">PRO</div>
                                    </div>
                                </div>

                                <div className="space-y-4 my-8">
                                    <div className="h-px w-full bg-gray-200 border-b border-dashed border-gray-400"></div>
                                    <div className="flex justify-between text-sm font-mono font-bold">
                                        <span className="text-gray-500">DATE</span>
                                        <span>NOV 19-20, 2026</span>
                                    </div>
                                    <div className="flex justify-between text-sm font-mono font-bold">
                                        <span className="text-gray-500">VENUE</span>
                                        <span>BRILLIANT.CONV</span>
                                    </div>
                                    <div className="flex justify-between text-sm font-mono font-bold">
                                        <span className="text-gray-500">SEAT</span>
                                        <span>GENERAL ACCESS</span>
                                    </div>
                                    <div className="h-px w-full bg-gray-200 border-b border-dashed border-gray-400"></div>
                                </div>

                                <div>
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/d/d0/QR_code_for_mobile_English_Wikipedia.svg" alt="QR" className="w-24 h-24 mix-blend-multiply opacity-80" />
                                </div>

                                {/* Holographic finish overlay */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none rounded-3xl"></div>
                            </div>

                            {/* Background decoration circles */}
                            <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-500/30 rounded-full blur-3xl animate-pulse"></div>
                            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-500/30 rounded-full blur-3xl animate-pulse delay-700"></div>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
};

export default CTAMinimal;
