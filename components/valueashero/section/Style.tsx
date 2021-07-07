import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  align-items: center;

  @media (min-width: 1281px) {
    .section {
      position: relative;

      display: flex;
      justify-content: center;
      flex-direction: column;
      width: 100%;
      align-items: center;

      .section_top {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        background-color: #dbb43f;
        height: 140px;
        h3 {
          width: 80%;
          line-height: 30px;
          font-size: 24px;
          color: white;
        }
      }

      .section_bottom {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 685px;
        position: relative;

        .section2_data {
          width: 70%;
          height: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          position: absolute;
          .section2_data_left {
            display: flex;
            width: 48%;
            height: 100%;
            justify-content: flex-start;
            align-items: left;
            flex-direction: column;
            h2 {
              margin-top: 120px;
              position: relative;
              padding-left: 0.5rem;
              font-size: 55px;
              color: white;
              position: relative;
            }
            h2:after {
              position: absolute;
              content: "";
              display: block;
              height: 120%;
              width: 0.2rem;
              top: 0;
              left: -0.3rem;
              background-color: #daaf1a;
            }
            p {
              margin-top: 52px;
              color: white;
              width: 100%;
              line-height: 1.4;
              font-size: 20px;
            }
            h3 {
              margin-top: 75px;
              line-height: 1.4;
              color: white;
            }
          }

          .section2_data_right {
            display: flex;
            width: 48%;
            height: 80%;
            justify-content: space-around;
            align-items: center;
            flex-direction: column;
            flex-wrap: wrap;
            position: relative;
          }
        }
      }
    }
  }
`;
