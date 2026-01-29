import { FiMapPin, FiArrowRight } from "react-icons/fi";

const eventsDay1 = [
  {
    id: 1,
    title: "Registration & Delegate Welcome",
    loc: "Venue Hall",
    type: "Entry",
    desc: "Badge pickup, welcome kit distribution, and informal networking for BVS 2026. [cite: 65]",
  },
  {
    id: 2,
    title: "Execution Over Ideas",
    loc: "Main Stage",
    type: "Panel",
    desc: "What really builds startups: team building, consistent execution, and operational focus. [cite: 184, 185]",
  },
  {
    id: 3,
    title: "Incubators, Accelerators & Ecosystem Access",
    loc: "Main Stage",
    type: "Panel",
    desc: "Leveraging mentors and government support for Tier-2/Tier-3 city startups. [cite: 186, 187]",
  },
  {
    id: 4,
    title: "Bootstrapping vs Funding - Which Path Is Right?",
    loc: "Main Stage",
    type: "Panel",
    desc: "Real-world perspectives on choosing between self-funded growth and investment. [cite: 188, 189]",
  },
  {
    id: 5,
    title: "FinTech for MSMEs & Financial Inclusion",
    loc: "Breakout Room",
    type: "Panel",
    desc: "How digital payments and lending are transforming small businesses beyond metros. [cite: 192, 193]",
  },
  {
    id: 6,
    title: "Building Trust, Brand & Growth",
    loc: "Main Stage",
    type: "Panel",
    desc: "Using social responsibility to build credibility and long-term brand value. [cite: 190, 191]",
  },
  {
    id: 7,
    title: "Celebrity Musical Concert Night",
    loc: "Concert Arena",
    type: "Connect",
    desc: "Grand musical performance and networking dinner to wrap up Day 1. [cite: 49, 84]",
  },
];

const AgendaTimeline = () => {
  return (
    <section className="py-24" style={{ backgroundColor: "var(--color-bg)" }}>
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-20 flex flex-col md:flex-row justify-between items-end gap-6">
          <div>
            <h2
              className="text-5xl md:text-7xl font-black tracking-tighter mb-4"
              style={{ color: "var(--color-text)" }}
            >
              AGENDA{" "}
              <span style={{ color: "var(--color-text-muted)" }}>FEB 28.</span>
            </h2>
            <p
              className="text-xl max-w-lg"
              style={{ color: "var(--color-text-secondary)" }}
            >
              Ecosystem, mindset, money & support systems shaping Tier-2
              startups. [cite: 183]
            </p>
          </div>
          <button className="px-8 py-3 rounded-full border border-white/20 hover:bg-white/10 transition-colors font-bold text-sm tracking-widest uppercase">
            Download PDF
          </button>
        </div>

        <div className="space-y-4">
          {eventsDay1.map((evt) => (
            <div
              key={evt.id}
              className="group relative grid md:grid-cols-[120px_1fr] gap-8 p-8 rounded-3xl border transition-all duration-300 hover:border-l-8 hover:pl-6"
              style={{
                borderColor: "var(--color-border)",
                backgroundColor: "var(--color-surface)",
              }}
            >
              <div className="absolute inset-y-0 left-0 w-2 rounded-l-3xl bg-transparent group-hover:bg-[var(--color-primary)] transition-colors"></div>

              <div
                className="flex flex-col justify-center border-b md:border-b-0 md:border-r pb-4 md:pb-0 md:pr-8"
                style={{ borderColor: "var(--color-border)" }}
              >
                <span
                  className="text-2xl font-black tracking-tighter leading-none"
                  style={{ color: "var(--color-text)" }}
                >
                  DAY
                </span>
                <span
                  className="text-xl font-medium mt-1"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  01
                </span>
              </div>

              <div className="flex flex-col justify-center">
                <div className="flex flex-wrap items-center gap-4 mb-3">
                  <span
                    className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border"
                    style={{
                      borderColor: "var(--color-text)",
                      color: "var(--color-text)",
                    }}
                  >
                    {evt.type}
                  </span>
                  <span
                    className="flex items-center gap-2 text-sm font-medium"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    <FiMapPin /> {evt.loc}
                  </span>
                </div>
                <h3
                  className="text-2xl md:text-3xl font-bold mb-3 group-hover:text-[var(--color-primary)] transition-colors"
                  style={{ color: "var(--color-text)" }}
                >
                  {evt.title}
                </h3>
                <div className="flex justify-between items-end">
                  <p
                    className="text-sm max-w-sm leading-relaxed"
                    style={{ color: "var(--color-text-secondary)" }}
                  >
                    {evt.desc}
                  </p>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-4 group-hover:translate-x-0 duration-300">
                    <div
                      className="w-10 h-10 rounded-full border flex items-center justify-center"
                      style={{
                        borderColor: "var(--color-text)",
                        color: "var(--color-text)",
                      }}
                    >
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
