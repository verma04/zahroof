
import React from 'react'
import { Section} from './Style'
import Image from 'next/image'
import  Navbar from '../../layout/navbar/navbar'

 const HeroSection: React.FC<{}> = () => {
    return (
        <Section>
            <Navbar/>
           
           <div className="homePage-hero" >
           <Image     objectFit="cover" layout="fill" src={'https://res.cloudinary.com/dzcmadjl1/image/upload/v1623820567/fw1lusinju10tx2bapi6.png'} alt="Picture of the herosection" />
   
   <div className="homePage-layer" > 

   <div className="homePage-data" >

       <ul>
          <li>Extraordinary </li> 
           
           <li>Retuns</li>
          <li>From </li>
          
       </ul>
       <ul className="text-right">
        <li>Reimagined  </li>  
         <li>  Engineering</li>  
       </ul>


   </div>
   
   
   </div>

           </div>
            
        </Section>
    )
}

export default HeroSection