
import React from 'react'
import { Section} from './Style'
import Image from 'next/image'
import  Navbar from '../../layout/navbar/navbar'

 const HeroSection: React.FC<{}> = () => {
    return (
        <Section>
        
           
           <div className="section4" >
               <div className="section4_top" >
           <Image     objectFit="cover" layout="fill" src={'https://res.cloudinary.com/dzcmadjl1/image/upload/v1623832905/gmrxpfyt5yburmqv4tva.png'} alt="Picture of the author" />
  
  
   <div className="section4_top_data" >
       
       <h2>Preformance Across Industries</h2>
       <div className="section4_top_data_logos" >
        <Image     objectFit="contain" layout="fill" src={'https://res.cloudinary.com/dzcmadjl1/image/upload/v1623837548/h6xa3cdujoxdhomdlyym.png'} alt="Picture of the author" />
            </div>
        </div>

      
  </div>


  <div className="section4_mid" >

      <div className="section4_mid_left"  >
      <div className="img_wrapper" >
    <Image     objectFit="contain" layout="fill" src={'https://res.cloudinary.com/dzcmadjl1/image/upload/v1623834248/lrelihqpxumswf3epliq.png'} alt="Picture of the author" />
          </div>
          </div>
          <div className="section4_mid_right"  >

              <h2>HOW MUCH DIFFERENCE
CAN A VALVE ACTUALLY
MAKE?</h2>

              <p>The difference between profit and loss. Between a smooth operation and a frantic one. Between a safer workplace and unacceptable
risk. The difference is in the details, but effect is enormous.</p>
         
<p>Discover how the Straight Flo™ compressor valve with patented MRV technology has changed the game and far surpassed the
performance of all others in the industry.</p>
          </div>
         
  </div>
  <div className="section4_bottom" >



           <Image     objectFit="cover" layout="fill" src={'https://res.cloudinary.com/dzcmadjl1/image/upload/v1623833583/kfpghb2mcrrrbnao9j21.png'} alt="Picture of the author" />
          
           <div className="section4_bottom_data" >
           <div className="section4_mid_left"  >
     
           <h2>caSE STUDIES
</h2>

              <p>Our customers are from all categories, types,
and sizes. Upstream, Midstream, Downstream.
E&P, Off-shore, and contract compression. Major
oil & gas players and independent private
producers. Refineries. Dirty wells and problem
8
( oí
compressors. Across the continent and around
the world. See their stories and imagine their
same type of successes for your company.</p>
         
<div className="btn" >
    <button>
    See Your Self
    </button>
    </div>
          </div>
          <div className="section4_mid_right"  >

          <div className="section4_logo" >
          <div className="img_wrapper" > 
          <Image     objectFit="contain" layout="fill" src={'https://res.cloudinary.com/dzcmadjl1/image/upload/v1623835331/itccpwpe6st3ugusu1nt.png'} alt="Picture of the author" />
          
          </div>

<h3>Alex Bosossman</h3> 
       </div>
       <div className="section4_logo" >
          <div className="img_wrapper" > 
          <Image     objectFit="contain" layout="fill" src={'https://res.cloudinary.com/dzcmadjl1/image/upload/v1623835331/w3hb3schn3u7pnjdrewv.png'} alt="Picture of the author" />
          </div>

          <h3>Jim Jim , Foreman</h3>

       </div>
       

       
          </div>

          </div>
         
  
  
  
  </div>
</div>
            
        </Section>
    )
}

export default HeroSection