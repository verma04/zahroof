import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  align-items: center;
  margin-top: 10rem;

  @media (min-width: 1281px) {
      .flex {
          margin-bottom: 10rem;
           display: flex;
           justify-content: center;
           width: 70%;
           flex-direction: column;
           h1 {
            color: rgb(0, 133, 202);
            font-size:2rem;
           }
           h2 {
            color: rgb(0, 133, 202);
            font-size:1.5rem;
           }
   ul {
           li {
               list-style: circle;
               margin-top: 1rem;
           }
        }
  p {
      margin-top: 1rem;
  }
      }
   
  }

  @media (min-width: 1024px) and (max-width: 1280px) {
   
  }
  @media (min-width: 768px) and (max-width: 1023px) {
  
  }

  @media (max-width: 767px) {
  
  }

  @media (max-width: 991px) and (orientation : landscape) {
    
  }


  

  @media (max-width: 375px) {
 
  }

  @media (max-width: 360px) {
 
  }

  

`;
