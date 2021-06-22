
import React from 'react'
import { Section} from './Style'
import Image from 'next/image'


 const HeroSection: React.FC<{}> = () => {
    return (
        <Section>
        
           
           <div className="section" >
             
           
             

               <Image     objectFit="cover" layout="fill" src={'https://res.cloudinary.com/dzcmadjl1/image/upload/v1624000545/rsukles8twyiyukry6ws.png'} alt="Picture of the author" />
               <div className="section_data" >
<div className="section_left" >

    <div className="section-left-top" >

        <h2>REQUEST
A QUOTE</h2>

        <h3>
        Thank you for your interest in Zahroof
StraightFlo Valves. All inquiries sent via USPS
mail should be addressed directly to Zahroof
Valves, Inc. If you'd like a more immediate
quote, please use the contact form to the right.
        </h3>
        </div>

    <div className="section-left-bottom" >
      <ul>
<li>Headquarters:</li>

<li><h3>8535-N Jackrabbit Rd.</h3> </li>
<li><h3>Houston, TX USA 77095 </h3></li>

      </ul>

      <ul>
    <li> <h3>  Office: (713) 554-2678 </h3> </li>
   <li>  <h3>E-mail: sales@zahroofvalves.com</h3> </li>
      </ul>
        </div>
    </div>

    <div className="section_right" >
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
                <div className="input-field" >
                <div className="field" >
                <label>Email*</label>
         <input></input>
                </div>
                <div className="field" >
                <label>Location*</label>
         <input></input>
                </div>

                </div>
                <div className="input-field-2" >
                <div className="field" >
                <label>Select One*</label>
                <select name="pets" id="pet-select">
    <option value="">--Please choose an option--</option>
    <option value="dog">Dog</option>
    <option value="cat">Cat</option>
    <option value="hamster">Hamster</option>
    <option value="parrot">Parrot</option>
    <option value="spider">Spider</option>
    <option value="goldfish">Goldfish</option>
</select>
                </div>
                </div>
               
                <div className="input-field" >
                <div className="field-1" >
                <label>Select File*</label>
         <input type="file"  ></input>
                </div>
                </div> 
                <div className="input-field-1" >

                <div className="field" >
                <label>Location*</label>
         <textarea></textarea>
                </div>
                
                </div>
                <div className="input-field" >
                <button>Submit</button>
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