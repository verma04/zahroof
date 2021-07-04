import React from 'react'
import Home from '../components/enterpriseSolution/enterprise'
import withApollo from '../hoc/withApollo'
 
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
const Enterprise = ({data}) => {
    return (
        <div>
            <Home data={data} />
        </div>
    )
}


export async function getStaticProps() {
    const client = new ApolloClient({
        uri: 'http://18.217.254.134/graphql',
        cache: new InMemoryCache()
      });

    const   { data }  = await client.query({
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
    enterprisetwoitemOneImage
    enterprisetwoitemOneTitle
    enterprisetwoitemTwoImage
    enterprisetwoitemTwoTitle
    enterprisetwoitemThreeImage
    enterprisetwoitemThreeTitle
    enterprisetwoitemFourImage
    enterprisetwoitemFourTitle
    enterprisetwoitemFiveImage
    enterprisetwoitemFiveTitle
    enterprisetwoitemSixImage
    enterprisetwoitemSixTitle
    enterprisefirstcontent
    enterprisefourLeftImage
    enterprisefourRightContent
    enterprisefourBottomContent
    enterprisefiveLeftIcon
    enterprisefiveLeftContent
    enterprisefiveRightIcon
    enterprisefiveRightContent
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
  
        `
      });
      console.log(data.page)
    return {
      props: {
        data: data.page
      }
    }
  }

export default  withApollo(Enterprise)