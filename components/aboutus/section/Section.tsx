
import React from 'react'
import { Section} from './Style'
import Image from 'next/image'
import  Navbar from '../../layout/navbar/navbar'
import Select from 'react-select'
const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]
  const customStyles = {
    control: (base:any, state:any) => ({
      ...base,
      background: " #c1c4ca;",
      
      // match with the menu
      borderRadius: state.isFocused ? "3px 3px 0 0" : 3,
      // Overwrittes the different states of border
    
      // Removes weird border around container
      boxShadow: state.isFocused ? null : null,
      "&:hover": {
        // Overwrittes the different states of border

      }
    }),
    menu: (base:any) => ({
      ...base,
      // override border radius to match the box
      borderRadius: 0,
      // kill the gap
      marginTop: 0
    }),
    menuList: (base:any) => ({
      ...base,
      // kill the white space on first and last option
      padding: 0
    })
  };
 const HeroSection: React.FC<{}> = () => {
    return (
        <Section>
        
           
           <div className="section" >
             
           
             

               <Image     objectFit="cover" layout="fill" src={'https://res.cloudinary.com/dzcmadjl1/image/upload/v1624000545/rsukles8twyiyukry6ws.png'} alt="Picture of the author" />
               
              
               </div>
         
           
            
        </Section>
    )
}

export default HeroSection