import React from 'react';
import { FiArrowUpRight } from 'react-icons/fi';
import { RiLeafLine } from 'react-icons/ri';

const workshops = [
    {
        category: "PRODUCT",
        title: "Zero to One: Building MVPs",
        mentor: "Sandeep Jain",
        role: "Founder, GeeksforGeeks",
        time: "Nov 19 • 10:00 AM",
        seats: "Limited",
        colSpan: "md:col-span-2",
        gradient: "from-blue-500/20 to-purple-500/20"
    },
    {
        category: "FUNDING",
        title: "Term Sheets Decoded",
        mentor: "Rajan Anandan",
        role: "MD, Peak XV",
        time: "Nov 19 • 2:00 PM",
        seats: "Waitlist",
        colSpan: "md:col-span-1",
        gradient: "from-green-500/20 to-emerald-500/20"
    },
    {
        category: "ARTIFICIAL INTELLIGENCE",
        title: "AI Agents Revolution",
        mentor: "Sam Altman",
        role: "CEO, OpenAI",
        time: "Nov 20 • 4:00 PM",
        seats: "Open",
        colSpan: "md:col-span-1",
        gradient: "from-orange-500/20 to-red-500/20"
    },
    {
        category: "GROWTH",
        title: "B2B Sales Playbook",
        mentor: "Vaibhav Domkundwar",
        role: "Better Capital",
        time: "Nov 20 • 11:00 AM",
        seats: "Open",
        colSpan: "md:col-span-2",
        gradient: "from-pink-500/20 to-rose-500/20"
    }
];

const Workshops = () => {
    return (
        <div className="min-h-screen pt-32 pb-24 relative" style={{ backgroundColor: 'var(--color-bg)' }}>

            <div className="max-w-7xl mx-auto px-6">

          
          


                                <div className="flex flex-col md:flex-row justify-between items-end mb-5 ">
                                    <div className="max-w-3xl">
                                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border mb-8"
                                            style={{
                                                borderColor: 'var(--color-border)',
                                                backgroundColor: 'var(--color-surface)',
                                                color: 'var(--color-primary)'
                                            }}>
                                            <RiLeafLine />
                                            <span className="text-xs font-bold uppercase tracking-widest">Sustainability First Mission</span>
                                        </div>
                                        <h1 className="text-6xl md:text-9xl font-black tracking-tighter leading-[0.9]" style={{ color: 'var(--color-text)' }}>
                                            WORK <span style={{ color: 'var(--color-primary)' }}>SHOPS.</span><br />
                                        </h1>
                                    </div>
                                    <div className="hidden md:block">
                                        <p className="text-right text-sm font-mono opacity-50 uppercase tracking-widest" style={{ color: 'var(--color-text)' }}>
                                            Impact Report<br />Est. 2026
                                        </p>
                                    </div>
                                    
                                </div>
                                <div className="h-px w-full mb-10 md:mb-20" style={{ backgroundColor: 'var(--color-border)' }}></div>

                {/* Bento Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {workshops.map((ws, idx) => (
                        <div
                            key={idx}
                            className={`${ws.colSpan} group relative rounded-[2rem] p-8 md:p-12 border overflow-hidden transition-all duration-500 hover:-translate-y-2`}
                            style={{
                                backgroundColor: 'var(--color-surface)',
                                borderColor: 'var(--color-border)'
                            }}
                        >
                            {/* Hover Gradient Bloom */}
                            <div className={`absolute -right-20 -top-20 w-64 h-64 rounded-full blur-[100px] bg-gradient-to-br ${ws.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                            <div className="relative z-10 flex flex-col h-full justify-between">
                                <div>
                                    <div className="flex justify-between items-start mb-6">
                                        <span className="text-xs font-bold uppercase tracking-widest border px-3 py-1 rounded-full"
                                            style={{ borderColor: 'var(--color-border)', color: 'var(--color-text-muted)' }}>
                                            {ws.category}
                                        </span>
                                        <span className={`text-xs font-bold uppercase ${ws.seats === 'Waitlist' ? 'text-red-500' : 'text-green-500'}`}>
                                            {ws.seats}
                                        </span>
                                    </div>

                                    <h3 className="text-3xl md:text-5xl font-black leading-[0.9] mb-4" style={{ color: 'var(--color-text)' }}>
                                        {ws.title}
                                    </h3>
                                </div>

                                <div className="mt-12 pt-8 border-t flex items-end justify-between"
                                    style={{ borderColor: 'var(--color-border)' }}>
                                    <div>
                                        <p className="font-bold text-lg" style={{ color: 'var(--color-text)' }}>{ws.mentor}</p>
                                        <p className="text-sm" style={{ color: 'var(--color-text-muted)' }}>{ws.role}</p>
                                    </div>

                                    <button className="w-12 h-12 rounded-full border flex items-center justify-center transition-colors hover:bg-white hover:text-black hover:border-transparent"
                                        style={{ borderColor: 'var(--color-text)', color: 'var(--color-text)' }}>
                                        <FiArrowUpRight className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default Workshops;
