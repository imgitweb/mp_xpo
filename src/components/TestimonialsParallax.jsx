import React from 'react';
import { AiFillQuestionCircle } from 'react-icons/ai';

const testimonials = [
    {
        quote: "The energy at MP Startup Expo is unmatched. It's the Woodstock for Indian founders.",
        author: "Rajan Anandan",
        role: "MD, Peak XV",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop"
    },
    {
        quote: "I found my co-founder and my lead investor here. This event literally built my company.",
        author: "Aditi Gupta",
        role: "Founder, Menstrupedia",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop"
    },
    {
        quote: "Central India was a sleeping giant. This expo has officially woken it up.",
        author: "Kunal Shah",
        role: "Founder, CRED",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop"
    }
];

const TestimonialsParallax = () => {
    return (
        <section className="py-32 relative overflow-hidden" style={{ backgroundColor: 'var(--color-bg)' }}>

            {/* Background Texture */}
            <div className="absolute inset-0 opacity-10"
                style={{ backgroundImage: 'radial-gradient(circle at center, var(--color-text-muted) 1px, transparent 1px)', backgroundSize: '30px 30px' }}>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-24">
                    <AiFillQuestionCircle className="w-12 h-12 mx-auto mb-6 opacity-50" style={{ color: 'var(--color-text)' }} />
                    <h2 className="text-5xl md:text-7xl font-black tracking-tighter" style={{ color: 'var(--color-text)' }}>
                        WALL OF <span style={{ color: 'var(--color-text-muted)' }}>LOVE.</span>
                    </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((t, idx) => (
                        <div key={idx}
                            className={`relative p-10 rounded-[2.5rem] border transition-transform hover:-translate-y-2 duration-500`}
                            style={{
                                borderColor: 'var(--color-border)',
                                backgroundColor: 'var(--color-surface)',
                                marginTop: idx % 2 !== 0 ? '4rem' : '0' // Staggered Effect
                            }}>

                            <div className="absolute -top-6 left-10">
                                <img
                                    src={t.image}
                                    alt={t.author}
                                    className="w-16 h-16 rounded-full border-4 object-cover"
                                    style={{ borderColor: 'var(--color-surface)' }}
                                />
                            </div>

                            <p className="text-xl leading-relaxed font-medium mt-6 mb-8" style={{ color: 'var(--color-text)' }}>
                                "{t.quote}"
                            </p>

                            <div>
                                <h4 className="font-bold text-lg" style={{ color: 'var(--color-text)' }}>{t.author}</h4>
                                <p className="text-sm uppercase tracking-wide opacity-60" style={{ color: 'var(--color-text-muted)' }}>{t.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialsParallax;
