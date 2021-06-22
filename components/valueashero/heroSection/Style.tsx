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
            background-image: url("https://res.cloudinary.com/dzcmadjl1/image/upload/v1624085966/yoy5pmbutgpdmghuktg6.png"); 

  background-position: center; 
  background-repeat: no-repeat; 
  background-size: cover; 
  display: flex;
  justify-content: center;
  align-items: center;
  .homePage-data {
      margin-top: 5%;
      width: 75%;
    height: 60%;
     
 
    display: flex;
    justify-content: center;
    align-items: flex-start;
 flex-direction: column;
  .text-left {
     width:50%;
  
  li {
    margin-top:2rem;
     
      font-size: 3.3rem;
      text-align:left;
      color:white;
      font-weight: 1000;
      text-transform: uppercase;
      position: relative;
      padding-left: 0.5rem;
      
  }
  li:nth-child(1)::after {
    content: '';
    position: absolute;
    display: block;
    background-color: #eeba18;
    height: 100%;
    width: 0.4rem;
    top:0;
    left: -0.5rem;
   
  }
 }
 .text-right {
  
     width: 100%;
    display: flex;
    justify-content: flex-end;



     li {
     
       width: 50%;
      text-align:left;
     }
     li {
    margin-top:2rem;
     
      font-size: 3.3rem;
      text-align:left;
      color:white;
      font-weight: 1000;
      text-transform: uppercase;
      position: relative;
      padding-left: 0.5rem;
      
  }
  li:nth-child(1)::after {
    content: '';
    position: absolute;
    display: block;
    background-color: #eeba18;
    height: 100%;
    width: 0.4rem;
    top:0;
    left: -0.5rem;
   
  }
 }
  }
  

        }

    }
   



   }

  

 
`