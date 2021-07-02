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
   
  .section_top {
    display:flex;
  justify-content:center;
align-items: center;
   width:100%;
   background-color:#3b546a;
   height: 25rem;
   p {
  
     width: 75%;
     text-align: center;
       color:white;
       text-transform: uppercase;
       font-size: 3.3rem;
   }
   position: relative;
   .tringle {
    position: absolute;
    left: 40%;
    width: 0;
    bottom: -39%;
    height: 0;
    border-left: 12rem solid transparent;
    border-right: 12rem solid transparent;
    border-top:10rem solid #3b546a;
    z-index: 1;
} 
     
  

  }       

  .section_bottom {
    display:flex;
  justify-content:center;
align-items: center;
   width:100%;
   height:27rem;
 position: relative;   

 background-color: #cea800;
 .section2_data {
     width: 80%;
     height: 90%;
     display:flex;
  justify-content:space-between;
  align-items: center;
 
 

  .section2_data {
    
    display:flex;
    width: 45%;
    height: 95%;
  justify-content:space-around;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
  position: relative;

 
.section_bottom_data {

    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items:center;
    flex-direction: column;
    
    h3 {
        color: white;
        text-transform: uppercase;
    }
    li {
        position: relative;
        text-transform:uppercase;
        font-size: 2rem;
        width: 70%;
        text-align: center;
        margin-bottom: 1rem;
        color:white;
        font-family: Proxima-Bold;
    
    }
    li:nth-child(2){
        width: 13rem;
        height: 13rem;
        margin-bottom: 1rem;

    }
    li:nth-child(3){
        width: 100%; 
        font-size: 1.7rem;
       
        text-align: center;

    }

    li:nth-child(4){
        width: 3rem;
       
        height: 3rem;

    }

}

  }
 }
 
  }  

  .section_bottom-1 {
    margin-top:2rem;
    span {
      font-size: 4rem;
      font-family: Proxima-Thin;
      text-transform: uppercase;
    }
  }

    }
   



   }

  

 
`