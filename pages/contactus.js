import React from "react";
import Contact from "../components/contactus/contact";
import withApollo from "../hoc/withApollo";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
const index = ({ data }) => {
  return (
    <div>
      <Contact data={data} />
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
        page(id: "cG9zdDo0OQ==") {
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
          contactaddress
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

export default withApollo(index);
