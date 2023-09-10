import React from "react";
import VideoBack from "../components/VideoBack";
import NavbarMain from "../components/Navbar";
import Hero from "../components/Hero";
import Hero2 from "../components/Hero2";
import Footer from "../components/Footer";
import LogoHero from "../components/LogoHero";
import StaffHero from "../components/StaffHero";

function HomePage() {
  return (
    <>
      <NavbarMain />
      <VideoBack />

      <Hero2 />
      <Hero />
      <LogoHero />
      <StaffHero />
      <Footer />
    </>
  );
}

export default HomePage;
