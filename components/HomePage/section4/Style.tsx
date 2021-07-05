import styled from 'styled-components'



export const Section = styled.section` 

  display:flex;
  justify-content:center;
   flex-direction:column;
  width:100%;
  align-items:center;

   
  
   @media (min-width: 1281px) {
  
    .section4 {
      
        position: relative;
     
        display:flex;
  justify-content:center;
   flex-direction: column;
  width:100%;
  align-items:center;
  position: relative;


.section4_top {
  position: relative;
  height: 55rem;
  width: 100%;
  background: radial-gradient(ellipse farthest-corner at right bottom, #FEDB37 0%, #FDB931 8%, #9f7928 30%, #8A6E2F 40%, transparent 80%),
                radial-gradient(ellipse farthest-corner at left top, #FFFFFF 0%, #FFFFAC 8%, #D1B464 25%, #5d4a1f 62.5%, #5d4a1f 100%);
  /* background-image: linear-gradient(#d8b642 , #DBB42F); */

margin-bottom: 3rem;;

.tringle {
    position: absolute;
    right: 10%;
    width: 0;
    bottom: -6%;
    height: 0;
    border-left: 6rem solid transparent;
    border-right: 6rem solid transparent;
    border-top: 4rem solid #FDB931 ;
    z-index: -1
   
} 
.section4_top_data {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: absolute;
  width: 100%;
  height: 100%;
  flex-direction: column;
  h2 {
    padding-top: 3rem;
    padding-bottom: 3rem;
    font-size: 2.813rem;
    text-transform: uppercase;
    color: white;
 
  }
  .section4_top_data_logos {

  
    width: 50%;
    margin-top:7%;
    margin-left:4%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40%;
    position: relative;


}

.icon {
     
     
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
 
    .img-wrapper {
      transition: transform 0.5s;
      position: relative;
      height: 4rem;;
      width: 5rem;;
    }
    span {
      text-transform: uppercase;
      font-weight: 900;
      font-size: 16px;
      width: 100%;
      color:white;
      text-align: center;
      line-height: 40px;
    }

 }
 .icon {
  transition: transform 0.5s;
 }
 .icon:hover {
  -ms-transform: scale(1.5); /* IE 9 */
  -webkit-transform: scale(1.5); /* Safari 3-8 */
  transform: scale(1.1); 

}
 #gasses {
  position: absolute;
  top: 13%;
  left: 43%;
  width: 17%;
  height: 10%;
 }
 #Lng {
  position: absolute;
  position: absolute;
  top: 64%;
  left: 31%;
  height: 10%;
  height: 10%;
 }
 #industry {
  position: absolute;
  top: 27%;
  left: 29%;
  width: 15%;
  height: 10%;
 }
 #Refineries {
  position: absolute;
  top: 46%;
  left: 25%;
  width: 15%;
  height: 10%;
 }
 #Cng {
  position: absolute;
  top: 27%;
  left: 59%;
  width: 15%;
  height: 10%;
}
 #Oil {
  position: absolute;
  top: 46%;
  left: 63%;
  width: 15%;
  height: 10%;
 }
 #hydrogen {
  position: absolute;
  top: 64%;
  left: 61%;
  width: 15%;
  height: 10%;
 }
 #chemical {
  position: absolute;
  top: 79%;
  left: 51%;
  width: 15%;
  height: 10%;
 }
 #offshore {
  position: absolute;
  top: 79%;
  left: 38%;
  width: 15%;
  height: 10%;
 }

}


}
.section4_mid {
  position: relative;
  height: 50rem;
  width: 100%;
  z-index: 1;
  margin-bottom: 3rem;;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: -65px;

.section4_mid_left {
  display: flex;
  justify-content: center;
  display: flex;
  justify-content: flex-end;
  align-items: center;
   width:50%;
   height:50%;
   .img_wrapper {
     width: 100%;
     height: 100%;
     position: relative;

   }
}

.section4_mid_right {
  
  display: flex;
  justify-content: center;
  display: flex;
  justify-content:center;
  flex-direction: column;
  align-items: flex-start;
   width:50%;
   height:100%;
   margin-left: 10%;

   h2 {
     text-align: left;
     width: 100%;
     position: relative;
     font-size: 46px;
     color:#2b4056;
     line-height: 40px;
     margin-bottom: 5rem;
   }
   h2:after {
     position: absolute;
      width: 0.4rem;;
    display: block;
    height: 110%;
    left: -5%;
    top:0%;
    background: #dcb01a;
    border-left: 1px white;
    content: '';
}
    p {
      margin-bottom:30px;
      text-align: left;
      width: 90%;
      font-size: 16px;
      line-height: 28px;
      font-family: Proxima-Bold;
    }
  
}

}

.section4_bottom {
  position: relative;
  height: 100vh;
  width: 100%;
  z-index: 1; 
/* margin-bottom: 3rem; */

.section4_bottom_data {

  background-image: url("https://res.cloudinary.com/dzcmadjl1/image/upload/v1625225330/chqd0bw4jqdfbpkd7dsb.png"); 

  background-repeat: no-repeat; 
  background-size: cover; 
  margin-top: 0px;  
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  z-index: 1;
  .section4_mid_left {
    display: flex;
    justify-content: center;
    display: flex;
    justify-content:center;
    flex-direction: column;
    align-items: center;
    width:50%;
    height:50%;
    z-index: 1;
   
   .top {    
      width: 100%;
      height: auto;
      display: flex;
      justify-content: center;
      display: flex;
      justify-content:center;
      flex-direction: column;
      align-items: center;
      margin-bottom: 15px;
      margin-top: 7rem;
      
   h2 {
     text-transform: uppercase;
     text-align: left;
     width: 50%;
     position: relative;
     font-size: 3rem;
      color:white;
     }
   h2:after {
     position: absolute;
      width: 0.35rem;;
    display: block;
    height: 60%;
    left: -7%;
    top:17%;
    background: #dcb01a;
    border-left: 1px white;
    content: '';
}

    p {
      margin-top:1rem;
      color:white;
      z-index: 1;
      text-align: left;
      width: 47%;
      font-size: 16px;
      font-family: Proxima-Bold;
      line-height: 24px;
      margin-left: -20px;
    }
   }
    .btn {
      color:white;
      z-index: 1;
      text-align: left;
      width: 50%;

      button {
        font-size:1rem;
        padding: 1rem;;
        height: 4.5rem;
        border-radius: 0px;
        text-transform: uppercase;
        background-color: #398baa;
      }
    }
}

.section4_mid_right {
  display: flex;
  justify-content: center;
  display: flex;
  justify-content:space-evenly;
  
  align-items: center;
  width:50%;
  height:90%;
  z-index: 1;

   .section4_logo {
    
     width: 40%;
     height: 100%;
     display: flex;
     justify-content: start;
     flex-direction: column;
     align-items: center;
      margin-top: 23rem;
     .img_wrapper {
      transition: transform 0.5s;
      width: 100%;
      height: 50%;
      position: relative;
       
     }
     .img_wrapper:hover {
  -ms-transform: scale(1.5); /* IE 9 */
  -webkit-transform: scale(1.5); /* Safari 3-8 */
  transform: scale(1.1); 
}
     h3 {
       /* color:white; */
      color: #f2e7c9;
       z-index: 1;
      margin-top: 45px
     }
   }
   
  

  
  
}

}
.img_absol {
  position: absolute;
    width: 20rem;
    height: 15rem;
    z-index: 1;
    right: 24%;
    top: -201px;

}

}



    }
   



   }
   @media (min-width: 1025px) and (max-width: 1280px) {
    .section4 {
      
      position: relative;
   
      display:flex;
justify-content:center;
 flex-direction: column;
width:100%;
align-items:center;
position: relative;


.section4_top {
position: relative;
height: 55rem;
width: 100%;
background-image: linear-gradient(#d8b642 , #DBB42F);

margin-bottom: 3rem;;

.tringle {
position: absolute;
  right: 10%;
  width: 0;
  bottom: -6%;
  height: 0;
  border-left: 6rem solid transparent;
  border-right: 6rem solid transparent;
  border-top: 4rem solid #DBB42F;
 
} 
.section4_top_data {
display: flex;
justify-content: flex-start;
align-items: center;
position: absolute;
width: 100%;
height: 100%;
flex-direction: column;
h2 {
  padding-top: 3rem;
  padding-bottom: 3rem;
  font-size: 2.813rem;
  text-transform: uppercase;
  color: white;

}
.section4_top_data_logos {


  width: 50%;
  margin-top:10%;
  margin-left:4%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40%;
  position: relative;


}

.icon {
   
  width: 17%;
height: 10%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;

  .img-wrapper {
    transition: transform 0.5s;
    position: relative;
    height: 4rem;;
    width: 5rem;;
  }
  span {
    text-transform: uppercase;
    font-weight: 900;
    font-size: 16px;
    width: 100%;
    color:white;
    text-align: center;
    line-height: 40px;
  }

}
.icon {
transition: transform 0.5s;
}
.icon:hover {
-ms-transform: scale(1.5); /* IE 9 */
-webkit-transform: scale(1.5); /* Safari 3-8 */
transform: scale(1.1); 

}
#gasses {
position: absolute;
top: 13%;
left: 43%;
width: 17%;
height: 10%;
}
#Lng {
position: absolute;
position: absolute;
top: 64%;
left: 28%;
height: 10%;
height: 10%;
}
#industry {
position: absolute;
top: 27%;
left: 29%;
width: 15%;
height: 10%;
}
#Refineries {
position: absolute;
top: 46%;
left: 25%;
width: 15%;
height: 10%;
}
#Cng {
position: absolute;
top: 27%;
left: 59%;
width: 15%;
height: 10%;
}
#Oil {
position: absolute;
top: 46%;
left: 63%;
width: 15%;
height: 10%;
}
#hydrogen {
position: absolute;
top: 64%;
left: 61%;
width: 16%;
height: 10%;
}
#chemical {
position: absolute;
top: 79%;
left: 51%;
width: 15%;
height: 10%;
}
#offshore {
position: absolute;
top: 79%;
left: 38%;
width: 16%;
height: 10%;
}

}


}
.section4_mid {
position: relative;
height: 50rem;
width: 100%;
z-index: 1;
margin-bottom: 3rem;;
display: flex;
justify-content: center;
align-items: center;
margin-bottom: -65px;

.section4_mid_left {
display: flex;
justify-content: center;
display: flex;
justify-content: flex-end;
align-items: center;
 width:50%;
 height:50%;
 .img_wrapper {
   width: 100%;
   height: 100%;
   position: relative;

 }
}

.section4_mid_right {

display: flex;
justify-content: center;
display: flex;
justify-content:center;
flex-direction: column;
align-items: flex-start;
 width:50%;
 height:100%;
 margin-left: 10%;

 h2 {
   text-align: left;
   width: 100%;
   position: relative;
   font-size: 46px;
   color:#2b4056;
   line-height: 40px;
   margin-bottom: 5rem;
 }
 h2:after {
   position: absolute;
    width: 0.4rem;;
  display: block;
  height: 110%;
  left: -5%;
  top:0%;
  background: #dcb01a;
  border-left: 1px white;
  content: '';
}
  p {
    margin-bottom:30px;
    text-align: left;
    width: 90%;
    font-size: 16px;
    line-height: 28px;
    font-family: Proxima-Bold;
  }

}

}

.section4_bottom {
position: relative;
height: 100vh;
width: 100%;
z-index: 1;

margin-bottom: 3rem;;

.section4_bottom_data {

background-image: url("https://res.cloudinary.com/dzcmadjl1/image/upload/v1625225330/chqd0bw4jqdfbpkd7dsb.png"); 

background-position: top;
background-repeat: no-repeat; 
background-size: cover; 
margin-top: 0px;  
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 100%;
z-index: 1;
.section4_mid_left {
  display: flex;
  justify-content: center;
  display: flex;
  justify-content:center;
  flex-direction: column;
  align-items: center;
  width:50%;
  height:50%;
  z-index: 1;
 
 .top {    
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    display: flex;
    justify-content:center;
    flex-direction: column;
    align-items: center;
    margin-bottom: 15px;
    margin-top: 7rem;
    
 h2 {
   text-transform: uppercase;
   text-align: left;
   width: 50%;
   position: relative;
   font-size: 3rem;
    color:white;
   }
 h2:after {
   position: absolute;
    width: 0.35rem;;
  display: block;
  height: 60%;
  left: -7%;
  top:17%;
  background: #dcb01a;
  border-left: 1px white;
  content: '';
}

  p {
    margin-top:2rem;
    color:white;
    z-index: 1;
    text-align: left;
    width: 50%;
    font-size: 16px;
    font-family: Proxima-Bold;
    line-height: 24px;
  }
 }
  .btn {
    color:white;
    z-index: 1;
    text-align: left;
    width: 50%;

    button {
      font-size:1rem;
      padding: 1rem;;
      height: 4.5rem;
      border-radius: 0px;
      text-transform: uppercase;
      background-color: #398baa;
    }
  }
}

.section4_mid_right {
display: flex;
justify-content: center;
display: flex;
justify-content:space-evenly;

align-items: center;
width:50%;
height:90%;
z-index: 1;

 .section4_logo {
  
   width: 40%;
   height: 100%;
   display: flex;
   justify-content: start;
   flex-direction: column;
   align-items: center;
    margin-top: 23rem;
   .img_wrapper {
    transition: transform 0.5s;
    width: 100%;
    height: 50%;
    position: relative;
     
   }
   .img_wrapper:hover {
-ms-transform: scale(1.5); /* IE 9 */
-webkit-transform: scale(1.5); /* Safari 3-8 */
transform: scale(1.1); 
}
   h3 {
     /* color:white; */
    color: #f2e7c9;
     z-index: 1;
    margin-top: 45px
   }
 }
 




}

}
.img_absol {
position: absolute;
  width: 20rem;
  height: 15rem;
  z-index: 1;
  right: 24%;
  top: -201px;

}

}



  }
   }
   @media (min-width: 768px) and (max-width: 1024px) {
    .section4 {
      
      position: relative;
   
      display:flex;
justify-content:center;
 flex-direction: column;
width:100%;
align-items:center;
position: relative;


.section4_top {
position: relative;
height: 55rem;
width: 100%;
background-image: linear-gradient(#d8b642 , #DBB42F);

margin-bottom: 3rem;;

.tringle {
position: absolute;
  right: 10%;
  width: 0;
  bottom: -6%;
  height: 0;
  border-left: 6rem solid transparent;
  border-right: 6rem solid transparent;
  border-top: 4rem solid #DBB42F;
 
} 
.section4_top_data {
display: flex;
justify-content: flex-start;
align-items: center;
position: absolute;
width: 100%;
height: 100%;
flex-direction: column;
h2 {
  padding-top: 3rem;
  padding-bottom: 3rem;
  font-size: 2.813rem;
  text-transform: uppercase;
  color: white;

}
.section4_top_data_logos {


  width: 50%;
  margin-top:10%;
  margin-left:4%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40%;
  position: relative;


}

.icon {
   
  width: 17%;
height: 10%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;

  .img-wrapper {
    transition: transform 0.5s;
    position: relative;
    height: 4rem;;
    width: 5rem;;
  }
  span {
    text-transform: uppercase;
    font-weight: 900;
    font-size: 16px;
    width: 100%;
    color:white;
    text-align: center;
    line-height: 40px;
  }

}
.icon {
transition: transform 0.5s;
}
.icon:hover {
-ms-transform: scale(1.5); /* IE 9 */
-webkit-transform: scale(1.5); /* Safari 3-8 */
transform: scale(1.1); 

}
#gasses {
position: absolute;
top: 13%;
left: 43%;
width: 17%;
height: 10%;
}
#Lng {
position: absolute;
position: absolute;
top: 64%;
left: 28%;
height: 10%;
height: 10%;
}
#industry {
position: absolute;
top: 27%;
left: 29%;
width: 15%;
height: 10%;
}
#Refineries {
position: absolute;
top: 46%;
left: 25%;
width: 15%;
height: 10%;
}
#Cng {
position: absolute;
top: 27%;
left: 59%;
width: 15%;
height: 10%;
}
#Oil {
position: absolute;
top: 46%;
left: 63%;
width: 15%;
height: 10%;
}
#hydrogen {
position: absolute;
top: 64%;
left: 61%;
width: 16%;
height: 10%;
}
#chemical {
position: absolute;
top: 79%;
left: 51%;
width: 15%;
height: 10%;
}
#offshore {
position: absolute;
top: 79%;
left: 38%;
width: 16%;
height: 10%;
}

}


}
.section4_mid {
position: relative;
height: 35rem;
width: 100%;
z-index: 1;
margin-bottom: 3rem;;
display: flex;
justify-content: center;
align-items: center;
margin-bottom: -65px;

.section4_mid_left {
display: flex;
justify-content: center;
display: flex;
justify-content: flex-end;
align-items: center;
 width:50%;
 height:50%;
 .img_wrapper {
   width: 100%;
   height: 100%;
   position: relative;

 }
}

.section4_mid_right {

display: flex;
justify-content: center;
display: flex;
justify-content:center;
flex-direction: column;
align-items: flex-start;
 width:50%;
 height:100%;
 margin-left: 10%;

 h2 {
   text-align: left;
   width: 100%;
   position: relative;
   font-size: 35px;
   color:#2b4056;
   line-height: 40px;
   margin-bottom: 5rem;
 }
 h2:after {
   position: absolute;
    width: 0.4rem;;
  display: block;
  height: 110%;
  left: -5%;
  top:0%;
  background: #dcb01a;
  border-left: 1px white;
  content: '';
}
  p {
    margin-bottom:30px;
    text-align: left;
    width: 90%;
    font-size: 16px;
    line-height: 28px;
    font-family: Proxima-Bold;
  }

}

}

.section4_bottom {
position: relative;
height: 50rem;
width: 100%;
z-index: 1;

margin-bottom: 3rem;;

.section4_bottom_data {

background-image: url("https://res.cloudinary.com/dzcmadjl1/image/upload/v1625225330/chqd0bw4jqdfbpkd7dsb.png"); 

background-position: top;
background-repeat: no-repeat; 
background-size: cover; 
margin-top: 0px;  
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 100%;
z-index: 1;
.section4_mid_left {
  display: flex;
  justify-content: center;
  display: flex;
  justify-content:center;
  flex-direction: column;
  align-items: center;
  width:50%;
  height:50%;
  z-index: 1;
 
 .top {    
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    display: flex;
    justify-content:center;
    flex-direction: column;
    align-items: center;
    margin-bottom: 15px;
    margin-top: 7rem;
    
 h2 {
   text-transform: uppercase;
   text-align: left;
   width: 50%;
   position: relative;
   font-size: 2rem;
    color:white;
   }
 h2:after {
   position: absolute;
    width: 0.35rem;;
  display: block;
  height: 60%;
  left: -7%;
  top:17%;
  background: #dcb01a;
  border-left: 1px white;
  content: '';
}

  p {
    margin-top:2rem;
    color:white;
    z-index: 1;
    text-align: left;
    width: 50%;
    font-size: 16px;
    font-family: Proxima-Bold;
    line-height: 24px;
  }
 }
  .btn {
    color:white;
    z-index: 1;
    text-align: left;
    width: 50%;

    button {
      font-size:1rem;
      padding: 1rem;;
      height: 4.5rem;
      border-radius: 0px;
      text-transform: uppercase;
      background-color: #398baa;
    }
  }
}

.section4_mid_right {
display: flex;
justify-content: center;
display: flex;
justify-content:space-evenly;

align-items: center;
width:50%;
height:90%;
z-index: 1;

 .section4_logo {
  
   width: 40%;
   height: 100%;
   display: flex;
   justify-content: start;
   flex-direction: column;
   align-items: center;
    margin-top: 23rem;
   .img_wrapper {
    transition: transform 0.5s;
    width: 100%;
    height: 50%;
    position: relative;
     
   }
   .img_wrapper:hover {
-ms-transform: scale(1.5); /* IE 9 */
-webkit-transform: scale(1.5); /* Safari 3-8 */
transform: scale(1.1); 
}
   h3 {
     /* color:white; */
    color: #f2e7c9;
     z-index: 1;
    margin-top: 45px
   }
 }
 




}

}
.img_absol {
position: absolute;
  width: 20rem;
  height: 15rem;
  z-index: 1;
  right: 24%;
  top: -201px;

}

}



  }
   }
   @media (max-width: 767px) {
    .section4 {
      
      position: relative;
   
      display:flex;
justify-content:center;
 flex-direction: column;
width:100%;
align-items:center;
position: relative;


.section4_top {
position: relative;
height: 25rem;
width: 100%;
background: radial-gradient(ellipse farthest-corner at right bottom, #FEDB37 0%, #FDB931 8%, #9f7928 30%, #8A6E2F 40%, transparent 80%),
                radial-gradient(ellipse farthest-corner at left top, #FFFFFF 0%, #FFFFAC 8%, #D1B464 25%, #5d4a1f 62.5%, #5d4a1f 100%);
/* background-image: linear-gradient(#d8b642 , #DBB42F); */

margin-bottom: 3rem;;
.section4_top_data {
display: flex;
justify-content: flex-start;
align-items: center;
position: absolute;
width: 100%;
height: 100%;
flex-direction: column;

h2 {
  
  padding-top: 1rem;
  padding-bottom: 1rem;
  font-size: 1.5rem;
  text-transform: uppercase;
  color: white;
  width: 95%;

text-align:center;

    
}
.section4_top_data_logos {


width: 100%;
display: flex;
justify-content: center;
align-items: center;
height: 30%;

margin-top: 17%;
position: relative;


}

.icon {
 
 
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .img-wrapper {
    transition: transform 0.5s;
    position: relative;
    height: 2rem;;
    width: 2rem;;
  }
  span {
  text-transform: uppercase;
  font-weight: 900;
  font-size: 0.7rem;
   text-align: center;
  color:white
  }

}
#gasses {
position: absolute;

top: 19%;

width: 27%;
height: 10%;
}
#Lng {
  position: absolute;
    position: absolute;
    top: 68%;
    width: 27%;
    left: 10%;
    height: 10%;
    height: 10%
}
#industry {
  position: absolute;
    top: 31%;
    left: 14%;
    width: 27%;
    height: 10%;
}
#Refineries {



position: absolute;
    top: 50%;
    left: 8%;
    width: 27%;
    height: 10%;

}
#Cng {
  position: absolute;
    top: 31%;
    left: 60%;
    width: 27%;
    height: 10%;
}
#Oil {
  position: absolute;
    top: 50%;
    left: 67%;
    width: 27%;
    height: 10%;
}
#hydrogen {
  position: absolute;
    top: 67%;
    left: 64%;
    width: 27%;
    height: 10%;
}
#chemical {
position: absolute;
top: 76%;
  left: 51%;
width: 27%;
height: 10%;
}
#offshore {

  position: absolute;
    top: 76%;
    left: 25%;
    width: 27%;
    height: 10%;

}

}


}
.section4_mid {
position: relative;
height: 40rem;
width: 100%;
z-index: 1; 
margin-bottom: 0px;;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
 
.section4_mid_left {
  display: flex;
  justify-content: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width:95%;
  height:48%;

 .img_wrapper {
   width: 100%;
   height: 100%;
   position: relative;

 }
}

.section4_mid_right {
display: flex;
justify-content: center;
display: flex;
justify-content:space-evenly;
flex-direction: column;
align-items: center;
 width:95%;
 height:48%;
  
 h2 {
   width: 100%;
   text-align: left;
   padding-left: 0.5rem;
   position: relative;
   font-size: 1.5rem;
   line-height: 1.1;
   
 }
 h2:after {
   position: absolute;
    width: 0.37rem;;
  display: block;
  height: 100%;
  left: -1%;
  top:0%;
  background: #dcb01a;
  border-left: 1px white;
  content: '';
}
  p {
    text-align: left;
    width: 95%;
    font-size: 16px;
    line-height: 1.1;
    font-family: Proxima-Bold;
  }

}

}

.section4_bottom {
position: relative;

width: 100%;
z-index: 1;

background-image: url("https://res.cloudinary.com/dzcmadjl1/image/upload/v1625296161/rfrkr499ec2ow6izav59.jpg"); 

display:flex;
justify-content: center;
height: 40rem;
background-repeat: no-repeat; 
background-size: cover;
/* margin-bottom: 3rem; */

.section4_bottom_data {
  
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 40rem;
 flex-direction: column;
 
.section4_mid_left {
display: flex;
justify-content: center;
display: flex;
justify-content:space-around;
flex-direction: column;
align-items: center;
  width:95%;
  
  height: 60%;

 .top {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    display: flex;
    justify-content:space-space-evenly;
    flex-direction: column;
    align-items: center;
    height: 80%;
  
 h2 {
   text-transform: uppercase;
   text-align: left;
   width: 100%;
   position: relative;
   font-size: 1.5rem;
    color:white;
    padding-left: 0.5rem;
   
 }
 h2:after {
   position: absolute;
    width: 0.25rem;;
  display: block;
  height: 100%;
  left: 0%;
  top:0%;
  background: #dcb01a;
  border-left: 1px white;
  content: '';
}
  p {
    color:white;
    z-index: 1;
    text-align: left;
    width: 100%;
    font-size: 1rem;
    font-family: Proxima-Bold;
    line-height: 1.4;
    margin-left: 1rem;
  }
 }
  .btn {
    color:white;
    z-index: 1;
    text-align: left;
  
   

    button {
      font-size:1rem;
      padding: 1rem;;
      margin-top: 2rem;
      text-transform: uppercase;
      background-color: #398baa;
    }
  }
}

.section4_mid_right {
display: flex;
justify-content: center;
display: flex;
justify-content:space-evenly;
height: 50%;
align-items: center;
 width:95%;
 

 .section4_logo {
   width: 40%;
   height: 100%;
   display: flex;
   justify-content:center;
   flex-direction: column;
   align-items: center;
  
   .img_wrapper {
    transition: transform 0.5s;
            width: 100%;
     height: 50%;
     position: relative;
   }
   .img_wrapper:hover {
-ms-transform: scale(1.5); /* IE 9 */
-webkit-transform: scale(1.5); /* Safari 3-8 */
transform: scale(1.1); 
}
   h3 {
     /* color:white; */
     z-index: 1;
     width: 100%;
     text-align: center;
     color:#f2e7c9;
     
   }
 }
 




}

}
.img_absol {
position: absolute;
 
  width: 10rem;
  height: 9rem;
  z-index: 1;
  right: 24%;
  top: -100px;

}

}



  }

 }
  

  

 
`