
import React from 'react'
import { Section} from './Style'
import Image from 'next/image'
import  Navbar from '../../layout/navbar/navbar'

 const HeroSection: React.FC<{}> = () => {
    return (
        <Section>
        
           
           <div className="section2" >

           <Image     objectFit="cover" layout="fill" src={'https://res.cloudinary.com/dzcmadjl1/image/upload/v1624030712/siv3vtawwkytzsnfrhnr.png'} alt="Picture of the author" />
        

        <div className="section_data" >
        <div className="head" >
          <h2>REDUCE NOISE AND VIBRATIONS</h2>
         <p>With no plates, poppets or rings impacting against a valve seat or guard, the
StraightFloTM Valve generates substantially lower vibration and noise levels than
conventional valves.</p>
       </div>

       <div className="section_logo" >
       <div className="section_logo_top" >

           <div className="logo" >
               <div className="wrapper" >
           <Image     objectFit="contain" layout="fill" src={'https://res.cloudinary.com/dzcmadjl1/image/upload/v1624030661/uuby8laq1faz88aivru9.png'} alt="Picture of the author" />
               </div>
               </div>
               <div className="logo" >
               <div className="wrapper" >
               <Image     objectFit="contain" layout="fill" src={'https://res.cloudinary.com/dzcmadjl1/image/upload/v1624030662/bzuxsvria2pln0cw06iz.png'} alt="Picture of the author" />
               </div>
               </div>
               <div className="logo" >
               <div className="wrapper" >
               <Image     objectFit="contain" layout="fill" src={'https://res.cloudinary.com/dzcmadjl1/image/upload/v1624030660/yefj2rgmpnuodretjwse.png'} alt="Picture of the author" />
               </div>
               </div>
        
        </div>
        <div className="section_logo_bottom" >
        <div className="logo-1" >
               <p >
               10X LOWER
VIBRATION
LEVELS

               </p>
               </div>
               <div className="logo-1" >
               <p >
               6-8
DECIBELS
LESS NOISE
               </p>
               </div>
               <div className="logo-1" >
               <p >
               REDUCES
AMOUNT OF
SOUND
DAMPENING
INSULATION
               </p>
               </div>
        
        
        </div>
 
       </div>



</div>        
           </div>
            
        </Section>
    )
}

export default HeroSection