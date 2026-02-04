import React from 'react';

// 1. Standard approach: Import images to ensure build-time validation
// Replace these paths with the actual relative paths to your assets
import logo1 from '/sponsors/Bundelkhand_commerce_chamber.png';
import logo2 from '/sponsors/Rotaract_Club_of_Manu_Jhansi.png';
import logo3 from '/sponsors/jhansi-smart-city.png';
import logo4 from '/sponsors/im-global2.png';
import logo5 from '/sponsors/rise-jhansi.png';
import logo6 from '/sponsors/Rotary_club.png';
import logo7 from '/sponsors/Danik_jagran.png';
import logo8 from '/sponsors/Pragati.png';

const sponsors = [
    { name: "Bundelkhand commerce chamber", type: "Industry Association Partner", logo: logo1 },
    { name: "Rotaract Club", type: "Community Partner", logo: logo2 },
    { name: "jhansi Smart City", type: "Community Partner", logo: logo3 },
    // { name: "im-global", type: "Community Partner", logo: logo4 },
    { name: "rise jhansi", type: "Community Partner", logo: logo5 },
    { name: "Rotary Club", type: "Community Service Partner", logo: logo6 },
    { name: "Danik-Jagran", type: "Media Partner", logo: logo7 },
    { name: "Pragati", type: "Social Impact Partner", logo: logo8 },
];

const SponsorsGrid = () => {
    // Triple the array for a seamless loop
    const loopedSponsors = [...sponsors, ...sponsors, ...sponsors];

    return (
        <section id='sponsor' className="py-24 overflow-hidden" style={{ backgroundColor: 'var(--color-bg)' }}>
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
                    <h2 className="text-4xl md:text-5xl font-black tracking-tighter" style={{ color: 'var(--color-text)' }}>
                        OUR <span style={{ color: 'var(--color-text-muted)' }}>BACKERS.</span>
                    </h2>
                    <div className="h-px flex-1 mx-8 hidden md:block" style={{ backgroundColor: 'var(--color-border)' }}></div>
                    <p className="font-bold uppercase tracking-widest text-sm" style={{ color: 'var(--color-text-muted)' }}>
                        Powering the Ecosystem
                    </p>
                </div>
            </div>

            <div className="relative border-y" style={{ borderColor: 'var(--color-border)' }}>
                <div className="flex gap-px animate-marquee min-w-max">
                    {loopedSponsors.map((s, idx) => (
                        <div
                            key={idx}
                            className="min-w-[160px] md:min-w-[310px] aspect-[5/2] flex flex-col items-center justify-center p-8 bg-white hover:bg-[#b9b9b9] transition-colors group cursor-pointer relative overflow-hidden border-r"
                            style={{ borderColor: 'var(--color-border)' }}
                        >
                            <div className="w-full h-full flex items-center justify-center">
                                <img
                                    src={s.logo}
                                    alt={`${s.name} logo`}
                                    className="max-h-28 md:max-h-[160px] w-auto object-contain transition-opacity"
                                    loading="lazy"
                                />
                            </div>

                            <div className="absolute bottom-4 text-[10px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0 text-black">
                                {s.type}
                            </div>

                            <div className="absolute top-0 right-0 w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity">
                                <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-black">
                                    <path d="M0 0 H24 V24" stroke="currentColor" strokeWidth="1" />
                                </svg>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-33.333%); }
                }
                .animate-marquee {
                    animation: marquee 30s linear infinite;
                }
                .animate-marquee:hover {
                    animation-play-state: paused;
                }
            `}</style>
        </section>
    );
};

export default SponsorsGrid;