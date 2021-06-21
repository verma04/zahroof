
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

 </div>

</div>
           </div>
            
        </Section>
    )
}

export default HeroSection