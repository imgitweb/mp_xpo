import { Agenda, FAQ, Features, Footer, Hero, Navbar, Pricing, Speakers, Stats } from "../components";
import Organizers from "../components/Organizers";
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

      <Organizers />
      {/* <Sponsors /> */}
      <FAQ />
    </main>
    <Footer />
  </>
);

export default LandingPage;
