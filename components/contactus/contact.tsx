import React from 'react'
import HeroSection from './heroSection/heroSection'
 import Section from './section/Section'

import Footer from '../layout/footer/Footer'
 const Home: React.FC<{}> = () => {
    return (
        <div>
        <HeroSection/>
        <Section/>
       
        <Footer/>
        </div>
    )
}


export default Home