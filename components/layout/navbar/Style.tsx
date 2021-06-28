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
    height: 10rem;
    .navbar {
      width:95%;
      height: 100%;
      
      display: flex;
      justify-content: space-between;
      align-items: center;
      .navbar_left {
      position: relative;
      width: 24%;
  
      height: 100%;
      

      }
      .navbar_right {
        display: flex;
      justify-content: space-between;
    height: 53%;
      width: 60%;
      
      li {
        margin-top: 1rem;
      a {
       font-family: Proxima-Bold;
        font-size: 0.9rem;
        word-spacing: 0.2rem;;
        font-weight: 1000;
        color:white;
        text-transform: uppercase;
      }
      }
        
      }
    }

    



   }

  

 
`