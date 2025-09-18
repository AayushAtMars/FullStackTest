import React from "react";
import ContactForm from "./components/ContactForm";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";
import FindDoctor from "./components/FindDoctor";
import TargetCursor from "./components/cursor/TargetCursor";

function App() {
  return (
    <div className=" mx-auto space-y-5">
      <TargetCursor />
      <Navbar />
      <HeroSection/>
      <FindDoctor/>
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
