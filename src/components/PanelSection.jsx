import React from "react";

const panelsData = {
  day1: {
    theme: "Ecosystem, Mindset, Money & Support Systems",
    sessions: [
      {
        id: "P1",
        title: "Execution Over Ideas - What Really Builds Startups",
        desc: "This panel dives into what actually makes startups succeed—building the right team, executing consistently, pivoting at the right time, and focusing on operations over hype. [cite: 184, 185]",
      },
      {
        id: "P2",
        title: "Incubators, Accelerators & Ecosystem Access",
        desc: "How startups from Tier-2/Tier-3 cities can leverage incubators, mentors, and government support. [cite: 186, 187]",
      },
      {
        id: "P3",
        title: "Bootstrapping vs Funding - Which Path Is Right?",
        desc: "Choosing between self-funded growth and external investment with real-world perspectives. [cite: 188, 189]",
      },
      {
        id: "P4",
        title: "Building Trust, Brand & Growth through CSR",
        desc: "Using social responsibility to build credibility, community impact, and long-term brand value. [cite: 190, 191]",
      },
      {
        id: "P5",
        title: "FinTech for MSMEs & Financial Inclusion",
        desc: "How digital payments, lending and financial tools are transforming small businesses beyond metros. [cite: 192, 193]",
      },
    ],
  },
  day2: {
    theme: "Industry-Specific Panels",
    sessions: [
      {
        id: "P1",
        title: "Health Tech for Bharat",
        desc: "Affordable, accessible, and trustworthy healthcare solutions for smaller cities. [cite: 195, 196]",
      },
      {
        id: "P2",
        title: "AgriTech & Rural Innovation",
        desc: "From farm to market: scaling solutions for farmers, supply chains, and rural adoption. [cite: 197, 198]",
      },
      {
        id: "P3",
        title: "EdTech & Employability",
        desc: "Bridging education and jobs for youth in Tier-2 regions. [cite: 199, 200]",
      },
      {
        id: "P4",
        title: "Tourism, Hospitality & Experience Economy",
        desc: "Turning Destinations into Businesses: Seasonality, Scale & Sustainability. [cite: 201, 202]",
      },
      {
        id: "P5",
        title: "Manufacturing, MSMEs & Industrial Innovation",
        desc: "Cost Advantage, Local Talent & Scale: The Tier-2 Manufacturing Edge. [cite: 203, 204]",
      },
    ],
  },
};

const PanelSection = () => {
  return (
    <section id="panel" className="py-24" style={{ backgroundColor: "var(--color-bg)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4" style={{ color: "var(--color-text)" }}>
            Panel <span style={{ color: "var(--color-text-muted)" }}>Discussions.</span> [cite: 180]
          </h2>
          <p className="text-lg" style={{ color: "var(--color-text-secondary)" }}>
            Learn from experts and industry leaders at BVS 2026. [cite: 65, 72]
          </p>
        </div>

        {Object.entries(panelsData).map(([day, data]) => (
          <div key={day} className="mb-20">
            <div className="flex items-center gap-4 mb-10">
              <span className="px-4 py-1 rounded-full text-sm font-bold uppercase tracking-widest" 
                    style={{ backgroundColor: "var(--color-text)", color: "var(--color-bg)" }}>
                {day === "day1" ? "Day 1" : "Day 2"} [cite: 183, 194]
              </span>
              <div className="h-px flex-1" style={{ backgroundColor: "var(--color-border)" }} />
              <h3 className="text-xl font-bold italic" style={{ color: "var(--color-text-muted)" }}>
                {data.theme}
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {data.sessions.map((panel) => (
                <div 
                  key={panel.id} 
                  className="p-8 rounded-2xl border transition-all duration-300 hover:shadow-2xl hover:border-transparent group"
                  style={{ backgroundColor: "var(--color-surface)", borderColor: "var(--color-border)" }}
                >
                  <div className="text-xs font-mono mb-4 opacity-50" style={{ color: "var(--color-text-secondary)" }}>
                    SESSION {panel.id}
                  </div>
                  <h4 className="text-xl font-bold mb-4 group-hover:text-blue-500 transition-colors" style={{ color: "var(--color-text)" }}>
                    {panel.title}
                  </h4>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
                    {panel.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PanelSection;