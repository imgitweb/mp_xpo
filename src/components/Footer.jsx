import React from 'react';
import { FaArrowRight, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer
            className="pt-24 pb-12 relative overflow-hidden"
            style={{ backgroundColor: 'var(--color-bg)' }}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Top Section: CTA & Newsletter - Mobile Optimized Stack */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 mb-20 pb-20 border-b" style={{ borderColor: 'var(--color-border)' }}>
                    <div>
                        <h2 className="text-5xl sm:text-7xl font-black tracking-tighter mb-6 leading-[0.9]" style={{ color: 'var(--color-text)' }}>
                            READY TO <br /> <span style={{ color: 'var(--color-text-muted)' }}>INNOVATE?</span>
                        </h2>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button
                                onClick={() => document.getElementById('pricing').scrollIntoView({ behavior: 'smooth' })}
                                className="w-full sm:w-auto px-8 py-4 rounded-full font-bold text-lg transition-transform active:scale-95 hover:opacity-90"
                                style={{ backgroundColor: 'var(--color-text)', color: 'var(--color-bg)' }}
                            >
                                Register Now
                            </button>
                            <button
                                onClick={() => window.location.href = 'mailto:sales@mpstartupexpo.com'}
                                className="w-full sm:w-auto px-8 py-4 rounded-full font-bold text-lg border transition-colors hover:bg-white/5"
                                style={{ borderColor: 'var(--color-border)', color: 'var(--color-text)' }}
                            >
                                Contact Sales
                            </button>
                        </div>
                    </div>

                    <div className="flex flex-col justify-end">
                        <p className="text-sm font-bold uppercase tracking-widest mb-6" style={{ color: 'var(--color-text-muted)' }}>Join the Newsletter</p>
                        <div className="flex flex-col sm:flex-row gap-2">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full flex-grow px-6 py-4 rounded-full bg-transparent border focus:outline-none focus:ring-1 transition-all"
                                style={{
                                    borderColor: 'var(--color-border)',
                                    color: 'var(--color-text)',
                                    '--tw-ring-color': 'var(--color-text)'
                                }}
                            />
                            <button
                                onClick={() => alert('Thanks for subscribing! We will keep you updated.')}
                                className="w-full sm:w-auto sm:aspect-square px-6 sm:px-2 py-4 sm:py-0 rounded-full flex items-center justify-center transition-transform active:scale-95 hover:rotate-45 duration-300 font-bold"
                                style={{ backgroundColor: 'var(--color-text)', color: 'var(--color-bg)' }}
                            >
                                <span className="sm:hidden">Subscribe</span>
                                <span className="hidden sm:block p-4 rounded-full"><FaArrowRight /></span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Middle Section: Links - Mobile Grid fix */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8 mb-20">
                    {[
                        { title: "Event", links: ["Why Attend", "Speakers", "Agenda", "Partners"] },
                        { title: "Participate", links: ["Startup Pitch", "Investor Pass", "Exhibitor Zone", "Volunteers"], urls: ["#", "#", "/exhibitor", "#"] },
                        { title: "Resources", links: ["Media Kit", "Travel Guide", "FAQ", "Support"] },
                        {
                            title: "Socials",
                            isSocial: true,
                            links: [<FaTwitter />, <FaLinkedin />, <FaInstagram />, <FaYoutube />],
                            labels: ["Twitter", "LinkedIn", "Instagram", "YouTube"]
                        }
                    ].map((col, idx) => (
                        <div key={idx}>
                            <h3 className="font-bold mb-6 text-lg" style={{ color: 'var(--color-text)' }}>{col.title}</h3>
                            {col.isSocial ? (
                                <div className="flex flex-wrap gap-3">
                                    {col.links.map((icon, i) => (
                                        <a
                                            key={i}
                                            href="#"
                                            aria-label={col.labels[i]}
                                            className="w-10 h-10 rounded-full border flex items-center justify-center text-sm transition-all hover:bg-white hover:text-black hover:border-transparent hover:-translate-y-1"
                                            style={{ borderColor: 'var(--color-border)', color: 'var(--color-text)' }}
                                        >
                                            {icon}
                                        </a>
                                    ))}
                                </div>
                            ) : (
                                <ul className="space-y-4 text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                                    {col.links.map((link, i) => (
                                        <li key={link}>
                                            <a href={col.urls ? col.urls[i] : "#"} className="hover:text-white hover:pl-2 transition-all duration-300 block">
                                                {link}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    ))}
                </div>

                {/* Bottom Section */}
                <div className="pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-6 text-sm relative z-20" style={{ borderColor: 'var(--color-border)', color: 'var(--color-text-muted)' }}>
                    <p>© 2026 MP Startup Expo. All rights reserved.</p>
                    <div className="flex flex-wrap justify-center gap-8">
                        <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                        <a href="#" className="hover:text-white transition-colors">Cookie Settings</a>
                    </div>
                </div>

                {/* Massive Watermark */}
                <div
                    className="absolute bottom-0 left-0 right-0 text-[13vw] sm:text-[15vw] font-black leading-none text-center pointer-events-none opacity-5 select-none z-0"
                    style={{ color: 'var(--color-text)' }}
                >
                    MPSTARTUP
                </div>

            </div>
        </footer>
    );
};

export default Footer;
