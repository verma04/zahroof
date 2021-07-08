import React from "react";
import Home from "../components/engineeringSolution/engneering";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
const Enterprise = ({ data }) => {
  return (
    <div>
      <Home data={data} />
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
        page(id: "cG9zdDozNw==") {
          id
          pageId
          title
          featuredImage {
            node {
              title
              sourceUrl
            }
          }
          engineeringbannerleftcontent
          engineeringbannerrightcontent
          engineeringfirstleftcontent
          engineeringfirstrightcontent
          engineeringtwoleftcontent
          engineeringtworightcontent
          engineeringthreeleftimage
          engineeringthreerightcontent
          engineeringfourleftimage
          engineeringfourrightcontent
          engineeringfourbottomcontent
          engineeringfiveLeftTitle
          engineeringfiveLeftIcon
          engineeringfiveLeftContent
          engineeringfiveRightTitle
          engineeringfiveRightIcon
          engineeringfiveRightContent
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

export default Enterprise;
