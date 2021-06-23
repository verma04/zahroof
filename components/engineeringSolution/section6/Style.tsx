import styled from 'styled-components'



export const Section = styled.section` 

  display:flex;
  justify-content:center;
   flex-direction:column;
  width:100%;
  align-items:center;

   
  
   @media (min-width: 1281px) {
  
    .section6 {
      
      
      position: relative;
     
     display:flex;
justify-content:center;

width:100%;
align-items:center;
position: relative;
height: 23rem;;
background-color: #dbb43f;;
.tringle {
 position: absolute;
 right: 40%;
 width: 0;
 top: -12%;
 height: 0;
 border-left: 5rem solid transparent;
 border-right: 5rem solid transparent;
 border-bottom:4rem solid #dbb43f;;
 z-index: 1;
} 

.section2_data {
     width: 80%;
     height: 100%;
     display:flex;
  justify-content:space-between;
  align-items: center;
  position: absolute;
  .section2_data_left {
    
    display:flex;
    width: 45%;
    height: 100%;
  justify-content:space-around;
  align-items: left;
  flex-direction: column;
  h2 {
  color:  #24334d;
   position: relative;
   padding-left: 0.5rem;
   font-size: 3.3rem;;

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
    background-color: #24334d;
  }
 
  p {
    width: 80%;
    color:white;

    line-height: 1.6;
    color:black;
  }
  h3 {
    line-height: 1.1;
      color:white;
  
  }
  }

  .section2_data_right {
  

    display:flex;
    width: 45%;
    height: 100%;
  justify-content:space-around;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
  .img-wrapper { 
  position: relative;
  width: 80%;
    height: 80%;
  }
  }
 }
 





    }
   



   }

  

 
`