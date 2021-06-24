import styled from 'styled-components'



export const Section = styled.section` 

  display:flex;
  justify-content:center;
   flex-direction:column;
  width:100%;
  align-items:center;

   
  
   @media (min-width: 1281px) {
  
    .section4 {
      
      
      position: relative;
     
     display:flex;
justify-content:center;

width:100%;
align-items:center;
position: relative;
height: 35rem;;
background-color: #dbb43f;
.tringle {
 position: absolute;
 right: 40%;
 width: 0;
 top: -11%;
 height: 0;
 border-left: 5rem solid transparent;
 border-right: 5rem solid transparent;
 border-bottom:4rem solid #dbb43f;
 z-index: 1;
} 
 
.section_data {
      
      
  
     
     display:flex;
justify-content:center;

width:100%;
align-items:center;
position: relative;
height: 100%;;



   
     display:flex;
  justify-content:space-between;
  align-items: center;
 
  .section_data_left {
    padding-left: 8%;
    display:flex;
    width: 70%;
    height: 100%;
  justify-content:space-evenly;
  align-items: left;
  flex-direction: column;
  h2 {
   position: relative;
   padding-left: 0.5rem;
   font-size:3.438rem;
   color:white;
   width: 70%;
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
  background-color:#0b3b51
;

  }
  .img_wrapper {
    position: relative;
   height: 40%;
   width: 100%;
    line-height: 1.1;
    
  }
  h3 {
    width: 100%;
    line-height: 1.1;
    
  
  }
  p {
  
    width: 80%;
    line-height: 2;
  }
  }

  .section_data_right {
    
    display:flex;
    width: 30%;
    height: 100%;
  justify-content:flex-start;
  
  background-color: #2f3032;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;

  h3 {
    color:white;
    width: 60%;
    font-size: 2.438rem;
    margin-bottom: 1rem;

  }
  
   p {
     width: 60%;
     color:white;
     line-height: 2;
     font-size: 1.1rem;
   }
 .wrapper {
   position: relative;
   width: 48%;
   height: 100%;
 }
  
  

  }






    }




    }
   



   }

  

 
`