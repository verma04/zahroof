import React from 'react'
import HeroSection from './heroSection/heroSection'
import Section from './section/Section'

import Section3 from './section3/Section3'

import Section4 from './section4/Section4'
import Section5 from './section5/Section5'
import Section7 from './section7/Section&'
import Section6 from './section6/Section6'
import Footer from '../layout/footer/Footer'
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
        <Section3/>
     
        <Section4/>
        <Section5/>
        <Section6/>
        <Section7/>
        <Footer/>
        </div>
    )
}


export default Home