import React from "react";
import { Section } from "./Style";
import Image from "next/image";
import Navbar from "../../layout/navbar/navbar";

interface SectionNine {
  data: {
    valveasherofiveTopContent: string;
   
    valveasherofiveLeftTitle: string;
    valveasherofiveLeftIcon: string;
    valveasherofiveLeftContent: string;
    valveasherofiveRightTitle: string;
    valveasherofiveRightIcon: string;
    valveasherofiveRightContent: string;

  }; // Change the required prop to an optional prop.
}


const SectionNine: React.FC<SectionNine> = (data) => {
  const set:any = "           SEE WHAT WE'VE </br> DONE FOR OTHERS."
  return (
    <Section>
      <div className="section">
        <div className="section_top">
          <p dangerouslySetInnerHTML={{
            __html: data.data.valveasherofiveTopContent
          }} />
          <div className="tringle"></div>
        </div>

        <div className="section_bottom">
          <div className="section2_data">
            <div className="section2_data">
              <div className="section_bottom_set">
                <div className="section_bottom_data">

                  <li dangerouslySetInnerHTML={{
                    __html: data.data.valveasherofiveLeftTitle
                  }} />
                  <li>
                    <Image
                      alt="Picture of the author"
                      objectFit="contain"
                      layout="fill"
                      src={data.data.valveasherofiveLeftIcon}
                    />
                  </li>

                  <li>
                    <h3 dangerouslySetInnerHTML={{
                      __html: data.data.valveasherofiveLeftContent
                    }} />
                  </li>
                  <li>
                    <Image
                      alt="Picture of the author"
                      objectFit="contain"
                      layout="fill"
                      src="http://18.217.254.134/wp-content/uploads/2021/07/arrow-down.png"
                    />
                  </li>
                </div>
              </div>
            </div>

            <div className="section2_data">
              <div className="section_bottom_set">
                <div className="section_bottom_data">

                  <li dangerouslySetInnerHTML={{
                    __html: data.data.valveasherofiveRightTitle
                  }} />
                  <li>
                    <Image
                      alt="Picture of the author"
                      objectFit="contain"
                      layout="fill"
                      src={data.data.valveasherofiveRightIcon}
                    />
                  </li>

                  <li>
                    <h3 dangerouslySetInnerHTML={{
                      __html: data.data.valveasherofiveRightContent
                    }} />
                  </li>
                  <li>
                    <Image
                      alt="Picture of the author"
                      objectFit="contain"
                      layout="fill"
                      src="http://18.217.254.134/wp-content/uploads/2021/07/arrow-down.png"
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

export default SectionNine;
