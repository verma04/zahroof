
import React from 'react'
import { Section} from './Style'
import Image from 'next/image'
import  Navbar from '../../layout/navbar/navbar'
import { Parallax, Background } from "react-parallax";
const image1 =
  "https://res.cloudinary.com/dzcmadjl1/image/upload/v1624859749/cawdyff1kgtdbfyrmxcu.jpg";

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
  const image2 =
  "https://res.cloudinary.com/dzcmadjl1/image/upload/v1624859749/sdouzbuocrwq67wffz95.jpg";
  interface OptionalMiddleName {
    homebannercontent: string;
    honebannerimageurl: string;

}
 
  const HeroSection: React.FC<Section> = (data) => {
    return (
      
        <Section>
        
           
           <div className="section" >
               <div className="section_top" >
               <div className="section_top_left" >

                   <span  dangerouslySetInnerHTML={{ __html: data.data.firstLeftHeading }}   /> 
                   <div className="tringle" ></div>
                   </div>
                   <div className="section_top_right" >
                   <span  dangerouslySetInnerHTML={{ __html: data.data.firstRightHeading }}   /> 
                   <div className="tringle" ></div>
                   </div>
           </div>
              
               <div  className="section_bottom" >
               <Parallax bgImage={data.data.firstLeftBgimage  } strength={500}>
               <div  className="section_bottom_set" >
           
               <div className="section_bottom_data" >
                    <li>
                    <Image     objectFit="contain" layout="fill" src={data.data.firstLeftIcon} alt="sd" />
                    </li>
                  
                    <li><h3>{data.data.firstLeftTitle}</h3></li>
                 
                    <li>
                    <Image     objectFit="contain" layout="fill" src='https://res.cloudinary.com/dzcmadjl1/image/upload/v1623825001/kphxeenbazcwieocomkx.png' alt="" />
                    </li>
                   
                </div>
              

                   </div>
                 </Parallax>
                 <Parallax bgImage={data.data.firstRightBgimage  } strength={500}>
               <div  className="section_bottom_set" >
           
               <div className="section_bottom_data" >
                    <li>
                    <Image     objectFit="contain" layout="fill" src={data.data.firstRightIcon} alt="sd" />
                    </li>
                  
                    <li><h3>{data.data.firstRightTitle}</h3></li>
                 
                    <li>
                    <Image     objectFit="contain" layout="fill" src='https://res.cloudinary.com/dzcmadjl1/image/upload/v1623825001/kphxeenbazcwieocomkx.png' alt="" />
                    </li>
                   
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


