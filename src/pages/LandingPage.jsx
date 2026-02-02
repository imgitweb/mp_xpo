import { About, Agenda, FAQ, Features, Footer, Hero, Navbar, Pricing, Speakers, Stats } from "../components";
import Organizers from "../components/Organizers";
import Panel from "../components/PanelDiscussion";
import SpeakersMarquee from "../components/SpeakersMarquee";
import SponsorsGrid from "../components/SponsorsGrid";
import VenueFlow from "../components/Venue";


const LandingPage = () => (
  <>
    <Navbar />
    <main className="flex-grow">
      <Hero />
      <Stats />
      <Features />
      {/* <Speakers /> */}
      {/* <SpeakersMarquee /> */}
               <SponsorsGrid />
      <Agenda />
       <Panel />
       <VenueFlow />
   
      <Pricing />

      <Organizers />
      {/* <Sponsors /> */}

      <About />
      <FAQ />
    </main>
    <Footer />
  </>
);

export default LandingPage;
