import React, { useState } from 'react';
import { FiArrowUpRight, FiLinkedin, FiTwitter } from 'react-icons/fi';

const speakers = [
    {
        id: 1,
        name: "Sam Altman",
        role: "CEO, OpenAI",
        topic: "AGI & The Future",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: 2,
        name: "Nithin Kamath",
        role: "Founder, Zerodha",
        topic: "Bootstrapping Billions",
        image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: 3,
        name: "Falguni Nayar",
        role: "CEO, Nykaa",
        topic: "Building Empires",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: 4,
        name: "Kunal Shah",
        role: "Founder, CRED",
        topic: "Delta 4 Theory",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: 5,
        name: "Deepinder Goyal",
        role: "CEO, Zomato",
        topic: "Culture & IPOs",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop"
    }
];

const SpeakersMarquee = () => {
    const [activeId, setActiveId] = useState(1);

    return (
        <section className="py-24 max-w-7xl mx-auto  relative overflow-hidden" style={{ backgroundColor: 'var(--color-bg)' }}>


              {/* Section Header */}
                <div className="mb-16 md:mb-24 flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
                    <div>
                        <h2 className="text-4xl sm:text-6xl font-black tracking-tighter mb-4" style={{ color: 'var(--color-text)' }}>
                            THE <span style={{ color: 'var(--color-text-muted)' }}>ORACLES.</span>
                        </h2>
                        <p className="max-w-md text-lg" style={{ color: 'var(--color-text-secondary)' }}>
                            Hover to explore the visionaries defining our tomorrow.
                        </p>
                    </div>
                    <button
                        className="px-6 py-3 rounded-full border transition-all hover:bg-white/5 active:scale-95 text-sm font-medium tracking-wide uppercase"
                        style={{ borderColor: 'var(--color-border)', color: 'var(--color-text)' }}
                    >
                       World Class Lineup
                    </button>
                </div>

            {/* Accordion Container */}
            <div className="max-w-[1400px] mx-auto h-auto md:h-[600px] flex flex-col md:flex-row gap-2 px-4 md:px-0">
                {speakers.map((speaker) => (
                    <div
                        key={speaker.id}
                        onMouseEnter={() => setActiveId(speaker.id)}
                        onClick={() => setActiveId(speaker.id)} // For mobile touch interaction
                        className={`relative rounded-[2rem] overflow-hidden transition-all duration-700 ease-in-out cursor-pointer group w-full md:w-auto
                            ${activeId === speaker.id ? 'h-[500px] md:h-auto md:flex-[4]' : 'h-[100px] md:h-auto md:flex-1'}`}
                        style={{
                            backgroundColor: 'var(--color-surface)',
                            borderColor: 'var(--color-border)'
                        }}
                    >
                        {/* Background Image */}
                        <div className="absolute inset-0">
                            <img
                                src={speaker.image}
                                alt={speaker.name}
                                className={`w-full h-full object-cover transition-all duration-1000 ${activeId === speaker.id ? 'scale-100 filter-none' : 'scale-110 grayscale opacity-50'}`}
                            />
                            <div className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent transition-opacity duration-500 ${activeId === speaker.id ? 'opacity-80' : 'opacity-60'}`}></div>
                        </div>

                        {/* Content - Collapsed State (Mobile: Horizontal Text, Desktop: Vertical Text) */}
                        <div className={`absolute inset-0 flex items-center justify-center pointer-events-none transition-opacity duration-300 ${activeId === speaker.id ? 'opacity-0' : 'opacity-100'}`}>
                            <h3 className="text-2xl font-black text-white/50 md:-rotate-90 whitespace-nowrap uppercase tracking-widest">
                                {speaker.name}
                            </h3>
                        </div>

                        {/* Content - Expanded State */}
                        <div className={`absolute inset-0 p-6 md:p-12 flex flex-col justify-end transition-all duration-500 ${activeId === speaker.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

                            <div className="flex flex-col md:flex-row justify-between items-start gap-4">
                                <div>
                                    <div className="inline-block px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-[10px] md:text-xs font-bold text-white mb-2 md:mb-4 border border-white/20">
                                        {speaker.topic}
                                    </div>
                                    <h3 className="text-3xl md:text-6xl font-black text-white leading-none mb-1 md:mb-2">
                                        {speaker.name}
                                    </h3>
                                    <p className="text-base md:text-xl text-gray-300 font-medium">
                                        {speaker.role}
                                    </p>
                                </div>

                                <div className="flex flex-row md:flex-col gap-4 w-full md:w-auto justify-between md:justify-start items-end">
                                    <button className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 transition-transform">
                                        <FiArrowUpRight className="text-xl md:text-2xl" />
                                    </button>
                                    <div className="flex gap-2">
                                        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white backdrop-blur-sm hover:bg-white hover:text-black transition-colors">
                                            <FiTwitter />
                                        </div>
                                        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white backdrop-blur-sm hover:bg-white hover:text-black transition-colors">
                                            <FiLinkedin />
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                ))}
            </div>

        </section>
    );
};

export default SpeakersMarquee;
