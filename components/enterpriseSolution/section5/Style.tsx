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
  align-items: center;
  h2 {
  
   position: relative;
   padding-left: 1rem;
   font-size: 2.8rem;;
text-transform: uppercase;
   position: relative;
  }

  h2:after {
    position: absolute;
    content: '';
    display: block;
    height: 100%;
    width: 0.4rem;
    top: 0;
    left: -0.3rem;
    background-color: #dbb43f;
  }
  p {
    width: 80%;
    
    padding-left: 0.5rem;
    line-height: 1.6;
    position: relative;
  }

  h3 {
    line-height: 1.1;
     
  
  }
  }

  
 }
  

 
  }  
   
   

  

    }
   



   }

  

 
`