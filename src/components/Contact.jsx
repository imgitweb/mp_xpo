import React, { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, Instagram, Send } from "lucide-react";
import toast, { Toaster } from "react-hot-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactDetails = [
    {
      label: "Call Us",
      value: "+91 9305536659",
      icon: <Phone className="w-6 h-6" />,
      link: "tel:+919305536659",
    },
    {
      label: "Email Us",
      value: "startupexpo2026@gmail.com",
      icon: <Mail className="w-6 h-6" />,
      link: "mailto:startupexpo2026@gmail.com",
    },
    {
      label: "Follow Us",
      value: "@Bundelkhandventuresummit",
      icon: <Instagram className="w-6 h-6" />,
      link: "https://instagram.com/Bundelkhandventuresummit",
    },
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill all fields");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contacts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to send message");
      }

      toast.success(data.message || "Message sent successfully 🚀");

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("Contact submit error:", error);
      toast.error(error.message || "Server error, try again later");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-20 sm:py-28 relative overflow-hidden"
      style={{ backgroundColor: "var(--color-bg)" }}
    >
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: "var(--color-surface)",
            color: "var(--color-text)",
            border: "1px solid var(--color-border)",
          },
        }}
      />

      <div
        className="absolute top-0 right-0 w-96 h-96 opacity-20 pointer-events-none blur-3xl rounded-full"
        style={{ backgroundColor: "var(--color-primary)" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2
            className="text-4xl sm:text-5xl font-black tracking-tight mb-4"
            style={{ color: "var(--color-text)" }}
          >
            Get in <span style={{ color: "var(--color-primary)" }}>Touch</span>
          </h2>
          <p
            className="max-w-xl mx-auto text-lg"
            style={{ color: "var(--color-text-secondary)" }}
          >
            Have questions about BVS 2026? We are here to help you grow your
            venture in Bundelkhand.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Contact Cards */}
          <div className="flex flex-col gap-12">
            {contactDetails.map((item, idx) => (
              <motion.a
                key={idx}
                href={item.link}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group p-6 rounded-2xl border flex items-center gap-5 transition-all hover:scale-[1.02]"
                style={{
                  backgroundColor: "var(--color-surface)",
                  borderColor: "var(--color-border)",
                }}
              >
                <div
                  className="p-4 rounded-xl"
                  style={{
                    backgroundColor: "rgba(var(--color-primary-rgb),0.1)",
                    color: "var(--color-primary)",
                  }}
                >
                  {item.icon}
                </div>
                <div>
                  <h4
                    className="text-xs font-bold uppercase mb-1 opacity-70"
                    style={{ color: "var(--color-text-secondary)" }}
                  >
                    {item.label}
                  </h4>
                  <p
                    className="text-sm font-semibold break-all"
                    style={{ color: "var(--color-text)" }}
                  >
                    {item.value}
                  </p>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 p-6 sm:p-10 rounded-3xl border shadow-xl"
            style={{
              backgroundColor: "var(--color-surface)",
              borderColor: "var(--color-border)",
            }}
          >
            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                disabled={isSubmitting}
                className="p-4 rounded-xl border bg-transparent outline-none"
                style={{
                  borderColor: "var(--color-border)",
                  color: "var(--color-text)",
                }}
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                disabled={isSubmitting}
                className="p-4 rounded-xl border bg-transparent outline-none"
                style={{
                  borderColor: "var(--color-border)",
                  color: "var(--color-text)",
                }}
              />

              <textarea
                name="message"
                rows="4"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                disabled={isSubmitting}
                className="md:col-span-2 p-4 rounded-xl border bg-transparent outline-none resize-none"
                style={{
                  borderColor: "var(--color-border)",
                  color: "var(--color-text)",
                }}
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className="cursor-pointer md:col-span-2 px-8 py-4 rounded-xl font-bold flex items-center gap-2 justify-center active:scale-95 transition-opacity"
                style={{
                  backgroundColor: "var(--color-text)",
                  color: "var(--color-bg)",
                  opacity: isSubmitting ? 0.7 : 1,
                }}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;