
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
         
   
   <div className="homePage-layer" > 

   <div aos-duration="10000" data-aos="zoom-in" className="homePage-data" >

       <ul>
          <span>Extraordinary </span> 
           
           <span>Returns</span>
           
          <span> <li> From </li> </span>
          
       </ul>
       <ul className="text-right">
        <span>Reimagined  </span>  
         <span>  Engineering</span>  
       </ul>


   </div>
   
   
   </div>

           </div>
            
        </Section>
    )
}

export default HeroSection