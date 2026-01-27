import React from 'react';
import { RiLeafLine } from 'react-icons/ri';

const boothPlans = [
    {
        name: "STARTUP POD",
        size: "2x2 Mtrs",
        price: "₹15,000",
        features: ["1 Table + 2 Chairs", "Power Socket", "Standard Branding", "2 Exhibitor Passes"],
        color: "blue"
    },
    {
        name: "PREMIUM STALL",
        size: "4x4 Mtrs",
        price: "₹45,000",
        features: ["Lounge Seating", "TV Screen Mount", "Premium Fascia", "5 Exhibitor Passes", "Lead Scanning App"],
        color: "purple"
    },
    {
        name: "CUSTOM ISLAND",
        size: "6x6+ Mtrs",
        price: "On Request",
        features: ["Raw Space", "Custom Fabrication", "Speaking Slot", "VIP Lounge Access", "Dedicated Account Manager"],
        color: "orange"
    }
];

const Exhibitor = () => {
    return (
        <div className="min-h-screen pt-32 pb-24 relative overflow-hidden" style={{ backgroundColor: 'var(--color-bg)' }}>

            <div className="max-w-7xl mx-auto px-6 relative z-10">

             
                             {/* 1. Header Section */}
                             <div className="flex flex-col md:flex-row justify-between items-start mb-5">
                                 <div className="max-w-3xl">
                                     <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border mb-6 md:mb-8"
                                         style={{
                                             borderColor: 'var(--color-border)',
                                             backgroundColor: 'var(--color-surface)',
                                             color: 'var(--color-primary)'
                                         }}>
                                         <RiLeafLine />
                                         <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest">For Startups & Enablers</span>
                                     </div>
                                     <h1 className="text-5xl sm:text-7xl md:text-9xl font-black tracking-tighter leading-[0.9]" style={{ color: 'var(--color-text)' }}>
                                         SHOW <span style={{ color: 'var(--color-primary)' }}>CASE.</span><br />
                                         <span style={{ color: 'var(--color-text-muted)' }}>EXPO.</span>
                                     </h1>
                                 </div>
                                 <div className="hidden md:block">
                                     <p className="text-right text-sm font-mono opacity-50 uppercase tracking-widest" style={{ color: 'var(--color-text)' }}>
                                        For Startups & Enablers<br /> 24-25-26th Jan 2026
                                     </p>
                                 </div>
                             </div>
                             <div className="h-px w-full mb-10 md:mb-20" style={{ backgroundColor: 'var(--color-border)' }}></div>
             

                {/* Booth Grid */}
                <div className="grid md:grid-cols-3 gap-8 mb-32">
                    {boothPlans.map((plan, idx) => (
                        <div key={idx}
                            className="group relative p-8 rounded-3xl border flex flex-col hover:scale-105 transition-transform duration-300"
                            style={{ borderColor: 'var(--color-border)', backgroundColor: 'var(--color-bg-secondary)' }}>

                            <div className={`absolute top-0 left-0 w-full h-1 bg-${plan.color}-500/50`}></div>

                            <div className="mb-8">
                                <h3 className="text-sm font-bold uppercase tracking-widest mb-2" style={{ color: 'var(--color-text-muted)' }}>{plan.name}</h3>
                                <div className="text-4xl font-black mb-1" style={{ color: 'var(--color-text)' }}>{plan.price}</div>
                                <div className="text-xs font-mono opacity-50" style={{ color: 'var(--color-text)' }}>{plan.size}</div>
                            </div>

                            <ul className="space-y-4 mb-8 flex-grow">
                                {plan.features.map(feat => (
                                    <li key={feat} className="flex items-center gap-3 text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                                        <span className="w-1.5 h-1.5 rounded-full bg-current"></span>
                                        {feat}
                                    </li>
                                ))}
                            </ul>

                            <button className="w-full py-4 rounded-xl font-bold border transition-colors hover:bg-white hover:text-black"
                                style={{ borderColor: 'var(--color-border)', color: 'var(--color-text)' }}>
                                Request Booking
                            </button>
                        </div>
                    ))}
                </div>

                {/* Floor Plan Mock */}
                <div className="border rounded-3xl p-8 md:p-12 relative overflow-hidden"
                    style={{ borderColor: 'var(--color-border)', backgroundColor: 'var(--color-surface)' }}>
                    <div className="flex flex-col md:flex-row justify-between items-end mb-12 relative z-10">
                        <div>
                            <h2 className="text-3xl font-black mb-4" style={{ color: 'var(--color-text)' }}>FLOOR PLAN</h2>
                            <p className="max-w-md text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                                Prime spots are selling fast. The "Startup Alley" (Zone A) creates high footfall flow towards the Main Stage.
                            </p>
                        </div>
                        <button className="mt-6 md:mt-0 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest bg-white text-black hover:bg-gray-200 transition-colors">
                            Download PDF Map
                        </button>
                    </div>

                    {/* Abstract Map Graphic */}
                    <div className="relative h-[300px] w-full border border-dashed rounded-xl opacity-50" style={{ borderColor: 'var(--color-border)' }}>
                        <div className="absolute inset-x-1/4 top-10 bottom-10 border-x border-dashed flex items-center justify-center" style={{ borderColor: 'var(--color-border)' }}>
                            <span className="text-xs font-bold uppercase tracking-[1em] rotate-90" style={{ color: 'var(--color-text-muted)' }}>Main Aisle</span>
                        </div>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border flex items-center justify-center" style={{ borderColor: 'var(--color-text-muted)' }}>
                            <span className="text-[10px] font-bold uppercase">Center Stage</span>
                        </div>
                        {/* Random Booths */}
                        {[...Array(10)].map((_, i) => (
                            <div key={i} className="absolute w-8 h-8 border bg-white/5"
                                style={{
                                    borderColor: 'var(--color-border)',
                                    top: `${Math.random() * 80}%`,
                                    left: `${Math.random() * 90}%`
                                }}></div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Exhibitor;
