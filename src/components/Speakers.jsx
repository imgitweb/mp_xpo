import React from 'react';

const speakers = [
    {
        name: "Dr. Ritesh Malik",
        role: "Founder, Innov8",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop",
        tag: "Angel Investor"
    },
    {
        name: "Vani Kola",
        role: "MD, Kalaari Capital",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
        tag: "VC Pioneer"
    },
    {
        name: "Kunal Shah",
        role: "Founder, CRED",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800&auto=format&fit=crop",
        tag: "Fintech Guru"
    },
    {
        name: "Falguni Nayar",
        role: "CEO, Nykaa",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop",
        tag: "E-commerce Queen"
    }
];

const Speakers = () => {
    return (
        <section id="speakers" className="py-32 relative overflow-hidden bg-black">
            {/* Subtle Background Texture */}
            <div
                className="absolute inset-0 opacity-20 pointer-events-none"
                style={{
                    backgroundImage: 'radial-gradient(circle at center, #222 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                }}
            ></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Minimal Header */}


                   <div className="mb-16 md:mb-24 flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
                    <div>
                        <h2 className="text-4xl sm:text-6xl font-black tracking-tighter mb-4" style={{ color: 'var(--color-text)' }}>
                            The <span style={{ color: 'var(--color-text-muted)' }}>Icons.</span>
                        </h2>
                        <p className="max-w-md text-lg" style={{ color: 'var(--color-text-secondary)' }}>
                            Industry titans and visionaries gathering to decrypt the future of technology and startups.
                        </p>
                    </div>
                    <button
                        className="px-6 py-3 rounded-full border transition-all hover:bg-white/5 active:scale-95 text-sm font-medium tracking-wide uppercase"
                        style={{ borderColor: 'var(--color-border)', color: 'var(--color-text)' }}
                    >
                        Speakers
                    </button>
                </div>
               

                {/* Cinematic Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {speakers.map((speaker, idx) => (
                        <div
                            key={idx}
                            className="group relative h-[500px] w-full cursor-pointer overflow-hidden rounded-none"
                        >
                            {/* 1. Base Image Layer */}
                            <div className="absolute inset-0 transition-all duration-700 ease-in-out group-hover:scale-105">
                                <img
                                    src={speaker.image}
                                    alt={speaker.name}
                                    className="w-full h-full object-cover filter grayscale contrast-125 transition-all duration-500 group-hover:grayscale-0"
                                />
                                {/* Dark overlay that lightens on hover */}
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500"></div>
                            </div>

                            {/* 2. Top Tag */}
                            <div className="absolute top-4 right-4 z-20 overflow-hidden">
                                <span className="inline-block px-3 py-1 bg-white text-black text-xs font-bold uppercase tracking-widest translate-y-[-150%] group-hover:translate-y-0 transition-transform duration-500 delay-100">
                                    {speaker.tag}
                                </span>
                            </div>

                            {/* 3. Bottom Info Panel (The Reveal) */}
                            <div className="absolute bottom-0 left-0 right-0 z-20 p-6 flex flex-col justify-end h-full bg-gradient-to-t from-black/90 via-black/20 to-transparent">
                                <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                                    <h3 className="text-3xl font-black text-white leading-tight mb-2 font-sans tracking-tight">
                                        {speaker.name.replace(' ', '\n')}
                                    </h3>
                                    <div className="flex items-center gap-3 overflow-hidden h-0 group-hover:h-auto opacity-0 group-hover:opacity-100 transition-all duration-500 delay-75">
                                        <div className="h-px w-8 bg-white/50"></div>
                                        <p className="text-sm font-medium text-gray-300 uppercase tracking-wider">
                                            {speaker.role}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* 4. Border Animation on Hover */}
                            <div className="absolute inset-0 border border-white/0 group-hover:border-white/20 transition-colors duration-300 pointer-events-none z-30 m-4"></div>
                        </div>
                    ))}
                </div>

                {/* Footer / Call to Action */}
                <div className="mt-20 flex justify-center">
                    <a href="#speakers-all" className="group relative inline-flex flex-col items-center gap-2 text-white/50 hover:text-white transition-colors duration-300">
                        <span className="uppercase text-xs tracking-[0.3em]">View Full Lineup</span>
                        <span className="w-px h-12 bg-white/20 group-hover:h-24 transition-all duration-300"></span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Speakers;
