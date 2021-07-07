import React from "react";
import { Section } from "./Style";
import Image from "next/image";
import Navbar from "../../layout/navbar/navbar";

interface Section {
  data: {
    esgbenifitsfirstRightOneContent: string;
    esgbenifitsfirstRightThreeContent: string;
    esgbenifitsfirstRightTwoContent: string;
    esgbenifitsfirstleftcontent: string;
    esgbenifitsfirstrightoneicon: string;
    esgbenifitsfirstrightthreeicon: string;
    esgbenifitsfirstrighttwoicon: string;
  };
}
const HeroSection: React.FC<Section> = (data) => {
  return (
    <Section>
      <div className="section">
        <div className="section-1">
          <div className="wrapper">
            <div className="section-data">
              <div
                dangerouslySetInnerHTML={{
                  __html: data.data.esgbenifitsfirstleftcontent,
                }}
                className="left"
              >
                {/* <ul>





      <li> REDUCE </li> 
       
       <li>ENVIRONMENTAL</li>
      <li>IMPACT</li>
      
   </ul>
<p>
Replacing conventional valves with Straight FloTM Valves
blow down of pipes. From 5x to 25x less.
improves compressor performance and efficiency, making
the collection, transfer and distribution
energy
resources more eco-friendly. By keeping more gas moving
through your system, there s far less to flare.

</p> */}
              </div>
              <div className="right">
                <div className="right_logo">
                  <div className="logo-wrapper">
                    <Image
                      objectFit="contain"
                      layout="fill"
                      src={data.data.esgbenifitsfirstrightoneicon}
                      alt="Picture of the author"
                    />
                  </div>
                  <p>{data.data.esgbenifitsfirstRightOneContent}</p>
                </div>
                <div className="right_logo">
                  <div className="logo-wrapper">
                    <Image
                      objectFit="contain"
                      layout="fill"
                      src={data.data.esgbenifitsfirstrighttwoicon}
                      alt="Picture of the author"
                    />
                  </div>
                  <p>{data.data.esgbenifitsfirstRightTwoContent}</p>
                </div>

                <div className="right_logo">
                  <div className="logo-wrapper">
                    <Image
                      objectFit="contain"
                      layout="fill"
                      src={data.data.esgbenifitsfirstrightthreeicon}
                      alt="Picture of the author"
                    />
                  </div>
                  <p>{data.data.esgbenifitsfirstRightThreeContent}</p>
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
