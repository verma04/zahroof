import React from "react";
import { Section } from "./Style";
import Image from "next/image";
import Navbar from "../../layout/navbar/navbar";

const HeroSection: React.FC<{}> = () => {
  const set:any = '  <h2>INTERCHANGABLE EASY TO RE-RATE</h2>     <p>   StraightFlo<sup>TM</sup> modules are truly interchangeable between valves, whether they’re 1.5" in diameter or greater than 14"; whether they’re suction or  discharge valves; whether the valve goes into a cylinder made by Manufacturer X or Manufacturer Y.   </p>        <p>  They’re also easy to re-rate for a new application—just change out the present modules with modules rated for the new application. As long as the valve seat is pressure-rated for the new application, you now have a valve for a brand new application at very little cost.    </p>  '
  return (
    <Section>
      <div className="section4">
        <Image
          objectFit="cover"
          layout="fill"
          src={
            "https://res.cloudinary.com/dzcmadjl1/image/upload/v1624000545/rsukles8twyiyukry6ws.png"
          }
          alt="Picture of the author"
        />
        <div className="section2_data">
          <div
           dangerouslySetInnerHTML={{
            __html: set,
          }} 
          className="section2_data_left">
           
         


             
   

          </div>
          <div className="section2_data_right">
            <Image
              alt="Picture of the author"
              objectFit="contain"
              layout="fill"
              src={
                "https://res.cloudinary.com/dzcmadjl1/image/upload/v1624355241/kz4jyzl52yocggw1ol9a.png"
              }
            />
          </div>
        </div>

        <div className="tringle"></div>
      </div>
    </Section>
  );
};

export default HeroSection;
