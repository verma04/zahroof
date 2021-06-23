
import React from 'react'
import { Section} from './Style'
import Image from 'next/image'
import  Navbar from '../../layout/navbar/navbar'

 const HeroSection: React.FC<{}> = () => {
    return (
        <Section>
        
           
           <div className="section4" >

           <div className="section_data" >
            
            <div className="section_data_left"  >
          
          <h2>Eeasy to service, 
no need for spare VALVES</h2>
          <p>Its modular design means the StraightFloTM Valve can be easily serviced in minutes. Just unscrew the valve seat, slide out the old modules with your fingers, slide in the new and reattach the valve seat to the carrier. There’s no need to ship valves off site for machining. Plus, inventory can be minimized by over 80% compared to conventional valves. Stock 6 to 8 module types and your entire fleet of compressors is covered—no matter the brand, cylinder size, application or operating condition—so you can repair any valve in the field, without having to return to a warehouse to get the right valve or parts.</p>
          
          </div>
          <div className="section_data_right"  >
          <h3>    Fun Fact: </h3>
              <p>
No machining means the valve seat pressure rating never drops below that of the new valve. 
It also eliminates the chance of machining errors that result in tolerance stack up and prevent valves from being installed during service.
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