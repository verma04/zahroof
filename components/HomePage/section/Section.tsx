
import React from 'react'
import { Section} from './Style'
import Image from 'next/image'
import  Navbar from '../../layout/navbar/navbar'

 const HeroSection: React.FC<{}> = () => {
    return (
        <Section>
        
           
           <div className="section" >
               <div className="section_top" >
               <div className="section_top_left" >

                   <h2>REAP THE EXCEPTIONAL FINANCIAL
REWARDS OF A WISE INVESTMENT</h2>
                   <div className="tringle" ></div>
                   </div>
                   <div className="section_top_right" >
                   <h2>
                   WHILE VASTLY IMPROVING
PERFORMANCE & SAFETY IN THE FIELD.
                   </h2>
                   <div className="tringle" ></div>
                   </div>
               </div>

               <div className="section_bottom" >
               <div className="section_bottom_left" >

               <Image     objectFit="cover" layout="fill" src={'https://res.cloudinary.com/dzcmadjl1/image/upload/v1623825063/vi3evrg4udh3r0iloqe8.png'} alt="Picture of the author" />
               <div className="section_bottom_data" >
                    <li>
                        <img  src='https://res.cloudinary.com/dzcmadjl1/image/upload/v1623825004/zoxz3fifh8feamptksnx.png' ></img>
                    </li>

                    <li><h3>Enterprise Solution</h3></li>
                    <li>
                    <img  src='https://res.cloudinary.com/dzcmadjl1/image/upload/v1623825001/kphxeenbazcwieocomkx.png' ></img>
                    </li>
                   
                </div>
                   </div>
                   <div className="section_bottom_right" >
               
                   <Image     objectFit="cover" layout="fill" src={'https://res.cloudinary.com/dzcmadjl1/image/upload/v1623825062/zxseg6w0ag6fk3hfednl.png'} alt="Picture of the author" />
               
                <div className="section_bottom_data" >
                    <li>
                        <img  src='https://res.cloudinary.com/dzcmadjl1/image/upload/v1623825004/zoxz3fifh8feamptksnx.png' ></img>
                    </li>

                    <li><h3>Field Operations</h3></li>
                    <li>
                    <img  src='https://res.cloudinary.com/dzcmadjl1/image/upload/v1623825001/kphxeenbazcwieocomkx.png' ></img>
                    </li>
                   
                </div>
               
               
                   </div>
               </div>
         
           </div>
            
        </Section>
    )
}

export default HeroSection