
import React from 'react'
import { Section} from './Style'
import Image from 'next/image'
import  Navbar from '../../layout/navbar/navbar'

 const HeroSection: React.FC<{}> = () => {
    return (
        <Section>
        
           
           <div className="section" >
            
               <div className="section_bottom" >
              
               <div className="section2_data" >
    
                <li>
                <Image    alt="Picture of the author"  objectFit="contain" layout="fill" src='https://res.cloudinary.com/dzcmadjl1/image/upload/v1625564206/rkjkub9gd82rmigu3kge.png' />
                </li>

                <li><h3>SFV valves: Same resolutions </h3></li>
                <li> Value opening and closing is negligible 10psi lower peak Cylinder pressures </li>
               
        
           
           
               
      </div>
   
      <div className="section2_data"  >
         
           
          

                <li>
                <Image  alt="Picture of the author"   objectFit="contain" layout="fill" src='https://res.cloudinary.com/dzcmadjl1/image/upload/v1625564206/gr81uhaffzt11ra3xq4w.png' />
                </li>

                <li><h3>Field measuremnents on an Arial JGD/2 ,  rpm</h3></li>
              
                <li>Orginal plate valves . Pronounces opening and clsoing impacts + noise form flow   </li>
            </div>
           
           
         
         
                   
                 
              
               </div>
         

           
        
           </div>
            
        </Section>
    )
}

export default HeroSection