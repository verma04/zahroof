
import React from 'react'
import { Section} from './Style'
import Image from 'next/image'
import  Navbar from '../../layout/navbar/navbar'
import { Parallax, Background } from "react-parallax";
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
              
               <div className="section_bottom" >
             
               <div  className="section_bottom_set" >
           
               <Image     objectFit="cover" layout="fill" src={'https://res.cloudinary.com/dzcmadjl1/image/upload/v1623825063/vi3evrg4udh3r0iloqe8.png'} alt="sdd" />
              
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
                 
              
                 
                   <div className="section_bottom_set" >
               
                   <Image     objectFit="cover" layout="fill" src={'https://res.cloudinary.com/dzcmadjl1/image/upload/v1623825062/zxseg6w0ag6fk3hfednl.png'} alt="" />
               
                <div className="section_bottom_data" >
                    <li>
                    <Image alt="sdds"         objectFit="contain" layout="fill" src='https://res.cloudinary.com/dzcmadjl1/image/upload/v1623825004/zoxz3fifh8feamptksnx.png' />
                    </li>

                    <li><h3>Field Operations</h3></li>
                    <li>
                    <Image  alt="sdds"       objectFit="contain" layout="fill" src='https://res.cloudinary.com/dzcmadjl1/image/upload/v1623825001/kphxeenbazcwieocomkx.png' />
                    </li>
                   
                </div>
               
               
                   </div>
               </div>
         
           </div>
            
        </Section>
 
 )
}

export default HeroSection