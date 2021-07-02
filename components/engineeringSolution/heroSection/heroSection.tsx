
import React , {useEffect} from 'react'
import { Section} from './Style'
import Image from 'next/image'
import  Navbar from '../../layout/navbar/navbar'
import AOS from 'aos';
import { Parallax, Background } from "react-parallax";
import "aos/dist/aos.css";
const image = 'https://res.cloudinary.com/dzcmadjl1/image/upload/v1625219977/ccgto14lcobhqxjmhpel.jpg'
 const HeroSection: React.FC<{}> = () => {
    useEffect(() => {
 
        AOS.init({
          duration : 5000
        });
      }, []);
    return (
        <Section>
            <Navbar/>
            <Parallax bgImage={ image} strength={500}>
           <div className="homePage-hero" >
           {/* <Image     objectFit="cover" layout="fill" src={'https://res.cloudinary.com/dzcmadjl1/image/upload/v1624266802/k8sh87pebodtjyxqy0iy.png'} alt="Picture of the herosection" /> */}
   
           <div className="homePage-layer" > 

<div aos-duration="10000" data-aos="zoom-in" className="homePage-data" >

    <ul className="text-left">
       <li>You’re the 
boots on 
the ground. </li> 
        
        
       
    </ul>
    <ul className="text-right">
     <li>We give you<br/>
less ground <br/>
to cover. </li>  
  
    </ul>


</div>


</div>

           </div>
            </Parallax>
        </Section>
    )
}

export default HeroSection