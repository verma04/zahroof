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
   background-color: #dbb43f;
   height: 15rem;
   h3 {
     font-size: 3rem;;
     width: 60%;
   
       color: #24334d;;
      
  
        font-family: 'Caveat';
   }
   span {
    font-size: 1.3rem;;
     width: 60%;
     line-height: 2;
       color: #24334d;;
       text-align: right;
   }
   

     
  

  }       

  .section_bottom {
    display:flex;
  justify-content:center;
align-items: center;
   width:100%;
   height:40rem;
 position: relative;   

 .section2_data {
     width: 70%;
     height: 80%;
     display:flex;
  justify-content:space-between;
  align-items: center;
  position: absolute;
  .section2_data_left {
    
    display:flex;
    width: 50%;
    height: 100%;
  justify-content:space-around;
  align-items: left;
  flex-direction: column;
  h2 {
  text-transform: uppercase;
   position: relative;
   padding-left: 0.5rem;
   font-size: 3.4rem;;
   color:white;
   position: relative;
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
  p {
    color:white;
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
    height: 100%;
  justify-content:space-around;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
  position: relative;
  }
 }
  }  

    }
   



   }

  

 
`