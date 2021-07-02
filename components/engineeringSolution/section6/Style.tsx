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
height: 30rem;;
background-color: #dbb43f;;
.tringle {
 position: absolute;
 left: 20%;
 width: 0;
 top: -15%;
 height: 0;
 border-left: 7rem solid transparent;
 border-right: 7rem solid transparent;
 border-bottom:5rem solid #dbb43f;;
 z-index: 1;
} 

.section2_data {
     width: 85%;
     height: 100%;
     display:flex;
  justify-content:space-between;
  align-items: center;
  position: absolute;
  .section2_data_left {
    
    display:flex;
    width: 60%;
    height: 100%;
  justify-content:center;
  align-items: left;
  flex-direction: column;
  h2 {
  color:  #24334d;
   position: relative;
   padding-left: 2rem;
   font-size: 4rem;;
   line-height: 3.5rem;
text-transform: uppercase;
   position: relative;
  }
  h2:after {
    position: absolute;
    content: '';
    display: block;
    height: 90%;
    width: 0.5rem;
    top: 0;
    left: -0.3rem;
    background-color: #24334d;
  }
 
  p {
    margin-top:1.5rem;
    width: 100%;
    color:white;
    padding-left: 2rem;
    line-height: 1.6;
    color:black;
    font-size:1.5rem;
  }
  h3 {
    line-height: 1.1;
      color:white;
  
  }
  }

  .section2_data_right {
  

  display:flex;
  width: 40%;
  height: 80%;
justify-content:space-between;
align-items: center;

flex-wrap: wrap;
.top {
width: 50%;
height: 15%;
display:flex;
justify-content:center;
align-items: center;
flex-direction: column;
h2 {
  
  width: 100%;
  text-align: center;
  color: white;
  font-size: 10rem;;
  height: 12rem;
  text-transform: uppercase;
}
h3{
  
  width: 100%;
  text-align: center;
  color: white;
  font-size: 5rem;;
  text-transform: uppercase;

}
span {
  width: 100%;

  text-align: center;
  font-size: 1.5rem;
  text-transform: uppercase;
  color:white;
}
}
}
 }
 





    }
   



   }

  

 
`