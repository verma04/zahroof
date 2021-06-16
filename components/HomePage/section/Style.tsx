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

   height: 7rem;
   h2 {
       color:white;
       text-transform: uppercase;
   }
   
   .section_top_left {
    width:50%;
    height: 100%;
background-color: #dbb43f;
position: relative;
display: flex;
justify-content: center;
align-items: center;
h2 {
    width: 60%;
       color:white;
       font-size:1.5rem;
       text-align:right;
       text-transform: uppercase;
   }
.tringle {
    position: absolute;
    left: 10%;
    width: 0;
    bottom: -12%;
    height: 0;
    border-left: 2rem solid transparent;
    border-right: 2rem solid transparent;
    border-top: 1.3rem solid #dbb43f;
    z-index: 1;
}   

}
     
   .section_top_right {
    width:50%;
    height: 100%;
background-color: #dbb43f;
position: relative;
display: flex;
justify-content: center;
align-items: center;
.tringle {
    position: absolute;
    left: 10%;
    width: 0;
    bottom: -10%;
    height: 0;
    border-left: 2rem solid transparent;
    border-right: 2rem solid transparent;
    border-top: 1.3rem solid #dbb43f;
    z-index: 1;
} 
h2 {
    width: 60%;
       color:white;
       font-size:1.5rem;
       text-align:right;
   }
   }

  }       

  .section_bottom {
    display:flex;
  justify-content:center;
align-items: center;
   width:100%;
   height:40rem;
   
   .section_bottom_set {
    width:50%;
    height: 100%;

position: relative;
.section_bottom_data {
    position: absolute;
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
    
    }
    li:nth-child(1){
        width: 10rem;
        height: 10rem;

    }
    li:nth-child(3){
        width: 3rem;
        height: 3rem;

    }
} 

}
 
  }  

    }
   



   }

  

 
`