
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
            <li>123456789</li>
        </ul>

        <ul>
            <li>  <Image     objectFit="contain" layout="fill" src='https://res.cloudinary.com/dzcmadjl1/image/upload/v1624874075/nt4lgdaec6ngnwwo8bro.png' alt="sd" /></li>
            <li>Email</li>
            <li>xyz@gamil.com</li>
        </ul>
      
            </div>
    <div className="form">
        <form>
            <div className="input-field" >

            <div className="field" >
                <label>Name*</label>
         <input></input>
                </div>
                <div className="field" >
               
         <input></input>
                </div>

            </div>
            <div className="input-field" >
            <div className="field" >
                <label>Phone*</label>
         <input></input>
                </div>
                <div className="field" >
                <label>Company*</label>
         <input></input>
                </div>

                </div>
           
               
                <div className="input-field-1" >

                <div className="field" >
                <label>Location*</label>
         <textarea></textarea>
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