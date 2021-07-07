import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  align-items: center;

  @media (min-width: 1281px) {
    .section3 {
      position: relative;

      display: flex;
      justify-content: center;

      width: 100%;
      align-items: center;
      position: relative;
      height: 735px;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;

      .section2_data {
        width: 90%;
        height: 80%;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .section2_data_left {
          display: flex;
          width: 45%;
          height: 100%;
          justify-content: space-around;
          align-items: left;
          flex-direction: column;
          h2 {
            position: relative;
            padding-left: 0.5rem;
            font-size: 55px;
            line-height: 46px;
            color: white;
            position: relative;
            color: #24334d;
            text-transform: uppercase;
          }
          h2:after {
            position: absolute;
            content: "";
            display: block;
            height: 150%;
            width: 0.3rem;
            top: -20%;
            left: -0.3rem;
            background-color: #daaf1a;
          }
          p {
            width: 90%;
            color: #2e3031;
            font-weight: 600;
            font-size: 18px;
            margin-top: 50px;
            line-height: 40px;
          }
          .img_wrapper {
            position: relative;
            height: 50%;
            width: 100%;
            line-height: 1.1;
          }
        }

        .section2_data_right {
          display: flex;
          width: 45%;
          height: 100%;
          justify-content: flex-start;
          align-items: flex-end;
          flex-direction: column;
          flex-wrap: wrap;
          position: relative;
          h3 {
            color: #24334d;
            margin-top: 10px;

            font-size: 26.64px;
            text-align: left;
            width: 50%;

            text-transform: uppercase;
          }

          p {
            margin-top: 55px;
            width: 50%;
            line-height: 30px;
            text-align: left;
            font-size: 15px;
            color: #2e3031;
          }
        }
      }
    }
  }
`;
