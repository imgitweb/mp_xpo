import React from 'react';
import { FiArrowUpRight, FiMapPin, FiCalendar, FiUsers } from 'react-icons/fi';

const Hero2 = () => {
    return (
        <section className="min-h-screen bg-black p-4 md:p-6 flex flex-col justify-center">

            <div className="max-w-[1600px] mx-auto w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-3 gap-4 h-auto lg:h-[85vh]">

                {/* 1. Main Headline Card (Large) */}
                <div className="col-span-1 md:col-span-2 lg:col-span-3 lg:row-span-2 relative rounded-[2rem] overflow-hidden group min-h-[500px] lg:min-h-0">
                    <img
                        src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2600&auto=format&fit=crop"
                        alt="Audience"
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors"></div>
                    <div className="absolute inset-0 p-6 md:p-8 lg:p-12 flex flex-col justify-between">
                        <div className="flex justify-between items-start">
                            <span className="inline-block px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] md:text-xs font-bold uppercase tracking-widest">
                                #MPStartupExpo2026
                            </span>
                            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white text-black flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                                <FiArrowUpRight className="text-xl md:text-2xl" />
                            </div>
                        </div>
                        <div>
                            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black text-white tracking-tighter leading-[0.9] mb-4">
                                CENTRAL INDIA'S <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
                                    LARGEST SUMMIT
                                </span>
                            </h1>
                            <p className="text-white/80 text-base md:text-lg lg:text-xl max-w-xl">
                                Join 5,000+ founders, investors, and visionaries for 2 days of radical innovation and networking.
                            </p>
                        </div>
                    </div>
                </div>

                {/* 2. Date & Venue Card (Top Right) */}
                <div className="col-span-1 md:col-span-1 lg:col-span-1 lg:row-span-1 bg-[#1a1a1a] rounded-[2rem] p-6 md:p-8 flex flex-col justify-between border border-white/10 group hover:border-white/30 transition-colors min-h-[200px] lg:min-h-0">
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white">
                        <FiCalendar />
                    </div>
                    <div>
                        <div className="text-2xl md:text-3xl font-black text-white mb-1">NOV 19-20</div>
                        <div className="text-gray-400 text-sm font-medium flex items-center gap-2">
                            <FiMapPin /> Bhopal, MP
                        </div>
                    </div>
                </div>

                {/* 3. CTA Card (Middle Right) */}
                <div className="col-span-1 md:col-span-1 lg:col-span-1 lg:row-span-1 bg-white rounded-[2rem] p-6 md:p-8 flex flex-col justify-between group cursor-pointer hover:bg-gray-200 transition-colors relative overflow-hidden min-h-[200px] lg:min-h-0">
                    <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-150 transition-transform duration-500">
                        <FiArrowUpRight className="text-9xl" />
                    </div>
                    <div className="relative z-10">
                        <div className="text-xs font-bold uppercase tracking-widest text-black mb-2">Early Bird Closing</div>
                        <div className="text-3xl md:text-4xl font-black text-black leading-none">
                            GRAB <br /> TICKETS
                        </div>
                    </div>
                    <div className="relative z-10 w-full flex justify-between items-center border-t border-black/10 pt-4">
                        <span className="font-bold text-sm md:text-base">₹999 Onwards</span>
                        <span className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center">
                            →
                        </span>
                    </div>
                </div>

                {/* 4. Stats Marquee (Bottom Row) */}
                <div className="col-span-1 md:col-span-2 lg:col-span-2 lg:row-span-1 bg-[#111] rounded-[2rem] border border-white/10 flex items-center overflow-hidden relative group min-h-[120px] lg:min-h-0">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="flex gap-12 animate-marquee whitespace-nowrap px-8">
                        {[1, 2, 3, 4].map(i => (
                            <React.Fragment key={i}>
                                <div className="flex items-center gap-3 md:gap-4">
                                    <span className="text-3xl md:text-4xl lg:text-5xl font-black text-white">₹50Cr+</span>
                                    <span className="text-[10px] md:text-xs font-bold uppercase text-gray-500 tracking-widest leading-tight">Funding<br />Pool</span>
                                </div>
                                <div className="w-px h-8 md:h-12 bg-white/10"></div>
                                <div className="flex items-center gap-3 md:gap-4">
                                    <span className="text-3xl md:text-4xl lg:text-5xl font-black text-white">50+</span>
                                    <span className="text-[10px] md:text-xs font-bold uppercase text-gray-500 tracking-widest leading-tight">Top<br />VCs</span>
                                </div>
                                <div className="w-px h-8 md:h-12 bg-white/10"></div>
                                <div className="flex items-center gap-3 md:gap-4">
                                    <span className="text-3xl md:text-4xl lg:text-5xl font-black text-white">200+</span>
                                    <span className="text-[10px] md:text-xs font-bold uppercase text-gray-500 tracking-widest leading-tight">Expo<br />Stalls</span>
                                </div>
                                <div className="w-px h-8 md:h-12 bg-white/10"></div>
                            </React.Fragment>
                        ))}
                    </div>
                </div>

                {/* 5. Speakers Tease (Bottom Right) */}
                <div className="col-span-1 md:col-span-2 lg:col-span-2 lg:row-span-1 bg-[#0a0a0a] rounded-[2rem] border border-white/10 p-6 md:p-8 flex items-center justify-between group hover:border-white/30 transition-colors min-h-[120px] lg:min-h-0">
                    <div>
                        <div className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-4">Featuring Titans From</div>
                        <div className="flex -space-x-3 md:-space-x-4">
                            {['OpenAI', 'Zerodha', 'Nykaa', 'CRED'].map((brand, i) => (
                                <div key={i} className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-[#222] border-2 border-black flex items-center justify-center text-[8px] md:text-[10px] font-bold text-white uppercase shadow-lg">
                                    {brand}
                                </div>
                            ))}
                            <div className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-white text-black border-2 border-black flex items-center justify-center text-xs md:text-sm font-bold shadow-lg">
                                +20
                            </div>
                        </div>
                    </div>
                    <div className="h-full w-px bg-white/10 mx-4 hidden sm:block"></div>
                    <div className="hidden sm:block text-right">
                        <div className="text-lg md:text-2xl font-black text-white">VOICES OF<br />CHANGE.</div>
                        <div className="text-xs md:text-sm text-gray-500 mt-1 md:mt-2 hover:text-white cursor-pointer transition-colors">View All Speakers →</div>
                    </div>
                </div>

            </div>

            <style>{`
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-marquee {
                    animation: marquee 20s linear infinite;
                }
            `}</style>
        </section>
    );
};

export default Hero2;
