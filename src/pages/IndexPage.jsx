import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Work from "../components/Work";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";

export default function IndexPage() {
  const [contentLoaded, setContentLoaded] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setContentLoaded(true);
    }, 100);
  });

  return (
    <div className={`${contentLoaded ? "translate" : "not-translate"}`}>
      <Header />
      <Hero />
      <About />
      <Work />
      <Testimonials />
      <Footer />
    </div>
  );
}
