const About = () => {
  return (
    <div 
      id="about"
      className="min-h-screen pt-32 pb-20 relative overflow-hidden"
      style={{ backgroundColor: "var(--color-bg)" }}
    >
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-[150px] pointer-events-none opacity-20"
        style={{ backgroundColor: "var(--color-primary)" }}
      ></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-[1.5fr_1fr] gap-12 lg:gap-24 mb-32">
          <div>
            <div
              className="inline-block px-4 py-1.5 rounded-full border mb-8 animate-fade-in-up"
              style={{
                borderColor: "var(--color-border)",
                backgroundColor: "var(--color-surface)",
              }}
            >
              <span
                className="text-xs font-bold uppercase tracking-widest"
                style={{ color: "var(--color-text-muted)" }}
              >
                28 Feb to 1 March 2026 • Jhansi
              </span>
            </div>

            <h1
              className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] mb-8"
              style={{ color: "var(--color-text)" }}
            >
              BUNDELKHAND <br />
              <span style={{ color: "var(--color-text-muted)" }}>
                VENTURE SUMMIT.
              </span>
            </h1>

            <p
              className="text-xl md:text-2xl leading-relaxed max-w-2xl font-light"
              style={{ color: "var(--color-text-secondary)" }}
            >
              The first mega business summit in Bundelkhand. Where ideas meet
              opportunity. Showcase your venture to government bodies,
              investors, and industry leaders.
            </p>
          </div>

          <div className="hidden lg:block relative">
            <div
              className="absolute inset-0 border border-dashed rounded-3xl "
              style={{ borderColor: "var(--color-border)" }}
            ></div>
            <div
              className="absolute inset-4 border rounded-3xl"
              style={{ borderColor: "var(--color-border)" }}
            ></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center p-6">
                <div
                  className="text-4xl font-black mb-2"
                  style={{ color: "var(--color-text)" }}
                >
                  STARTUP EXPO
                </div>
                <div
                  className="text-sm uppercase tracking-widest"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  Pitch • Connect • Grow
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="mb-32">
          <h2
            className="text-sm font-bold uppercase tracking-widest mb-12 py-4 border-t border-b"
            style={{
              borderColor: "var(--color-border)",
              color: "var(--color-text-muted)",
            }}
          >
            Summit Highlights
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Investor Connect",
                desc: "Direct access to pitch your ideas to investors and decision-makers.",
              },
              {
                title: "Expert Mentorship",
                desc: "Gain insights from experts across business, tech, finance, and marketing.",
              },
              {
                title: "Talent Show",
                desc: "Bundelkhand Talent Show featuring singing, dancing, and musical bands.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="group p-8 border-l hover:border-l-4 transition-all duration-300"
                style={{
                  borderColor: "var(--color-border)",
                  borderLeftColor: "var(--color-text)",
                }}
              >
                <h3
                  className="text-xl font-bold mb-4"
                  style={{ color: "var(--color-text)" }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-32">
          <h2
            className="text-4xl font-black tracking-tighter mb-12"
            style={{ color: "var(--color-text)" }}
          >
            EXHIBITION TIERS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "Growth Partner",
                price: "₹18,000",
                size: "80 Sqft",
                zone: "General",
              },
              {
                name: "Foundation Partner",
                price: "₹25,000",
                size: "100 Sqft",
                zone: "Priority",
              },
              {
                name: "Pinnacle Partner",
                price: "₹37,000",
                size: "100 Sqft",
                zone: "Prime/Corner",
              },
            ].map((tier, idx) => (
              <div
                key={idx}
                className="rounded-3xl p-8 border"
                style={{
                  borderColor: "var(--color-border)",
                  backgroundColor: "var(--color-surface)",
                }}
              >
                <h3
                  className="text-2xl font-bold mb-2"
                  style={{ color: "var(--color-text)" }}
                >
                  {tier.name}
                </h3>
                <div
                  className="text-3xl font-black mb-6"
                  style={{ color: "var(--color-primary)" }}
                >
                  {tier.price}{" "}
                  <span className="text-sm font-normal text-gray-500">
                    + GST
                  </span>
                </div>
                <ul
                  className="space-y-3 text-sm"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  <li>• Stall Size: {tier.size}</li>
                  <li>• {tier.zone} Location</li>
                  {tier.name === "Pinnacle Partner" && (
                    <li>• 5-Min Stage Presentation</li>
                  )}
                  {tier.name === "Pinnacle Partner" && (
                    <li>• VIP Concert Seating</li>
                  )}
                  {tier.name !== "Growth Partner" && (
                    <li>• Free Networking Lunch</li>
                  )}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-32">
          <h2
            className="text-4xl font-black tracking-tighter mb-12"
            style={{ color: "var(--color-text)" }}
          >
            SESSION TRACKS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div
              className="p-8 rounded-3xl border"
              style={{
                borderColor: "var(--color-border)",
                backgroundColor: "var(--color-surface)",
              }}
            >
              <h3
                className="text-xl font-bold mb-4"
                style={{ color: "var(--color-primary)" }}
              >
                Day 1: Ecosystem & Funding
              </h3>
              <p className="text-sm opacity-70">
                Focus on Execution over Ideas, Incubators, and Bootstrapping vs
                Funding.
              </p>
            </div>
            <div
              className="p-8 rounded-3xl border"
              style={{
                borderColor: "var(--color-border)",
                backgroundColor: "var(--color-surface)",
              }}
            >
              <h3
                className="text-xl font-bold mb-4"
                style={{ color: "var(--color-primary)" }}
              >
                Day 2: Industry Specifics
              </h3>
              <p className="text-sm opacity-70">
                Deep dives into AgriTech, HealthTech, EdTech, and Manufacturing.
              </p>
            </div>
          </div>
        </section>

        <div
          className="mt-20 pt-8 border-t flex flex-wrap justify-between gap-6"
          style={{ borderColor: "var(--color-border)" }}
        >
          <div style={{ color: "var(--color-text-muted)" }}>
            <p className="text-sm font-bold">Contact: +91 9305536659</p>
            <p className="text-sm">Email: startupexpo2026@gmail.com</p>
          </div>
          <div
            className="text-right"
            style={{ color: "var(--color-text-muted)" }}
          >
            <p className="text-sm font-bold">Organized by:</p>
            <p className="text-sm">
              Rotary Club of Jhansi Rani & Rotaract Club of Manu Jhansi
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;