import React from 'react';

const GalleryMasonry = () => {
    const images = [
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
        "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80",
        "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&q=80",
        "https://images.unsplash.com/photo-1551818255-e6e10975bc17?w=800&q=80",
        "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80",
        "https://images.unsplash.com/photo-1559223607-a43c990c692c?w=800&q=80",
    ];

    return (
        <section className="py-24" style={{ backgroundColor: 'var(--color-bg)' }}>
            <div className="max-w-7xl mx-auto px-6">

                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div>
                        <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-4" style={{ color: 'var(--color-text)' }}>
                            PAST <span style={{ color: 'var(--color-text-muted)' }}>EDITIONS.</span>
                        </h2>
                        <p className="max-w-md text-lg" style={{ color: 'var(--color-text-secondary)' }}>
                            A visual journey through our previous summits. From humble beginnings to massive impact.
                        </p>
                    </div>
                    <div>
                        <div className="text-right">
                            <div className="text-4xl font-black" style={{ color: 'var(--color-text)' }}>15k+</div>
                            <div className="text-xs font-bold uppercase tracking-widest" style={{ color: 'var(--color-text-muted)' }}>Total Attendees</div>
                        </div>
                    </div>
                </div>

                <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                    {images.map((src, idx) => (
                        <div key={idx} className="break-inside-avoid relative group rounded-2xl overflow-hidden cursor-zoom-in">
                            <img
                                src={src}
                                alt={`Gallery ${idx}`}
                                className="w-full h-auto transform transition-transform duration-700 group-hover:scale-110 filter grayscale group-hover:grayscale-0"
                            />
                            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <span className="inline-block px-4 py-2 border text-white text-xs font-bold uppercase tracking-widest backdrop-blur-md rounded-full">
                                    View Memory
                                </span>
                            </div>
                        </div>
                    ))}

                    {/* Dark Card Quote */}
                    <div className="break-inside-avoid p-8 rounded-2xl border flex items-center justify-center text-center aspect-square"
                        style={{ borderColor: 'var(--color-border)', backgroundColor: 'var(--color-surface)' }}>
                        <div>
                            <p className="text-xl font-serif italic mb-4" style={{ color: 'var(--color-text)' }}>
                                "The energy at MP Startup Expo is unmatched. It's the Woodstock for founders."
                            </p>
                            <p className="text-xs font-bold uppercase tracking-widest" style={{ color: 'var(--color-text-muted)' }}>
                                - TechCrunch
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default GalleryMasonry;
