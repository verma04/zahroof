
import React from 'react'
import { Section} from './Style'
import Image from 'next/image'


 const HeroSection: React.FC<{}> = () => {
    return (
        <Section>
        
           
           <div className="section" >
             
           
             

             
               <div className="section_data" >
<div className="section_left" >

    <div className="section-left-top" >

        <h2>MAKE THE CALL</h2>

        <h3>
        Learn how one great decision can make a huge difference.

        </h3>
        </div>

  
    
    </div>

    <div className="section_right" >
    <div className="icon">

        <ul>
            <li>
            <Image     objectFit="contain" layout="fill" src='https://res.cloudinary.com/dzcmadjl1/image/upload/v1624874075/pnqbtnq5yxgu1o7pyquc.png' alt="sd" />
            </li>
            <li>Tel</li>
            <li>(713)554-2678</li>
        </ul>

        <ul>
            <li>  <Image     objectFit="contain" layout="fill" src='https://res.cloudinary.com/dzcmadjl1/image/upload/v1624874075/nt4lgdaec6ngnwwo8bro.png' alt="sd" /></li>
            <li>Email</li>
            <li>info@zahroofvalues.com</li>
        </ul>
      
            </div>
    <div className="form">
        <form>
            <div className="input-field" >

            <div className="field" >
               
         <input placeholder="Your Name" ></input>
                </div>
                <div className="field" >
               
         <input  placeholder="Your Email" ></input>
                </div>

            </div>
            <div className="input-field" >
            <div className="field" >
                
         <input  placeholder="Subject" ></input>
                </div>
                <div className="field" >
                
                <select className="select">
                    <option value="">Departmnet</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
                {/* <input  placeholder="Departmnet" ></input> */}
                </div>

                </div>
           
               
                <div className="input-field-1" >

                <div className="field" >
                
         <textarea  placeholder="Message"></textarea>
                </div>
                
                </div>
                <div className="input-field" >
                <button>Submit Message</button>
                </div>
                

        </form>
            
            </div>
    </div>

                   </div>
                   
              
               </div>
         
           
            
        </Section>
    )
}

export default HeroSection