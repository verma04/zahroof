import styled from 'styled-components'



export const Section = styled.section` 

  display:flex;
  justify-content:center;
   flex-direction:column;
  width:100%;
  align-items:center;

   
  
   @media (min-width: 1281px) {
  
    .homePage-hero {
        width: 100%;
        position: relative;
        height: 40em;
        .homePage-layer {
            position: absolute;
            width: 100%;
            height: 100%;
            background-image: url("https://res.cloudinary.com/dzcmadjl1/image/upload/v1623838132/g0uu4qlatbvnmzr405zi.png"); 

  background-position: center; 
  background-repeat: no-repeat; 
  background-size: cover; 
  display: flex;
  justify-content: center;
  align-items: center;
  .homePage-data {
      margin-top: 5%;
      width: 50%;
    height: 60%;
   
    display: flex;
    justify-content: center;
    align-items: center;
 flex-direction: column;
  ul {
     width:100%;
     display: flex;
     justify-content: center;
  li {
    
      font-size: 3.3rem;
      text-align:center;
      color:white;
      font-weight: 1000;
      text-transform: uppercase;
      
  }
 
 }
 .text-right {

     width: 60%;
     margin-left: 32%;

     li {
      text-align:left;
     }
 }
  }
  

        }

    }
   



   }

  

 
`