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
  background-color: #dbb43f;
  .tringle {
    position: absolute;
    left: 10%;
    width: 0;
    top: -16%;
    height: 0;
    border-left: 5rem solid transparent;
    border-right: 5rem solid transparent;
    border-bottom:4rem solid #dbb43f;
    z-index: 1;
} 
   
 .section2_data {
     width: 70%;
     height: 95%;
     display:flex;
  justify-content:space-between;
  align-items: center;
  flex-direction: column;
  .section2_top {
    border: 1px solid red;
    display:flex;
    width: 100%;
    height: 70%;
  justify-content:space-around;
  align-items: center;
  .logo {
    width: 15%;
    height: 100%;
    border: 1px solid red;
    display: flex;
    justify-content: center;
    align-items: center;
  
    .wrapper {
      width: 100%;
      height: 65%;
      position: relative;
    }
    p {
      width: 90%;
      text-transform: uppercase;
      color: white;
    }
  }

 
  }

  .section2_bottom {
    border: 1px solid red;
    display:flex;
    width: 100%;
    height: 20%;
  justify-content:space-around;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
 h4 {
   font-size: 1.3rem;
   text-align: center;
 }
  
  }
 }


    }
   



   }

  

 
`