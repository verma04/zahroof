
import React , {useEffect} from 'react'
import { Section} from './Style'
import Image from 'next/image'
import  Navbar from '../../layout/navbar/navbar'
import AOS from 'aos';
import { Parallax, Background } from "react-parallax";
import "aos/dist/aos.css";
const image = 'https://res.cloudinary.com/dzcmadjl1/image/upload/v1624457126/o7rt0bntgyc6nstows3k.jpg'
interface Section3 {
  data: {
    homeThreeLeftHeading: string,
    homeThreeRightHeading: string,
  
  }, // Change the required prop to an optional prop.
}
 const Section3: React.FC<Section3> = (data) => {
    useEffect(() => {
        AOS.init({
          duration : 3000
        });
      }, []);
    
    return (
        <Section>
        
        <Parallax bgImage={ image} strength={500}>
           <div className="section3" >
  
  <div  data-aos="fade-up"
     data-aos-duration="8000" className="middle" >
          <div className="img-wrapper" >
               <Image     objectFit="contain" layout="fill" src={'https://res.cloudinary.com/dzcmadjl1/image/upload/v1624457130/oj0pfthu3lt2ergdljyf.png'} alt="" />
              
                   </div>
   
      </div>

      <div    data-aos="zoom-out-right"  data-aos-duration="8000" className="right" >
      <div className="img-wrapper" >
               <Image     objectFit="contain" layout="fill" src={'https://res.cloudinary.com/dzcmadjl1/image/upload/v1624457125/wx89iw4xzkq1tffegfgh.png'} alt="" />
              
                   </div>
   
      </div>

      <div data-aos="zoom-out-left" data-aos-duration="8000"  className="left" >
      <div className="img-wrapper" >
               <Image     objectFit="contain" layout="fill" src={'https://res.cloudinary.com/dzcmadjl1/image/upload/v1624457125/c5qjzndd22pgdc0xpzvg.png'} alt="" />
              
                   </div>
   
      </div>
           <div className="section3_left" >
<h2>{data.data.homeThreeLeftHeading}</h2>
</div>
<div className="section3_right" >
<h2>{data.data.homeThreeRightHeading}</h2>
<a>Learn More</a>
</div>
</div>
          </Parallax>  
        </Section>
    )
}

export default Section3