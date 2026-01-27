import React from 'react';

const stats = [
    { label: 'Startups Showcasing', value: '500+' },
    { label: 'Angel Investors', value: '50+' },
    { label: 'Attendees Expected', value: '10,000+' },
    { label: 'Funding Pool', value: '₹50 Cr' },
    { label: 'Speakers', value: '25+' },
    { label: 'Workshops', value: '12+' },
];

const Stats = () => {
    return (
        <div
            className="py-10 border-y overflow-hidden relative"
            style={{
                borderColor: 'var(--color-border)',
                backgroundColor: 'var(--color-bg)'
            }}
        >
            {/* Infinite Scroll Effect */}
            <div className="flex gap-16 animate-marquee whitespace-nowrap min-w-full">
                {/* Double the list for seamless loop */}
                {[...stats, ...stats, ...stats].map((stat, idx) => (
                    <div key={idx} className="flex items-center gap-4 group cursor-default">
                        <span
                            className="text-4xl sm:text-6xl font-bold tracking-tighter transition-colors group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-500"
                            style={{ color: 'var(--color-primary)' }} // Using primary (gray) for a muted industrial look
                        >
                            {stat.value}
                        </span>
                        <div className="flex flex-col justify-center">
                            <span
                                className="text-xs sm:text-sm uppercase tracking-[0.2em] font-medium"
                                style={{ color: 'var(--color-text-muted)' }}
                            >
                                {stat.label.split(' ')[0]}
                            </span>
                            <span
                                className="text-xs sm:text-sm uppercase tracking-[0.2em] font-medium"
                                style={{ color: 'var(--color-text)' }}
                            >
                                {stat.label.split(' ').slice(1).join(' ')}
                            </span>
                        </div>
                        {/* Divider */}
                        <div
                            className="h-12 w-[1px] ml-12 rotate-12 opacity-30"
                            style={{ backgroundColor: 'var(--color-border)' }}
                        ></div>
                    </div>
                ))}
            </div>

            {/* CSS for marquee animation (inline for simplicity or add to index.css) */}
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
        </div>
    );
};

export default Stats;
