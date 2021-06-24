import styled from 'styled-components'



export const Foot = styled.footer` 

  display:flex;
  justify-content:center;
   flex-direction:column;
   align-items: center;
  width:100%;
  align-items:center;
 



   
  
   @media (min-width: 1281px) {
  a {
      font-weight: 900;
  }
   .footer_newsLetter {
    display:flex;
  justify-content:center;
   
   align-items: center;
  width:100%;
  align-items:center;
  height: 6rem;
  background-color: #3c4e62;
  border-bottom: 2px solid black;
  h3 {
    color:#b2b2b3;
 margin-right: 1rem;
 line-height: 1.4;
    text-transform: uppercase;
    text-align: left;
    
  }
  form {
      
      width: 40%;
      height: 2.7rem;;
      display: flex;
      justify-content: center;
      background-color: black;
      align-items: center;
      input {
      width: 90%;
      height: 90%;
      border: none;
      color:#fafafb;
      font-weight: 1000;
      font-style: 1.2rem;
      padding-left: 2rem;
      background-color: black;
      }
      .message {
        width: 10%;
      height: 50%;
      position: relative;
      }
  }
   }

     
   .footer {
    display:flex;
  justify-content:space-evenly;
   flex-direction:column;
   align-items: center;
  width:100%;
  align-items:center;
  height: 8rem;
  background-color: #3c4e62;
  border-bottom: 2px solid black;
  .footer-top {
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      width: 70%;
      height: 70%;
  

      .footer-left {
        display: flex;
      justify-content: space-evenly;
      align-items: center;
      width: 70%;
      li {
          a {
              text-transform: uppercase;
          }
      }
      }
      .footer-right {
        display: flex;
      justify-content: space-evenly;
      align-items: center;
      width: 30%;
      li {
          position: relative;
          width: 1rem;;
          height: 1rem;;
      }
      }
  }
  span {
      color:#b2b2b3;
      font-size: 1rem;;
  }
   }

    



   }

  

 
`