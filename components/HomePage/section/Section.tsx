
import React from 'react'
import { Section } from './Style'
import Image from 'next/image'
import Navbar from '../../layout/navbar/navbar'
import { Parallax, Background } from "react-parallax";
import { useRouter } from 'next/router'


interface Section {
  data: {
    firstLeftHeading: string,
    firstLeftIcon: string,
    firstLeftTitle: string,
    firstLeftBgimage: string,
    firstRightBgimage: string,
    firstRightHeading: string,
    firstRightIcon: string,
    firstRightTitle: string,
  }, // Change the required prop to an optional prop.
}


const HeroSection: React.FC<Section> = (data) => {
  const router = useRouter()

  return (

    <Section>     
  
          <div className="section-1" >
       

          <div className="section_bottom" >
            
            <Parallax bgImage={data.data.firstLeftBgimage} strength={100}>
            <div className="section_top" >
            <div className="section_top_" >

              <span dangerouslySetInnerHTML={{ __html: data.data.firstLeftHeading }} />
              <div className="tringle" ></div>
            </div>
          
          </div>
              <div className="section_bottom_set" >

                <div  onClick={()=>router.push('/enterpriseSolutions')} className="section_bottom_data" >
                  <li> <Image objectFit="contain" layout="fill" src={data.data.firstLeftIcon} alt="sd" /> </li>
                  <li><h3>{data.data.firstLeftTitle}</h3></li>
                  <li> <Image objectFit="contain" layout="fill" src='https://app.zahroofvalves.com/wp-content/uploads/2021/07/arrow-down.png' alt="" /></li>
                </div>
              </div>
            </Parallax>

            <Parallax bgImage={data.data.firstRightBgimage} strength={100}>
            <div className="section_top" >
           
            <div className="section_top_" >
              <span dangerouslySetInnerHTML={{ __html: data.data.firstRightHeading }} />
              <div className="tringle" ></div>
            </div>
          </div>
              <div className="section_bottom_set" >

                <div                   onClick={()=>router.push('/engineeringSolutions')}  className="section_bottom_data" >
                  <li><Image objectFit="contain" layout="fill" src={data.data.firstRightIcon} alt="sd" /></li>

                  <li><h3>{data.data.firstRightTitle}</h3></li>

                  <li> <Image objectFit="contain" layout="fill" src='https://app.zahroofvalves.com/wp-content/uploads/2021/07/arrow-down.png' alt="" /></li>

                </div>
              </div>
            </Parallax>

          </div>
        </div>
    
   
          <div className="section" >
            <div className="section_top" >
              <div className="section_top_left" >

                <span dangerouslySetInnerHTML={{ __html: data.data.firstLeftHeading }} />
                <div className="tringle" ></div>
              </div>
              <div className="section_top_right" >
                <span dangerouslySetInnerHTML={{ __html: data.data.firstRightHeading }} />
                <div className="tringle" ></div>
              </div>
            </div>

            <div className="section_bottom" >
              <Parallax bgImage={data.data.firstLeftBgimage} strength={300}>
                <div className="section_bottom_set" >

                  <div   onClick={()=>router.push('/enterpriseSolutions')} className="section_bottom_data" >
                    <li> <Image objectFit="contain" layout="fill" src={data.data.firstLeftIcon} alt="sd" /> </li>

                    <li><h3>{data.data.firstLeftTitle}</h3></li>

                    <li> <Image objectFit="contain" layout="fill" src='https://app.zahroofvalves.com/wp-content/uploads/2021/07/arrow-down.png' alt="" /></li>

                  </div>
                </div>
              </Parallax>

              <Parallax bgImage={data.data.firstRightBgimage} strength={300}>
                <div className="section_bottom_set" >

                  <div onClick={()=>router.push('/engineeringSolutions')}  className="section_bottom_data" >
                    <li><Image objectFit="contain" layout="fill" src={data.data.firstRightIcon} alt="sd" /></li>

                    <li><h3>{data.data.firstRightTitle}</h3></li>

                    <li><Image objectFit="contain" layout="fill" src='https://app.zahroofvalves.com/wp-content/uploads/2021/07/arrow-down.png' alt="" /></li>

                  </div>
                </div>
              </Parallax>

            </div>
          </div>
      
      
  

    </Section>

  )
}

export default HeroSection



// import  React from "react"
// interface WelcomeProps {
//    data?: object, // Change the required prop to an optional prop.
// }
// const Welcome: React.FC<WelcomeProps> = (data) => {

//    console.log(data.data)

//  return <h1>Hello, </h1>;
// }

// export default Welcome;


