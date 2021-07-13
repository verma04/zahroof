import React, { useEffect } from "react";
import { Section } from "./Style";
import Image from "next/image";
import Navbar from "../../layout/navbar/navbar";
import AOS from "aos";
import "aos/dist/aos.css";

interface HeroSection {
  data: {
    valveasherobannercontent: string;
  }; // Change the required prop to an optional prop.
}

const HeroSection: React.FC<HeroSection> = (data) => {
  useEffect(() => {
    AOS.init({
      duration: 5000,
    });
  }, []);
  return (
    
  
    <Section>
      <Navbar />

      <div className="homePage-hero">
        {/* <Image     objectFit="cover" layout="fill" src={'https://res.cloudinary.com/dzcmadjl1/image/upload/v1624085963/ks5kmugbnmzubbsxoiyc.png'} alt="Picture of the herosection" /> */}

        <div className="homePage-layer">
          <div
            aos-duration="10000"
            data-aos="zoom-in"
            className="homePage-data"          
            dangerouslySetInnerHTML={{ __html: data.data.valveasherobannercontent }} />
        </div>
      </div>
    </Section>
  );
};

export default HeroSection;
