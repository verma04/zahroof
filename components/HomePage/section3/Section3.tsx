
import React from 'react'
import { Section} from './Style'
import Image from 'next/image'
import  Navbar from '../../layout/navbar/navbar'

 const HeroSection: React.FC<{}> = () => {
    return (
        <Section>
        
           
           <div className="section3" >
           <Image     objectFit="cover" layout="fill" src={'https://res.cloudinary.com/dzcmadjl1/image/upload/v1623832335/dcq0bjsymekne3vwnhww.png'} alt="Picture of the author" />
           <div className="section3_left" >
<h2>Eco-Efficient</h2>
</div>
<div className="section3_right" >
<h2>Eco-Freindly</h2>
<a>Learn More</a>
</div>
</div>
            
        </Section>
    )
}

export default HeroSection