import React from "react";
import ContactForm from "./components/ContactForm";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";
import FindDoctor from "./components/FindDoctor";
import TargetCursor from "./components/cursor/TargetCursor";
import ServiceCards from "./components/ServiceCards";
import SlotSchedule from "./components/SlotSchedule";

function App() {
  return (
    <div className=" mx-auto space-y-5">
      <TargetCursor />
      <Navbar />
      <HeroSection/>
      <FindDoctor/>
      <ContactForm />
      <ServiceCards />
      <SlotSchedule />
      <Footer />
    </div>
  );
}

export default App;
