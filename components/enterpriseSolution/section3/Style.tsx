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
  height: 480px;;
  background-color: #dbb43f;

   
 .section2_data {
     width: 90%;
     height: 100%;
     display:flex;
  justify-content:space-evenly;
  align-items: center;
  flex-direction: column;
  .section2_top {

  
    display:flex;
    width: 100%;
    height: 100%;
  justify-content:space-around;
  align-items: center;
  
  .logo {
    height: 50%;
    
    width: 14%;
   
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    .wrapper {
       
       width: 100%;
      height: 135px;
      position: relative;
      display: flex;
      justify-content: center;
    align-items: center;
    flex-direction: column;
    transition: transform 0.5s;
    }
    .wrapper:hover {
  -ms-transform: scale(1.5); /* IE 9 */
  -webkit-transform: scale(1.5); /* Safari 3-8 */
  transform: scale(1.1); 
    }
    p {
      
     margin-top:30px;
      width: 85%;
      
      line-height: 16.87px;
      font-family: Proxima-Bold;
      text-transform: uppercase;
      color: white;
      font-size: 14.05px;
    }
  }

 
  }

  .section2_bottom {
   
    display:flex;
    width: 100%;
    height: 20%;
  justify-content:space-around;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
 h4 {
   font-size: 1.3rem;
   text-align: center;
color:#24334d;
 }
  
  }
 }


    }
   



   }

  

 
`