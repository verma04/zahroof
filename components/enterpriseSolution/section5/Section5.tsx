
import React from 'react'
import { Section} from './Style'
import Image from 'next/image'
import  Navbar from '../../layout/navbar/navbar'

interface SectionThreeeProps {
    data: {
        enterprisethreeTopContent: string,
    }, // Change the required prop to an optional prop.
}

const HeroSection: React.FC<SectionThreeeProps> = (data) => {
    return (
        <Section>
        
           
           <div className="section" >
                <div className="section_top" >             
                    <div className="section2_data" > 
                        <div className="section2_data_left" dangerouslySetInnerHTML={{ __html: data.data.enterprisethreeTopContent }} />
                    </div>
                </div>
           </div>
            
        </Section>
    )
}

export default HeroSection