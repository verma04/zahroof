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

        background-image: url("https://res.cloudinary.com/dzcmadjl1/image/upload/v1624266802/k8sh87pebodtjyxqy0iy.png");

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
           

  background-position: center; 
  background-repeat: no-repeat; 
  background-size: cover; 
  display: flex;
  justify-content: center;
  align-items: center;
  .homePage-data {
      margin-top: 5%;
      width: 70%;
    height: 60%;
     
 
    display: flex;
    justify-content: center;
    align-items: flex-start;
 flex-direction: column;

  .text-left {
     width:35%;
  
  li {
    margin-top:2rem;
     
      font-size: 3.4rem;
      text-align:right;
      color:white;
      font-weight: 1000;
      text-transform: uppercase;
      position: relative;
      padding-right: 0.5rem;
      margin-right: 1rem;;
      
  }
  li:nth-child(1)::after {
    content: '';
    position: absolute;
    display: block;
    background-color: #eeba18;
    height: 100%;
    width: 0.4rem;
    top:0;
    right: -2rem;
   
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
     
      font-size: 3.4rem;
      text-align:left;
      color:white;
      font-weight: 1000;
      text-transform: uppercase;
      position: relative;
      padding-right: 0.5rem;
      
  }
  li:nth-child(1)::after {
    content: '';
    position: absolute;
    display: block;
    background-color: #eeba18;
    height: 100%;
    width: 0.4rem;
    top:0;
    left: -2rem;
   
  }
 }
  }
  

        }

    }
   



   }

  

 
`