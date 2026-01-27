// import React from 'react';
// import RegistrationModal from './RegistrationModal';
// import { FiCheck } from 'react-icons/fi';

// const plans = [
//     {
//         name: "VISITOR PASS",
//         price: "Free",
//         desc: "Perfect for students & enthusiasts.",
//         features: [
//             "Access to Expo Zone",
//             "Attend Open Keynotes",
//             "Network with Peers",
//             "Digital Certificate"
//         ],
//         cta: "Get Free Pass",
//         highlight: false
//     },
//     {
//         name: "STARTUP PRO",
//         price: "₹4,999",
//         desc: "For founders seeking funding.",
//         features: [
//             "All Visitor Perks",
//             "Pitch to 50+ VCs",
//             "Dedicated Booth Space",
//             "Access to Investor Lounge",
//             "Dinner with Speakers"
//         ],
//         cta: "Apply for Booth",
//         highlight: true
//     },
//     {
//         name: "VIP ACCESS",
//         price: "₹9,999",
//         desc: "For investors & senior execs.",
//         features: [
//             "All Startup Perks",
//             "Priority Seating",
//             "1-on-1 with Keynote Speakers",
//             "Gala Dinner Access",
//             "Premium Swag Kit"
//         ],
//         cta: "Buy VIP Pass",
//         highlight: false
//     }
// ];

// const Pricing = () => {
//     const [isModalOpen, setIsModalOpen] = React.useState(false);
//     const [selectedPlan, setSelectedPlan] = React.useState(null);

//     const handleOpenModal = (planName) => {
//         setSelectedPlan(planName);
//         setIsModalOpen(true);
//     };

//     return (
//         <section id="pricing" className="py-24 sm:py-32 relative" style={{ backgroundColor: 'var(--color-bg)' }}>
//             {/* Background Glow */}
//             <div
//                 className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[500px] opacity-20 pointer-events-none"
//                 style={{
//                     background: 'radial-gradient(ellipse at bottom, var(--color-primary-light), transparent 70%)'
//                 }}
//             ></div>

//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

//                 {/* Header */}
//                 <div className="text-center mb-20">
//                     <h2
//                         className="text-4xl sm:text-6xl font-black tracking-tighter mb-4"
//                         style={{ color: 'var(--color-text)' }}
//                     >
//                         GET YOUR <span style={{ color: 'var(--color-text-muted)' }}>PASS.</span>
//                     </h2>
//                     <p className="max-w-xl mx-auto text-lg" style={{ color: 'var(--color-text-secondary)' }}>
//                         Choose your access level. Whether you're here to learn, pitch, or invest, we have a spot for you.
//                     </p>
//                 </div>

//                 {/* Pricing Cards */}
//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//                     {plans.map((plan, idx) => (
//                         <div
//                             key={idx}
//                             className={`relative p-8 rounded-3xl border flex flex-col transition-all duration-300 group ${plan.highlight ? 'scale-105 shadow-2xl z-10' : 'hover:-translate-y-2'}`}
//                             style={{
//                                 backgroundColor: plan.highlight ? 'var(--color-surface)' : 'rgba(255,255,255,0.02)',
//                                 borderColor: plan.highlight ? 'var(--color-text)' : 'var(--color-border)'
//                             }}
//                         >
//                             {/* Popular Tag */}
//                             {plan.highlight && (
//                                 <div
//                                     className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest"
//                                     style={{ backgroundColor: 'var(--color-text)', color: 'var(--color-bg)' }}
//                                 >
//                                     Most Popular
//                                 </div>
//                             )}

//                             <div className="mb-8">
//                                 <h3 className="text-sm font-bold uppercase tracking-widest mb-2" style={{ color: 'var(--color-text-muted)' }}>
//                                     {plan.name}
//                                 </h3>
//                                 <div className="text-4xl sm:text-5xl font-black mb-2" style={{ color: 'var(--color-text)' }}>
//                                     {plan.price}
//                                 </div>
//                                 <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
//                                     {plan.desc}
//                                 </p>
//                             </div>

//                             {/* Features List */}
//                             <ul className="mb-8 space-y-4 flex-grow">
//                                 {plan.features.map((feature, i) => (
//                                     <li key={i} className="flex items-center gap-3 text-sm" style={{ color: 'var(--color-text)' }}>
//                                         <span style={{ color: plan.highlight ? 'var(--color-text)' : 'var(--color-text-muted)' }}>
//                                             <FiCheck className="w-5 h-5" />
//                                         </span>
//                                         {feature}
//                                     </li>
//                                 ))}
//                             </ul>

//                             {/* CTA Button */}
//                             <button
//                                 onClick={() => handleOpenModal(plan.name)}
//                                 className="w-full py-4 rounded-xl font-bold transition-all active:scale-95"
//                                 style={{
//                                     backgroundColor: plan.highlight ? 'var(--color-text)' : 'transparent',
//                                     color: plan.highlight ? 'var(--color-bg)' : 'var(--color-text)',
//                                     border: plan.highlight ? 'none' : '1px solid var(--color-border)'
//                                 }}
//                             >
//                                 {plan.cta}
//                             </button>
//                         </div>
//                     ))}
//                 </div>

//             </div>

//             {/* Registration Modal */}

//             <RegistrationModal
//                 isOpen={isModalOpen}
//                 onClose={() => setIsModalOpen(false)}
//                 planName={selectedPlan}
//             />
//         </section>
//     );
// };

// export default Pricing;

import React from 'react';
import { motion } from 'framer-motion';
import RegistrationModal from './RegistrationModal';
import { FiCheck } from 'react-icons/fi';

const GOOGLE_FORM_URL = "https://forms.gle/kGkTVRkG6T5QTdWF9";

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
        highlight: false
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
        highlight: true
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
        highlight: false
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
        if (plan.directForm) {
            window.open(GOOGLE_FORM_URL, "_blank");
        } else {
            setSelectedPlan(plan);
            setIsModalOpen(true);
        }
    };

    return (
        <section
            id="pricing"
            className="py-24"
            style={{ backgroundColor: 'var(--color-bg)' }}
        >
            <div className="max-w-7xl mx-auto px-6">

                {/* Header */}
                <div className="text-center mb-20">
                    <h2
                        className="text-4xl sm:text-6xl font-black tracking-tighter mb-4"
                        style={{ color: 'var(--color-text)' }}
                    >
                        GET YOUR{" "}
                        <span style={{ color: 'var(--color-text-muted)' }}>
                            PASS.
                        </span>
                    </h2>
                    <p
                        className="max-w-xl mx-auto text-lg"
                        style={{ color: 'var(--color-text-secondary)' }}
                    >
                        Choose your access level. Whether you're here to learn,
                        pitch, or invest, we have a spot for you.
                    </p>
                </div>

                {/* Pricing Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                    {plans.map((plan, idx) => (
                        <motion.div
                            key={idx}
                            whileHover={{ y: -8 }}
                            className={`p-6 rounded-3xl border flex flex-col ${
                                plan.highlight
                                    ? 'scale-105 shadow-2xl'
                                    : ''
                            }`}
                            style={{
                                backgroundColor: plan.highlight
                                    ? 'var(--color-surface)'
                                    : 'transparent',
                                borderColor: 'var(--color-border)'
                            }}
                        >
                            <h3 className="text-xs font-bold tracking-widest mb-2">
                                {plan.name}
                            </h3>

                            <div className="text-3xl font-black mb-3">
                                {plan.price}
                            </div>

                            <p className="text-sm mb-6">{plan.desc}</p>

                            <ul className="space-y-2 mb-8 flex-grow">
                                {plan.features.map((f, i) => (
                                    <li
                                        key={i}
                                        className="flex gap-2 text-sm"
                                    >
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
                                        ? 'var(--color-text)'
                                        : 'transparent',
                                    color: plan.highlight
                                        ? 'var(--color-bg)'
                                        : 'var(--color-text)',
                                    border: plan.highlight
                                        ? 'none'
                                        : '1px solid var(--color-border)'
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
