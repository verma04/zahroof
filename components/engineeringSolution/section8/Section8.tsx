
import React from 'react'
import { Section} from './Style'
import Image from 'next/image'
import  Navbar from '../../layout/navbar/navbar'

interface SectionFourProps {
    data: {
        engineeringfourleftimage: string,
        engineeringfourrightcontent: string,
    }, // Change the required prop to an optional prop.
}

const HeroSection: React.FC<SectionFourProps> = (data) => {
     const testimonial:any = ' " No other valve performs as well across categories  We increased production, reduced energy use and   emissions and cut maintenance costs by XX%      "'
    return (
        <Section>
        
           
            <div className="section" >
                <div className="section_top" >              
                    <span id="top">{testimonial}</span>
                    <span id="ab" > - Customer Name</span>
                    <div className="triangle-down"></div>                
                </div>

                <div className="section_bottom" >
                    <Image objectFit="cover" layout="fill" src={'https://res.cloudinary.com/dzcmadjl1/image/upload/v1625219977/h3f70ouyykgpoigbcpgb.jpg'} alt="Picture of the author" />
                        
                    
                    <div className="section2_data" >
                        <div className="section2_data_left" dangerouslySetInnerHTML={{ __html: data.data.engineeringfourrightcontent }} />
                        <div className="section2_data_right"  >
                            <Image alt="Picture of the author" objectFit="contain" layout="fill" src={data.data.engineeringfourleftimage} />
                        </div>
                    </div> 
                </div>
                
                <div className="tringle" ></div>
            </div>
            
        </Section>
    )
}

export default HeroSection