import styled from 'styled-components'



export const Nav = styled.nav` 

  display:flex;
  justify-content:center;
   flex-direction:column;
  width:100%;
  align-items:center;
  position: absolute;
 
top: 0%;
z-index: 1;


   
  
   @media (min-width: 1281px) {
  
    width:100%;
    height: 8rem;
    .navbar {
      width:95%;
      height: 100%;
      
      display: flex;
      justify-content: space-between;
      align-items: center;
      .navbar_left {
      position: relative;
      width: 20%;

      height: 90%;
      

      }
      .navbar_right {
        display: flex;
      justify-content: space-between;
      align-items: center;
      width: 70%;
      a {
        font-size: 1rem;;
        word-spacing: 0.2rem;;
        font-weight: 1000;
        color:white;
        text-transform: uppercase;
      }
        
      }
    }

    



   }

  

 
`