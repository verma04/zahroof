import React from "react";
import { Section } from "./Style";
import Image from "next/image";
import Navbar from "../../layout/navbar/navbar";

interface SectionFiveProps {
  data: {
    engineeringfourbottomcontent: string;
    engineeringfiveLeftTitle: string;
    engineeringfiveLeftIcon: string;
    engineeringfiveLeftContent: string;
    engineeringfiveRightTitle: string;
    engineeringfiveRightIcon: string;
    engineeringfiveRightContent: string;
  }; // Change the required prop to an optional prop.
}

const HeroSection: React.FC<SectionFiveProps> = (data) => {
  return (
    <Section>
      <div className="section">
        <div className="section_top">
          <p
            dangerouslySetInnerHTML={{
              __html: data.data.engineeringfourbottomcontent,
            }}
          />
          <div className="tringle"></div>
        </div>

        <div className="section_bottom">
          <div className="section2_data">
            <div className="section2_data">
              <div className="section_bottom_set">
                <div className="section_bottom_data">
                  <li
                    dangerouslySetInnerHTML={{
                      __html: data.data.engineeringfiveLeftTitle,
                    }}
                  />
                  <li>
                    <Image
                      alt="Picture of the author"
                      objectFit="contain"
                      layout="fill"
                      src={data.data.engineeringfiveLeftIcon}
                    />
                  </li>
                  <li
                    dangerouslySetInnerHTML={{
                      __html: data.data.engineeringfiveLeftContent,
                    }}
                  />
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
                  <li
                    dangerouslySetInnerHTML={{
                      __html: data.data.engineeringfiveRightTitle,
                    }}
                  />
                  <li>
                    <Image
                      alt="Picture of the author"
                      objectFit="contain"
                      layout="fill"
                      src={data.data.engineeringfiveRightIcon}
                    />
                  </li>
                  <li
                    dangerouslySetInnerHTML={{
                      __html: data.data.engineeringfiveRightContent,
                    }}
                  />
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

        <div className="section_bottom-1">
          <span>Redefining value in years , instend of months</span>
        </div>
      </div>
    </Section>
  );
};

export default HeroSection;
