
import React from 'react'
import { Section} from './Style'
import Image from 'next/image'
import  Navbar from '../../layout/navbar/navbar'

interface SectionProps {
    data : {
       enterprisethreeTopContent: string
      
    }  
 }
 const Section5: React.FC<SectionProps> = (data) => {
 
    return (
        <Section>
        
           
           <div className="section" >
               

               <div className="section_top" >
             
               <div className="section2_data" >  <div className="section2_data_left"  >

<h2>So what is this amazing 
technology you ask?
 </h2>
<p>
It might surprise you. In fact, it might be  something you haven’t considered at all. But  fact is, until we turned the industry on its ear, <br/> compressor valves had been designed the  same way for over 70 years. 
</p>

</div>
 

       
             
     
                   
                   </div>
                   
             
              
               </div>
         
        
           </div>
            
        </Section>
    )
}

export default Section5