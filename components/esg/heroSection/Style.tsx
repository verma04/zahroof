import styled from 'styled-components'



export const Section = styled.section`

  display:flex;
  justify-content:center;
   flex-direction:column;
  width:100%;
  align-items:center;



   @media (min-width: 1281px) {
    .react-parallax  {
  width: 100%;
}
.react-parallax-bgimage {
  width: 100% !important;

    height: 100% !important;

}

    .homePage-hero {
        width: 100%;
        position: relative;
        height: 100vh;
       

/* Set a specific height */


/* Create the parallax scrolling effect */
background-attachment: fixed;
background-position: center;
background-repeat: no-repeat;
background-size: cover;
        .homePage-layer {
            position: absolute;
            width: 100%;
            height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  .homePage-data {
      margin-top: 5%;
      width: 80%;

    height: 60%;

    display: flex;
    justify-content: space-around;
    align-items: flex-start;
 flex-direction: column;
  ul {
    margin-left:0.5rem;
     width: 100%;
  li {
      width: 20%;
      font-size: 4rem;
      text-align:left;
      color:white;
      font-weight: 1000;
      text-transform: uppercase;

  }
  li:nth-child(1) {
    position: relative;



  }
  li:nth-child(1)::after {
    content: '';
    display: block;
    height: 80%;
    margin-top:0.2rem;
    width: 0.35rem;;
    position: absolute;
   background-color: #eeba18;
   top: 0%;
   left: -1rem;;

  }
 }

  p {
    width: 40%;
    line-height: 1.5;
    margin-left:1rem;
    font-size: 1.5rem;
    font-weight: 800;
    color: white;;
  }
 .text-right {

     width: 60%;
     margin-left: 32%;

     li {
      text-align:left;
     }
 }
  }


        }

    }




   }




`