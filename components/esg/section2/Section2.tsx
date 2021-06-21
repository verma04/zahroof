
import React from 'react'
import { Section} from './Style'
import Image from 'next/image'
import  Navbar from '../../layout/navbar/navbar'

 const HeroSection: React.FC<{}> = () => {
    return (
        <Section>
        
           
           <div className="section2" >

           <Image     objectFit="cover" layout="fill" src={'https://res.cloudinary.com/dzcmadjl1/image/upload/v1624030712/siv3vtawwkytzsnfrhnr.png'} alt="Picture of the author" />
           </div>
            
        </Section>
    )
}

export default HeroSection