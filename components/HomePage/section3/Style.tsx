import styled from 'styled-components'



export const Section = styled.section` 

  display:flex;
  justify-content:center;
   flex-direction:column;
  width:100%;
  align-items:center;

   
  
   @media (min-width: 1281px) {
    .react-parallax  {
  width: 100%;
}


  
    .section3 {
      
        position: relative;
     
        display:flex;
  justify-content:center;
  
  width:100%;
  align-items:center;
  position: relative;
  height: 40rem;;


/* Set a specific height */


/* Create the parallax scrolling effect */
background-attachment: fixed;
background-position: center;
background-repeat: no-repeat;
background-size: cover;
 
 .middle {
  position: absolute;
    
 
    bottom: -3%;

      width: 40%;
    left: 31%;


   
   .img-wrapper {
     width: 100%;
     height: 100%;
     position: relative;
     transition: transform 0.5s;
   }
 }

 .left {
   position: absolute;
   height: 30%;
   top: 5%;
   width: 30%;
   left:-4%;
  
   .img-wrapper {
     width: 100%;
     height: 100%;
     position: relative;
   }
 }

 .right {
   position: absolute;
   height: 30%;
   top: 5%;
   width: 30%;
   right: -4%;
  
   .img-wrapper {
     width: 100%;
     height: 100%;
     position: relative;
   }
 }
  h2 {
    position: relative;
    text-transform: uppercase;
    font-size:2.875rem;
    
  }
  h2:after{
  
    position: absolute;
    content: '';
    display: block;
    width: 0.4rem;
    height: 70%;
    left: -1.4rem;
    top: 11%;

    background-color: #286230;
  }


.section3_left {
  position: absolute;
left: 0;
  width: 30%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.section3_right {
  position: absolute;
right: 0%;;
  width: 30%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  a {
    margin-top: 2rem;
    color:black;
    font-size: 1.875rem;
    font-weight: 900;
    border-bottom: 1px solid black;
  }
}

    }
   



   }


  

  

 
`