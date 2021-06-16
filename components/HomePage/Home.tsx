import React from 'react'
import HeroSection from './heroSection/heroSection'
import Section from './section/Section'
import Section2 from './section2/Section2'
import Section3 from './section3/Section3'
import Section4 from './section4/Section4'
 const Home: React.FC<{}> = () => {
    return (
        <div>
        <HeroSection/>
        <Section/>
        <Section2/>
        <Section3/>
        <Section4/>
        </div>
    )
}


export default Home