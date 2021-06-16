import styled from 'styled-components'



export const Section = styled.section` 

  display:flex;
  justify-content:center;
   flex-direction:column;
  width:100%;
  align-items:center;

   
  
   @media (min-width: 1281px) {
  
    .section2 {
      
        position: relative;
     
        display:flex;
  justify-content:center;
  
  width:100%;
  align-items:center;
  position: relative;
  height: 22rem;;
  background-color: #3c4e62;
  .tringle {
    position: absolute;
    left: 10%;
    width: 0;
    bottom: -5%;
    height: 0;
    border-left: 3rem solid transparent;
    border-right: 3rem solid transparent;
    border-top: 2rem solid #3c4e62;
    z-index: 1;
} 
   
 .section2_data {
     width: 70%;
     height: 80%;
     display:flex;
  justify-content:space-between;
  align-items: center;
  .section2_data_left {
     
    display:flex;
    width: 45%;
    height: 100%;
  justify-content:space-around;
  align-items: left;
  flex-direction: column;
  h2 {
   width: 50%;
   font-size: 1.7rem;;
   color:#daaf1a;
  }
  h4 {
      color:white;
    width: 70%;
  }
  }

  .section2_data_right {
     
    display:flex;
    width: 45%;
    height: 100%;
  justify-content:space-around;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
  .logo {
      width: 40%;
      height: 40%;
      display:flex;
     position: relative;
      justify-content:space-between;
  align-items: center;
  flex-direction: column;
  .img-wrapper {
      width: 100%;
      height: 70%;
      position: relative;
  }
  h4 {
      margin-top: 0.5rem;;
      text-transform: uppercase;
      color: white;
      text-align: center;

  }
  img {
      height: 65%;
  }
  }
  }
 }


    }
   



   }

  

 
`