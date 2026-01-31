import React from "react";

const Agenda = () => {
  const agendaItems = [
    {
      title: "Exhibition & Startup Showcase",
      description:
        "Discover innovative startups, products, and services under one roof.",
      points: [
        "Live Product Demonstrations",
        "Interact with Founders & Brands",
        "Business & Startup Networking",
      ],
      image: "/agenda/stall.png",
    },

    {
      title: "Panel Discussion",
      description: "Learn from experts and industry leaders.",
      points: [
        "Listen to top industry professionals.",
        "Enquire to register for a panel.",
      ],
      image: "/agenda/paneldiscussion.jpg",
    },
    {
      title: "Investor Connect",
      description: "Pitch your startup to real investors.",
      points: ["Meet Investors", "Pitch Your Startup Directly"],
      image:
        "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=400",
    },
    {
      title: "Become a Sponsor",
      description: "Promote your brand and build strong partnerships.",
      points: [
        "Brand Promotion",
        "Maximum Visibility",
        "Partnership Opportunities",
      ],
      image:
        "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=400",
    },
    {
      title: "Concert",
      description:
        "An evening filled with music and energy to celebrate the spirit of entrepreneurship.",
      points: ["Live Music", "DJ Night"],
      image:
        "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&q=80&w=800",
      isWide: true,
    },
    {
      title: "Bundelkhand Talent Show",
      description:
        "A platform to showcase local talent and creativity to a massive audience.",
      points: ["Cultural Performance", "Talent Hunt"],
      image: "/agenda/talent.jpeg",
      isWide: true,
    },
  ];

  return (
    <section
      id="agenda"
      className="py-24 px-6 relative overflow-hidden"
      style={{ backgroundColor: "var(--color-bg, #0a0a0a)" }}
    >
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#737373] rounded-full blur-[120px] -z-10"></div>

      <div className="max-w-7xl mx-auto">
        <div className="mb-20 text-left">
          <h2 className="text-4xl md:text-6xl font-black mb-4 tracking-tighter text-white">
            EVENT <span className="text-[#737373] opacity-90">AGENDA</span>
          </h2>
          <div className="w-24 h-2 bg-[#737373]  rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {agendaItems.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-sm transition-all duration-500 hover:border-gray-600/50 hover:bg-white/[0.04]"
            >
              <div className="flex flex-col lg:flex-row h-full">
                <div className="flex-1 p-8 md:p-10">
                  <h3 className="text-3xl font-bold mb-4 text-white group-hover:text-[#737373]  transition-colors">
                    {item.title}
                  </h3>
                  <p className="mb-8 text-sm md:text-base leading-relaxed text-[#737373] font-light">
                    {item.description}
                  </p>
                  <ul className="space-y-4">
                    {item.points.map((point, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-3 text-sm text-[#737373] "
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#737373]  shadow-[0_0_8px_rgba(234,88,12,0.8)]"></span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="lg:w-2/5 relative h-64 lg:h-auto overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-transparent to-transparent z-10 hidden lg:block"></div>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Agenda;
