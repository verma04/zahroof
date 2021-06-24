
import React from 'react'
import { Section} from './Style'
import Image from 'next/image'
import  Navbar from '../../layout/navbar/navbar'

 const HeroSection: React.FC<{}> = () => {
    return (
        <Section>
        
           
           <div className="section4" >
          
           <div className="section2_data" >
           <div className="section2_data_right"  >
               <div  className="img-wrapper" > 
      <Image   alt="Picture of the author"   objectFit="contain" layout="fill" src={'https://res.cloudinary.com/dzcmadjl1/image/upload/v1624355241/kz4jyzl52yocggw1ol9a.png'} />
      </div>
      </div>
             
  <div className="section2_data_left"  >

      <h2>Serviced On site 
in Minutes</h2>
      <p>While conventional valves must be  swapped and sent out for 
machining, StraightFloTM valves can be refurbished on site without 
special tools or skilled labor. They re as easy to service offshore as on dry land. And with no need to stockpile spare valves, you can reduce inventory by more than 80</p>
  
      </div>
            
                   
                   </div>
                   
                   
           <div className="tringle" >
                  </div>

</div>
            
        </Section>
    )
}

export default HeroSection