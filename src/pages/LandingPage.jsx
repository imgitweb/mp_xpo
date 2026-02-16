import React from 'react';
import { About, Agenda, FAQ, Features, Footer, Hero, Navbar, Pricing, Speakers, Stats } from "../components";
import Organizers from "../components/Organizers";
import Panel from "../components/PanelDiscussion";
// import SpeakersMarquee from "../components/SpeakersMarquee"; // Commented out in your code
import SponsorsGrid from "../components/SponsorsGrid";
import VenueFlow from "../components/Venue";
import RegistrationPopup from "../components/RegistrationPopup"; // ✅ Import Here

const LandingPage = () => (
  <>
    {/* ✅ Add Popup Component Here (It will overlay everything) */}
    <RegistrationPopup />

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
      
      {/* Ensure this section has id="pricing" for smooth scroll */}
      <div id="pricing"> 
        <Pricing />
      </div>

      <Organizers />
      {/* <Sponsors /> */}

      <About />
      <FAQ />
    </main>
    <Footer />
  </>
);

export default LandingPage;