import React from 'react';

const sponsors = [
    { name: 'Google for Startups', tier: 'Title Sponsor' },
    { name: 'AWS', tier: 'Cloud Partner' },
    { name: 'Sequoia', tier: 'Investment Partner' },
    { name: 'Paytm', tier: 'Fintech Partner' },
    { name: 'Zoho', tier: 'Tech Partner' },
    { name: 'YourStory', tier: 'Media Partner' },
    { name: 'Inc42', tier: 'Media Partner' },
    { name: 'Microsoft', tier: 'Innovation Partner' }
];

const Sponsors = () => {
    return (
        <section id="sponsors" className="py-24 relative overflow-hidden" style={{ backgroundColor: 'var(--color-bg)' }}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
                <h2 className="text-2xl font-bold tracking-widest uppercase mb-4" style={{ color: 'var(--color-text-muted)' }}>
                    Trusted By Industry Leaders
                </h2>
                <div className="h-0.5 w-20 mx-auto bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
            </div>

            {/* Infinite Marquee Container */}
            <div className="relative flex overflow-x-hidden group">
                {/* Gradient Masks for smooth fade */}
                <div className="absolute left-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-r from-black to-transparent" style={{ '--tw-gradient-from': 'var(--color-bg)' }}></div>
                <div className="absolute right-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-l from-black to-transparent" style={{ '--tw-gradient-from': 'var(--color-bg)' }}></div>

                <div className="animate-marquee flex gap-16 md:gap-32 items-center whitespace-nowrap py-4">
                    {/* Double loop for seamless infinite scroll */}
                    {[...sponsors, ...sponsors, ...sponsors].map((sponsor, idx) => (
                        <div
                            key={idx}
                            className="text-2xl md:text-4xl font-black uppercase tracking-tighter opacity-40 hover:opacity-100 transition-opacity duration-300 cursor-pointer select-none grayscale hover:grayscale-0"
                            style={{ color: 'var(--color-text)' }}
                        >
                            {sponsor.name}
                        </div>
                    ))}
                </div>
            </div>

            {/* Horizontal Separator */}
            <div className="max-w-7xl mx-auto px-4 mt-24">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {[
                        { label: 'Community Partners', count: '50+' },
                        { label: 'Media Highlights', count: '100+' },
                        { label: 'Outreach Reach', count: '5M+' },
                        { label: 'Incubators', count: '20+' }
                    ].map((stat, i) => (
                        <div key={i} className="p-4 border-l first:border-l-0 md:first:border-l" style={{ borderColor: 'var(--color-border)' }}>
                            <div className="text-3xl font-bold mb-1" style={{ color: 'var(--color-text)' }}>{stat.count}</div>
                            <div className="text-xs uppercase tracking-wider" style={{ color: 'var(--color-text-muted)' }}>{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        .group:hover .animate-marquee {
          animation-play-state: paused;
        }
      `}</style>
        </section>
    );
};

export default Sponsors;
