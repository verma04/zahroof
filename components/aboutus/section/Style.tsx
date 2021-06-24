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
   
  height:40rem;


   
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
  justify-content:flex-start;
  align-items: left;
  flex-direction: column;
  h2 {
    margin-top: 10rem;;
    margin-bottom: 2rem;;
  color:  white;
   position: relative;
   padding-left: 0.5rem;
   font-size: 3.3rem;;
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
    background-color: #dbb43f;;
  }
 
  p {
    width: 100%;
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