
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
              If you're on this page, chances are you want to know more about how the StraightFloTM valve works. Or
perhaps you just enjoy geeking out on ground-breaking technology. Either way, we'll give you all the info
you could possibly want. And maybe a little more.
              </h3>
                
               </div>

               <div className="section_bottom" >
               <Image     objectFit="cover" layout="fill" src={'https://res.cloudinary.com/dzcmadjl1/image/upload/v1624000545/rsukles8twyiyukry6ws.png'} alt="Picture of the author" />
                 
               
               <div className="section2_data" >
  
  <div className="section2_data_left"  >

      <h2>WHAT IT IS</h2>
      <p>The Zahroof StraightFloTM Valve is a drop-in replacement valve for
industrial reciprocating compressors for speeds from 200 - 3600+ rpm,
pressure differential across a valve to 4350 psi (300 bar), service
temperatures from -290° to 482°F (-180° to 250°C), and for all gases
including sweet and sour natural gas, acid gas, CO2, Hydrogen,
Nitrogen, Ethylene, Air, Ammonia, HCl, etc.</p>
      <h3>
      This revolutionary technology is patented around the
world and offers significant improvements over
conventional valves.
      </h3>
      </div>
      <div className="section2_data_right"  >
      <Image     objectFit="contain" layout="fill" src={'https://res.cloudinary.com/dzcmadjl1/image/upload/v1624345653/gi631r3x8sk1e38jq8mk.png'} />
      </div>
                   
                   
                   </div>
                   
                   
               </div>
         
           </div>
            
        </Section>
    )
}

export default HeroSection