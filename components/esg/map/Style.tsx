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
   height: 395px;
   p {
  
     width: 80%;
     text-align: center;
       color:white;
       text-transform: uppercase;
       font-size: 50px;
       line-height: 50px;
   }
   position: relative;
   .tringle {
    position: absolute;
    left: 40%;
    width: 0;
    bottom: -18%;
    height: 0;
    border-left: 10rem solid transparent;
    border-right: 10rem solid transparent;
    border-top:8rem solid #3b546a;
    z-index: 1;
} 
     
  

  }       

  .section_bottom {
    
    display:flex;
  justify-content:center;
align-items: center;
   width:100%;
   height:342px;
 position: relative;   


 
 

  .section2_data {
     
    display:flex;
    width: 50%;
    height: 100%;
   
  justify-content:space-around;
  align-items: center;
  flex-direction: column;
 
  position: relative;
  align-items: center;

 

    
    h3 {
      
        text-transform: uppercase;
    }
    li {
        position: relative;
        text-transform:uppercase;
        font-size: 29.99px;
        line-height: 33.32px;
       
        text-align: center;
         
       
        font-family: Proxima-Bold;
    
    }
    li:nth-child(2){
        margin-top: 43px;
         color: black;

    }
    li:nth-child(3){
        margin-top: 43px;
         color: black;
         font-family: "Caveat-Light";
        font-size: 1rem;
        margin-bottom: 1rem;;

    }
    li:nth-child(1){
     
        width:50%;
        height: 80%;
        position: relative;
        color: black;
        

    }
   

   



  }
 
 
  }  

 

    }
   



   }

   @media (max-width: 767px) {
 
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
height: 10rem;
p { 


width: 90%;
text-align: center;
  color:white;
  text-transform: uppercase;
  font-size: 1.5rem;

}
position: relative;
.tringle {
display: none;
position: absolute;
left: 34%;
width: 0;
bottom: -30%;
height: 0;
border-left: 15rem solid transparent;
border-right: 15rem solid transparent;
border-top:20rem solid #3b546a;
z-index: 1;
} 



}       

.section_bottom {

display:flex;
justify-content:center;
align-items: center;
width:100%;
    height: 26rem;
position: relative;   

background-color: #cea800;
.section2_data {
width: 100%;

height: 100%;
display:flex;
justify-content:flex-start;
align-items: center;



.section2_data {

display:flex;
width: 50%;
height: 100%;

justify-content:flex-start;
align-items: center;
flex-direction: column;
flex-wrap: wrap;
position: relative;


.section_bottom_data {

width: 100%;
height: 100%;
display: flex;
justify-content: flex-start;
align-items:center;
flex-direction: column;

h3 {
   color: white;
   text-transform: uppercase;
}
li {
   position: relative;
   text-transform:uppercase;
   font-size: 1.3rem;
   
   width: 100%;
   text-align: center;
    
   color:white;
   font-family: Proxima-Bold;

}
li:nth-child(1){
   margin-top: 43px
   

}
li:nth-child(2){
 margin-top:10px;
 margin-bottom:10px;
   width: 130px;
   height: 132px;
   

}
li:nth-child(3){
   width: 100%; 
   font-size: 23.51px;
   line-height: 40.3px;
  
   text-align: center;

}

li:nth-child(4){
   width: 2.5rem;
  
   height: 2.5rem;

}

}

}
}

}  

.section_bottom-1 {
margin-top:10px;
margin-bottom: 20px;
display: flex;
justify-content: center;
align-items: center;
span {
 font-size: 1.5rem;
 width: 90%;
text-align: center;
 font-family: Proxima-Thin;
 text-transform: uppercase;
}
}

}

}

 
`