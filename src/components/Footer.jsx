import React from "react";
import {
  FaInstagram,
  FaLinkedin,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer
      className="pt-20 pb-10 relative overflow-hidden"
      style={{ backgroundColor: "var(--color-bg)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 pb-16 border-b"
          style={{ borderColor: "var(--color-border)" }}
        >
          <div>
            <h2
              className="text-4xl sm:text-6xl font-black tracking-tight mb-4"
              style={{ color: "var(--color-text)" }}
            >
              BVS 2026 <br />
              <span style={{ color: "var(--color-text-muted)" }}>
                Bundelkhand Venture Summit
              </span>
            </h2>

            <p
              className="max-w-xl text-lg mb-6"
              style={{ color: "var(--color-text-secondary)" }}
            >
              Showcase • Pitch • Connect • Grow <br />
              Startup Expo | Investors | MSMEs | Talent Show
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/#pricing"
                className="px-8 py-4 rounded-full font-bold text-lg text-center transition hover:opacity-90"
                style={{
                  backgroundColor: "var(--color-text)",
                  color: "var(--color-bg)",
                }}
              >
                Book Your Stall
              </a>

              <a
                href="#sponsor"
                className="px-8 py-4 rounded-full font-bold text-lg border text-center transition hover:bg-white/5"
                style={{
                  borderColor: "var(--color-border)",
                  color: "var(--color-text)",
                }}
              >
                Become a Sponsor
              </a>
            </div>
          </div>

          <div className="flex flex-col justify-end">
            <p
              className="text-sm uppercase tracking-widest mb-4 font-bold"
              style={{ color: "var(--color-text-muted)" }}
            >
              Event Details
            </p>

            <ul
              className="space-y-3 text-sm"
              style={{ color: "var(--color-text-secondary)" }}
            >
              <li className="flex items-center gap-3">
                <FaMapMarkerAlt />
                Jhansi, Bundelkhand • 28 Feb – 1 March 2026
              </li>
              <li className="flex items-center gap-3">
                <FaPhoneAlt />
                <a href="tel:9305536659" className="hover:text-white">
                  +91 9305536659
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope />
                <a
                  href="mailto:startupexpo2026@gmail.com"
                  className="hover:text-white"
                >
                  startupexpo2026@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-20">
          {/* Event */}
          <div>
            <h3
              className="font-bold mb-6 text-lg"
              style={{ color: "var(--color-text)" }}
            >
              Event
            </h3>
            <ul
              className="space-y-4 text-sm"
              style={{ color: "var(--color-text-secondary)" }}
            >
              <li>
                <Link to="/#about" className="hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/#why-join" className="hover:text-white">
                  Why Join?
                </Link>
              </li>

              <li>
                <Link
                  to="/"
                  onClick={() => {
                    const el = document.getElementById("agenda");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="hover:text-white"
                >
                  Event Agenda
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3
              className="font-bold mb-6 text-lg"
              style={{ color: "var(--color-text)" }}
            >
              Participate
            </h3>
            <ul
              className="space-y-4 text-sm"
              style={{ color: "var(--color-text-secondary)" }}
            >
              <li>
                <a href="/#pricing" className="hover:text-white">
                  Stall Booking
                </a>
              </li>

              <li>
                <Link to="/#sponsor" className="hover:text-white">
                  Become a Sponsor
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  onClick={() => {
                    const el = document.getElementById("agenda");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="hover:text-white"
                >
                  Talent Show
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3
              className="font-bold mb-6 text-lg"
              style={{ color: "var(--color-text)" }}
            >
              Expo Tiers
            </h3>
            <ul
              className="space-y-4 text-sm"
              style={{ color: "var(--color-text-secondary)" }}
            >
              <li className="transition-colors duration-300 hover:text-[var(--color-text-muted)]">
                Growth Partner – ₹18,000
              </li>
              <li className="transition-colors duration-300 hover:text-[var(--color-text-muted)]">
                Foundation Partner – ₹25,000
              </li>
              <li className="transition-colors duration-300 hover:text-[var(--color-text-muted)]">
                Pinnacle Partner – ₹37,000
              </li>
            </ul>
          </div>

          <div>
            <h3
              className="font-bold mb-6 text-lg"
              style={{ color: "var(--color-text)" }}
            >
              Follow Us
            </h3>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/bundelkhandventuresummit"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full border flex items-center justify-center hover:bg-white hover:text-black transition"
                style={{
                  borderColor: "var(--color-border)",
                  color: "var(--color-text)",
                }}
              >
                <FaInstagram />
              </a>

              <a
                href="https://www.linkedin.com/company/bundelkhandexpo"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full border flex items-center justify-center hover:bg-white hover:text-black transition"
                style={{
                  borderColor: "var(--color-border)",
                  color: "var(--color-text)",
                }}
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>

        <div
          className="pt-6 border-t flex flex-col md:flex-row justify-between items-center gap-4 text-sm"
          style={{
            borderColor: "var(--color-border)",
            color: "var(--color-text-muted)",
          }}
        >
          <p>© 2026 Bundelkhand Venture Summit (BVS)</p>

          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-white">
              Terms & Conditions
            </Link>
          </div>
        </div>

        <div
          className="absolute bottom-0 left-0 right-0 text-[14vw] font-black text-center opacity-5 pointer-events-none select-none"
          style={{ color: "var(--color-text)" }}
        >
          BVS 2026
        </div>
      </div>
    </footer>
  );
};

export default Footer;
