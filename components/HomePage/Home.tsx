import React from 'react'
import HeroSection from './heroSection/heroSection'
import Section from './section/Section'
import Section2 from './section2/Section2'
import Section3 from './section3/Section3'
import Section4 from './section4/Section4'
import AboutUs from './aboutus/aboutus'
import Footer from '../layout/footer/Footer'
import MakeCall from   './makecall/makecall'


// import withApollo from '@/hoc/withApollo'
import { useGetHomePage } from '../../apollo/actions'
 const Home: React.FC<{}> = () => {

    const { data , loading , error } = useGetHomePage();

    const cafes = data && data.cafes || [];

    console.log(data)
  
    if(  loading ) {
        return (
            null
        )
    }



    return (
        <div>
        <HeroSection/>
        <Section/>
        <Section2/>
        <Section3/>
        <Section4/>
        <AboutUs/>
        <MakeCall/>
        <Footer/>
        
        </div>
    )
}


export default Home