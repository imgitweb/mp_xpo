import React from 'react';

const sponsors = [
    { name: "Google", type: "Title Sponsor" },
    { name: "AWS", type: "Cloud Partner" },
    { name: "Sequoia", type: "Investment" },
    { name: "Paytm", type: "Fintech" },
    { name: "Zoho", type: "Tech" },
    { name: "Inc42", type: "Media" },
    { name: "YourStory", type: "Media" },
    { name: "Microsoft", type: "Innovation" }
];

const SponsorsGrid = () => {
    return (
        <section className="py-24" style={{ backgroundColor: 'var(--color-bg)' }}>
            <div className="max-w-7xl mx-auto px-6">

                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <h2 className="text-4xl md:text-5xl font-black tracking-tighter" style={{ color: 'var(--color-text)' }}>
                        OUR <span style={{ color: 'var(--color-text-muted)' }}>BACKERS.</span>
                    </h2>
                    <div className="h-px flex-1 mx-8 hidden md:block" style={{ backgroundColor: 'var(--color-border)' }}></div>
                    <p className="font-bold uppercase tracking-widest text-sm" style={{ color: 'var(--color-text-muted)' }}>
                        Powering the Ecosystem
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[var(--color-border)] border border-[var(--color-border)]">
                    {sponsors.map((s, idx) => (
                        <div key={idx}
                            className="aspect-[3/2] bg-[var(--color-bg)] flex flex-col items-center justify-center p-8 hover:bg-[var(--color-surface)] transition-colors group cursor-pointer relative overflow-hidden">

                            {/* Placeholder Logo */}
                            <div className="text-2xl font-black opacity-40 group-hover:opacity-100 transition-opacity" style={{ color: 'var(--color-text)' }}>
                                {s.name}
                            </div>

                            <div className="absolute bottom-4 text-[10px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0"
                                style={{ color: 'var(--color-text-muted)' }}>
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

                <div className="mt-12 text-center">
                    <a href="#" className="inline-block text-sm font-bold uppercase tracking-widest border-b pb-1 hover:opacity-70 transition-opacity"
                        style={{ color: 'var(--color-text)', borderColor: 'var(--color-text)' }}>
                        View Sponsorship Deck
                    </a>
                </div>

            </div>
        </section>
    );
};

export default SponsorsGrid;
