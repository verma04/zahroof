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
   height: 375px;
   h3 {
     font-size: 51px;
     line-height: 60px;
     width: 55%;
   
       color: #24334d;;
      
  
        font-family: 'Caveat';
   }
   span {
     position: absolute;
    font-size: 1.5rem;;
    bottom: 10%;
    left: 60%;
     margin-top: 3rem;
     line-height: 2;
       color: #24334d;;
       text-align: right;
   }

   .triangle-down {
     position: absolute;
 
     right: 30%;
     bottom: -69px;
    right: 22%;
     z-index: 1;
	width: 0;
	height: 0;
	border-left: 100px solid transparent;
	border-right: 100px solid transparent;
	border-top: 100px solid #dbb43f;
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
   height:658px;
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
  justify-content:flex-start;
  align-items: left;
  flex-direction: column;
  h2 {
    margin-top:78px;
  text-transform: uppercase;
   position: relative;
    line-height: 46px;
   font-size: 55px;
   color:white;
   position: relative;
  }
  p:nth-child(2){
    margin-top: 52px;
  }
  p:nth-child(1){
    margin-top:75px;
  }

 
  p {
    width: 90%;
    color:white;
    
    line-height: 35px;
    font-size: 20px;
    font-weight: 600;
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