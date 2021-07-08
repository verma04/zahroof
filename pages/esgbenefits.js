import React from "react";
import Esg from "../components/esg/esg";
import withApollo from "../hoc/withApollo";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
const index = ({ data }) => {
  return (
    <div>
      <Esg data={data} />
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
        page(id: "cG9zdDozOQ==") {
          id
          pageId
          title
          featuredImage {
            node {
              title
              sourceUrl
            }
          }
          esgbenifitsbannerimage
          esgbenifitsbannerrightcontent
          esgbenifitsfirstleftcontent
          esgbenifitsfirstrightoneicon
          esgbenifitsfirstRightOneContent
          esgbenifitsfirstrighttwoicon
          esgbenifitsfirstRightTwoContent
          esgbenifitsfirstrightthreeicon
          esgbenifitsfirstRightThreeContent
          esgbenifitstwoleftcontent
          esgbenifitstworightoneicon
          esgbenifitstwoRightOneContent
          esgbenifitstworighttwoicon
          esgbenifitstwoRightTwoContent
          esgbenifitstworightthreeicon
          esgbenifitstwoRightThreeContent
          esgbenifitsthreerightcontent
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
