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
   
  .section_top {
    display:flex;
  justify-content:center;
align-items: center;
   width:100%;
   height:32rem;
 position: relative;  

 .section2_data {
     width: 70%;
     height: 100%;
     display:flex;
  justify-content:center;
  align-items: center;
  position: absolute;
  .section2_data_left {
      margin-bottom: 6%;
    display:flex;
    width: 100%;
    height: 100%;
  justify-content:center;
  align-items: left;
  flex-direction: column;
  h2 {
  color: white;
   position: relative;
     line-height: 5rem;
   font-size: 5rem;;
text-transform: uppercase;
   position: relative;
  }

 
  p {
    font-size: 1.5rem;
    width: 80%;
    color:white;
    padding-left: 1.5rem;
    line-height: 1.2;
    position: relative;
  }
 p:after {
    position: absolute;
    content: '';
    display: block;
    height: 110%;
    width: 0.4rem;
    top: 0;
    left: -2rem;
    background-color: #dbb43f;
  }
  h3 {
    line-height: 1.1;
      color:white;
  
  }
  }

  
 }
  

 
  }  
   
   

  .section_bottom {
    display:flex;
  justify-content:center;
align-items: center;
   width:100%;
   height:52rem;
 position: relative;  


  background-image: url("https://res.cloudinary.com/dzcmadjl1/image/upload/v1625043594/hqwarrxjqh0g5tixezvi.png")  ;
 background-position: left center;
  background-repeat: no-repeat;

  

 .section2_data {
     width: 100%;
     height: 100%;
     display:flex;
  justify-content:center;
  align-items: center;
 
  position: absolute;
  background-image: url("https://res.cloudinary.com/dzcmadjl1/image/upload/v1625043594/mxydeuw45cap9go1nesh.png")  ;
 background-position: right center;
  background-repeat: no-repeat;

  .section2_data_left {
     
    display:flex;
    width: 70%;
    height: 100%;
  justify-content:center;
  align-items: left;
  margin-bottom: 10%;
  flex-direction: column;
  h2 {
  
   position: relative;
     line-height: 4rem;
   font-size: 4rem;;
text-transform: uppercase;
   position: relative;
  }

 
  p {
    width: 50%;
    margin-top:2rem;
 
   font-weight: 600;
    line-height: 1.6;
    position: relative;
  }
 p:after {
    position: absolute;
    content: '';
    display: block;
    height: 100%;
    width: 0.4rem;
    top: 0;
    left: -2rem;
    background-color: #dbb43f;
  }
  h3 {
    line-height: 1.1;
      color:white;
  
  }
  }

  
 }

 .absol-bottom {
  width: 60%;
     height: 30%;
     background-color: #3b546a;
     bottom: 0%;
     left: 0%;
     display:flex;
  justify-content:center;
  align-items: center;
 
  position: absolute;

  h2 {
    width: 80%;
   
    padding-left: 1rem;
    line-height: 1.6;
    position: relative;
    text-transform: uppercase;
     font-size:3rem;
     line-height: 3rem;
     color:white;
  }
 h2:after {
    position: absolute;
    content: '';
    display: block;
    height: 80%;
    width: 0.4rem;
    
    top: 7%;
    left: -1.5rem;
    background-color:#dbb43f;
  }
 }

 .triangle-down {
  position: absolute;
    bottom: -5%;
    left: 51%;
    width: 0;
    height: 0;
    border-left: 4rem solid transparent;
    border-right: 4rem solid transparent;
    border-top: 3rem solid #3b546a;
    z-index: 1;

}
  

 
  }  

    }
   



   }

  

 
`