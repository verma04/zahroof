
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

<h2>The benefits are clear <br/>
even from 30,000 ft </h2>
<p>
We get it—you’re a big picture person. You care about results, not how we make the sausage. 
So instead of delving into the details of how we do what we do, we’ll topline it for you
</p>

</div>
 

       
             
     
                   
                   </div>
                   
             
              
               </div>
         
           </div>
            
        </Section>
    )
}

export default HeroSection