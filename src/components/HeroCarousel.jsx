import React, { useState, useEffect } from 'react';
import { FiArrowRight, FiArrowDown } from 'react-icons/fi';

const slides = [
    {
        id: 1,
        image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2670&auto=format&fit=crop",
        line1: "UNLEASH",
        line2: "INNOVATION",
        subtitle: "Central India's Largest Startup Summit",
    },
    {
        id: 2,
        image: "https://images.unsplash.com/photo-1768137580619-76d7adbd8663?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8",
        line1: "CONNECT",
        line2: "WITH VCs",
        subtitle: "Unlock Over ₹50Cr in Available Funding",
    },
    {
        id: 3,
        image: "https://images.unsplash.com/photo-1768861020377-3fdead073d13?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D",
        line1: "BUILD THE",
        line2: "FUTURE",
        subtitle: "Join the Community of 5000+ Founders",
    }
];

const HeroCarousel = () => {
    const [current, setCurrent] = useState(0);

    // Auto-advance
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent(prev => (prev === slides.length - 1 ? 0 : prev + 1));
        }, 6000);
        return () => clearInterval(timer);
    }, []);

    const nextSlide = () => setCurrent(current === slides.length - 1 ? 0 : current + 1);

    return (
        <div className="relative h-[90vh] w-full bg-black overflow-hidden flex flex-col md:flex-row">

            {/* Left: Content Block */}
            <div className="w-full md:w-1/2 h-1/2 md:h-full relative z-20 flex flex-col justify-center px-8 md:px-20 bg-black">
                <div className="absolute top-8 left-8 md:left-20 text-white/40 text-sm font-mono tracking-widest">
                    0{current + 1} / 0{slides.length}
                </div>

                <div className="relative">
                    {slides.map((slide, index) => (
                        <div
                            key={slide.id}
                            className={`transition-all duration-1000 absolute top-1/2 -translate-y-1/2 left-0 w-full ${index === current ? 'opacity-100 transform translate-x-0 blur-0' : 'opacity-0 transform -translate-x-10 blur-sm pointer-events-none'}`}
                            style={{ position: index === current ? 'relative' : 'absolute' }}
                        >
                            <div className="overflow-hidden mb-2">
                                <h1 className="text-6xl md:text-8xl font-black text-white leading-[0.85] tracking-tighter">
                                    <span className="block">{slide.line1}</span>
                                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
                                        {slide.line2}
                                    </span>
                                </h1>
                            </div>
                            <p className="text-xl text-gray-400 mt-6 max-w-md font-light border-l-2 border-white/20 pl-6">
                                {slide.subtitle}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="mt-16 relative z-30">
                    <button className="px-8 py-4 bg-white text-black rounded-full font-bold text-lg hover:bg-gray-200 transition-colors flex items-center gap-3 group">
                        Get Tickets <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>
            </div>

            {/* Right: Image Slider */}
            <div className="w-full md:w-1/2 h-1/2 md:h-full relative overflow-hidden">
                {slides.map((slide, index) => (
                    <div
                        key={slide.id}
                        className={`absolute inset-0 transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] ${index === current ? 'clip-path-full opacity-100 scale-100' : 'clip-path-inset opacity-0 scale-110'}`}
                    >
                        <img
                            src={slide.image}
                            alt={slide.title}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/10"></div>
                    </div>
                ))}

                {/* Navigation Overlay */}
                <div className="absolute bottom-8 right-8 flex gap-4">
                    <button onClick={nextSlide} className="w-16 h-16 rounded-full bg-black/50 backdrop-blur-md text-white flex items-center justify-center hover:bg-white hover:text-black transition-all border border-white/10">
                        <FiArrowRight className="text-2xl" />
                    </button>
                </div>
            </div>

            {/* Global Progress Bar */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-white/10 z-30">
                <div
                    key={current} // Reset animation on slide change
                    className="h-full bg-white animate-progress origin-left"
                ></div>
            </div>

            <style>{`
                .clip-path-full { clip-path: inset(0 0 0 0); }
                .clip-path-inset { clip-path: inset(100% 0 0 0); }
                @keyframes progress {
                    from { transform: scaleX(0); }
                    to { transform: scaleX(1); }
                }
                .animate-progress {
                    animation: progress 6s linear forwards;
                }
            `}</style>
        </div>
    );
};

export default HeroCarousel;
