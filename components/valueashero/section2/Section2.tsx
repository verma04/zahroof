import React from "react";
import { Section } from "./Style";
import Image from "next/image";
import Navbar from "../../layout/navbar/navbar";

const HeroSection: React.FC<{}> = () => {
  return (
    <Section>
      <div className="section2">
        <div className="section2_data">
          <div className="section2_top">
            <div className="logo">
              <div className="wrapper">
                <Image
                  objectFit="contain"
                  layout="fill"
                  src={
                    "https://res.cloudinary.com/dzcmadjl1/image/upload/v1624346390/pwwwdrq3uayndd0rdo96.png"
                  }
                  alt="Picture of the author"
                />
              </div>
              <p>
                INCREASES INCREMENTAL REVENUE BY HUNDREDS OF THOUSANDS TO
                MILLIONS OF DOLLARS
              </p>
            </div>
            <div className="logo">
              <div className="wrapper">
                <Image
                  objectFit="contain"
                  layout="fill"
                  src={
                    "https://res.cloudinary.com/dzcmadjl1/image/upload/v1624346390/i1838bk5jeu2ysxgwoaq.png"
                  }
                  alt="Picture of the author"
                />
              </div>
              <p>REDUCES POWER CONSUMPTION BY 5-15%</p>
            </div>
            <div className="logo">
              <div className="wrapper">
                <Image
                  objectFit="contain"
                  layout="fill"
                  src={
                    "https://res.cloudinary.com/dzcmadjl1/image/upload/v1624346390/lzdhjmxmm14aiukd93em.png"
                  }
                  alt="Picture of the author"
                />
              </div>
              <p>GUARANTEED 5-20% THROUGHPUT IMPROVEMENT</p>
            </div>
            <div className="logo">
              <div className="wrapper">
                <Image
                  objectFit="contain"
                  layout="fill"
                  src={
                    "https://res.cloudinary.com/dzcmadjl1/image/upload/v1624346390/gkvlyeikv9dkymhpofrs.png"
                  }
                  alt="Picture of the author"
                />
              </div>
              <p>
                REDUCES SERVICE COSTS, ALL BUT ELIMINATES UNSCHEDULED COMPRESSOR
                DOWNTIME
              </p>
            </div>
            <div className="logo">
              <div className="wrapper">
                <Image
                  objectFit="contain"
                  layout="fill"
                  src={
                    "https://res.cloudinary.com/dzcmadjl1/image/upload/v1624346390/jfg7ajopgu0szchdrbfd.png"
                  }
                  alt="Picture of the author"
                />
              </div>
              <p>REDUCES INVENTORY COSTS BY AS MUCH AS 80%</p>
            </div>
            <div className="logo">
              <div className="wrapper">
                <Image
                  objectFit="contain"
                  layout="fill"
                  src={
                    "https://res.cloudinary.com/dzcmadjl1/image/upload/v1624346390/mcoz0vzmrueea4tei6dy.png"
                  }
                  alt="Picture of the author"
                />
              </div>
              <p>
                REDUCES # OF EMISSION EVENTS AND FUGITIVE EMISSIONS INTENSITY
              </p>
            </div>
          </div>
          <div className="section2_bottom">
            <h4>
              THE BENEFITS CAN EASILY ADD UP TO TENS OF MILLIONS OF DOLLARS
              ACROSS A SINGLE FIELD WHILE ALSO HELPING COMPANIES MEET OR EXCEED
              ENVIRONMENTAL STANDARDS.
            </h4>
          </div>
        </div>
        <div className="tringle"></div>
      </div>
    </Section>
  );
};

export default HeroSection;
