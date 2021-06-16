
import React from 'react'
import { Section} from './Style'
import Image from 'next/image'
import  Navbar from '../../layout/navbar/navbar'

 const HeroSection: React.FC<{}> = () => {
    return (
        <Section>
        
           
           <div className="section2" >

               <div className="section2_data" >

                   <div  className="section2_data_left">
     <h2>
     A PROVEN PIPELINE
TO GREATER PROFIT
& PERFORMANCE

         </h2>

         <h4>
         Discover the broad range of unmatched benefits
exceptional engineering can achieve -- from
performance in the trenches to a bold boost in the
bottom line.
             </h4>

                       </div>

                       <div  className="section2_data_right">
       
 <div className="logo" >
     <img src="https://res.cloudinary.com/dzcmadjl1/image/upload/v1623826616/ogbrcspxakpbenzt7pwo.png" />
 <h4>INCREASE PRODUCTION
& THROUGHPUT </h4>
 </div>

 <div className="logo" >
 <img src="https://res.cloudinary.com/dzcmadjl1/image/upload/v1623826616/rn5iqp4vg0srfc4wzwoa.png" />
 <h4>DRAMATICALLY
IMPROVE RELIABILITY</h4>
 </div>
 <div className="logo" >
 <img src="https://res.cloudinary.com/dzcmadjl1/image/upload/v1623826610/jit3fbn5ttpilfqqgiyd.png" />
 <h4>IMPROVE SAFETY</h4>
 </div>
 <div className="logo" >
 <img src="https://res.cloudinary.com/dzcmadjl1/image/upload/v1623826610/n1hlr8eju6xnfmv7fack.png" />
 <h4>          ACHIEVE ECO-EFFICIENCY </h4>
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