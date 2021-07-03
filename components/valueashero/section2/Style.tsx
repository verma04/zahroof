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
  height: 433px;
  background-color: #dbb43f;
  .tringle {
    position: absolute;
    left: 20%;
    width: 0;
    top: -14%;
    height: 0;
    border-left: 5rem solid transparent;
    border-right: 5rem solid transparent;
    border-bottom:4rem solid #dbb43f;
    z-index: 1;
} 
   
 .section2_data {
     width: 90%;
     height: 95%;
     display:flex;
  justify-content:space-evenly;
  align-items: center;
  flex-direction: column;
  .section2_top {
   
    display:flex;
    width: 100%;
    height: 70%;
  justify-content:space-between;
  align-items: center;
  
 
  
  .logo {
    
    width: 15%;
    height: 100%;
margin-top: 40px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    .wrapper {
     
      width: 100%;
      height: 40%;
      position: relative;
    }
    p {
      margin-top: 35px;
      width: 90%;
      height: 40%;
      text-transform: uppercase;
      color: white;
      font-weight: 1000;
      font-size: 1rem;;
    }
  }

 
  }

  .section2_bottom {
   
    display:flex;
    width: 70%;
    height: 20%;
  justify-content:space-around;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
 h4 {
   
   font-size: 21.79px;
   line-height: 25px;
   text-align: center;
color:#24334d;
 }
  
  }
 }


    }
   



   }

  

 
`