
import React from 'react'
import { Section} from './Style'
import Image from 'next/image'
import  Navbar from '../../layout/navbar/navbar'

interface HeroSectionProps {
    data : {
       enterprisefourBottomContent:String
       enterprisefiveLeftIcon:string,
       enterprisefiveLeftContent:string,
       enterprisefiveRightIcon:string,
       enterprisefiveRightContent: string,
    }  
 }
 const HeroSection: React.FC<HeroSectionProps> = (data) => {
 
  
   
    const      set:string = "Redefining value in years, instead of month "
    
    return (
        <Section>
        
           
           <div className="section" >
               <div className="section_top" >
                   <p>{data.data.enterprisefourBottomContent}</p>
               <div className="tringle" >
                  </div>
                
               </div>

               <div className="section_bottom" >
              
               <div className="section2_data" >
      
  
  <div className="section2_data"  >

    
    
  <div className="section_bottom_set" >
               
              
            <div className="section_bottom_data" >
            
            <li>See  why the line guys Love us.  </li>
                <li>
                <Image    alt="Picture of the author"  objectFit="contain" layout="fill" src={data.data.enterprisefiveLeftIcon} />
                </li>

                <li><h3>{data.data.enterprisefiveLeftContent}</h3></li>
                <li>
                <Image    alt="Picture of the author"  objectFit="contain" layout="fill" src='https://res.cloudinary.com/dzcmadjl1/image/upload/v1624356837/zh1sycnu12s4n75hizoj.png' />
                </li>
               
            </div>
           
           
               </div>
      </div>
   
      <div className="section2_data"  >
           <div className="section_bottom_set" >
               
              
           
            <div className="section_bottom_data" >
           
            <li>{set} </li>

                <li>
                <Image  alt="Picture of the author"   objectFit="contain" layout="fill" src={data.data.enterprisefiveRightIcon} />
                </li>

                <li><h3>{data.data.enterprisefiveRightContent}</h3></li>
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