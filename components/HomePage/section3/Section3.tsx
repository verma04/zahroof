
import React , {useEffect , useState } from 'react'
import { Section} from './Style'
import Image from 'next/image'
import  Navbar from '../../layout/navbar/navbar'
import AOS from 'aos';
import { Parallax, Background } from "react-parallax";
import {  Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import "aos/dist/aos.css";
const image = 'https://res.cloudinary.com/dzcmadjl1/image/upload/v1624457126/o7rt0bntgyc6nstows3k.jpg'
interface Section3 {
  data: {
    homeThreeLeftHeading: string,
    homeThreeRightHeading: string,
  
  }, // Change the required prop to an optional prop.
}

import {BrowserView, MobileView} from 'react-device-detect';

 const Section3: React.FC<Section3> = (data) => {
  
  const [ width , setwidth] = useState(0)

  const [ width2 , setwidth2] = useState(0)
  const [ right , setright] = useState(21)
  const [ left , setleft] = useState(21)
    useEffect(() => {
        AOS.init({
          duration : 3000
        });
      
          window.addEventListener("scroll", handleScroll);
          window.addEventListener("scroll", handleScroll1);
          // returned function will be called on component unmount 
          
     console.log(window.pageYOffset)
        
      }, []);

      const  handleScroll= () => {
        if (window.pageYOffset < 1600) {
      console.log(window.pageYOffset , "0")
         
          
        }
        else if (window.pageYOffset > 1600 && window.pageYOffset < 1650 ) {
          setwidth(10)
              
        }
        else if (window.pageYOffset > 1650 && window.pageYOffset < 1700) {
          setwidth(20)
              
        }
        else if (window.pageYOffset > 1700  &&  window.pageYOffset < 1750) {
          setwidth(30)
              
        }
        else if (window.pageYOffset > 1750 &&  window.pageYOffset < 1800) {
          setwidth(40)
          console.log(window.pageYOffset)  
          setright(15)  
          setleft(15)  
        }

        else if (window.pageYOffset > 1800 &&  window.pageYOffset < 1850) {
          setwidth(50)
          console.log(window.pageYOffset)  
          setright(10) 
          setleft(10)  
        }
        else if (window.pageYOffset > 1800 &&  window.pageYOffset < 1850) {
          setwidth(60)
          console.log(window.pageYOffset) 
          setright(5) 
          setleft(5)  
        }
        else if (window.pageYOffset > 1850 &&  window.pageYOffset < 1900 ) {
          setwidth(70)
          console.log(window.pageYOffset)
          setright(0)  
          setleft(0)    
        }
      
        else if (window.pageYOffset > 1900 &&  window.pageYOffset < 1950) {
          setwidth(80)
          setright(-2)
          setleft(-2)  
          console.log(window.pageYOffset)  
        } else if (window.pageYOffset > 1950 &&  window.pageYOffset < 2000) {
          setwidth(90)
          setright(-10)
          setleft(-10)  
          console.log(window.pageYOffset)  
        }
        else if (window.pageYOffset > 2000 &&  window.pageYOffset < 2020) {
          setwidth(100)
          setright(-15)
          setleft(-15)  
          console.log(window.pageYOffset)  
        }
        else if (window.pageYOffset > 2020)  {
          setwidth(100)
          setright(-50)
          setleft(-50)  
          console.log(window.pageYOffset)  
        }
       
       
      }

      const  handleScroll1= () => {
        if (window.pageYOffset < 1000) {
      console.log(window.pageYOffset , "0")
         
          
        }
        else if (window.pageYOffset > 1000 && window.pageYOffset < 1020 ) {
          setwidth2(10)
              
        }
        else if (window.pageYOffset > 1020 && window.pageYOffset < 1040) {
          setwidth2(20)
              
        }
        else if (window.pageYOffset > 1040  &&  window.pageYOffset < 1060) {
          setwidth2(30)
              
        }
        else if (window.pageYOffset > 1080 &&  window.pageYOffset < 1100) {
          setwidth2(40)
          console.log(window.pageYOffset)  
          setright(15)  
          setleft(15)  
        }

        else if (window.pageYOffset > 1110 &&  window.pageYOffset < 1120) {
          setwidth2(50)
          console.log(window.pageYOffset)  
          setright(10) 
          setleft(10)  
        }
        else if (window.pageYOffset > 1120 &&  window.pageYOffset < 1130) {
          setwidth2(60)
          console.log(window.pageYOffset) 
          setright(5) 
          setleft(5)  
        }
        else if (window.pageYOffset > 1130 &&  window.pageYOffset < 1140 ) {
          setwidth2(70)
          console.log(window.pageYOffset)
          setright(0)  
          setleft(0)    
        }
      
        else if (window.pageYOffset > 1150 &&  window.pageYOffset < 1160) {
          setwidth2(80)
          setright(-2)
          setleft(-2)  
          console.log(window.pageYOffset)  
        } else if (window.pageYOffset > 1160 &&  window.pageYOffset < 1200) {
          setwidth2(90)
          setright(-10)
          setleft(-10)  
          console.log(window.pageYOffset)  
        }
       

        else if (window.pageYOffset > 1160 &&  window.pageYOffset < 1200) {
          setwidth2(90)
          setright(-10)
          setleft(-10)  
          console.log(window.pageYOffset)  
        }
        else if (window.pageYOffset > 1200) {
          setwidth2(100)
          setright(-10)
          setleft(-10)  
          console.log(window.pageYOffset)  
        }
       
       
      }
    
    return (
      <>
      <BrowserView>
        <Section>


                {/* <h1>This is rendered only in browser</h1> */}
           
            {/* <MobileView>
                <h1>This is rendered only on mobile</h1>
            </MobileView> */}

        
        <Parallax bgImage={ image} strength={500}>
           <div className="section3" >
  
  <div  
  style={{height:`${width}%`}}
      className="middle" >
          <div    className="img-wrapper" >
               <Image     objectFit="contain" layout="fill" src={'https://res.cloudinary.com/dzcmadjl1/image/upload/v1624457130/oj0pfthu3lt2ergdljyf.png'} alt="" />
              
                   </div>
   
      </div>

      <div    style={{right:`${right}%`}} className="right" >
      <div className="img-wrapper" >
               <Image     objectFit="contain" layout="fill" src={'https://res.cloudinary.com/dzcmadjl1/image/upload/v1624457125/wx89iw4xzkq1tffegfgh.png'} alt="" />
              
                   </div>
   
      </div>

      <div style={{left:`${left}%`}}   className="left" >
      <div className="img-wrapper" >
               <Image     objectFit="contain" layout="fill" src={'https://res.cloudinary.com/dzcmadjl1/image/upload/v1624457125/c5qjzndd22pgdc0xpzvg.png'} alt="" />
              
                   </div>
   
      </div>
           <div aos-duration="10000" data-aos="zoom-in" className="section3_left" >
<h2>{data.data.homeThreeLeftHeading}</h2>
</div>
<div  aos-duration="10000" data-aos="zoom-in" className="section3_right" >
<h2>{data.data.homeThreeRightHeading}</h2>
<a>Learn More&gt;</a>
</div>
</div>
          </Parallax>  
          
        </Section>
        </BrowserView>
     

        <MobileView>
        <Section>


                {/* <h1>This is rendered only in browser</h1> */}
           
            {/* <MobileView>
                <h1>This is rendered only on mobile</h1>
            </MobileView> */}

        
        <Parallax bgImage={ image} strength={500}>
           <div className="section3" >
  
  <div  
  style={{height:`${width2}%`}}
      className="middle" >
          <div    className="img-wrapper" >
               <Image     objectFit="contain" layout="fill" src={'https://res.cloudinary.com/dzcmadjl1/image/upload/v1624457130/oj0pfthu3lt2ergdljyf.png'} alt="" />
              
                   </div>
   
      </div>

      <div    style={{right:`${right}%`}} className="right" >
      <div className="img-wrapper" >
               <Image     objectFit="contain" layout="fill" src={'https://res.cloudinary.com/dzcmadjl1/image/upload/v1624457125/wx89iw4xzkq1tffegfgh.png'} alt="" />
              
                   </div>
   
      </div>

      <div style={{left:`${left}%`}}   className="left" >
      <div className="img-wrapper" >
               <Image     objectFit="contain" layout="fill" src={'https://res.cloudinary.com/dzcmadjl1/image/upload/v1624457125/c5qjzndd22pgdc0xpzvg.png'} alt="" />
              
                   </div>
   
      </div>
           <div aos-duration="10000" data-aos="zoom-in" className="section3_left" >
<h2>{data.data.homeThreeLeftHeading}</h2>
</div>
<div  aos-duration="10000" data-aos="zoom-in" className="section3_right" >
<h2>{data.data.homeThreeRightHeading}</h2>
<a>Learn More&gt;</a>
</div>
</div>
          </Parallax>  
          
        </Section>
        </MobileView>
     </>
    )
}

export default Section3