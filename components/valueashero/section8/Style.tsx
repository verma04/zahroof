import styled from 'styled-components'



export const Section = styled.section` 

  display:flex;
  justify-content:center;
   flex-direction:column;
  width:100%;
  align-items:center;

   
  
   @media (min-width: 1281px) {
  
    .section {
      
      

     
     display:flex;
justify-content:center;

width:100%;
align-items:center;
position: relative;
height: 30rem;;
.section2_data {
     width: 90%;
     height: 90%;
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

 
  p {
  
    line-height: 2;
  }
  h3 {
    line-height: 1.1;
      color:white;
  
  }
  }

  .section2_data_right {
    
    display:flex;
    width: 45%;
    height: 95%;
  justify-content:space-around;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
  position: relative;
  }
 }

 





    }
   



   }

  

 
`