// import React from 'react';

// const sponsors = [
//     { name: "Google", type: "Industry Association Partner", logo: "/sponsors/Bundelkhand_commerce_chamber.png" },
//     { name: "AWS", type: "Community Partner", logo: "/sponsors/Rotaract_Club_of_Manu_Jhansi.png" },
//     { name: "Sequoia", type: "Community Service Partner", logo: "/sponsors/Rotary_club.png" },
//     { name: "Paytm", type: "Media Partner", logo: "/sponsors/Danik_jagran.png" },
//     { name: "Zoho", type: "Social Impact Partner", logo: "/sponsors/Pragati_social.png" },
//     // { name: "Inc42", type: "Media", logo: "" },
//     // { name: "YourStory", type: "Media", logo: "" },
//     // { name: "Microsoft", type: "Innovation", logo: "" }
// ];

// const SponsorsGrid = () => {
//     return (
//         <section id='sponsor' className="py-24" style={{ backgroundColor: 'var(--color-bg)' }}>
//             <div className="max-w-7xl mx-auto px-6">

//                 <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
//                     <h2 className="text-4xl md:text-5xl font-black tracking-tighter" style={{ color: 'var(--color-text)' }}>
//                         OUR <span style={{ color: 'var(--color-text-muted)' }}>BACKERS.</span>
//                     </h2>
//                     <div className="h-px flex-1 mx-8 hidden md:block" style={{ backgroundColor: 'var(--color-border)' }}></div>
//                     <p className="font-bold uppercase tracking-widest text-sm" style={{ color: 'var(--color-text-muted)' }}>
//                         Powering the Ecosystem
//                     </p>
//                 </div>

//                 <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-[var(--color-border)] border border-[var(--color-border)]">
//                     {sponsors.map((s, idx) => (
//                         <div key={idx}
//                             className="aspect-[3/2] bg-[var(--color-bg)] flex flex-col items-center justify-center p-8 hover:bg-[var(--color-surface)] transition-colors group cursor-pointer relative overflow-hidden">

//                             {/* Logo Image Replacement */}
//                             <div className="w-full h-full flex items-center justify-center">
//                                 <img 
//                                     src={s.logo} 
//                                     alt={`${s.name} logo`}
//                                     className="max-h-30 w-auto object-contain opacity-40 group-hover:opacity-100 transition-opacity  group-hover:grayscale-0" 
//                                 />
//                             </div>

//                             <div className="absolute bottom-4 text-[10px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0"
//                                 style={{ color: 'var(--color-text-muted)' }}>
//                                 {s.type}
//                             </div>

//                             {/* Corner Accent */}
//                             <div className="absolute top-0 right-0 w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity">
//                                 <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-[var(--color-text)]">
//                                     <path d="M0 0 H24 V24" stroke="currentColor" strokeWidth="1" />
//                                 </svg>
//                             </div>
//                         </div>
//                     ))}
//                 </div>

//                 <div className="mt-12 text-center">
//                     <a href="/#sponsor" className="inline-block text-sm font-bold uppercase tracking-widest border-b pb-1 hover:opacity-70 transition-opacity"
//                         style={{ color: 'var(--color-text)', borderColor: 'var(--color-text)' }}>
//                         View Sponsorship Deck
//                     </a>
//                 </div>

//             </div>
//         </section>
//     );
// };

// export default SponsorsGrid;


import React from 'react';

const sponsors = [
    { name: "Google", type: "Industry Association Partner", logo: "/sponsors/Bundelkhand_commerce_chamber.png" },
    { name: "AWS", type: "Community Partner", logo: "/sponsors/Rotaract_Club_of_Manu_Jhansi.png" },
    { name: "Sequoia", type: "Community Service Partner", logo: "/sponsors/Rotary_club.png" },
    { name: "Paytm", type: "Media Partner", logo: "/sponsors/Danik_jagran.png" },
    { name: "Zoho", type: "Social Impact Partner", logo: "/sponsors/Pragati_social.png" },
];

const SponsorsGrid = () => {
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
                {/* Header (UNCHANGED) */}

                {/* 🎞️ Sliding Sponsors Row */}

            </div>
                <div className="relative border-y" style={{ borderColor: 'var(--color-border)' }}>
                    <div className="flex gap-px animate-marquee min-w-full">

                        {[...sponsors, ...sponsors, ...sponsors].map((s, idx) => (
                            <div
                                key={idx}
                                className="min-w-[280px] md:min-w-[320px] aspect-[3/2] bg-[var(--color-bg)] 
                                           flex flex-col items-center justify-center p-8 
                                           hover:bg-[var(--color-surface)] transition-colors 
                                           group cursor-pointer relative overflow-hidden border-r"
                                style={{ borderColor: 'var(--color-border)' }}
                            >
                                {/* Logo */}
                                <div className="w-full h-full flex items-center justify-center">
                                    <img
                                        src={s.logo}
                                        alt={`${s.name} logo`}
                                        className="max-h-28 w-auto object-contain opacity-40 
                                                   group-hover:opacity-100 transition-opacity"
                                    />
                                </div>

                                {/* Partner Type */}
                                <div
                                    className="absolute bottom-4 text-[10px] font-bold uppercase tracking-widest 
                                               opacity-0 group-hover:opacity-100 transition-all transform 
                                               translate-y-2 group-hover:translate-y-0"
                                    style={{ color: 'var(--color-text-muted)' }}
                                >
                                    {s.type}
                                </div>

                                {/* Corner Accent */}
                                <div className="absolute top-0 right-0 w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-[var(--color-text)]">
                                        <path d="M0 0 H24 V24" stroke="currentColor" strokeWidth="1" />
                                    </svg>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>

                {/* Footer Link (UNCHANGED) */}
                {/* <div className="mt-12 text-center">
                    <a
                        href="/#sponsor"
                        className="inline-block text-sm font-bold uppercase tracking-widest border-b pb-1 hover:opacity-70 transition-opacity"
                        style={{ color: 'var(--color-text)', borderColor: 'var(--color-text)' }}
                    >
                        View Sponsorship Deck
                    </a>
                </div> */}

            {/* Marquee Animation (Same Logic as Stats) */}
            <style>{`
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-33.33%); }
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
