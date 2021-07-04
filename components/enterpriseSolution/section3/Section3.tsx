
import React from 'react'
import { Section } from './Style'
import Image from 'next/image'
import  Navbar from '../../layout/navbar/navbar'

 const HeroSection: React.FC<{}> = () => {
    return (
        <Section>
        
           
           <div className="section2" >

               <div className="section2_data" >
  
  <div className="section2_top"  >

      <div className="logo" >
          <div className="wrapper"  >
          <Image     objectFit="contain" layout="fill" src={'https://res.cloudinary.com/dzcmadjl1/image/upload/v1625393724/da1aktotievrmyf4zmtv.png'} alt="Picture of the author" />
               </div>
          <p>INCREASES INCREMENTAL
REVENUE BY HUNDREDS
OF THOUSANDS TO
MILLIONS OF DOLLARS</p>
          </div>
          <div className="logo" >
          <div className="wrapper"  >
          <Image     objectFit="contain" layout="fill" src={'https://res.cloudinary.com/dzcmadjl1/image/upload/v1625393724/pqivhal99jalrsflhuzi.png'} alt="Picture of the author" />
               </div>
          <p>REDUCES POWER
CONSUMPTION BY
5-15%</p>
          </div>
          <div className="logo" >
          <div className="wrapper"  >
          <Image     objectFit="contain" layout="fill" src={'https://res.cloudinary.com/dzcmadjl1/image/upload/v1625393724/avq7anxvtsb3v3rkdluo.png'} alt="Picture of the author" />
               </div>
          <p>GUARANTEED 5-20%
THROUGHPUT
IMPROVEMENT</p>
          </div>
          <div className="logo" >
          <div className="wrapper"  >
          <Image     objectFit="contain" layout="fill" src={'https://res.cloudinary.com/dzcmadjl1/image/upload/v1625393724/td9e52tv1wqerys6cgsy.png'} alt="Picture of the author" />
               </div>
          <p>REDUCES SERVICE COSTS,
ALL BUT ELIMINATES
UNSCHEDULED
COMPRESSOR DOWNTIME</p>
          </div>
          <div className="logo" >
          <div className="wrapper"  >
          <Image     objectFit="contain" layout="fill" src={'https://res.cloudinary.com/dzcmadjl1/image/upload/v1625393724/ppfl659nswsejvoq2vtq.png'} alt="Picture of the author" />
               </div>
          <p>REDUCES INVENTORY
COSTS BY AS MUCH
AS 80%</p>
          </div>
          <div className="logo" >
          <div className="wrapper"  >
          <Image     objectFit="contain" layout="fill" src={'https://res.cloudinary.com/dzcmadjl1/image/upload/v1625393724/hpvnhr8bhjihmekpz939.png'} alt="Picture of the author" />
               </div>
          <p>REDUCES # OF EMISSION
EVENTS AND FUGITIVE
EMISSIONS INTENSITY</p>
          </div>
      </div>
    
                   
                   
                   </div>
              
           </div>
            
        </Section>
    )
}

export default HeroSection