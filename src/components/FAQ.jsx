import React, { useState } from 'react';
import { FiChevronDown, FiPlus } from 'react-icons/fi';

const faqs = [
    {
        question: "Who can attend the MP Startup Expo?",
        answer: "Everyone! Whether you're a startup founder, investor, student, or just curious about innovation, there's something for you. We have specific tracks for different interests."
    },
    {
        question: "How do I pitch my startup to investors?",
        answer: "You need to purchase the 'Startup Pro' pass. This grants you access to the 'Pitch Battle' qualifying rounds. Finalists will present on the main stage to a panel of top VCs."
    },
    {
        question: "Is there a student discount?",
        answer: "Yes! The 'Visitor Pass' is free for students with a valid ID. However, it does not include access to the Investor Lounge or Gala Dinner."
    },
    {
        question: "Where is the venue located?",
        answer: "The event is happening at the Brilliant Convention Centre, Indore. It's Central India's finest venue with state-of-the-art facilities."
    },
    {
        question: "Can I buy tickets at the venue?",
        answer: "We recommend booking online as tickets are selling fast and might be sold out. On-spot registration will be subject to availability and higher pricing."
    }
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
