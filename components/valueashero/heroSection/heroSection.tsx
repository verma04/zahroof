
import React , {useEffect} from 'react'
import { Section} from './Style'
import Image from 'next/image'
import  Navbar from '../../layout/navbar/navbar'
import AOS from 'aos';
import "aos/dist/aos.css";
 const HeroSection: React.FC<{}> = () => {
    useEffect(() => {
 
        AOS.init({
          duration : 5000
        });
      }, []);
    return (
        <Section>
            <Navbar/>
           
           <div className="homePage-hero" >
           <Image     objectFit="cover" layout="fill" src={'https://res.cloudinary.com/dzcmadjl1/image/upload/v1624085963/ks5kmugbnmzubbsxoiyc.png'} alt="Picture of the herosection" />
   
   <div className="homePage-layer" > 

   <div aos-duration="10000" data-aos="zoom-in" className="homePage-data" >

       <ul className="text-left">
          <li>ALL THE DETAILS YOU
EVER WANTED TO KNOW </li> 
           
           
          
       </ul>
       <ul className="text-right">
        <li>BUCKLE UP
WE RE DIVING DEEP </li>  
     
       </ul>


   </div>
   
   
   </div>

           </div>
            
        </Section>
    )
}

export default HeroSection