import styled from 'styled-components'



export const Section = styled.section` 

  display:flex;
  justify-content:center;
   flex-direction:column;
  width:100%;
  align-items:center;

   
  
   @media (min-width: 1281px) {
  
    .section2 {
      
        position: relative;
     
        display:flex;
  justify-content:center;
  
  width:100%;
  align-items:center;
  position: relative;
  height: 22rem;;
  background-color: #3c4e62;
  .tringle {
    position: absolute;
    left: 9%;
    top: -5rem;
    bottom: -5%;
    height: 0;
    border-left: 5rem solid transparent;
    border-right: 5rem solid transparent;
    border-bottom: 5rem solid #3c4e62;
    z-index: 1;
} 

.section_data {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  h3 {
    width: 70%;
    color:white;
    font-size: 1.5em;
  }
   p {
    width: 70%;
    color:white;
    font-size: 1.5em;
   }

}
   



    }
   



   }

  

 
`