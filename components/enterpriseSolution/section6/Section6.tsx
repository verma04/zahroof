
import React from 'react'
import { Section} from './Style'
import Image from 'next/image'
import  Navbar from '../../layout/navbar/navbar'
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, Move, MoveIn, MoveOut, Sticky, StickyIn, ZoomIn } from "react-scroll-motion";


 const HeroSection: React.FC<{}> = () => {
 
    return (
        <Section>
        
           
           <div className="section2" >

               <div className="section2_data" >

                   <div  className="section2_data_left">
     <h3>
     Can a valVe really 
revolutionize 
your business?
         </h3>

         <h2>
         If it’s a 
StraightFlo<sup>TM  </sup>
Valve it can.
             </h2>

             <div className="triangle-right"></div>

                       </div>

             
      
                       <div  className="section2_data_right">
       <div className="data" >
       <span>
       Zahroof StraightFloTM compressor valves 
are unmatched in the industry today
           </span>
           </div>
 <div className="logo" >
 <div className="img-wrapper">
 <Image     objectFit="contain" layout="fill" src={'https://res.cloudinary.com/dzcmadjl1/image/upload/v1625046694/sd2fafqjhgvsuju86zih.png'} alt="Picture of the author" />
</div>
 <p>2x TO 25x OR MORE MEAN TIME
BETWEEN FAILURE, THEY OPERATE
FOR YEARS INSTEAD OF MONTHS </p>
 </div>

 <div className="logo" >
 <div className="img-wrapper">
 <Image     objectFit="contain" layout="fill" src={'https://res.cloudinary.com/dzcmadjl1/image/upload/v1625046694/qnv6jygrlsths4mrdb2b.png'} alt="Picture of the author" />
 </div>
 <p>Able to withstand more liquid 
AND DEBRIS PREVENTING UNPLANNED
FAILURES AND DOWNTIME</p>
 </div>
 <div className="logo" >
 <div className="img-wrapper">
 <Image     objectFit="contain" layout="fill" src={'https://res.cloudinary.com/dzcmadjl1/image/upload/v1625046694/rxbrp9tbxipw1pp0sthc.png'} alt="Picture of the author" />
 </div>
 <p>Serviced on-site without machining, 
as easy offshore as on dry land
</p>
 </div>
 <div className="logo" >
     <div className="img-wrapper">
 <Image     objectFit="contain" layout="fill" src={'https://res.cloudinary.com/dzcmadjl1/image/upload/v1625046694/clwydtwl2uwlibnvxsr1.png'} alt="Picture of the author" />
</div>
<p>Pull, repair & replace means no 
need to stockpile spare parts</p>
 </div>
</div>

                   </div>
              
           </div>
            
        </Section>
    )
}

export default HeroSection