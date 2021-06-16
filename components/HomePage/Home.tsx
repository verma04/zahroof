import React from 'react'
import HeroSection from './heroSection/heroSection'
import Section from './section/Section'
 const Home: React.FC<{}> = () => {
    return (
        <div>
        <HeroSection/>
        <Section/>
        </div>
    )
}


export default Home