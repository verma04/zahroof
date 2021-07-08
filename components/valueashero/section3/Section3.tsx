import React from "react";
import { Section } from "./Style";
import Image from "next/image";
import Navbar from "../../layout/navbar/navbar";

const HeroSection: React.FC<{}> = () => {
  
   const set: any = "    <h2>How IT works</h2>  <p> Our modular design features interchangeable modules held stationary between the valve seat and carrier. There are 12 standard modules in 3 materials, each with varying reed lift and stiffness, so StraightFlo<sup>TM</sup> valves can cover all speeds and  operating conditions of existing industrial compressors and be optimized for any given application.  </p>     "

  return (
    <Section>
      <div className="section3">
        <div className="section2_data">
          <div className="section2_data_left">

            <div  className="set"    dangerouslySetInnerHTML={{
              __html: set,
            }} >


              </div>
           

            <div className="img_wrapper">
              <Image
                objectFit="contain"
                layout="fill"
                src={
                  "https://res.cloudinary.com/dzcmadjl1/image/upload/v1625309981/xjxpnm9pykh2hyhuymgt.png"
                }
                alt="Picture of the author"
              />
            </div>
          </div>
          <div className="section2_data_right">
            <h3>TECH HEAD SIDEBAR</h3>
            <p>
              Our modular design features interchangeable modules held
              stationary We use our proprietary Dynamic Valve Sizing between the
              valve seat and carrier. There are 12 standard modules in Program
              to determine the optimum module for 3 materials each with varying
              reed lift and stiffness so StraightFloTM your situation. This
              program simulates the valves In the cylinder for the given
              application using valves can cover all speeds and operating
              conditions of existing NIST real gas properties to calculate the
              reed industrial compressors and be optimized for any given
              application.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default HeroSection;
