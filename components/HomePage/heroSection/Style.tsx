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
        height: 46em;
        background-image: url("https://res.cloudinary.com/dzcmadjl1/image/upload/v1623820567/fw1lusinju10tx2bapi6.png");

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
            background-image: url("https://res.cloudinary.com/dzcmadjl1/image/upload/v1623838132/g0uu4qlatbvnmzr405zi.png"); 

  background-position: center; 
  background-repeat: no-repeat; 
  background-size: cover; 
  display: flex;
  justify-content: center;
  align-items: center;
  .homePage-data {
    
      margin-top: 5%;
      width: 55rem;
     
    height: 70%;
   
    display: flex;
    justify-content: center;
    align-items: flex-start;
 flex-direction: column;
  ul {
    
     width:60%;
     display: flex;
     justify-content: center;
     flex-direction: column;
 span {
      font-family: Proxima-Bold;
      font-size: 3.75rem;
      text-align:right;
      color:white;
      font-weight: 1000;
      text-transform: uppercase;
      
  }
  span:nth-child(3) {
    margin-top: 0.3rem;;
    color: #eeba18;
    margin-bottom: 0.3rem;;
    position: relative;
    display: flex;
    justify-content:  flex-end;
    li {
      font-family: Proxima-Bold;
      border-bottom: 0.4rem solid  #eeba18;
    }
   
  }
 
 }
 .text-right {

     width: 60%;
     margin-left: 42%;

     span {
      text-align:left;
     }
 }
  }
  

        }

    }
   



   }

  

 
`