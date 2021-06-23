
import React from 'react'
import { Section} from './Style'
import Image from 'next/image'
import  Navbar from '../../layout/navbar/navbar'

 const HeroSection: React.FC<{}> = () => {
    return (
        <Section>
        
           
           <div className="section" >
               

               <div className="section_bottom" >
               <Image     objectFit="cover" layout="fill" src={'https://res.cloudinary.com/dzcmadjl1/image/upload/v1624000545/rsukles8twyiyukry6ws.png'} alt="Picture of the author" />
               <div className="section2_data" >  <div className="section2_data_left"  >

<h2>Superior performance
fewer failures 
easier repairs </h2>
<p>
Whether you’re doing equipment service call-outs yourself or managing those who do, Zahroof makes your life a lot easier. Compared to existing options, our revolutionary StraightFloTM valves for industrial reciprocating compressors perform substantially better with fewer failures, less maintenance and easier repairs—guaranteed. 
</p>

</div>
 

           <div className="section2_data_right"  >
     
      </div>
             
     
                   
                   </div>
                   
             
              
               </div>
         
           </div>
            
        </Section>
    )
}

export default HeroSection