import React from 'react'
import HeroSection from './heroSection/heroSection'
import Section from './section/Section'
import Makecall from '../HomePage/makecall/makecall'
import Section6 from './section6/Section6'
import Section7 from './section7/Section7'
import Section8 from './section8/Section8'
import Section9 from './section9/Section9'
import Footer from '../layout/footer/Footer'
 const Home: React.FC<{}> = () => {
    return (
        <div>
        <HeroSection/>
        <Section/>
        <Section6/>
        <Section7/>
        <Section8/>
        <Section9/>
        <Makecall/>
        <Footer/>
       
        </div>
    )
}


export default Home