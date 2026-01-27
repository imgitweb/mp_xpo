import { Agenda, FAQ, Features, Footer, Hero, Navbar, Pricing, Speakers, Stats } from "../components";
import SpeakersMarquee from "../components/SpeakersMarquee";
import SponsorsGrid from "../components/SponsorsGrid";

const LandingPage = () => (
  <>
    <Navbar />
    <main className="flex-grow">
      <Hero />
      <Stats />
      <Features />
      {/* <Speakers /> */}
      <SpeakersMarquee />
               <SponsorsGrid />
      <Agenda />
      <Pricing />
      {/* <Sponsors /> */}
      <FAQ />
    </main>
    <Footer />
  </>
);

export default LandingPage;
