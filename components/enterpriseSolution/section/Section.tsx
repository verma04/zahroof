
import React from 'react'
import { Section} from './Style'
import Image from 'next/image'
import  Navbar from '../../layout/navbar/navbar'

 const HeroSection: React.FC<{}> = () => {
    return (
        <Section>
        
           
           <div className="section" >
               

               <div className="section_top" >
               <Image     objectFit="contain" layout="fill" src={'https://res.cloudinary.com/dzcmadjl1/image/upload/v1625215361/el7kaq4epxdnzvizovxw.png'} alt="Picture of the author" />
               <div className="section2_data" >
                   
                     <div className="section2_data_left"  >

<h2>The benefits are clear <br/>
even from 30,000 ft </h2>
<p>
We get it—you’re a big picture person. You care about results, not how we make the sausage. 
So instead of delving into the details of how we do what we do, we’ll topline it for you
</p>

</div>
 

       
             
     
                   
                   </div>
                   
             
              
               </div>
         
               <div className="section_bottom" >
           
               <div className="section2_data" >  <div className="section2_data_left"  >

<h2>Essentially, <br/>
we built a <br/>
better mousetrap.  </h2>
<p>
We’ve changed the way gas is compressed, transferred, processed, and
distributed. Our product greatly improves operational performance, boosts profitability, lowers costs and reduces emissions. 
</p>

</div>
 

       
             
     
                   
                   </div>
                 
                 <div className="absol-bottom" >
                 <h2>Zahroof customers regularly <br/>
see results like these </h2>
                     </div>  
             
                     <div className="triangle-down"></div>

              
               </div>
         
           </div>
            
        </Section>
    )
}

export default HeroSection