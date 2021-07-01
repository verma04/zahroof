import styled from 'styled-components'



export const Nav = styled.nav` 
z-index: 1000;
  display:flex;
  justify-content:center;
   flex-direction:column;
  width:100%;
  align-items:center;
  position: absolute;
 
top: 0%;



   
  
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


    .navbar1 {
z-index: 1000;
      position:fixed;
      background-color: #3c4e62;;
      top: 0%;

      width:100%;
      height: 5rem;
      
      display: flex;
      justify-content: space-between;
      align-items: center;
      .navbar_left {
        margin-left:3%;
      position: relative;
      width: 24%;
  
      height: 50%;
      

      }
      .navbar_right {
        margin-right:2%;
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

    .nav-sm {
      display:none;
    }

    



   }

   @media (max-width: 767px) {
    display: none;
  width:100%;
  height: 4rem;
 
  display:flex;
  justify-content:center;
   flex-direction:column;
  width:100%;
  align-items:center;
  position: absolute;
 
top: 0%;
z-index: 1;
.navbar {
  display: none;
}
  
.nav-sm {
    width:100%;
   height: 100%;
   
    display:flex;
  justify-content:center;
  align-items:center;
  
  .nav-item {
  display:flex;
  justify-content:space-between;
  align-items:center;
  width:95%;
  height:100%;
  .nav-left {
      
    i {
    font-size:1.5rem;
    color:white;
  }
  
  }
  .nav-right {
   
    i {
    font-size:1.8rem;
    color:white;
  }
 
  
  
  }
  .nav-center {
    display:flex;
  justify-content:center;
  align-items:center;
  width:40%;
  
  height:100%;
   position: relative;
  }
 }
  }
 #fixed {
   display:none;
   position:fixed;
    top:0rem;
  width:100%;
  opacity:1;
    z-index:1000;
    background: rgba(255, 255, 255, 0.9);
  box-shadow: 0 3px 2px rgb(0 0 0 / 5%);
  height:6rem;
 
 
 }
 




 }
  

 
`