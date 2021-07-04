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

 background-image: url("https://res.cloudinary.com/dzcmadjl1/image/upload/v1625215361/el7kaq4epxdnzvizovxw.png"); 
  
  background-position: center; 
  background-repeat: no-repeat; 
  background-size: cover; 

 .section2_data {
     width: 80%;
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
     line-height: 70px;
   font-size: 74px;
text-transform: uppercase;
   position: relative;
  }

 
  p {
    margin-top:42px;
    font-size: 21px;
    width: 80%;
    font-weight:600;
    line-height: 28px;
    color:white;
    padding-left: 1.5rem;
    line-height: 1.2;
    position: relative;
  }
 p:after {
    position: absolute;
    content: '';
    display: block;
    height: 120%;
    width: 6px;
    bottom: 0px;
   
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
   height:820px;
 position: relative;  


  background-image: url("https://res.cloudinary.com/dzcmadjl1/image/upload/v1625043594/hqwarrxjqh0g5tixezvi.png")  ;

 background-position-y: 31%;
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
     line-height: 55.31px;;
   font-size: 55.31px;;
text-transform: uppercase;
   position: relative;
  }

 
  p {
    width: 50%;
    margin-top:2rem;
    font-size:16px;
   font-weight: 600;
    line-height: 28px;
    color:#777777;
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
     height: 150px;
     background-color: #3b546a;
     bottom: 0%;
     left: 0%;
     display:flex;
  justify-content:center;
  align-items: center;
 
  position: absolute;

  h2 {
    width: 90%;
   
    padding-left: 1rem;
    line-height: 1.6;
    position: relative;
    text-transform: uppercase;
     font-size:40px;
     line-height: 40px;
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
    right: 42%;
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