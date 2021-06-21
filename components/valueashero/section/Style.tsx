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
   background-color: #dbb43f;
   height: 7rem;
   h2 {
       color:white;
       text-transform: uppercase;
   }
   

     
  

  }       

  .section_bottom {
    display:flex;
  justify-content:center;
align-items: center;
   width:100%;
   height:40rem;
 position: relative;   

 
  }  

    }
   



   }

  

 
`