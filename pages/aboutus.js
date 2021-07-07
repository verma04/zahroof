import React from "react";
import About from "../components/aboutus/about";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
const index = ({ data }) => {
  return (
    <div>
      <About data={data} />
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
        page(id: "cG9zdDo1MQ==") {
          id
          pageId
          title
          featuredImage {
            node {
              title
              sourceUrl
            }
          }
          content
          aboutfirstleftContent
          aboutfirstrightContent
          aboutsecondleftContent
          aboutsecondrightImage
          aboutsecondrightContent
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
  console.log(data.page);
  return {
    props: {
      data: data.page,
    },
    revalidate: 1,
  };
}

export default index;
