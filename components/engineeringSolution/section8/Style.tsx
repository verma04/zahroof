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
   flex-direction:column;
  width:100%;
  align-items:center;
   
  .section_top {
    position: relative;
    display:flex;
  justify-content:center;
align-items: center;
flex-direction: column;
   width:100%;
   background-color: #dbb43f;
   height: 35rem;
   h3 {
     font-size: 4rem;;
     width: 60%;
   
       color: #24334d;;
      
  
        font-family: 'Caveat';
   }
   span {
    font-size: 1.5rem;;
     width: 60%;
     margin-top: 3rem;
     line-height: 2;
       color: #24334d;;
       text-align: right;
   }
   
   .tringle {
 position: absolute;
 left: 20%;
 width: 0;
 top: -15%;
 height: 0;
 border-left: 7rem solid transparent;
 border-right: 7rem solid transparent;
 border-top:5rem solid #dbb43f;;
 z-index: 1;
}  
     
  

  }       

  .section_bottom {
    display:flex;
  justify-content:center;
align-items: center;
   width:100%;
   height:45rem;
 position: relative;   

 .section2_data {
     width: 100%;
     height: 100%;
     display:flex;
  justify-content:space-evenly;
  align-items: center;
  position: absolute;
  .section2_data_left {
     
    display:flex;
    width: 50%;
    height: 100%;
  justify-content:space-evenly;
  align-items: left;
  flex-direction: column;
  h2 {
  text-transform: uppercase;
   position: relative;
    line-height: 3.5rem;
   font-size: 4rem;;
   color:white;
   position: relative;
  }
 
  p {
    color:white;
    line-height: 2;
    font-size: 1.5rem;
    margin-bottom:2rem;
  }
  h3 {
    line-height: 1.1;
      color:white;
  
  }
  }

  .section2_data_right {
       
    display:flex;
    width: 30%;
    height: 80%;
  justify-content:center;
  align-items: center;
  flex-direction: column;
 
  position: relative;
  }
 }
  } 



    }
   



   }

  

 
`