import React from 'react';
import RegistrationModal from './RegistrationModal';
import { FiCheck } from 'react-icons/fi';

const plans = [
    {
        name: "VISITOR PASS",
        price: "Free",
        desc: "Perfect for students & enthusiasts.",
        features: [
            "Access to Expo Zone",
            "Attend Open Keynotes",
            "Network with Peers",
            "Digital Certificate"
        ],
        cta: "Get Free Pass",
        highlight: false
    },
    {
        name: "STARTUP PRO",
        price: "₹4,999",
        desc: "For founders seeking funding.",
        features: [
            "All Visitor Perks",
            "Pitch to 50+ VCs",
            "Dedicated Booth Space",
            "Access to Investor Lounge",
            "Dinner with Speakers"
        ],
        cta: "Apply for Booth",
        highlight: true
    },
    {
        name: "VIP ACCESS",
        price: "₹9,999",
        desc: "For investors & senior execs.",
        features: [
            "All Startup Perks",
            "Priority Seating",
            "1-on-1 with Keynote Speakers",
            "Gala Dinner Access",
            "Premium Swag Kit"
        ],
        cta: "Buy VIP Pass",
        highlight: false
    }
];

const Pricing = () => {
    const [isModalOpen, setIsModalOpen] = React.useState(false);
    const [selectedPlan, setSelectedPlan] = React.useState(null);

    const handleOpenModal = (planName) => {
        setSelectedPlan(planName);
        setIsModalOpen(true);
    };

    return (
        <section id="pricing" className="py-24 sm:py-32 relative" style={{ backgroundColor: 'var(--color-bg)' }}>
            {/* Background Glow */}
            <div
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[500px] opacity-20 pointer-events-none"
                style={{
                    background: 'radial-gradient(ellipse at bottom, var(--color-primary-light), transparent 70%)'
                }}
            ></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Header */}
                <div className="text-center mb-20">
                    <h2
                        className="text-4xl sm:text-6xl font-black tracking-tighter mb-4"
                        style={{ color: 'var(--color-text)' }}
                    >
                        GET YOUR <span style={{ color: 'var(--color-text-muted)' }}>PASS.</span>
                    </h2>
                    <p className="max-w-xl mx-auto text-lg" style={{ color: 'var(--color-text-secondary)' }}>
                        Choose your access level. Whether you're here to learn, pitch, or invest, we have a spot for you.
                    </p>
                </div>

                {/* Pricing Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {plans.map((plan, idx) => (
                        <div
                            key={idx}
                            className={`relative p-8 rounded-3xl border flex flex-col transition-all duration-300 group ${plan.highlight ? 'scale-105 shadow-2xl z-10' : 'hover:-translate-y-2'}`}
                            style={{
                                backgroundColor: plan.highlight ? 'var(--color-surface)' : 'rgba(255,255,255,0.02)',
                                borderColor: plan.highlight ? 'var(--color-text)' : 'var(--color-border)'
                            }}
                        >
                            {/* Popular Tag */}
                            {plan.highlight && (
                                <div
                                    className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest"
                                    style={{ backgroundColor: 'var(--color-text)', color: 'var(--color-bg)' }}
                                >
                                    Most Popular
                                </div>
                            )}

                            <div className="mb-8">
                                <h3 className="text-sm font-bold uppercase tracking-widest mb-2" style={{ color: 'var(--color-text-muted)' }}>
                                    {plan.name}
                                </h3>
                                <div className="text-4xl sm:text-5xl font-black mb-2" style={{ color: 'var(--color-text)' }}>
                                    {plan.price}
                                </div>
                                <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                                    {plan.desc}
                                </p>
                            </div>

                            {/* Features List */}
                            <ul className="mb-8 space-y-4 flex-grow">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-center gap-3 text-sm" style={{ color: 'var(--color-text)' }}>
                                        <span style={{ color: plan.highlight ? 'var(--color-text)' : 'var(--color-text-muted)' }}>
                                            <FiCheck className="w-5 h-5" />
                                        </span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            {/* CTA Button */}
                            <button
                                onClick={() => handleOpenModal(plan.name)}
                                className="w-full py-4 rounded-xl font-bold transition-all active:scale-95"
                                style={{
                                    backgroundColor: plan.highlight ? 'var(--color-text)' : 'transparent',
                                    color: plan.highlight ? 'var(--color-bg)' : 'var(--color-text)',
                                    border: plan.highlight ? 'none' : '1px solid var(--color-border)'
                                }}
                            >
                                {plan.cta}
                            </button>
                        </div>
                    ))}
                </div>

            </div>

            {/* Registration Modal */}

            <RegistrationModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                planName={selectedPlan}
            />
        </section>
    );
};

export default Pricing;
