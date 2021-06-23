
import React from 'react'
import { Section} from './Style'
import Image from 'next/image'
import  Navbar from '../../layout/navbar/navbar'

 const HeroSection: React.FC<{}> = () => {
    return (
        <Section>
        
           
           <div className="section" >
           <div className="section_top" >
              
              <h3>
              No other valve performs as well across categories 
We increased production, reduced energy use and 
emissions and cut maintenance costs by XX% 
             
             
              </h3>
              <span> - Costomer Name</span>
                
               </div>

               <div className="tringle" >
                  </div>
         
           </div>
            
        </Section>
    )
}

export default HeroSection