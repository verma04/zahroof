import React from "react";
import HeroSection from "./heroSection/heroSection";
import Section from "./section/Section";
import Section2 from "./section2/Section2";
import Section3 from "./section3/Section3";
import Section4 from "./section4/Section4";
import Section5 from "./section5/Section5";
import Section6 from "./section6/Section6";
import Section7 from "./section7/Section7";
import Section8 from "./section8/Section8";
import Section9 from "./section9/Section9";
import Footer from "../layout/footer/Footer";
import Makecall from "../HomePage/makecall/makecall";

interface Valueashero {
  data: {
    title: any
    pageId: any
    uri: any
    status: any
    featuredImage: {
      node: {
        title: any
        sourceUrl: any
      }
    }
    valveasherobannercontent: string
    valveasherofirstbottomcontent: string
    valveasherofirstcontent: string
    valveasheroTwoContent: string
    valveasherofiveLeftIcon: string
    valveasherofiveLeftContent: string
    valveasherofiveLeftTitle: string
    valveasherofiveRightContent: string
    valveasherofiveRightIcon: string
    valveasherofiveRightTitle: string
    valveasherofiveTopContent: string
    valveasherofourLeftContent: string
    valveasherofourRightContent: string
    valveasherosevenLeftContent: string
    valveasherosevenRightContent: string
    valveasherofourRightImage: string
    valveasherothreeLeftContent: string
    valveasherothreeLeftImage: string
    valveasherothreeRightContent: string
    valveasherotwoitemFiveImage: string
    valveasherotwoitemFiveTitle: string
    valveasherotwoitemFourImage: string
    valveasherotwoitemFourTitle: string
    valveasherotwoitemOneImage: string
    valveasherotwoitemOneTitle: string
    valveasherotwoitemSixImage: string
    valveasherotwoitemSixTitle: string
    valveasherotwoitemThreeImage: string
    valveasherotwoitemThreeTitle: string
    valveasherotwoitemTwoImage: string
    valveasherotwoitemTwoTitle: string
    valveasherosixLeftContent: string
    valveasherosixRightImageOne: string
    valveasherosixRightImageTwo: string
    valveasheronineleftcontent: string
    valveasheroninerightimage: string
    valveasheroeighthleftcontent: string
    valveasheroeighthrightimage: string


    seo: {
      title: string
      metaDesc: string
      metaKeywords: string
      focuskw: string
      canonical: string
      cornerstone: string
      fullHead: string
      metaRobotsNofollow: string
      metaRobotsNoindex: string
      opengraphAuthor: string
      opengraphDescription: string
      opengraphModifiedTime: string
      opengraphPublishedTime: string
      opengraphPublisher: string
      opengraphSiteName: string
      opengraphTitle: string
      opengraphType: string
      opengraphUrl: string
      readingTime: string
      twitterDescription: string
      twitterTitle: string
    }

  };
}

const Valueashero: React.FC<Valueashero> = ({data}) => {
  return (
    <div>
      <HeroSection data={data} />
      <Section data={data} />
      <Section2 data={data} />
      <Section3 data={data} />
      <Section4 data={data} />
      <Section5 data={data} />
      <Section6 data={data} />
      <Section7 data={data} />
      <Section8 data={data} />
      <Section9 data={data} />
      <Makecall />
      <Footer />

    </div>
  );
};

export default Valueashero;
