
import React from 'react'
import { Section} from './Style'
import Image from 'next/image'
import  Navbar from '../../layout/navbar/navbar'
import { Parallax, Background } from "react-parallax";
const image1 =
  "https://res.cloudinary.com/dzcmadjl1/image/upload/v1624859749/cawdyff1kgtdbfyrmxcu.jpg";


  const image2 =
  "https://res.cloudinary.com/dzcmadjl1/image/upload/v1624859749/sdouzbuocrwq67wffz95.jpg";
 const HeroSection: React.FC<{}> = () => {
    return (
      
        <Section>
        
           
           <div className="section" >
               <div className="section_top" >
               <div className="section_top_left" >

                   <span>REAP THE EXCEPTIONAL FINANCIAL
REWARDS OF A WISE INVESTMENT</span>
                   <div className="tringle" ></div>
                   </div>
                   <div className="section_top_right" >
                   <span>
                   WHILE VASTLY IMPROVING
PERFORMANCE & SAFETY IN THE FIELD.
                   </span>
                   <div className="tringle" ></div>
                   </div>
           </div>
              
               <div  className="section_bottom" >
               <Parallax bgImage={ image1 } strength={500}>
               <div  className="section_bottom_set" >
           

             



          
              
               <div className="section_bottom_data" >
                    <li>
                    <Image     objectFit="contain" layout="fill" src='https://res.cloudinary.com/dzcmadjl1/image/upload/v1623825004/zoxz3fifh8feamptksnx.png' alt="sd" />
                    </li>
                  
                    <li><h3>Enterprise Solution</h3></li>
                 
                    <li>
                    <Image     objectFit="contain" layout="fill" src='https://res.cloudinary.com/dzcmadjl1/image/upload/v1623825001/kphxeenbazcwieocomkx.png' alt="" />
                    </li>
                   
                </div>
              

                   </div>
                 </Parallax>
              
                 <Parallax bgImage={ image2 } strength={500}>
                   <div className="section_bottom_set" >
               
                 
               
                <div className="section_bottom_data" >
                    <li>
                    <Image alt="sdds"         objectFit="contain" layout="fill" src='https://res.cloudinary.com/dzcmadjl1/image/upload/v1624878382/y8xdconzmbz0jwrsbcvx.png' />
                    </li>

                    <li><h3>Field Operations</h3></li>
                    <li>
                    <Image  alt="sdds"       objectFit="contain" layout="fill" src='https://res.cloudinary.com/dzcmadjl1/image/upload/v1623825001/kphxeenbazcwieocomkx.png' />
                    </li>
                   
                </div>
               
               
                   </div>
                   </Parallax>
               </div>
              
        
        
   
       
           </div>
            
        </Section>
 
 )
}

export default HeroSection