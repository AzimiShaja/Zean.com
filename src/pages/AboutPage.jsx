import React from "react";
import AboutHero from "../components/AboutHero";
import Footer from "../components/Footer";
import Header from "../components/Header";

const AboutPage = () => {
  return (
    <>
      <Header navLink={1} />
      <AboutHero />
      <Footer />
    </>
  );
};

export default AboutPage;
