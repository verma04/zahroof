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
 height: 44.5rem;
  
   .section-1 {
       position: absolute;
       width: 100%;
       height: 100%;
       .wrapper {
        top: -10rem;
           width: 100%;
           height: 55rem;
           position: relative;
           display: flex;
           justify-content:center;
           align-items: flex-end;
           .section-data{
        width: 100%;
        height: 80%;
        position:absolute;
        display: flex;
        justify-content: center;
        align-items: center;
 z-index: 1;
        .left {
          width: 50%;
          height: 100%;
      
          align-items: center;
           display: flex;
           justify-content: center;
           flex-direction: column;
           ul {
    margin-left:0.5rem;
    width: 70%;

  li {
      width: 100%;
      font-size: 3.438rem;
      text-align:left;
      color:white;
      font-weight: 1000;
      text-transform: uppercase;
      
  }
  li:nth-child(1) {
    position: relative;
  
    
   
  }
 
 }

  p {
  margin-top: 3rem;;
    width: 70%;
    line-height: 2;
    color: white;;
    position: relative;
    padding-left: 1rem;
  }
  p:after {
    content: '';
    display: block;
    height: 100%;
    width: 0.3rem;;
    position: absolute;
   background-color: #eeba18;
   top: 0%;
   left: -.5rem;;
   
  }
        }
        .right {
          width: 50%;
          height: 100%;
       
          align-items: center;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          .right_logo {
            width: 100%;
            height: 20%;
          display: flex;
          justify-content: space-around;
          align-items: center;
          
          .logo-wrapper {
            width: 30%;
            height: 60%;
            position: relative;
          }
           p {
             color: white;
             width: 60%;
             line-height: 2;
             position: relative;
           }
           p::after {
            
            content: '';
    display: block;
    height: 100%;
    width: 0.3rem;;
    position: absolute;
   background-color: #eeba18;
   top: 0%;
   left: -1rem;;
           }
           
          }

          
      
        }
   
      }
        

       }

      
       
   }
  

    }
   



   }

  

 
`