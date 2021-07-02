
import React , {useEffect} from 'react'
import { Section} from './Style'
import Image from 'next/image'
import { useRouter } from 'next/router'
import  Navbar from '../../layout/navbar/navbar'
import VisibilitySensor from 'react-visibility-sensor';
interface Section4 {
    data: {
        homeFourHeading: string,
        homeFourImageurl: string,
        homeFiveImageurl: string,
homeFiveRightContent: string,
homeSixCaseStudyButtonUrl: string
homeSixCaseStudyContent: string,
homeSixRightOneImage: string,
homeSixRightOneName: string,
homeSixRightTwoImage: string,
homeSixRightTwoName: string,
homeThreeRightLink: string
    
    }, // Change the required prop to an optional prop.
  }

 



 const Section4: React.FC<Section4> = (data) => {
    const router = useRouter()
  
   
    return (
        <Section>
        
           
           <div className="section4" >
               <div className="section4_top" >
          
               <div className="tringle" >
                  </div>
  
   <div className="section4_top_data" >

      
       <h2>{data.data.homeFourHeading}</h2>
       <div className="section4_top_data_logos" >
       
        <Image     objectFit="contain" layout="fill" src={data.data.homeFourImageurl} alt="Picture of the author" />
            </div>
            <div data-aos="fade-up" className="icon" id="gasses" >
               <div className="img-wrapper" >
               <Image     objectFit="contain" layout="fill" src={'https://res.cloudinary.com/dzcmadjl1/image/upload/v1623905280/oqahwcfpdj4symxaaaki.png'} alt="" />
              
                   </div>
                   <span>Indusdrial gases</span>
               </div> 
             <div data-aos="fade-up-left" className="icon" id="industry" >
               <div className="img-wrapper" >
               <Image     objectFit="contain" layout="fill" src={'https://res.cloudinary.com/dzcmadjl1/image/upload/v1623903829/istcdd90jzd7w26thtwl.png'} alt="" />
              
                   </div>
                   <span>Naurtal Gas Industry</span>
               </div>

               <div data-aos="fade-left" className="icon" id="Refineries" >
               <div className="img-wrapper" >
               <Image     objectFit="contain" layout="fill" src={'https://res.cloudinary.com/dzcmadjl1/image/upload/v1623903829/ffeauowt4nte4j8cjv6t.png'} alt="" />
              
                   </div>
                   <span>Refineries</span>
               </div>
               

               <div data-aos="fade-up-right" className="icon" id="Cng" >
               <div className="img-wrapper" >
               <Image     objectFit="contain" layout="fill" src={'https://res.cloudinary.com/dzcmadjl1/image/upload/v1623907055/usmugehexosnqgjxkpsy.png'} alt="" />
              
                   </div>
                   <span>Cng instury</span>
               </div>
               <div data-aos="fade-right" className="icon" id="Oil" >
               <div className="img-wrapper" >
               <Image     objectFit="contain" layout="fill" src={'https://res.cloudinary.com/dzcmadjl1/image/upload/v1623903829/ztqc0qrptre0bxp3vxfz.png'} alt="" />
              
                   </div>
                   <span>Oil</span>
               </div>
               <div data-aos="fade-down-right" className="icon" id="hydrogen" >
               <div className="img-wrapper" >
               <Image     objectFit="contain" layout="fill" src={'https://res.cloudinary.com/dzcmadjl1/image/upload/v1623903830/bzmo2rxdmbgeibrwzdq4.png'} alt="" />
              
                   </div>
                   <span>Hydrogen production</span>
               </div>
               <div data-aos="fade-down-left" className="icon" id="Lng" >
               <div className="img-wrapper" >
               <Image     objectFit="contain" layout="fill" src={'https://res.cloudinary.com/dzcmadjl1/image/upload/v1623905280/oqahwcfpdj4symxaaaki.png'} alt="" />
              
                   </div>
                   <span>Lng</span>
               </div>
               <div data-aos="fade-down" className="icon" id="chemical" >
               <div className="img-wrapper" >
               <Image     objectFit="contain" layout="fill" src={'https://res.cloudinary.com/dzcmadjl1/image/upload/v1623903829/z1pr48ideklcy30kcodh.png'} alt="" />
              
                   </div>
                   <span>chemical</span>
               </div>
               <div  data-aos="fade-down" className="icon" id="offshore" >
               <div  className="img-wrapper" >
               <Image     objectFit="contain" layout="fill" src={'https://res.cloudinary.com/dzcmadjl1/image/upload/v1623903830/kzwiywblnokhn0vxvdmd.png'} alt="" />
              
                   </div>
                   <span>offshore Applications</span>
               </div>
              
              
              
        </div>

      
  </div>
  <VisibilitySensor >
  <div className="section4_mid" >

      <div className="section4_mid_left"  >
      <div className="img_wrapper" >
    <Image     objectFit="contain" layout="fill" src={data.data.homeFiveImageurl} alt="Picture of the author" />
          </div>
          </div>
          <div  dangerouslySetInnerHTML={{ __html: data.data.homeFiveRightContent }} className="section4_mid_right"  >

              {/* <h2>HOW MUCH DIFFERENCE
CAN A VALVE ACTUALLY
MAKE?</h2>

              <p>The difference between profit and loss. Between a smooth operation and a frantic one. Between a safer workplace and unacceptable
risk. The difference is in the details, but effect is enormous.</p>
         
<p>Discover how the Straight Flo™ compressor valve with patented MRV technology has changed the game and far surpassed the
performance of all others in the industry.</p> */}
          </div>
         
  </div>
 
 
 </VisibilitySensor>
  <div className="section4_bottom" >

  {/* <div className="img_absol" >
       <div className="img_wrapper" >
    <Image     objectFit="contain" layout="fill" src={'https://res.cloudinary.com/dzcmadjl1/image/upload/v1624447543/bdegy1j9jkvghjbzxvxl.png'} alt="Picture of the author" />
          </div>
          </div> */}
       

           {/* <Image     objectFit="cover" layout="fill" src={'https://res.cloudinary.com/dzcmadjl1/image/upload/v1624446661/zugr9ahadrsbvxmfoi2v.jpg'} alt="Picture of the author" /> */}
          
           <div className="section4_bottom_data" >
           <div className="section4_mid_left"   >
       <div dangerouslySetInnerHTML={{ __html: data.data.homeSixCaseStudyContent }} className="top" >
           
           
            </div>
    


<div className="btn" >
    <button onClick={() => router.push(`/${data.data.homeSixCaseStudyButtonUrl}`) } >
    See for YourSelf
    </button>
    </div>
          </div>
     
          <div className="section4_mid_right"  >

          <div className="section4_logo" >
          <div className="img_wrapper" > 
          <Image     objectFit="contain" layout="fill" src={data.data.homeSixRightOneImage} alt="Picture of the author" />
          
          </div>

<h3>{data.data.homeSixRightOneName}</h3> 
       </div>
       <div className="section4_logo" >
          <div className="img_wrapper" > 
          <Image     objectFit="contain" layout="fill" src={data.data.homeSixRightTwoImage} alt="Picture of the author" />
          </div>

          <h3>{data.data.homeSixRightTwoName}</h3>

       </div>
       

       
          </div>

          </div>
         
  
  
  
  </div>
</div>
            
        </Section>
    )
}

export default Section4