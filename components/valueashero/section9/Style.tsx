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
        background-color: #3b546a;
        height: 10rem;
        p {
          width: 75%;
          text-align: center;
          color: white;
          text-transform: uppercase;
          font-size: 3.3rem;
        }
        position: relative;
        .tringle {
          position: absolute;
          left: 45%;
          width: 0;
          bottom: -39%;
          height: 0;
          border-left: 5rem solid transparent;
          border-right: 5rem solid transparent;
          border-top: 4rem solid #3b546a;
          z-index: 1;
        }
      }

      .section_bottom {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 20rem;
        position: relative;

        background-color: #cea800;
        .section2_data {
          width: 80%;
          height: 90%;
          display: flex;
          justify-content: space-between;
          align-items: center;

          .section2_data {
            display: flex;
            width: 45%;
            height: 95%;
            justify-content: space-around;
            align-items: center;
            flex-direction: column;
            flex-wrap: wrap;
            position: relative;

            .section_bottom_data {
              width: 100%;
              height: 100%;
              display: flex;
              justify-content: center;
              align-items: center;
              flex-direction: column;
              h3 {
                color: white;
                text-transform: uppercase;
              }
              li {
                position: relative;
              }
              li:nth-child(1) {
                width: 10rem;
                height: 10rem;
                margin-bottom: 1rem;
              }
              li:nth-child(3) {
                width: 3rem;
                height: 3rem;
              }
            }
          }
        }
      }
    }
  }
`;
