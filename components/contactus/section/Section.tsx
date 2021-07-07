import React from "react";
import { Section } from "./Style";
import Image from "next/image";

interface Section {
  data: {
    contactaddress: string;
    content: string;
  }; // Change the required prop to an optional prop.
}
const HeroSection: React.FC<Section> = (data) => {
  return (
    <Section>
      <div className="section">
        <div className="section_data">
          <div className="section_left">
            <div
              dangerouslySetInnerHTML={{ __html: data.data.content }}
              className="section-left-top"
            >
              {/* <h2>REQUEST
A QUOTE</h2>

        <h3>
        Thank you for your interest in Zahroof
StraightFlo Valves. All inquiries sent via USPS
mail should be addressed directly to Zahroof
Valves, Inc. If you d like a more immediate
quote, please use the contact form to the right
        </h3>
       */}
            </div>

            <div
              dangerouslySetInnerHTML={{ __html: data.data.contactaddress }}
              className="section-left-bottom"
            >
              {/* <ul>
<li>Headquarters:</li>

<li><h3>8535-N Jackrabbit Rd.</h3> </li>
<li><h3>Houston, TX USA 77095 </h3></li>

      </ul>

      <ul>
    <li> <h3>  Office: (713) 554-2678 </h3> </li>
   <li>  <h3>E-mail: sales@zahroofvalves.com</h3> </li>
      </ul>
        */}
            </div>
          </div>

          <div className="section_right">
            <div className="form">
              <form>
                <div className="input-field">
                  <div className="field">
                    <label>Name*</label>
                    <input></input>
                  </div>
                  <div className="field">
                    <input></input>
                  </div>
                </div>
                <div className="input-field">
                  <div className="field">
                    <label>Phone*</label>
                    <input></input>
                  </div>
                  <div className="field">
                    <label>Company*</label>
                    <input></input>
                  </div>
                </div>
                <div className="input-field">
                  <div className="field">
                    <label>Email*</label>
                    <input></input>
                  </div>
                  <div className="field">
                    <label>Location*</label>
                    <input></input>
                  </div>
                </div>
                <div className="input-field-2">
                  <div className="field">
                    <label>Select One*</label>
                    <select name="pets" id="pet-select">
                      <option value="">I WOULD LIKE AN ESTIMATE</option>
                      <option value="dog">Dog</option>
                      <option value="cat">Cat</option>
                      <option value="hamster">Hamster</option>
                      <option value="parrot">Parrot</option>
                      <option value="spider">Spider</option>
                      <option value="goldfish">Goldfish</option>
                    </select>
                  </div>
                </div>

                <div className="input-field">
                  <div className="field-1">
                    <label>Select File*</label>
                    <input type="file"></input>
                  </div>
                </div>
                <div className="input-field-1">
                  <div className="field">
                    <label>Comment*</label>
                    <textarea></textarea>
                  </div>
                </div>
                <div className="input-field">
                  <button>Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default HeroSection;
