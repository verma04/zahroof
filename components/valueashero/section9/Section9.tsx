import React from "react";
import { Section } from "./Style";
import Image from "next/image";
import Navbar from "../../layout/navbar/navbar";

const HeroSection: React.FC<{}> = () => {
  return (
    <Section>
      <div className="section">
        <div className="section_top">
          <p>
            a 10-Year Limited Warranty on the stainless steel seat and carrier
          </p>
          <div className="tringle"></div>
        </div>

        <div className="section_bottom">
          <div className="section2_data">
            <div className="section2_data">
              <div className="section_bottom_set">
                <div className="section_bottom_data">

                <li>
SEE HOW TO SELL
IT UP THE LADDER
                
                  </li>
                  <li>
                    <Image
                      alt="Picture of the author"
                      objectFit="contain"
                      layout="fill"
                      src="http://18.217.254.134/wp-content/uploads/2021/06/ruhkeqvmgfhctlmiswih.png"
                    />
                  </li>

                  <li>
                    <h3>ENTERPRISE SOLUTIONS</h3>
                  </li>
                  <li>
                    <Image
                      alt="Picture of the author"
                      objectFit="contain"
                      layout="fill"
                      src="https://res.cloudinary.com/dzcmadjl1/image/upload/v1624356837/zh1sycnu12s4n75hizoj.png"
                    />
                  </li>
                </div>
              </div>
            </div>

            <div className="section2_data">
              <div className="section_bottom_set">
                <div className="section_bottom_data">

                  <li>
                  SEE WHAT WE VE
DONE FOR OTHERS
                    </li>
                  <li>
                    <Image
                      alt="Picture of the author"
                      objectFit="contain"
                      layout="fill"
                      src="http://18.217.254.134/wp-content/uploads/2021/06/w2u44k0jrx10hakvnri2.png"
                    />
                  </li>

                  <li>
                    <h3>Case Studies</h3>
                  </li>
                  <li>
                    <Image
                      alt="Picture of the author"
                      objectFit="contain"
                      layout="fill"
                      src="https://res.cloudinary.com/dzcmadjl1/image/upload/v1624356837/zh1sycnu12s4n75hizoj.png"
                    />
                  </li>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
    </Section>
  );
};

export default HeroSection;
