
import React from 'react'
import { Section} from './Style'
import Image from 'next/image'
import  Navbar from '../../layout/navbar/navbar'

 const HeroSection: React.FC<{}> = () => {
    return (
        <Section>
        
           
           <div className="section" >
               <div className="section_top" >
                   <p>On average, Zahroof StraightFloTM Valves

                       <br/>
                       pay for themselves in 2 to 5 months.</p>
               <div className="tringle" >
                  </div>
                
               </div>

               <div className="section_bottom" >
              
               <div className="section2_data" >
      
  
  <div className="section2_data"  >

    
    
  <div className="section_bottom_set" >
               
              
            <div className="section_bottom_data" >
            
            <li>See  how to sell <br/> it up the ladder  </li>
                <li>
                <Image    alt="Picture of the author"  objectFit="contain" layout="fill" src='https://res.cloudinary.com/dzcmadjl1/image/upload/v1624356836/ruhkeqvmgfhctlmiswih.png' />
                </li>

                <li><h3>EnterPrise Solutions</h3></li>
                <li>
                <Image    alt="Picture of the author"  objectFit="contain" layout="fill" src='https://res.cloudinary.com/dzcmadjl1/image/upload/v1624356837/zh1sycnu12s4n75hizoj.png' />
                </li>
               
            </div>
           
           
               </div>
      </div>
   
      <div className="section2_data"  >
           <div className="section_bottom_set" >
               
              
           
            <div className="section_bottom_data" >
           
            <li>See what we ve <br/> Done for Others  </li>

                <li>
                <Image  alt="Picture of the author"   objectFit="contain" layout="fill" src='https://res.cloudinary.com/dzcmadjl1/image/upload/v1624356709/w2u44k0jrx10hakvnri2.png' />
                </li>

                <li><h3>Case studies</h3></li>
                <li>
                <Image  alt="Picture of the author"    objectFit="contain" layout="fill" src='https://res.cloudinary.com/dzcmadjl1/image/upload/v1624356837/zh1sycnu12s4n75hizoj.png' />
                </li>
               
            </div>
           
           
               </div>
     
     
     
      </div>
  
         
                   
                   </div>
              
               </div>
         

               <div className="section_bottom-1" >
              
             
             <span>Redefining value in years , instend of month</span>
              </div>
        
           </div>
            
        </Section>
    )
}

export default HeroSection