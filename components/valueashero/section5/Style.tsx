import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  align-items: center;

  @media (min-width: 1281px) {
    .section4 {
      position: relative;

      display: flex;
      justify-content: center;

      width: 90%;
      align-items: center;
      position: relative;
      height: 40rem;

      display: flex;
      justify-content: space-around;
      align-items: center;

      .section2_data_left {
        display: flex;
        width: 50%;
        height: 100%;
        justify-content: space-around;
        align-items: left;
        flex-direction: column;
        h2 {
          position: relative;
          padding-left: 0.5rem;
          font-size: 3.438rem;
          color: white;
          position: relative;
          color: #24334d;
          text-transform: uppercase;
        }
        h2:after {
          position: absolute;
          content: "";
          display: block;
          height: 100%;
          width: 0.4rem;
          top: 0;
          left: -0.3rem;
          background-color: #daaf1a;
        }
        .img_wrapper {
          position: relative;
          height: 40%;
          width: 100%;
          line-height: 1.1;
        }
        h3 {
          width: 100%;
          line-height: 1.1;
        }
        p {
          width: 80%;
          line-height: 2;
        }
      }

      .section2_data_right {
        display: flex;
        width: 45%;
        height: 100%;
        justify-content: flex-start;
        align-items: center;

        .wrapper {
          position: relative;
          width: 48%;
          height: 100%;
        }
      }
    }
  }
`;
