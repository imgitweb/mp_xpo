import React from 'react';
import { FiArrowUpRight } from 'react-icons/fi';

const teamMembers = [
    { name: "Ankit Jatav", role: "Founder & CEO", initials: "AJ" },
    { name: "Priya Sharma", role: "Head of Operations", initials: "PS" },
    { name: "Rahul Verma", role: "Tech Lead", initials: "RV" },
    { name: "Sneha Gupta", role: "Marketing Director", initials: "SG" },
    { name: "Vikram Singh", role: "Investor Relations", initials: "VS" },
    { name: "Amit Patel", role: "Event Manager", initials: "AP" },
];

const Team = () => {
    return (
        <div className="min-h-screen pt-32 pb-24 relative" style={{ backgroundColor: 'var(--color-bg)' }}>
            <div className="max-w-7xl mx-auto px-6">

                {/* Header - Matching About.jsx Style */}
                <div className="grid lg:grid-cols-[1.5fr_1fr] gap-12 mb-5">
                    <div>
                        <div className="inline-block px-4 py-1.5 rounded-full border mb-8"
                            style={{ borderColor: 'var(--color-border)', backgroundColor: 'var(--color-surface)' }}>
                            <span className="text-xs font-bold uppercase tracking-widest" style={{ color: 'var(--color-text-muted)' }}>The Builders</span>
                        </div>

                        <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9]" style={{ color: 'var(--color-text)' }}>
                            MEET THE <br />
                            <span style={{ color: 'var(--color-text-muted)' }}>SQUAD.</span>
                        </h1>
                    </div>

                    <div className="flex flex-col justify-end pb-4">
                        <p className="text-xl leading-relaxed font-light text-right" style={{ color: 'var(--color-text-secondary)' }}>
                            We are a group of dreamers, doers, and disruptors committed to building the future of Central India's startup ecosystem.
                        </p>
                    </div>
                </div>
                                <div className="h-px w-full mb-10 md:mb-20" style={{ backgroundColor: 'var(--color-border)' }}></div>


                {/* Team Grid - Clean Minimal Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {teamMembers.map((member, idx) => (
                        <div key={idx}
                            className="group relative p-8 rounded-[2rem] border transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
                            style={{ borderColor: 'var(--color-border)', backgroundColor: 'var(--color-bg-secondary)' }}>

                            <div className="aspect-square w-full rounded-2xl mb-6 relative overflow-hidden flex items-center justify-center"
                                style={{ backgroundColor: 'var(--color-surface)' }}>
                                <span className="text-8xl font-black opacity-10 group-hover:scale-110 transition-transform duration-500"
                                    style={{ color: 'var(--color-text)' }}>
                                    {member.initials}
                                </span>
                            </div>

                            <div className="flex justify-between items-end border-t pt-6" style={{ borderColor: 'var(--color-border)' }}>
                                <div>
                                    <h3 className="text-2xl font-bold mb-1" style={{ color: 'var(--color-text)' }}>{member.name}</h3>
                                    <p className="text-xs font-bold uppercase tracking-widest" style={{ color: 'var(--color-text-muted)' }}>{member.role}</p>
                                </div>
                                <button className="w-10 h-10 rounded-full border flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all"
                                    style={{ borderColor: 'var(--color-border)', color: 'var(--color-text)' }}>
                                    <FiArrowUpRight />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Join CTA */}
                <div className="mt-24 p-12 rounded-[2rem] border text-center relative overflow-hidden"
                    style={{ borderColor: 'var(--color-border)', backgroundColor: 'var(--color-surface)' }}>
                    <div className="relative z-10">
                        <h3 className="text-3xl font-bold mb-6" style={{ color: 'var(--color-text)' }}>Want to join the mission?</h3>
                        <a href="mailto:careers@mpstartupexpo.com"
                            className="inline-block px-10 py-4 rounded-full font-bold transition-transform hover:scale-105"
                            style={{ backgroundColor: 'var(--color-text)', color: 'var(--color-bg)' }}>
                            See Open Positions
                        </a>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Team;
