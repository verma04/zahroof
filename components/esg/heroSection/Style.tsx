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
        height: 56em;
        background-image: url("https://res.cloudinary.com/dzcmadjl1/image/upload/v1624030696/l0krn6a059mpgqlonf8q.png");

/* Set a specific height */


/* Create the parallax scrolling effect */
background-attachment: fixed;
background-position: center;
background-repeat: no-repeat;
background-size: cover;
        .homePage-layer {
            position: absolute;
            width: 100%;
            height: 100%;
    
  display: flex;
  justify-content: center;
  align-items: center;
  .homePage-data {
      margin-top: 5%;
      width: 80%;
     
    height: 60%;
   
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
 flex-direction: column;
  ul {
    margin-left:0.5rem;
     width: 100%;
  li {
      width: 20%;
      font-size: 3.438rem;
      text-align:left;
      color:white;
      font-weight: 1000;
      text-transform: uppercase;
      
  }
  li:nth-child(1) {
    position: relative;
  
    
   
  }
  li:nth-child(1)::after {
    content: '';
    display: block;
    height: 80%;
    margin-top:0.2rem;
    width: 0.35rem;;
    position: absolute;
   background-color: #eeba18;
   top: 0%;
   left: -.5rem;;
   
  }
 }

  p {
    width: 30%;
    line-height: 2;
    font-size: 1.1rem;
    font-weight: 800;
    color: white;;
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