import React from 'react'
import HeroSection from './heroSection/heroSection'
import Section from './section/Section'

import Section3 from './section3/Section3'

import Section4 from './section4/Section4'
import Section5 from './section5/Section5'
import Section6 from './section6/Section6'
import Footer from '../layout/footer/Footer'
 const Home: React.FC<{}> = () => {
    return (
        <div>
        <HeroSection/>
        <Section/>
        <Section3/>
     
        <Section4/>
        <Section5/>
        <Section6/>
        <Footer/>
        </div>
    )
}


export default Home