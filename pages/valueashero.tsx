import React from "react";
import Home from "../components/valueashero/Value";

import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
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
        valueasherobannercontent: string

        valueasherofirstcontent: string

        valueasherofirstbottomcontent: string
        valueasherotwoitemOneImage: string
        valueasherotwoitemOneTitle: string
        valueasherotwoitemTwoImage: string
        valueasherotwoitemTwoTitle: string
        valueasherotwoitemThreeImage: string
        valueasherotwoitemThreeTitle: string
        valueasherotwoitemFourImage: string
        valueasherotwoitemFourTitle: string
        valueasherotwoitemFiveImage: string
        valueasherotwoitemFiveTitle: string
        valueasherotwoitemSixImage: string
        valueasherotwoitemSixTitle: string
        valueasheroTwoContent: string
        valueasherothreeTopContent: string
        valueasherothreebottomleftContent: string
        valueasherothreebottomrightContent: string
        valueasherothreeitemOneImage: string
        valueasherothreeitemOneTitle: string
        valueasherothreeitemTwoImage: string
        valueasherothreeitemTwoTitle: string
        valueasherothreeitemThreeImage: string
        valueasherothreeitemThreeTitle: string
        valueasherothreeitemFourImage: string
        valueasherothreeitemFourTitle: string
        valueasherofourLeftImage: string
        valueasherofourRightContent: string
        valueasherofiveLeftTitle: string
        valueasherofourBottomContent: string
        valueasherofiveLeftIcon: string
        valueasherofiveRightTitle: string
        valueasherofiveLeftContent: string
        valueasherofiveRightIcon: string
        valueasherofiveRightContent: string


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


const ValueasHero: React.FC<Valueashero> = ({ data }) => {
    return (
        <div>
            <Home />
        </div>
    );
};

export async function getStaticProps() {
    const client = new ApolloClient({
        uri: "http://18.217.254.134/graphql",
        cache: new InMemoryCache(),
    });

    const { data } = await client.query({
        query: gql`
      query MyQuery {
        page(id: "cG9zdDoyNA==") {
          title
          pageId
          uri
          status
          featuredImage {
            node {
              title
              sourceUrl
            }
          }
          valueasherobannercontent

          valueasherofirstcontent

          valueasherofirstbottomcontent
          valueasherotwoitemOneImage
          valueasherotwoitemOneTitle
          valueasherotwoitemTwoImage
          valueasherotwoitemTwoTitle
          valueasherotwoitemThreeImage
          valueasherotwoitemThreeTitle
          valueasherotwoitemFourImage
          valueasherotwoitemFourTitle
          valueasherotwoitemFiveImage
          valueasherotwoitemFiveTitle
          valueasherotwoitemSixImage
          valueasherotwoitemSixTitle
          valueasheroTwoContent
          valueasherothreeTopContent
          valueasherothreebottomleftContent
          valueasherothreebottomrightContent
          valueasherothreeitemOneImage
          valueasherothreeitemOneTitle
          valueasherothreeitemTwoImage
          valueasherothreeitemTwoTitle
          valueasherothreeitemThreeImage
          valueasherothreeitemThreeTitle
          valueasherothreeitemFourImage
          valueasherothreeitemFourTitle
          valueasherofourLeftImage
          valueasherofourRightContent
          valueasherofiveLeftTitle
          valueasherofourBottomContent
          valueasherofiveLeftIcon
          valueasherofiveRightTitle
          valueasherofiveLeftContent
          valueasherofiveRightIcon
          valueasherofiveRightContent
          seo {
            title
            metaDesc
            metaKeywords
            focuskw
            canonical
            cornerstone
            fullHead
            metaRobotsNofollow
            metaRobotsNoindex
            opengraphAuthor
            opengraphDescription
            opengraphModifiedTime
            opengraphPublishedTime
            opengraphPublisher
            opengraphSiteName
            opengraphTitle
            opengraphType
            opengraphUrl
            readingTime
            twitterDescription
            twitterTitle
          }
        }
      }
    `,
    });

    return {
        props: {
            data: data.page,
        },
        revalidate: 1,
    };
}

export default ValueasHero;
