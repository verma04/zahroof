import React, { useEffect } from "react";
import { Section } from "./Style";
import Image from "next/image";
import Navbar from "../../layout/navbar/navbar";
import AOS from "aos";
import "aos/dist/aos.css";
import { Parallax, Background } from "react-parallax";

const HeroSection: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 5000,
    });
  }, []);
  return (
    <Section>
      <Navbar />
  
  

      <Parallax bgImage={"https://app.zahroofvalves.com/wp-content/uploads/2021/08/shutterstock_1488518939-scaled.jpg"} strength={500}>
        <div className="homePage-hero">
          <div className="homePage-layer">
            <div
              aos-duration="10000"
              data-aos="zoom-in"
              className="homePage-data"
            >
            
            </div>
          </div>
        </div>
      </Parallax>
      <Parallax bgImage={"https://app.zahroofvalves.com/wp-content/uploads/2021/08/Layer-796-2.png"} strength={500}>
        <div className="homePage-hero">
          <div className="homePage-layer">
            <div
              aos-duration="10000"
              data-aos="zoom-in"
              className="homePage-data"
            >
              <ul>
                <li>CASE STUDIES </li>
              </ul>
            </div>
          </div>
        </div>
      </Parallax>
    
      <Parallax bgImage={"https://app.zahroofvalves.com/wp-content/uploads/2021/08/shutterstock_109681469-scaled.jpg"} strength={500}>
        <div className="homePage-hero">
          <div className="homePage-layer">
            <div
              aos-duration="10000"
              data-aos="zoom-in"
              className="homePage-data"
            >
             
            </div>
          </div>
        </div>
      </Parallax>
    

    
    </Section>
  );
};

export default HeroSection;
