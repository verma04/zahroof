
import React from 'react'
import { Section} from './Style'
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
          <Image     objectFit="contain" layout="fill" src={'https://res.cloudinary.com/dzcmadjl1/image/upload/v1624346390/pwwwdrq3uayndd0rdo96.png'} alt="Picture of the author" />
               </div>
          <p></p>
          </div>
          <div className="logo" >
          <p></p>
          </div>
          <div className="logo" >
          <p></p>
          </div>
          <div className="logo" >
          <p></p>
          </div>
          <div className="logo" >
          <p></p>
          </div>
          <div className="logo" >
          <p></p>
          </div>
      </div>
      <div className="section2_bottom"  >
          <h4>THE BENEFITS CAN EASILY ADD UP TO TENS OF MILLIONS OF DOLLARS ACROSS A SINGLE FIELD
WHILE ALSO HELPING COMPANIES MEET OR EXCEED ENVIRONMENTAL STANDARDS.</h4>
      </div>
                   
                   
                   </div>
              <div className="tringle" >
                  </div>
           </div>
            
        </Section>
    )
}

export default HeroSection