
import React from 'react'
import { Section} from './Style'
import Image from 'next/image'
import  Navbar from '../../layout/navbar/navbar'

 const HeroSection: React.FC<{}> = () => {
    return (
        <Section>
        
           
           <div className="section4" >
            
  <div className="section2_data_left"  >

<h2>HIGHLY TOLERANT DESIGN</h2>
<p>The straight-through flow path makes our valves self-cleaning
and highly tolerant to liquids and solids. When the reeds are
wide open, liquids and solids go right through the module
without any impact on the critical sealing faces. With
conventional valves, liquids and solids strike hot, highly
stressed plastic, often causing embedded particles, breakage,
and affecting the sealing surface to the point where the valve
must be serviced. With StraightFlo valves, that doesn't happen.</p>

</div>
<div className="section2_data_right"  >
    <div  className="wrapper" >

    <Image     objectFit="contain" layout="fill" src={'https://res.cloudinary.com/dzcmadjl1/image/upload/v1624353412/g3p3jiu8q1jhf19y2ng5.png'} />
        </div>

<div  className="wrapper" >
<Image     objectFit="contain" layout="fill" src={'https://res.cloudinary.com/dzcmadjl1/image/upload/v1624353412/fpbn6tk9x36oyz6duz0q.png'} />
        </div>

</div>
      

</div>
            
        </Section>
    )
}

export default HeroSection