const VenueFlow = () => {
  return (
    <section
      id="venue"
      className="mb-32 relative"
      style={{ backgroundColor: "var(--color-bg)" }}
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-16">
          <h2
            className="text-4xl md:text-6xl font-black tracking-tighter mb-4"
            style={{ color: "var(--color-text)" }}
          >
            EXPLORE{" "}
            <span style={{ color: "var(--color-text-muted)" }}>THE VENUE</span>
          </h2>
          <p
            className="max-w-xl text-lg"
            style={{ color: "var(--color-text-secondary)" }}
          >
            Know where every experience unfolds at BVS 2026
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div
            className="p-8 rounded-3xl border transition-all duration-300 hover:-translate-y-1"
            style={{
              borderColor: "var(--color-border)",
              backgroundColor: "var(--color-surface)",
            }}
          >
            <h3
              className="text-2xl font-bold mb-4"
              style={{ color: "var(--color-text)" }}
            >
              Open Ground
            </h3>
            <ul
              className="space-y-2 text-sm"
              style={{ color: "var(--color-text-secondary)" }}
            >
              <li>• Startup Expo</li>
              <li>• Inaugural Ceremony</li>
              <li>• Awards & Felicitations</li>
              <li>• Bundelkhand Talent Show</li>
              <li>• Concerts & Cultural Nights</li>
            </ul>
          </div>

          <div
            className="p-8 rounded-3xl border transition-all duration-300 hover:-translate-y-1"
            style={{
              borderColor: "var(--color-border)",
              backgroundColor: "var(--color-surface)",
            }}
          >
            <h3
              className="text-2xl font-bold mb-4"
              style={{ color: "var(--color-text)" }}
            >
              Conference Room
            </h3>
            <ul
              className="space-y-2 text-sm"
              style={{ color: "var(--color-text-secondary)" }}
            >
              <li>• Panel Discussions</li>
              <li>• Industry Talks</li>
              <li>• Expert & Policy Sessions</li>
              <li>• Thematic Discussions</li>
            </ul>
          </div>

          <div
            className="p-8 rounded-3xl border transition-all duration-300 hover:-translate-y-1"
            style={{
              borderColor: "var(--color-border)",
              backgroundColor: "var(--color-surface)",
            }}
          >
            <h3
              className="text-2xl font-bold mb-4"
              style={{ color: "var(--color-text)" }}
            >
              Auditorium
            </h3>
            <ul
              className="space-y-2 text-sm"
              style={{ color: "var(--color-text-secondary)" }}
            >
              <li>• Investor Connect</li>
              <li>• Shark Tank–Style Pitching</li>
              <li>• Investor–Founder Interactions</li>
              <li>• Startup Showcases</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VenueFlow;
