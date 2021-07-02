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
   
   

  .section_bottom {
    display:flex;
  justify-content:center;
align-items: center;
   width:100%;
   height:35rem;
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
    width: 70%;
    height: 100%;
  justify-content:space-evenly;
  align-items: left;
  flex-direction: column;
  h2 {
  color: white;
   position: relative;
   padding-left: 2rem;
   font-size: 4rem;;
   line-height: 4rem;
text-transform: uppercase;
   position: relative;
  }
  h2:after {
    position: absolute;
    content: '';
    display: block;
    height: 90%;
    width: 0.4rem;
    top: 5%;
    left: -0.3rem;
    background-color: #dbb43f;
  }
 
  p {
    width: 100%;
    color:white;
    padding-left: 2rem;
    line-height: 1.6;
    font-size: 1.4rem;
    
  
  }
  h3 {
    line-height: 1.1;
      color:white;
  
  }
  }

  .section2_data_right {
  

    display:flex;
    width: 45%;
    height: 80%;
  justify-content:space-around;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
  .top {
  width: 80%;
  height: 20%;
  display:flex;
  justify-content:space-around;
  align-items: center;
  flex-direction: column;
  h2 {
    width: 100%;
    text-align: left;
    color: white;
    font-size: 5rem;;
  }
  span {
    width: 100%;
    font-family: Proxima-Bold;
    text-align: left;
    font-size: 1.2rem;
    text-transform: uppercase;
    color:white;
  }
  }
  }
 }
  

 
  }  

    }
   



   }

  

 
`