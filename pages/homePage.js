import React from 'react'
import Home from '../components/HomePage/Home'
import withApollo from '../hoc/withApollo'

import { ApolloClient, InMemoryCache, gql } from '@apollo/client';



 const homePage = ({data}) => {

    
   console.log9
    
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
  page(id: "cG9zdDo2") {
    title
    pageId
    uri
    status
    homebannercontent
    honebannerimageurl
    firstLeftBgimage
    firstLeftHeading
    firstLeftIcon
    firstLeftTitle
    firstRightBgimage
    firstRightHeading
    firstRightIcon
    firstRightTitle
    homeSecondLeftContent
    homeSecondRightImageOne
    homeSecondRightTitleOne
    homeSecondRightImageTwo
    homeSecondRightTitleTwo
    homeSecondRightImageThree
    homeSecondRightTitleThree
    homeSecondRightImageFour
    homeSecondRightTitleFour
    homeThreeLeftHeading
    homeThreeRightHeading
    homeThreeRightLink
    homeFourHeading
    homeFourImageurl
    homeFiveImageurl
    homeFiveRightContent
    homeSixCaseStudyContent
    homeSixCaseStudyButtonUrl
    homeSixRightOneImage
    homeSixRightOneName
    homeSixRightTwoImage
    homeSixRightTwoName
    content
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

export default withApollo(homePage);


