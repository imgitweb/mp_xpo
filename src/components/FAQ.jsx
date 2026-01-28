import React, { useState } from 'react';
import { FiChevronDown, FiPlus } from 'react-icons/fi';

const faqs = [
  {
    question: "What is Bundelkhand Venture Summit (BVS) 2026?",
    answer:
      "Bundelkhand Venture Summit 2026 is a mega startup and business expo bringing together startups, MSMEs, investors, corporates, government bodies, and industry experts to showcase, pitch, connect, and grow in the Bundelkhand region."
  },
  {
    question: "When and where is BVS 2026 happening?",
    answer:
      "BVS 2026 will be held from 28th February to 1st March 2026 in Jhansi, Bundelkhand, at a premium venue designed for large-scale exhibitions, panels, and networking."
  },
  {
    question: "Who can participate in the Startup Expo?",
    answer:
      "Startups and MSMEs from sectors like Health & Fitness, Education, Construction, IT & Digital, Finance, Agriculture, Hospitality, Travel, Food, Automobile, Manufacturing, Environment, Media, Content Creation, and Services can participate."
  },
  {
    question: "What are the benefits of participating in BVS 2026?",
    answer:
      "Participants get direct access to investors, expert mentorship, panel discussions, media exposure, B2B networking, government and administration connect, product showcasing opportunities, and strong regional brand visibility."
  },
  {
    question: "How can I book a stall at the expo?",
    answer:
      "Stalls can be booked through a screening process. Interested startups and businesses need to apply in advance as slots are limited and allocated based on eligibility and category."
  },
  {
    question: "What are the stall pricing tiers at BVS 2026?",
    answer:
      "There are three stall tiers: Growth Partner (₹18,000 + GST), Foundation Partner (₹25,000 + GST), and Pinnacle Partner (₹37,000 + GST). Each tier offers different benefits like stall size, seating category, networking access, and branding opportunities."
  },
 
  {
    question: "Can startups pitch directly to investors?",
    answer:
      "Yes. Through Investor Connect sessions, selected startups can pitch their ideas directly to real investors and decision-makers during the summit."
  },
  {
    question: "Are there panel discussions at the event?",
    answer:
      "Yes. BVS 2026 features high-level panel discussions on startup execution, funding vs bootstrapping, incubators & accelerators, MSME growth, FinTech inclusion, manufacturing, tourism, AgriTech, EdTech, and more."
  },

  {
    question: "Is there a talent show at the event?",
    answer:
      "Yes. The Bundelkhand Talent Show will feature singing, dancing, bands, and instrumental performances, providing a cultural and entertainment experience alongside the business expo."
  },

  {
    question: "Are the number of stalls limited?",
    answer:
      "Yes. Stall availability is limited and entries are accepted only through a screening process to maintain quality participation and meaningful business interactions."
  },
 
];


const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    return (
        <section id="faq" className="py-24 sm:py-32 relative" style={{ backgroundColor: 'var(--color-bg)' }}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-24">

                    {/* Sticky Header Side */}
                    <div className="lg:sticky lg:top-32 self-start">
                        <span className="text-sm font-bold uppercase tracking-widest mb-4 block" style={{ color: 'var(--color-text-muted)' }}>
                            Support
                        </span>
                        <h2 className="text-5xl sm:text-7xl font-black tracking-tighter mb-6" style={{ color: 'var(--color-text)' }}>
                            GOT -
                            <span style={{ color: 'var(--color-text-muted)' }}> Q's?</span>
                        </h2>
                        <p className="text-lg max-w-sm" style={{ color: 'var(--color-text-secondary)' }}>
                            Everything you need to know about the summit. Can't find an answer?
                            <a href="#" className="block mt-2 underline" style={{ color: 'var(--color-text)' }}>Chat with support.</a>
                        </p>
                    </div>

                    {/* Questions List */}
                    <div className="space-y-4">
                        {faqs.map((faq, idx) => (
                            <div
                                key={idx}
                                className="group border-b transition-all duration-300"
                                style={{
                                    borderColor: 'var(--color-border)',
                                }}
                            >
                                <button
                                    onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                                    className="w-full flex items-start justify-between py-8 text-left focus:outline-none group-hover:pl-4 transition-all duration-300"
                                >
                                    <div className="flex gap-6 md:gap-8">
                                        <span className="text-lg font-mono" style={{ color: 'var(--color-text-muted)' }}>
                                            {String(idx + 1).padStart(2, '0')}
                                        </span>
                                        <span
                                            className="text-xl sm:text-2xl font-bold transition-colors"
                                            style={{ color: openIndex === idx ? 'var(--color-text)' : 'var(--color-text-secondary)' }}
                                        >
                                            {faq.question}
                                        </span>
                                    </div>

                                    <div
                                        className={`ml-4 w-8 h-8 flex items-center justify-center rounded-full border transition-all duration-300 ${openIndex === idx ? 'rotate-45 bg-white text-black' : 'rotate-0 text-white'}`}
                                        style={{ borderColor: 'var(--color-border)' }}
                                    >
                                        <FiPlus className="w-5 h-5" />
                                    </div>
                                </button>

                                <div
                                    className={`grid transition-all duration-500 ease-in-out ${openIndex === idx ? 'grid-rows-[1fr] opacity-100 pb-8' : 'grid-rows-[0fr] opacity-0'}`}
                                >
                                    <div className="overflow-hidden pl-12 md:pl-20 pr-4">
                                        <p
                                            className="text-base sm:text-lg leading-relaxed max-w-2xl"
                                            style={{ color: 'var(--color-text-muted)' }}
                                        >
                                            {faq.answer}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>

            </div>
        </section>
    );
};

export default FAQ;
