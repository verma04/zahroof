
import React from 'react'
import { Section} from './Style'
import Image from 'next/image'
import  Navbar from '../../layout/navbar/navbar'

 const HeroSection: React.FC<{}> = () => {
    return (
        <Section>
        
           
           <div className="section" >
             

<div  className='section-1' > 

<div className="wrapper" > 
<Image     objectFit="cover" layout="fill" src={'https://res.cloudinary.com/dzcmadjl1/image/upload/v1624030704/gvlo9vwrbjbpiasvv66j.png'} alt="Picture of the author" />

<div className="section-data" >
<div className="left" >
   
<ul>





      <li> REDUCE </li> 
       
       <li>ENVIRONMENTAL</li>
      <li>IMPACT</li>
      
   </ul>
<p>
Replacing conventional valves with Straight FloTM Valves
blow down of pipes. From 5x to 25x less.
improves compressor performance and efficiency, making
the collection, transfer and distribution
energy
resources more eco-friendly. By keeping more gas moving
through your system, there s far less to flare.

</p>

    </div>
<div className="right" > 
<div className='right_logo' >
<div className="logo-wrapper" >
<Image     objectFit="contain" layout="fill" src={'https://res.cloudinary.com/dzcmadjl1/image/upload/v1624336814/clsi55uv8yuoiw57riod.png'} alt="Picture of the author" />
    </div>
<p>
Highly efficient valves mean less fuel consumption for
the same work. Up to 10% less in a typical 1000 rpm
high speed pipeline application.
</p>


    </div>
    <div className='right_logo' >
<div className="logo-wrapper" >
<Image     objectFit="contain" layout="fill" src={'https://res.cloudinary.com/dzcmadjl1/image/upload/v1624336813/ncidwuzvzqiqiuzb8nts.png'} alt="Picture of the author" />
    </div>
<p>
Highly efficient valves mean less fuel consumption for
the same work. Up to 10% less in a typical 1000 rpm
high speed pipeline application.
</p>


    </div>

    <div className='right_logo' >
<div className="logo-wrapper" >
<Image     objectFit="contain" layout="fill" src={'https://res.cloudinary.com/dzcmadjl1/image/upload/v1624336813/z1vgvrcaw67dxs19zmqj.png'} alt="Picture of the author" />
    </div>
<p>
Highly efficient valves mean less fuel consumption for
the same work. Up to 10% less in a typical 1000 rpm
high speed pipeline application.
</p>


    </div>


</div>
     </div>
 </div>



</div>
           </div>
            
        </Section>
    )
}

export default HeroSection