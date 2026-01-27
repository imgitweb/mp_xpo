import Hero2 from "../components/Hero2";
import Hero3 from "../components/Hero3";
import Hero4 from "../components/Hero4";
import Hero5 from "../components/Hero5";
import Hero6 from "../components/Hero6"; // Imported Hero6
import HeroCarousel from "../components/HeroCarousel";
import FeaturesSticky from "../components/FeaturesSticky";
import SpeakersMarquee from "../components/SpeakersMarquee";
import GalleryMasonry from "../components/GalleryMasonry";
import AgendaTimeline from "../components/AgendaTimeline";
import SponsorsGrid from "../components/SponsorsGrid";
import TestimonialsParallax from "../components/TestimonialsParallax";
import PricingTable from "../components/PricingTable";
import CTAMinimal from "../components/CTAMinimal";


const DesignPreview = () => (
    <div className="bg-black min-h-screen text-white">

        <div className="space-y-0">
            <div className="bg-zinc-900 py-6 px-6"><h3 className="text-zinc-500 font-mono text-center">--- HERO OPTION 6 (EDITORIAL KINETIC) ---</h3></div>
            <Hero6 />

            <div className="bg-zinc-900 py-6 px-6"><h3 className="text-zinc-500 font-mono text-center">--- HERO OPTION 5 (SAAS / CLEAN) ---</h3></div>
            <Hero5 />

            <div className="bg-zinc-900 py-6 px-6"><h3 className="text-zinc-500 font-mono text-center">--- HERO OPTION 4 (CINEMATIC) ---</h3></div>
            <Hero4 />

            <div className="bg-zinc-900 py-6 px-6"><h3 className="text-zinc-500 font-mono text-center">--- HERO OPTION 3 (BENTO GRID) ---</h3></div>
            <Hero3 />

            <div className="bg-zinc-900 py-6 px-6"><h3 className="text-zinc-500 font-mono text-center">--- HERO OPTION 2 (BENTO GRID) ---</h3></div>
            <Hero2 />

            <div className="bg-zinc-900 py-6 px-6"><h3 className="text-zinc-500 font-mono text-center">--- HERO OPTION 1 (SPLIT) ---</h3></div>
            <HeroCarousel />

            <div className="bg-zinc-900 py-12 px-6"><h3 className="text-zinc-500 font-mono text-center mb-8">--- STICKY FEATURES ---</h3></div>
            <FeaturesSticky />

            <div className="bg-zinc-900 py-12 px-6"><h3 className="text-zinc-500 font-mono text-center mb-8">--- ACCORDION SPEAKERS ---</h3></div>
            <SpeakersMarquee />

            <div className="bg-zinc-900 py-12 px-6"><h3 className="text-zinc-500 font-mono text-center mb-8">--- MASONRY GALLERY ---</h3></div>
            <GalleryMasonry />

            <div className="bg-zinc-900 py-12 px-6"><h3 className="text-zinc-500 font-mono text-center mb-8">--- SEQUENTIAL AGENDA ---</h3></div>
            <AgendaTimeline />

            <div className="bg-zinc-900 py-12 px-6"><h3 className="text-zinc-500 font-mono text-center mb-8">--- GRID SPONSORS ---</h3></div>
            <SponsorsGrid />

            <div className="bg-zinc-900 py-12 px-6"><h3 className="text-zinc-500 font-mono text-center mb-8">--- STAGGERED TESTIMONIALS ---</h3></div>
            <TestimonialsParallax />

            <div className="bg-zinc-900 py-12 px-6"><h3 className="text-zinc-500 font-mono text-center mb-8">--- INTERACTIVE PRICING ---</h3></div>
            <PricingTable />

            <div className="bg-zinc-900 py-12 px-6"><h3 className="text-zinc-500 font-mono text-center mb-8">--- MINIMAL CTA ---</h3></div>
            <CTAMinimal />
        </div>

        <div className="py-24 text-center">
            <p className="text-gray-500">End of Preview</p>
            <a href="/" className="inline-block mt-4 text-white underline">Back to Main Site</a>
        </div>
    </div>
);

export default DesignPreview;
