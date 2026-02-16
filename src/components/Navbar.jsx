import React, { useState, useEffect } from 'react';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { FiChevronDown, FiArrowRight, FiSun, FiMoon, FiDisc as FiDesc } from 'react-icons/fi'; // Added icons
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light'); // Theme state
    const location = useLocation();

    // Add this inside your Navbar component
    useEffect(() => {
        if (location.hash) {
            const id = location.hash.replace('#', '');
            const element = document.getElementById(id);

            if (element) {
                // Use requestAnimationFrame for the most optimized timing
                requestAnimationFrame(() => {
                    element.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                });
            }
        }
    }, [location]); // Triggers whenever the path or hash changes

    // Handle Theme Change
    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prev => prev === 'light' ? 'dark' : 'light');
    };

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Flattened menu items array
    const menuItems = [
        { label: 'Why Join Us', href: '/#why-join' },
        { label: 'Agenda', href: '/#agenda' },
        // { label: 'Speakers', href: '/#speakers' },
        { label: 'Sponsors', href: '/#sponsor' },
        { label: 'Organizers', href: '/#organizers' },
        { label: 'Support', href: '/contact' },
        // { label: 'Workshops', href: '/workshops' },
        // { label: 'Our Story', href: '/about' },
        // { label: 'Team', href: '/team' },
        // { label: 'Newsroom', href: '/news' },
        // { label: 'Sustainability', href: '/sustainability' },
    ];

    return (
        <nav className="fixed top-2 left-0 right-0 z-50 flex justify-center px-2 sm:top-6 sm:px-4">
            <div
                className="w-full max-w-7xl transition-all duration-300 relative"
                style={{
                    backgroundColor: 'color-mix(in srgb, var(--color-bg-secondary), transparent 15%)', // Modern CSS transparency with theme var
                    backdropFilter: 'blur(10px)',
                    borderRadius: 'var(--radius-xl)',
                    border: '1px solid var(--color-border)',
                    boxShadow: 'var(--shadow-lg)'
                }}
            >
                <div className="flex items-center justify-between px-4 py-3 sm:px-6">
                    {/* Logo */}
                    <div className="flex items-center gap-4">
                        <Link to="/" className="flex flex-col sm:flex-row sm:items-center gap- group">
                            <div className='overflow-hidden h-12 p-2 flex items-center justify-center w-30 '>
                             {/* BVS<span style={{ color: 'var(--color-primary)' }}>2026</span> */}
                                <img className='mb-1 ' src="/logo/bvs_logo1.png" alt="" />
                            </div>
                            {/* <span
                                className="text-[10px] sm:text-xs font-mono px-2 py-0.5 rounded sm:ml-2 w-fit"
                                style={{
                                    backgroundColor: 'var(--color-surface)',
                                    color: 'var(--color-text-muted)'
                                }}
                            >
                                28 Feb - 1 Mar 2026 | Jhansi
                            </span> */}
                        </Link>
                    </div>

                    {/* Desktop Navigation - Refactored to horizontal list */}
                    <div className="hidden md:flex items-center gap-6 lg:gap-8">
                        {menuItems.map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                className="text-sm font-medium transition-colors opacity-70 hover:opacity-100"
                                style={{ color: 'var(--color-text)' }}
                            >
                                {item.label}
                            </a>
                        ))}
                    </div>

                    {/* Right Actions & Mobile Toggle */}
                    <div className="flex items-center gap-3 sm:gap-4">
                        {/* <a
                            href="/login"
                            className="hidden lg:block px-4 py-2 text-sm font-medium rounded-lg border transition-colors hover:opacity-80"
                            style={{
                                borderColor: 'var(--color-border)',
                                color: 'var(--color-text)',
                                backgroundColor: 'transparent'
                            }}
                        >
                            Investor Portal
                        </a> */}

                        {/* Theme Toggle */}
                        {/* <button
                            onClick={toggleTheme}
                            className="p-2 rounded-lg transition-colors hover:bg-[var(--color-surface)]"
                            style={{ color: 'var(--color-text)' }}
                            aria-label="Toggle Theme"
                        >
                            {theme === 'dark' ? <FiDesc className="w-5 h-5 hidden" /> : null}
                            {theme === 'dark' ? <FiSun className="w-5 h-5" /> : <FiMoon className="w-5 h-5" />}
                        </button> */}

                        {/* Dynamic Theme Button */}
                        <button
                            onClick={() => navigate("/#pricing")}
                            className="cursor-pointer hidden sm:block px-5 py-2 text-sm font-bold rounded-lg transition-transform active:scale-95 shadow-lg"
                            style={{
                                backgroundColor: 'var(--color-text)', // Inverted theme look
                                color: 'var(--color-bg)',
                                border: '1px solid var(--color-text)'
                            }}
                        >
                            Get Your FREE Entry Pass
                        </button>

                        {/* Mobile Menu Button */}
                        <button
                            className="md:hidden p-2 rounded-lg"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            style={{ color: 'var(--color-text)' }}
                        >
                            {mobileMenuOpen ? (
                                <HiX className="w-6 h-6" />
                            ) : (
                                <HiMenuAlt3 className="w-6 h-6" />
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu Dropdown - Refactored to flat list */}
                {mobileMenuOpen && (
                    <div
                        className="md:hidden border-t animate-in slide-in-from-top-2 duration-200"
                        style={{
                            borderColor: 'var(--color-border)',
                            backgroundColor: 'var(--color-bg-secondary)'
                        }}
                    >
                        <div className="p-4 space-y-2 max-h-[80vh] overflow-y-auto">
                            {menuItems.map((item) => (
                                <a
                                    key={item.label}
                                    href={item.href}
                                    className="block py-3 text-sm font-medium active:opacity-100 opacity-80"
                                    style={{ color: 'var(--color-text)' }}
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {item.label}
                                </a>
                            ))}

                            <div className="pt-4 border-t flex flex-col gap-3" style={{ borderColor: 'var(--color-border)' }}>
                                {/* <a
                                    href="/login"
                                    className="block w-full px-4 py-3 text-center text-sm font-medium rounded-lg border hover:opacity-80"
                                    style={{
                                        borderColor: 'var(--color-border)',
                                        color: 'var(--color-text)'
                                    }}
                                >
                                    Investor Portal
                                </a> */}
                                <button
                                    onClick={() => {
                                        navigate("/#pricing");
                                        setMobileMenuOpen(false);
                                    }}
                                    className="cursor-pointer w-full px-4 py-3 text-center text-sm font-bold rounded-lg transition-transform active:scale-95"
                                    style={{
                                        backgroundColor: 'var(--color-text)',
                                        color: 'var(--color-bg)'
                                    }}
                                >
                                    Get Your FREE Entry Pass
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;