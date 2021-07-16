import React from "react";
import { Section } from "./Style";
import Image from "next/image";
import Navbar from "../../layout/navbar/navbar";

interface HeroSectionProps {
  data: {
    enterprisethreeTopContent: string;
    enterprisethreebottomleftContent: string;
    enterprisethreebottomrightContent: string;
    enterprisethreeitemOneImage: string;
    enterprisethreeitemOneTitle: string;
    enterprisethreeitemTwoImage: string;
    enterprisethreeitemTwoTitle: string;
    enterprisethreeitemThreeImage: string;
    enterprisethreeitemThreeTitle: string;
    enterprisethreeitemFourImage: string;
    enterprisethreeitemFourTitle: string;
  };
}

const HeroSection: React.FC<HeroSectionProps> = (data) => {
  const data1: any =
    '  The stock in our very full warehouse went from about 10 pallets down to a few shelves of spare modules and gaskets.    ” ';
  return (
    <Section>
      <div className="section">
        <div className="section_top">
          <span id="top">{data1}</span>
          <span> - Customer Name</span>
        </div>
        <div className="section-bottom"></div>
        <div className="tringle"></div>
      </div>
    </Section>
  );
};

export default HeroSection;
