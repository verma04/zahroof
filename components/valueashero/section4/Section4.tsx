
import React from 'react'
import { Section} from './Style'
import Image from 'next/image'
import  Navbar from '../../layout/navbar/navbar'

 const HeroSection: React.FC<{}> = () => {
    return (
        <Section>
        
           
           <div className="section4" >

           <div className="section2_data" >
  
  <div className="section2_data_left"  >

      <h2>
REED VALVE MODULES WITH A 
STRAIGHT-THROUGH FLOW PATH</h2>
      <p>
      Whats more the modules plastic components don t move or impact the metal housingsSo not only is wear-and-tear completely contained inside the modules but compressors with StraightFloTM valves typically operate at 1/10th the vibration levels of those with conventional valves

</p>
<p>
Each StraightFloTM module is an enhanced reed valve designed with a straight-through flow pathSince the gas doesnt have to traverse the usual tortuous high-loss path our valves have the highest effective area for a given diameter
    </p>
     
     <h3>  With StraightFloTM Valves noise 
can be reduced by more than 7dB</h3>
     
      
      </div>
      <div className="section2_data_right"  >

      <div className="img_wrapper" > 
      <Image   alt="Picture of the author"  objectFit="contain" layout="fill" src={'https://res.cloudinary.com/dzcmadjl1/image/upload/v1624427229/isyupef3erz65btsfnmb.png'} />
      </div>
      <h3>Super Deep Detail:
</h3>
      <p>Since the reeds act as both the sealing element and the spring element the lowest natural frequency of our modules is 250Hz well above any excitation force from an engine or motorThis high separation from excitation forces practically eliminates failure due to resonancesIt also makes our valves suited to much higher speeds than is currently common in the fieldCompare this to a maximum of 30Hz for poppet valves and about 80Hz for plate/ring valves where a mass (poppet/plate/ring) has helical coil springs supporting it.

</p>
     
     
      </div>
                   
                   
                   </div>
                

           <div className="tringle" >
                  </div>

</div>
            
        </Section>
    )
}

export default HeroSection