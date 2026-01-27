import React from 'react';
import { FiClock, FiMapPin, FiArrowRight } from 'react-icons/fi';

const events = [
    {
        id: 1,
        time: "09:00",
        period: "AM",
        title: "Registration & Badge Pickup",
        loc: "Main Lobby",
        type: "Entry",
        desc: "Grab your welcome kit and coffee. Network with early arrivals."
    },
    {
        id: 2,
        time: "10:30",
        period: "AM",
        title: "Opening Keynote: The AI Era",
        loc: "Grand Hall",
        type: "Keynote",
        desc: "Dr. Ritesh Malik on how AI agents are rewriting the startup playbook."
    },
    {
        id: 3,
        time: "12:00",
        period: "PM",
        title: "Panel: Bootstrapped vs Funded",
        loc: "Grand Hall",
        type: "Panel",
        desc: "A heated debate with VCs and Unicorn Founders."
    },
    {
        id: 4,
        time: "02:00",
        period: "PM",
        title: "Startup Pitch Battle",
        loc: "Innovation Zone",
        type: "Competition",
        desc: "Top 50 startups pitch for a spot in the finals."
    },
    {
        id: 5,
        time: "04:30",
        period: "PM",
        title: "Networking Hi-Tea",
        loc: "Garden Area",
        type: "Connect",
        desc: "Unstructured networking time with mentors and investors."
    },
    {
        id: 6,
        time: "07:00",
        period: "PM",
        title: "Awards & Gala Night",
        loc: "Banquet",
        type: "Celebration",
        desc: "Celebrating the winners followed by dinner and cocktails."
    },
];

const AgendaTimeline = () => {
    return (
        <section className="py-24" style={{ backgroundColor: 'var(--color-bg)' }}>
            <div className="max-w-5xl mx-auto px-6">

                <div className="mb-20 flex flex-col md:flex-row justify-between items-end gap-6">
                    <div>
                        <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-4" style={{ color: 'var(--color-text)' }}>
                            AGENDA <span style={{ color: 'var(--color-text-muted)' }}>DAY 01.</span>
                        </h2>
                        <p className="text-xl max-w-lg" style={{ color: 'var(--color-text-secondary)' }}>
                            A carefully curated flow of events designed to maximize your learning and networking.
                        </p>
                    </div>
                    <div>
                        <button className="px-8 py-3 rounded-full border border-white/20 hover:bg-white/10 transition-colors font-bold text-sm tracking-widest uppercase">
                            Download PDF
                        </button>
                    </div>
                </div>

                <div className="space-y-4">
                    {events.map((evt) => (
                        <div
                            key={evt.id}
                            className="group relative grid md:grid-cols-[200px_1fr] gap-8 p-8 rounded-3xl border transition-all duration-300 hover:border-l-8 hover:pl-6"
                            style={{
                                borderColor: 'var(--color-border)',
                                backgroundColor: 'var(--color-surface)'
                            }}
                        >
                            {/* Hover Active Border Custom Color */}
                            <div className="absolute inset-y-0 left-0 w-2 rounded-l-3xl bg-transparent group-hover:bg-[var(--color-primary)] transition-colors"></div>

                            {/* Time Section */}
                            <div className="flex flex-col justify-center border-b md:border-b-0 md:border-r pb-4 md:pb-0 md:pr-8"
                                style={{ borderColor: 'var(--color-border)' }}>
                                <span className="text-5xl font-black tracking-tighter leading-none" style={{ color: 'var(--color-text)' }}>
                                    {evt.time}
                                </span>
                                <span className="text-xl font-medium mt-1" style={{ color: 'var(--color-text-muted)' }}>
                                    {evt.period}
                                </span>
                            </div>

                            {/* Details Section */}
                            <div className="flex flex-col justify-center">
                                <div className="flex flex-wrap items-center gap-4 mb-3">
                                    <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border"
                                        style={{ borderColor: 'var(--color-text)', color: 'var(--color-text)' }}>
                                        {evt.type}
                                    </span>
                                    <span className="flex items-center gap-2 text-sm font-medium" style={{ color: 'var(--color-text-muted)' }}>
                                        <FiMapPin /> {evt.loc}
                                    </span>
                                </div>

                                <h3 className="text-2xl md:text-3xl font-bold mb-3 group-hover:text-[var(--color-primary)] transition-colors"
                                    style={{ color: 'var(--color-text)' }}>
                                    {evt.title}
                                </h3>

                                <div className="flex justify-between items-end">
                                    <p className="text-sm max-w-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                                        {evt.desc}
                                    </p>
                                    <div className="opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-4 group-hover:translate-x-0 duration-300">
                                        <div className="w-10 h-10 rounded-full border flex items-center justify-center"
                                            style={{ borderColor: 'var(--color-text)', color: 'var(--color-text)' }}>
                                            <FiArrowRight />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default AgendaTimeline;
