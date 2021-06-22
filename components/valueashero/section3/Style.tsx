import styled from 'styled-components'



export const Section = styled.section` 

  display:flex;
  justify-content:center;
   flex-direction:column;
  width:100%;
  align-items:center;

   
  
   @media (min-width: 1281px) {
  
    .section3 {
      
        position: relative;
     
        display:flex;
  justify-content:center;
  
  width:100%;
  align-items:center;
  position: relative;
  height: 45rem;;
  display:flex;
  justify-content:center;
align-items: center;
   width:100%;
 
  

 .section2_data {
     width: 90%;
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
   position: relative;
   padding-left: 0.5rem;
   font-size: 3.3rem;;
   color:white;
   position: relative;
   color:#24334d;
   text-transform: uppercase;
  }
  h2:after {
   position:absolute;
   content: '';
   display: block;
   height: 100%;
   width: 0.4rem;;
   top:0;
   left:-0.3rem;
  background-color:#daaf1a;

  }
  .img_wrapper {
    position: relative;
   height: 40%;
   width: 100%;
    line-height: 1.1;
    
  }
  h3 {
    line-height: 1.1;
    
  
  }
  p {
    line-height: 1.5;
  }
  }

  .section2_data_right {
    
    display:flex;
    width: 45%;
    height: 100%;
  justify-content:flex-start;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
  position: relative;
  h3 {
    color:#24334d;
    margin-top: 3rem;
    font-size: 1.5rem;
    text-align: left;
    width: 70%;
    text-transform: uppercase;
  }
 
    p {
      margin-top: 3rem;;
      width: 70%;
    line-height: 1.5;
  
  }
  }
 }

    }
   



   }

  

 
`