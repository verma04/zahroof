import React from 'react'
import HeroSection from './heroSection/heroSection'
 import Section from './section/Section'
 import Section2 from './section2/Section2'
import Footer from '../layout/footer/Footer'
 const Home: React.FC<{}> = () => {
    return (
        <div>
        <HeroSection/>
        <Section/>
       <Section2/>
        <Footer/>
        </div>
    )
}


export default Home