
import React from 'react'
import { Section} from './Style'
import Image from 'next/image'
import  Navbar from '../../layout/navbar/navbar'

 const HeroSection: React.FC<{}> = () => {
    return (
        <Section>
        
           
           <div className="section4" >
               <div className="section4_top" >
           {/* <Image     objectFit="cover" layout="fill" src={'https://res.cloudinary.com/dzcmadjl1/image/upload/v1623832905/gmrxpfyt5yburmqv4tva.png'} alt="Picture of the author" /> */}
  </div>

  <div className="section4_bottom" >
           <Image     objectFit="cover" layout="fill" src={'https://res.cloudinary.com/dzcmadjl1/image/upload/v1623833583/kfpghb2mcrrrbnao9j21.png'} alt="Picture of the author" />
  </div>
</div>
            
        </Section>
    )
}

export default HeroSection