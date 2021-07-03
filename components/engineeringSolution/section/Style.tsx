import styled from 'styled-components'



export const Section = styled.section` 

  display:flex;
  justify-content:center;
   flex-direction:column;
  width:100%;
  align-items:center;

   
  
   @media (min-width: 1281px) {
  
    .section {
      
        position: relative;
     
        display:flex;
  justify-content:center;
   flex-direction:column;
  width:100%;
  align-items:center;
   
   

  .section_bottom {

    background-image: url("https://res.cloudinary.com/dzcmadjl1/image/upload/v1625301760/e92mprbfemr6lekh6lyp.jpg"); /* The image used */
 
 /* You must set a specified height */
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover; /* Resize the background image to cover the entire container */
    display:flex;
  justify-content:center;
align-items: center;
   width:100%;
   height:475px;
 position: relative;  

 .section2_data {
     width: 100%;
     height: 100%;
     display:flex;
     
  justify-content:space-between;
  align-items: center;
  position: absolute;
  .section2_data_left {
    margin-left: 5%;
    display:flex;
    width: 50%;
    height: 100%;
  justify-content:flex-start;
  align-items: left;
  flex-direction: column;
  h2 {
  color: white;
   position: relative;
 margin-top: 88px;

   font-size: 55px;
   line-height: 46px;
text-transform: uppercase;
   position: relative;
  }
  h2:after {
    position: absolute;
    content: '';
    display: block;
    height: 95%;
    width: 0.4rem;
    top: 5%;
    left: -35px;
    background-color: #dbb43f;
  }
 
  p {
    margin-top: 35px;
    width: 100%;
    color:white;
    font-weight: 500;
     
    line-height: 35px;
    font-size: 20px;
    
  
  }
  h3 {
    line-height: 1.1;
      color:white;
  
  }
  }

  .section2_data_right {
  
   margin-right: 10%;
    display:flex;
    width: 21%;
  
    height: 80%;
  justify-content:space-around;
  align-items: flex-start;
  flex-direction: column;
  flex-wrap: wrap;
  
  .top {
   
 
  height: 30%;
  display:flex;
  justify-content:space-around;
  align-items: center;
  flex-direction: column;
  h2 {
    width: 100%;
    text-align: center;
    color: white;
    font-size: 88.95px;
 
  }
  span {
    width: 100%;
    font-family: Proxima-Bold;
    text-align: center;
    font-size: 19px;
    
    text-transform: uppercase;
    color:white;
  }
  }
  }
 }
  

 
  }  

    }
   



   }

  

 
`