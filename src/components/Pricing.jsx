import React from "react";
import { motion } from "framer-motion";
import RegistrationModal from "./RegistrationModal";
import { FiCheck } from "react-icons/fi";

const GOOGLE_FORM_URL = "https://forms.gle/kGkTVRkG6T5QTdWF9";
const COMMUNITY_FORM_URL =
  "https://l.instagram.com/?u=https%3A%2F%2Fforms.gle%2FRHwxx6kqVoq9gTiF8%3Futm_source%3Dig%26utm_medium%3Dsocial%26utm_content%3Dlink_in_bio%26fbclid%3DPAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGn6XdjKk5RHYeSZYgPUQ4TPueinnjkpGHZLoxoJcUCuaYrjrHawvxVFmHQ87I_aem_AamIC1nNa4q5dJqbi4ZPrA&e=AT3duHGo-xGwSlkjA0sgADVz17EgDLnR3l2q-IrtudR-m66Iyt0bx--FI9PVYSTXmsf5bQXAQ2syab9fhG3WTrGJTQdq-6PE2pmICyzvdQ";

const plans = [
    {
        name: "VISITOR PASS",
        price: "₹299",
        desc: "For students, professionals & general visitors.",
        features: [
            "Expo Zone Access",
            "Open Keynotes & Panels",
            "Startup Stalls Visit",
            "Bundelkhand Talent Show",
            "Digital Entry Pass"
        ],
        cta: "Buy Visitor Pass",
        highlight: false,
        directForm: true
    },
    {
        name: "GROWTH PARTNER",
        price: "₹18,000 + GST",
        desc: "Base exhibition entry for early-stage startups.",
        features: [
            "80 sq.ft General Zone Stall",
            "1 Silver Seating Pass",
            "General Session Access",
            "Concert Entry"
        ],
        cta: "Apply Now",
        highlight: false,
        img: "/stall-img/stall1-img.png"
    },
    {
        name: "FOUNDATION PARTNER",
        price: "₹25,000 + GST",
        desc: "Mid-tier visibility with priority access.",
        features: [
            "100 sq.ft Priority Zone Stall",
            "Gold Seating (3)",
            "Networking Lunch",
            "Priority Entry"
        ],
        cta: "Get Foundation",
        highlight: true,
        img: "/stall-img/stall2-img.png"
    },
    {
        name: "PINNACLE PARTNER",
        price: "₹37,000 + GST",
        desc: "Top-tier premium exposure & investor attention.",
        features: [
            "Prime Stall",
            "Platinum VIP Seating",
            "5-Min On-Stage Pitch",
            "Media Promotion"
        ],
        cta: "Become Pinnacle",
        highlight: false,
        img: "/stall-img/stall3-img.png"
    },
    {
        name: "CREATOR / COMMUNITY PASS",
        price: "Free",
        desc: "For creators & influencers.",
        features: [
            "Creator Lounge",
            "Collab Zone",
            "Brand Networking",
            "Social Media Feature"
        ],
        cta: "Join as Creator",
        highlight: false,
        directForm: true
    }
];

const Pricing = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [selectedPlan, setSelectedPlan] = React.useState(null);

  const handleClick = (plan) => {
    if (plan.directForm && plan.formUrl) {
      window.open(plan.formUrl, "_blank");
    } else {
      setSelectedPlan(plan);
      setIsModalOpen(true);
    }
  };

  return (
    <section
      id="pricing"
      className="py-24"
      style={{ backgroundColor: "var(--color-bg)" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <h2
            className="text-4xl sm:text-6xl font-black tracking-tighter mb-4"
            style={{ color: "var(--color-text)" }}
          >
            GET YOUR{" "}
            <span style={{ color: "var(--color-text-muted)" }}>PASS.</span>
          </h2>
          <p
            className="max-w-xl mx-auto text-lg"
            style={{ color: "var(--color-text-secondary)" }}
          >
            Choose your access level. Whether you're here to learn, pitch, or
            invest, we have a spot for you.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -8 }}
              className={`p-6 rounded-3xl border flex flex-col ${
                plan.highlight ? "scale-105 shadow-2xl" : ""
              }`}
              style={{
                backgroundColor: plan.highlight
                  ? "var(--color-surface)"
                  : "transparent",
                borderColor: "var(--color-border)",
              }}
            >
              <h3 className="text-xs font-bold tracking-widest mb-2">
                {plan.name}
              </h3>

              <div className="text-3xl font-black mb-3">{plan.price}</div>

              <p className="text-sm mb-6">{plan.desc}</p>

              <ul className="space-y-2 mb-8 flex-grow">
                {plan.features.map((f, i) => (
                  <li key={i} className="flex gap-2 text-sm">
                    <FiCheck className="text-green-500 mt-1" />
                    {f}
                  </li>
                ))}
              </ul>

              <button
                onClick={() => handleClick(plan)}
                className="w-full py-3 rounded-xl font-bold text-sm"
                style={{
                  backgroundColor: plan.highlight
                    ? "var(--color-text)"
                    : "transparent",
                  color: plan.highlight
                    ? "var(--color-bg)"
                    : "var(--color-text)",
                  border: plan.highlight
                    ? "none"
                    : "1px solid var(--color-border)",
                }}
              >
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      <RegistrationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        plan={selectedPlan}
      />
    </section>
  );
};

export default Pricing;
