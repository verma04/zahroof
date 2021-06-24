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

position: relative;

.section2_data {
     width: 100%;
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
   font-size: 3.4rem;;
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
    background-color:  #dbb43f;
  }
 
  p {
    width: 95%;
    color:white;

    line-height: 2;
    color:black;
  }
  h3 {
    line-height: 1.1;
      color:white;
  
  }
  }

  .section2_data_right {
    background-color:  #24334d;

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