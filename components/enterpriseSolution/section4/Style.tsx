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
flex-direction: column;
   width:100%;
   background-color: #3b546a;
   height: 20rem;
   h3 {
     font-size: 4rem;;
     width: 80%;
     line-height: 1.3;
     color: #dbb43f;
      
  
        font-family: 'Caveat';
   }
   span {
    font-family: 'Caveat';
    font-size: 2rem;;
     width: 60%;
     line-height: 1.3;
     color: #dbb43f;
       text-align: right;
   }
   

     
  

  }       

  .tringle {
    position: absolute;
    left: 10%;
    width: 0;
    top: -18%;
    height: 0;
    border-left: 5rem solid transparent;
    border-right: 5rem solid transparent;
    border-bottom:4rem solid #3b546a;;
    z-index: 1;
} 

    }
   



   }

  

 
`