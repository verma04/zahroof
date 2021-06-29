import styled from 'styled-components'



export const Section = styled.section` 

  display:flex;
  justify-content:center;
   flex-direction:column;
  width:100%;
  align-items:center;

   
  
   @media (min-width: 1281px) {
  
    .section3 {
      
        position: relative;
     
        display:flex;
  justify-content:center;
  
  width:100%;
  align-items:center;
  position: relative;
  height: 40rem;;
  background-image: url("https://res.cloudinary.com/dzcmadjl1/image/upload/v1624457126/o7rt0bntgyc6nstows3k.jpg");

/* Set a specific height */


/* Create the parallax scrolling effect */
background-attachment: fixed;
background-position: center;
background-repeat: no-repeat;
background-size: cover;
 
 .middle {
  position: absolute;
    height: 100%;
 
    bottom: -3%;

    width: 38%;
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
    width: 0.2rem;
    height: 90%;
    left: -0.4rem;;
    top: 0%;


   background-color : #286230;
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
    border-bottom: 3px solid black;
  }
}

    }
   



   }

   @media (max-width: 767px) {
    .section3 {
      
      position: relative;
   
      display:flex;
justify-content:center;

width:100%;
align-items:center;
position: relative;
height: 27rem;;
background-image: url("https://res.cloudinary.com/dzcmadjl1/image/upload/v1624457126/o7rt0bntgyc6nstows3k.jpg");
flex-direction: column;
/* Set a specific height */


/* Create the parallax scrolling effect */
background-attachment: fixed;
background-position: center;
background-repeat: no-repeat;
background-size: cover;

.middle {
position: absolute;
  height: 100%;

  bottom: -3%;

  width: 38%;
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
 top: 15%;
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
 top: 15%;
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
  font-size:1.2rem;
  
}
h2:after{
  position: absolute;
  content: '';
  display: block;
  width: 0.2rem;
  height: 90%;
  left: -0.4rem;;
  top: 0%;


 background-color : #286230;
}


.section3_left {
position: absolute;

top: 10%;
left: 0%;
width: 100%;

display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
}
.section3_right {
position: absolute;
bottom: 7%;
right: 0%;
width: 100%;

display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
a {
  margin-top: 2rem;
  color:black;
  font-size: 1.2rem;
  font-weight: 900;
  border-bottom: 3px solid black;
}
}

  }
 

  



 }
  

  

 
`