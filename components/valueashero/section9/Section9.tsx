
import React from 'react'
import { Section} from './Style'
import Image from 'next/image'
import  Navbar from '../../layout/navbar/navbar'

 const HeroSection: React.FC<{}> = () => {
    return (
        <Section>
        
           
           <div className="section" >
               <div className="section_top" >
                   <p>a 10-Year Limited Warranty on 
the stainless steel seat and carrier</p>
               <div className="tringle" >
                  </div>
                
               </div>

               <div className="section_bottom" >
              
               <div className="section2_data" >
      
  
  <div className="section2_data"  >

    
    
  <div className="section_bottom_set" >
               
              
            <div className="section_bottom_data" >
           
                <li>
                <Image  alt="Picture of the author"   objectFit="contain" layout="fill" src='https://res.cloudinary.com/dzcmadjl1/image/upload/v1624356836/ruhkeqvmgfhctlmiswih.png' />
                </li>

                <li><h3>EnterPrise Solutions</h3></li>
                <li>
                <Image  alt="Picture of the author"   objectFit="contain" layout="fill" src='https://res.cloudinary.com/dzcmadjl1/image/upload/v1624356837/zh1sycnu12s4n75hizoj.png' />
                </li>
               
            </div>
           
           
               </div>
      </div>
   
      <div className="section2_data"  >
           <div className="section_bottom_set" >
               
              
           
            <div className="section_bottom_data" >
            
                <li>
                <Image  alt="Picture of the author"   objectFit="contain" layout="fill" src='https://res.cloudinary.com/dzcmadjl1/image/upload/v1624356709/w2u44k0jrx10hakvnri2.png' />
                </li>

                <li><h3>Case Studies</h3></li>
                <li>
                <Image  alt="Picture of the author"   objectFit="contain" layout="fill" src='https://res.cloudinary.com/dzcmadjl1/image/upload/v1624356837/zh1sycnu12s4n75hizoj.png' />
                </li>
               
            </div>
           
           
               </div>
     
     
     
      </div>
  
         
                   
                   </div>
              
               </div>
         
           </div>
            
        </Section>
    )
}

export default HeroSection