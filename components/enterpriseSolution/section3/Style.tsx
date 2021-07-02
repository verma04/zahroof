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
  height: 40rem;;
  background-color: #dbb43f;

   
 .section2_data {
     width: 90%;
     height: 100%;
     display:flex;
  justify-content:space-evenly;
  align-items: center;
  flex-direction: column;
  .section2_top {
   margin-top: 7%;
    display:flex;
    width: 100%;
    height: 70%;
  justify-content:space-around;
  align-items: center;
  .logo {
    width: 15%;
    height: 100%;
   
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    .wrapper {
      
      width: 80%;
      height: 55%;
      position: relative;
    }
    p {
      width: 85%;
      height: 40%;
      line-height: 1.3;
      font-family: Proxima-Bold;
      text-transform: uppercase;
      color: white;
      font-size: 1rem;;
    }
  }

 
  }

  .section2_bottom {
   
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
color:#24334d;
 }
  
  }
 }


    }
   



   }

  

 
`