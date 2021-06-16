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
  height: 42rem;;
  h2 {
    text-transform: uppercase;
    font-size:1.5rem;
  }
.section3_left {
  position: absolute;
left: 0;
  width: 30%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.section3_right {
  position: absolute;
right: 0%;;
  width: 30%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  a {
    margin-top: 2rem;
  }
}

    }
   



   }

  

 
`