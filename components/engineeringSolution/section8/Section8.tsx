
import React from 'react'
import { Section} from './Style'
import Image from 'next/image'
import  Navbar from '../../layout/navbar/navbar'

 const HeroSection: React.FC<{}> = () => {
     const data:any = ' "   No other valve performs as well across categories  We increased production, reduced energy use and   emissions and cut maintenance costs by XX%      "'
    return (
        <Section>
        
           
           <div className="section" >
           <div className="section_top" >
              
              <span id="top">
           {data}
             
              </span>
              <span id="ab" > - Customer Name</span>

              <div className="triangle-down"></div>
                
               </div>

               <div className="section_bottom" >
               <Image      objectFit="cover" layout="fill" src={'https://res.cloudinary.com/dzcmadjl1/image/upload/v1625219977/h3f70ouyykgpoigbcpgb.jpg'} alt="Picture of the author" />
                 
               
               <div className="section2_data" >
  
  <div className="section2_data_left"  >

      <h2>The secret? <br/>
It’s all in the  <br/>
modular design.</h2>
      <p>Our patented design delivers extraordinary reliability and efficiency by eliminating the common points of failure. There are no helical coil springs. No plates, rings or poppets. No moving plastic components. In other words, none of the things that often fail rapidly in a compressor while moving materials.</p>
      <p>
      Instead, the StraightFloTM valve features interchangeable reed valve modules that allow the gas to flow in a straight path without turning, preventing large pressure drops and reducing valve losses by as much as 40% in some applications. 
      </p>
      </div>
      <div className="section2_data_right"  >
      <Image  alt="Picture of the author"   objectFit="contain" layout="fill" src={'https://res.cloudinary.com/dzcmadjl1/image/upload/v1624345653/gi631r3x8sk1e38jq8mk.png'} />
      </div>
                   
                   
                   </div>
                   
                   
               </div>
         

               <div className="tringle" >
                  </div>
           </div>
            
        </Section>
    )
}

export default HeroSection