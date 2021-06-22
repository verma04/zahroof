
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
           <Image     objectFit="cover" layout="fill" src={'https://res.cloudinary.com/dzcmadjl1/image/upload/v1624030696/l0krn6a059mpgqlonf8q.png'} alt="Picture of the herosection" />
   
   <div className="homePage-layer" > 

   <div  data-aos="zoom-in" className="homePage-data" >

       <ul>
      


          <li> INNOVATIVE </li> 
           
           <li>EFFICIENT</li>
          <li> GREEN</li>
          
       </ul>
    <p>
    With each passing year, there s growing
concern about the environment.
Legislation has become increasingly
stringent. At Zahroof, we are committed
to improving energy efficiency, reducing
the carbon footprint and protecting the
planet as we benefit our customers. One of
our primary goals is to help you to achieve
as close to net-zero as possible.

    </p>


   </div>
   
   
   </div>

           </div>
            
        </Section>
    )
}

export default HeroSection