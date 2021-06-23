
import React from 'react'
import { Section} from './Style'
import Image from 'next/image'
import  Navbar from '../../layout/navbar/navbar'

 const HeroSection: React.FC<{}> = () => {
    return (
        <Section>
        
           
           <div className="section" >
           <div className="section2_data" >
           <div className="section2_data_right"  >
      <Image  alt="Picture of the author"   objectFit="contain" layout="fill" src={'https://res.cloudinary.com/dzcmadjl1/image/upload/v1624355379/h1unhu03kiuawgjuk5vz.png'} />
      </div>
  <div className="section2_data_left"  >

    
    
      <p>
      The StraightFloTM valve guarantee is 2x the MTBF (Mean time between shut down of compressor due to valve issues) of the compressor compared to MTBF wi th the valves we replace under the same operating conditions (includes quality of gas) plus 10% reduction in valve losses.
      </p>
      </div>
   
                   
                   
                   </div>
                   
                 

</div>
            
        </Section>
    )
}

export default HeroSection