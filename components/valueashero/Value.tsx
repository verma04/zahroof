import React from "react";
import HeroSection from "./heroSection/heroSection";
import Section from "./section/Section";
import Section2 from "./section2/Section2";
import Section3 from "./section3/Section3";
import Section4 from "./section4/Section4";
import Section5 from "./section5/Section5";
import Section6 from "./section6/Section6";
import Section7 from "./section7/Section7";
import Section8 from "./section8/Section8";
import Section9 from "./section9/Section9";
import Footer from "../layout/footer/Footer";
import Makecall from "../HomePage/makecall/makecall";

const Home: React.FC<{}> = () => {
  return (
    <div>
      <HeroSection />
      <Section />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Section8 />
      <Section9 />
      <Makecall/>
      <Footer />

    </div>
  );
};

export default Home;
