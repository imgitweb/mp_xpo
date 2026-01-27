import React, { useState, useEffect } from 'react';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { FiChevronDown, FiArrowRight, FiSun, FiMoon, FiDisc as FiDesc } from 'react-icons/fi'; // Added icons
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light'); // Theme state
    const location = useLocation();

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

    const toggleDropdown = (name) => {
        setActiveDropdown(activeDropdown === name ? null : name);
    };

    const menuItems = {
        'Event 2026': [
            { label: 'Agenda', href: '/#agenda' },
            { label: 'Speakers', href: '/#speakers' },
            { label: 'Workshops', href: '/workshops' },
        ],
        'About Us': [
            { label: 'Our Story', href: '/about' },
            { label: 'Team', href: '/team' },
            { label: 'Newsroom', href: '/news' },
            { label: 'Sustainability', href: '/sustainability' },
        ]
    };

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
                        <Link to="/" className="flex flex-col sm:flex-row sm:items-center gap-1 group">
                            <span
                                className="text-xl sm:text-2xl font-black italic tracking-tighter"
                                style={{ color: 'var(--color-text)' }}
                            >
                                MP<span style={{ color: 'var(--color-primary)' }}>STARTUP</span>
                            </span>
                            <span
                                className="text-[10px] sm:text-xs font-mono px-2 py-0.5 rounded sm:ml-2 w-fit"
                                style={{
                                    backgroundColor: 'var(--color-surface)',
                                    color: 'var(--color-text-muted)'
                                }}
                            >
                                NOV 19-20, 2026 | BHOPAL
                            </span>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        {Object.keys(menuItems).map((key) => (
                            <div key={key} className="relative">
                                <button
                                    className="flex items-center gap-1.5 text-sm font-medium transition-colors hover:opacity-100 opacity-70"
                                    style={{ color: activeDropdown === key ? 'var(--color-text)' : 'var(--color-text)' }}
                                    onClick={() => toggleDropdown(key)}
                                    onMouseEnter={() => setActiveDropdown(key)}
                                >
                                    {key}
                                    <FiChevronDown
                                        className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === key ? 'rotate-180' : ''}`}
                                    />
                                </button>

                                {/* Dropdown Menu */}
                                {activeDropdown === key && (
                                    <div
                                        className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-64 p-2 rounded-xl border overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200"
                                        onMouseLeave={() => setActiveDropdown(null)}
                                        style={{
                                            backgroundColor: 'var(--color-bg-secondary)',
                                            borderColor: 'var(--color-border)',
                                            boxShadow: 'var(--shadow-xl)'
                                        }}
                                    >
                                        {menuItems[key].map((item) => (
                                            <a
                                                key={item.label}
                                                href={item.href}
                                                className="flex items-center justify-between px-4 py-3 rounded-lg group transition-colors"
                                                style={{ color: 'var(--color-text-secondary)' }}
                                                onMouseEnter={(e) => {
                                                    e.currentTarget.style.backgroundColor = 'var(--color-surface)';
                                                    e.currentTarget.style.color = 'var(--color-text)';
                                                }}
                                                onMouseLeave={(e) => {
                                                    e.currentTarget.style.backgroundColor = 'transparent';
                                                    e.currentTarget.style.color = 'var(--color-text-secondary)';
                                                }}
                                            >
                                                <span className="text-sm font-medium">
                                                    {item.label}
                                                </span>
                                                <span
                                                    className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 text-xs"
                                                    style={{ color: 'var(--color-text-muted)' }}
                                                >
                                                    <FiArrowRight />
                                                </span>
                                            </a>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Right Actions & Mobile Toggle */}
                    <div className="flex items-center gap-3 sm:gap-4">
                        <a
                            href="/login"
                            className="hidden lg:block px-4 py-2 text-sm font-medium rounded-lg border transition-colors hover:opacity-80"
                            style={{
                                borderColor: 'var(--color-border)',
                                color: 'var(--color-text)',
                                backgroundColor: 'transparent'
                            }}
                        >
                            Investor Portal
                        </a>

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
                            className="hidden sm:block px-5 py-2 text-sm font-bold rounded-lg transition-transform active:scale-95 shadow-lg"
                            style={{
                                backgroundColor: 'var(--color-text)', // Inverted theme look
                                color: 'var(--color-bg)',
                                border: '1px solid var(--color-text)'
                            }}
                        >
                            Pre-register
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

                {/* Mobile Menu Dropdown */}
                {mobileMenuOpen && (
                    <div
                        className="md:hidden border-t animate-in slide-in-from-top-2 duration-200"
                        style={{
                            borderColor: 'var(--color-border)',
                            backgroundColor: 'var(--color-bg-secondary)'
                        }}
                    >
                        <div className="p-4 space-y-4 max-h-[80vh] overflow-y-auto">
                            {Object.keys(menuItems).map((key) => (
                                <div key={key} className="space-y-2">
                                    <div
                                        className="text-xs font-bold uppercase tracking-wider"
                                        style={{ color: 'var(--color-text-muted)' }}
                                    >
                                        {key}
                                    </div>
                                    <div className="grid grid-cols-1 gap-1 pl-2">
                                        {menuItems[key].map((item) => (
                                            <a
                                                key={item.label}
                                                href={item.href}
                                                className="block py-2 text-sm active:opacity-100 opacity-80"
                                                style={{ color: 'var(--color-text)' }}
                                                onClick={() => setMobileMenuOpen(false)}
                                            >
                                                {item.label}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            ))}

                            <div className="pt-4 border-t flex flex-col gap-3" style={{ borderColor: 'var(--color-border)' }}>
                                <a
                                    href="/login"
                                    className="block w-full px-4 py-3 text-center text-sm font-medium rounded-lg border hover:opacity-80"
                                    style={{
                                        borderColor: 'var(--color-border)',
                                        color: 'var(--color-text)'
                                    }}
                                >
                                    Investor Portal
                                </a>
                                <button
                                    className="w-full px-4 py-3 text-center text-sm font-bold rounded-lg transition-transform active:scale-95"
                                    style={{
                                        backgroundColor: 'var(--color-text)',
                                        color: 'var(--color-bg)'
                                    }}
                                >
                                    Pre-register
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
