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
   height:20rem;
 position: relative;  

 .section2_data {
     width: 80%;
     height: 100%;
     display:flex;
  justify-content:space-between;
  align-items: center;
  position: absolute;
  .section2_data_left {
    
    display:flex;
    width: 80%;
    height: 100%;
  justify-content:space-around;
  align-items: left;
  flex-direction: column;
  h2 {
  color: white;
   position: relative;
   
   font-size: 4.6rem;;
text-transform: uppercase;
   position: relative;
  }

 
  p {
    width: 80%;
    color:white;
    padding-left: 0.5rem;
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
    left: -0.3rem;
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
    width: 80%;
    height: 100%;
  justify-content:center;
  align-items: left;
  flex-direction: column;
  h2 {
  
   position: relative;
   
   font-size: 3.7rem;;
text-transform: uppercase;
   position: relative;
  }

 
  p {
    width: 80%;
    margin-top:2rem;
    padding-left: 0.5rem;
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
    left: -0.3rem;
    background-color: #dbb43f;
  }
  h3 {
    line-height: 1.1;
      color:white;
  
  }
  }

  
 }

 .absol-bottom {
  width: 50%;
     height: 20%;
     background-color: #3b546a;
     bottom: 0%;
     left: 0%;
     display:flex;
  justify-content:center;
  align-items: center;
 
  position: absolute;

  h2 {
    width: 90%;
   
    padding-left: 0.5rem;
    line-height: 1.6;
    position: relative;
    text-transform: uppercase;
     font-size:2.2rem;
     color:white;
  }
 h2:after {
    position: absolute;
    content: '';
    display: block;
    height: 100%;
    width: 0.4rem;
    top: 0;
    left: -0.3rem;
    background-color:#dbb43f;
  }
 }

 .triangle-down {
  position: absolute;
    bottom: -4%;
    left: 44%;
    width: 0;
    height: 0;
    border-left: 2rem solid transparent;
    border-right: 2rem solid transparent;
    border-top: 2.5rem solid #3b546a;
    z-index: 1;

}
  

 
  }  

    }
   



   }

  

 
`