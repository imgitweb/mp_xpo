import React, { useState } from "react";

const schedule = {
  day1: [
    {
      time: "09:00 AM – 10:00 AM",
      title: "Registration Opens",
      type: "Expo",
      desc: "Delegate registration and entry to the Startup Expo.",
    },
    {
      time: "10:00 AM – 10:30 AM",
      title: "Ribbon Cutting & Startup Expo Opening",
      type: "Ceremony",
      desc: "Formal inauguration of BVS 2026 and startup exhibition.",
    },
    {
      time: "10:30 AM – 11:30 AM",
      title: "Startup Expo Walkthrough & Networking",
      type: "Networking",
      desc: "Meet founders, startups, investors, and ecosystem leaders.",
    },
    {
      time: "11:30 AM – 01:30 PM",
      title: "Grand Inaugural Ceremony & Keynote Address",
      type: "Keynote",
      desc: "Opening ceremony with keynote speakers and vision setting.",
    },
    {
      time: "01:30 PM – 02:30 PM",
      title: "Incubators, Accelerators & Ecosystem Access",
      type: "Panel",
      desc: "How startups from Tier-2/Tier-3 cities can leverage incubators, mentors, and government support.",
    },
    {
      time: "02:30 PM – 03:30 PM",
      title: "Networking Lunch",
      type: "Networking",
      desc: "Curated networking lunch with investors, founders, and partners.",
    },
    {
      time: "03:30 PM – 06:30 PM",
      title: "Investor Connect – Shark Tank Style Pitching",
      type: "Investor Connect",
      desc: "Live startup pitching with investors and real-time feedback.",
    },
    {
      time: "07:00 PM – 09:00 PM",
      title: "Bundelkhand Talent Show (BTS) – Day 1",
      type: "Cultural",
      desc: "Showcasing regional talent through performances and music.",
    },
  ],

  day2: [
    {
      time: "09:30 AM – 10:00 AM",
      title: "Expo & Networking Opens",
      type: "Expo",
      desc: "Startup expo opens with investor and delegate networking.",
    },
    {
      time: "10:00 AM – 11:00 AM",
      title: "HealthTech for Bharat",
      type: "Panel",
      desc: "Affordable, accessible, and scalable healthcare solutions for India.",
    },
    {
      time: "11:00 AM – 12:00 PM",
      title: "Neurodivergence – Diagnosis, Early Intervention & Acceptance",
      type: "Panel",
      desc: "Understanding neurodiversity, inclusion, and early care systems.",
    },
    {
      time: "12:00 PM – 01:00 PM",
      title: "AgriTech & Rural Innovation",
      type: "Panel",
      desc: "Innovations empowering farmers, supply chains, and rural India.",
    },
    {
      time: "01:00 PM – 02:00 PM",
      title: "Networking Lunch",
      type: "Networking",
      desc: "Investor, founder, and policy-maker networking over lunch.",
    },
    {
      time: "02:00 PM – 03:00 PM",
      title: "EdTech & Employability",
      type: "Panel",
      desc: "Bridging education, skills, and jobs for India’s youth.",
    },
    {
      time: "03:00 PM – 04:00 PM",
      title: "Tourism, Hospitality & Experience Economy",
      type: "Panel",
      desc: "Building destination-driven businesses and experience-led growth.",
    },
    {
      time: "04:00 PM – 05:00 PM",
      title: "Manufacturing, MSMEs & Industrial Innovation",
      type: "Panel",
      desc: "Scaling manufacturing using local talent and infrastructure.",
    },
    {
      time: "05:00 PM – 07:00 PM",
      title: "Bundelkhand Excellence Awards & Closing Ceremony",
      type: "Awards",
      desc: "Honouring startups, innovators, and ecosystem contributors.",
    },
    {
      time: "07:30 PM Onwards",
      title: "Grand Closing Celebration & Celebrity Musical Concert",
      type: "Concert",
      desc: "Opening act followed by Dev Negi live performance & DJ night.",
    },
  ],
};

const Panel = () => {
  const [activeTab, setActiveTab] = useState("day1");

  return (
    <section
      id="panel"
      className="py-24 sm:py-32 relative"
      style={{ backgroundColor: "var(--color-bg)" }}
    >
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 100% 0%, var(--color-primary-light), transparent 40%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
          <div>
            <h2
              className="text-4xl sm:text-6xl font-black tracking-tighter mb-4"
              style={{ color: "var(--color-text)" }}
            >
              IDEAS{" "}
              <span style={{ color: "var(--color-text-muted)" }}>
                TO IMPACT
              </span>
            </h2>
            <p
              className="max-w-md text-lg"
              style={{ color: "var(--color-text-secondary)" }}
            >
              Where ideas turn into scalable businesses
            </p>
          </div>

          <div
            className="flex p-1 rounded-full border backdrop-blur-md"
            style={{
              borderColor: "var(--color-border)",
              backgroundColor: "var(--color-surface)",
            }}
          >
            {["day1", "day2"].map((day) => (
              <button
                key={day}
                onClick={() => setActiveTab(day)}
                className="px-6 py-2 rounded-full text-sm font-bold tracking-wide transition-all duration-300 relative overflow-hidden"
                style={{
                  color:
                    activeTab === day
                      ? "var(--color-bg)"
                      : "var(--color-text-muted)",
                }}
              >
                <div
                  className={`absolute inset-0 transition-opacity duration-300 ${
                    activeTab === day ? "opacity-100" : "opacity-0"
                  }`}
                  style={{ backgroundColor: "var(--color-text)" }}
                />
                <span className="relative z-10">
                  {day === "day1" ? "28 FEB" : "01 MAR"}
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {schedule[activeTab].map((item, idx) => (
            <div
              key={idx}
              className="group relative p-8 rounded-3xl border transition-all duration-300 hover:-translate-y-1 overflow-hidden"
              style={{
                backgroundColor: "var(--color-surface)",
                borderColor: "var(--color-border)",
              }}
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle at top right, var(--color-primary-light), transparent 70%)",
                }}
              />

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <span
                    className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest border"
                    style={{
                      borderColor: "var(--color-border)",
                      color: "var(--color-text-secondary)",
                      backgroundColor: "var(--color-bg)",
                    }}
                  >
                    {item.type}
                  </span>

                  <span
                    className="text-xs font-semibold"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    {item.time}
                  </span>
                </div>

                <h3
                  className="text-2xl font-bold mb-2"
                  style={{ color: "var(--color-text)" }}
                >
                  {item.title}
                </h3>

                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  {item.desc}
                </p>
              </div>

              <div
                className="absolute bottom-0 left-0 w-full h-1 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                style={{ backgroundColor: "var(--color-primary)" }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Panel;
