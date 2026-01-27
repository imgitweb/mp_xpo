// import React, { useState } from 'react';

// const schedule = {
//     day1: [
//         { time: '09:00', period: 'AM', title: 'Registration & Networking', type: 'Entry', desc: 'Badge pickup, coffee, and initial meetups.' },
//         { time: '10:30', period: 'AM', title: ' The Future of India', type: 'Keynote', desc: 'Dr. Ritesh Malik on the $5T Economy roadmap.' },
//         { time: '12:00', period: 'PM', title: 'Bootstrapped vs Funded', type: 'Panel', desc: 'A heated debate with VCs and Unicorn Founders.' },
//         { time: '02:00', period: 'PM', title: 'Startup Pitch Battle', type: 'Competition', desc: 'Top 50 startups pitch for a spot in the finals.' },
//     ],
//     day2: [
//         { time: '10:00', period: 'AM', title: 'Breakfast with Investors', type: 'Networking', desc: 'Curated networking session (Invite Only).' },
//         { time: '11:30', period: 'AM', title: 'Brand Building Secrets', type: 'Masterclass', desc: 'Storytelling secrets from top CMOs.' },
//         { time: '01:00', period: 'PM', title: 'Pitch Battle: Grand Finale', type: 'Competition', desc: 'The top 10 startups fight for ₹50L Funding.' },
//         { time: '03:30', period: 'PM', title: 'Closing Keynote', type: 'Keynote', desc: 'Special Guest Appearance.' },
//     ]
// };

// const Agenda = () => {
//     const [activeTab, setActiveTab] = useState('day1');

//     return (
//         <section id="agenda" className="py-24 sm:py-32 relative" style={{ backgroundColor: 'var(--color-bg)' }}>
//             {/* Background Decor */}
//             <div
//                 className="absolute inset-0 opacity-30 pointer-events-none"
//                 style={{
//                     backgroundImage: 'radial-gradient(circle at 100% 0%, var(--color-primary-light), transparent 40%)'
//                 }}
//             ></div>

//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

//                 {/* Standardized Header */}
//                 <div className="mb-16 md:mb-24 flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
//                     <div>
//                         <h2 className="text-4xl sm:text-6xl font-black tracking-tighter mb-4" style={{ color: 'var(--color-text)' }}>
//                             Event <span style={{ color: 'var(--color-text-muted)' }}>Agenda.</span>
//                         </h2>
//                         <p className="max-w-md text-lg" style={{ color: 'var(--color-text-secondary)' }}>
//                             Two packed days of insights, networking, and innovation.
//                         </p>
//                     </div>

//                     {/* Day Toggle */}
//                     <div
//                         className="flex p-1 rounded-full border backdrop-blur-md"
//                         style={{
//                             borderColor: 'var(--color-border)',
//                             backgroundColor: 'var(--color-surface)'
//                         }}
//                     >
//                         {['day1', 'day2'].map((day) => (
//                             <button
//                                 key={day}
//                                 onClick={() => setActiveTab(day)}
//                                 className="px-6 py-2 rounded-full text-sm font-bold tracking-wide transition-all duration-300 relative overflow-hidden"
//                                 style={{
//                                     color: activeTab === day ? 'var(--color-bg)' : 'var(--color-text-muted)'
//                                 }}
//                             >
//                                 <div
//                                     className={`absolute inset-0 transition-opacity duration-300 ${activeTab === day ? 'opacity-100' : 'opacity-0'}`}
//                                     style={{ backgroundColor: 'var(--color-text)' }}
//                                 ></div>
//                                 <span className="relative z-10">{day === 'day1' ? 'NOV 19' : 'NOV 20'}</span>
//                             </button>
//                         ))}
//                     </div>
//                 </div>

//                 {/* Grid Layout */}
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                     {schedule[activeTab].map((item, idx) => (
//                         <div
//                             key={idx}
//                             className="group relative p-8 rounded-3xl border transition-all duration-300 hover:-translate-y-1 overflow-hidden"
//                             style={{
//                                 backgroundColor: 'var(--color-surface)',
//                                 borderColor: 'var(--color-border)'
//                             }}
//                         >
//                             {/* Hover Glow Background */}
//                             <div
//                                 className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
//                                 style={{
//                                     background: 'radial-gradient(circle at top right, var(--color-primary-light), transparent 70%)'
//                                 }}
//                             ></div>

//                             <div className="relative z-10">
//                                 <div className="flex items-start justify-between mb-8">
//                                     {/* Time Block */}
//                                     <div className="flex flex-col">
//                                         <span className="text-3xl font-mono font-light" style={{ color: 'var(--color-text)' }}>
//                                             {item.time}
//                                         </span>
//                                         <span className="text-sm font-mono font-bold" style={{ color: 'var(--color-text-muted)' }}>
//                                             {item.period}
//                                         </span>
//                                     </div>

//                                     {/* Type Tag */}
//                                     <span
//                                         className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest border"
//                                         style={{
//                                             borderColor: 'var(--color-border)',
//                                             color: 'var(--color-text-secondary)',
//                                             backgroundColor: 'var(--color-bg)'
//                                         }}
//                                     >
//                                         {item.type}
//                                     </span>
//                                 </div>

//                                 <h3
//                                     className="text-2xl font-bold mb-2 transition-colors"
//                                     style={{ color: 'var(--color-text)' }}
//                                 >
//                                     {item.title}
//                                 </h3>
//                                 <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
//                                     {item.desc}
//                                 </p>
//                             </div>

//                             {/* Decorative Bottom Line */}
//                             <div
//                                 className="absolute bottom-0 left-0 w-full h-1 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
//                                 style={{ backgroundColor: 'var(--color-primary)' }}
//                             ></div>
//                         </div>
//                     ))}
//                 </div>

//                 {/* Footer Note */}
//                 <div className="mt-12 text-center text-sm font-mono" style={{ color: 'var(--color-text-muted)' }}>
//                     * Schedule subject to change. All times are IST.
//                 </div>

//             </div>
//         </section>
//     );
// };

// export default Agenda;




import React, { useState } from "react";

const schedule = {
  day1: [
    {
      title: "Registration & Networking",
      type: "Entry",
      desc: "Delegate registration and badge collection for the first mega business summit of Bundelkhand. [cite: 48]",
    },
    {
      title: "Execution Over Ideas - What Really Builds Startups",
      type: "Panel",
      desc: "Building the right team, executing consistently, pivoting at the right time, and focusing on operations over hype. [cite: 184, 185]",
    },
    {
      title: "Incubators, Accelerators & Ecosystem Access",
      type: "Panel",
      desc: "How startups from Tier-2/Tier-3 cities can leverage incubators, mentors, and government support. [cite: 186, 187]",
    },
    {
      title: "Bootstrapping vs Funding - Which Path Is Right?",
      type: "Panel",
      desc: "Choosing between self-funded growth and external investment with real-world perspectives. [cite: 188, 189]",
    },
    {
      title: "FinTech for MSMEs & Financial Inclusion",
      type: "Panel",
      desc: "How digital payments, lending and financial tools are transforming small businesses beyond metros. [cite: 192, 193]",
    },
    {
      title: "Building Trust, Brand & Growth",
      type: "Panel",
      desc: "Using social responsibility to build credibility, community impact, and long-term brand value. [cite: 190, 191]",
    },
    {
      title: "Celebrity Musical Concert Night",
      type: "Event",
      desc: "High-energy musical night featuring celebrity performances and networking dinner. [cite: 49, 84]",
    },
  ],

  day2: [
    {
      title: "Health Tech for Bharat",
      type: "Panel",
      desc: "Affordable, accessible, and trustworthy healthcare solutions for smaller cities. [cite: 195, 196]",
    },
    {
      title: "AgriTech & Rural Innovation",
      type: "Panel",
      desc: "From farm to market: scaling solutions for farmers, supply chains, and rural adoption. [cite: 197, 198]",
    },
    {
      title: "EdTech & Employability",
      type: "Panel",
      desc: "Bridging education and jobs for youth in Tier-2 regions. [cite: 199, 200]",
    },
    {
      title: "Tourism, Hospitality & Experience Economy",
      type: "Panel",
      desc: "Turning Destinations into Businesses: Seasonality, Scale & Sustainability. [cite: 201, 202]",
    },
    {
      title: "Manufacturing, MSMEs & Industrial Innovation",
      type: "Panel",
      desc: "Cost Advantage, Local Talent & Scale: The Tier-2 Manufacturing Edge. [cite: 203, 204]",
    },
    {
      title: "Bundelkhand Talent Show",
      type: "Show",
      desc: "Talent hunt finale featuring singing, dancing, musical bands, and instruments. [cite: 50, 85]",
    },
  ],
};

const Agenda = () => {
  const [activeTab, setActiveTab] = useState("day1");

  return (
    <section
      id="agenda"
      className="py-24 sm:py-32 relative"
      style={{ backgroundColor: "var(--color-bg)" }}
    >
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle at 100% 0%, var(--color-primary-light), transparent 40%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
          <div>
            <h2 className="text-4xl sm:text-6xl font-black tracking-tighter mb-4" style={{ color: "var(--color-text)" }}>
              Event <span style={{ color: "var(--color-text-muted)" }}>Agenda.</span>
            </h2>
            <p className="max-w-md text-lg" style={{ color: "var(--color-text-secondary)" }}>
              Bundelkhand Venture Summit 2026 – Two days of innovation and growth.
            </p>
          </div>

          <div className="flex p-1 rounded-full border backdrop-blur-md" style={{ borderColor: "var(--color-border)", backgroundColor: "var(--color-surface)" }}>
            {["day1", "day2"].map((day) => (
              <button
                key={day}
                onClick={() => setActiveTab(day)}
                className="px-6 py-2 rounded-full text-sm font-bold tracking-wide transition-all duration-300 relative overflow-hidden"
                style={{ color: activeTab === day ? "var(--color-bg)" : "var(--color-text-muted)" }}
              >
                <div className={`absolute inset-0 transition-opacity duration-300 ${activeTab === day ? "opacity-100" : "opacity-0"}`} style={{ backgroundColor: "var(--color-text)" }} />
                <span className="relative z-10">{day === "day1" ? "28 FEB" : "01 MAR"}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {schedule[activeTab].map((item, idx) => (
            <div key={idx} className="group relative p-8 rounded-3xl border transition-all duration-300 hover:-translate-y-1 overflow-hidden" style={{ backgroundColor: "var(--color-surface)", borderColor: "var(--color-border)" }}>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ background: "radial-gradient(circle at top right, var(--color-primary-light), transparent 70%)" }} />
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-8">
                  <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest border" style={{ borderColor: "var(--color-border)", color: "var(--color-text-secondary)", backgroundColor: "var(--color-bg)" }}>
                    {item.type}
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-2" style={{ color: "var(--color-text)" }}>{item.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-muted)" }}>{item.desc}</p>
              </div>
              <div className="absolute bottom-0 left-0 w-full h-1 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" style={{ backgroundColor: "var(--color-primary)" }} />
            </div>
          ))}
        </div>
       
      </div>
    </section>
  );
};

export default Agenda;