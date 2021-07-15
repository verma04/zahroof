import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  align-items: center;

  @media (min-width: 1281px) {
    .section6 {
      position: relative;

      display: flex;
      justify-content: center;

      width: 100%;
      align-items: center;
      position: relative;
      height: 420px;
      background-color: #dbb43f;
      .tringle {
        position: absolute;
        left: 20%;
        width: 0;
        top: -12%;
        height: 0;
        border-left: 7rem solid transparent;
        border-right: 7rem solid transparent;
        border-bottom: 5rem solid #dbb43f;
        z-index: 1;
      }

      .section2_data {
        width: 86%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: absolute;
        .section2_data_left {
          display: flex;
          width: 60%;
          height: 100%;
          justify-content: flex-start;
          align-items: left;
          flex-direction: column;
          h2 {
            color: #27364e;
            position: relative;

            font-size: 55px;
            line-height: 46px;
            margin-top: 78px;
            margin-bottom: 38px;
            text-transform: uppercase;
            position: relative;
            padding: 5px 0px;
          }
          h2:after {
            position: absolute;
            content: "";
            display: block;
            height: 100%;
            width: 0.5rem;
            top: 0;
            left: -27px;
            background-color: #24334d;
          }

          p {
            width: 80%;
            color: white;
            font-size: 20px;
            line-height: 35px;
            color: #2e3031;
          }
          h3 {
            line-height: 1.1;
            color: white;
          }
        }

        .section2_data_right {
          display: flex;
          width: 40%;
          height: 80%;
          justify-content: space-between;
          align-items: center;

          flex-wrap: wrap;
          .top {
            width: 50%;

            display: flex;
            justify-content: flex-start;
            align-items: center;
            flex-direction: column;
            h2 {
              width: 100%;
              text-align: center;
              color: white;

              font-size: 150px;

              text-transform: uppercase;
            }
            h3 {
              margin-top: -38px;
              width: 100%;
              text-align: center;
              color: white;
              font-size: 70.44px;
              text-transform: uppercase;
            }
            span {
              width: 100%;

              margin-left: 25%;

              text-align: left;
              font-size: 20px;
              text-transform: uppercase;
              color: white;
            }
          }
        }
      }
    }
  }
  @media (min-width: 1024px) and (max-width: 1280px) {
    .section6 {
      position: relative;

      display: flex;
      justify-content: center;

      width: 100%;
      align-items: center;
      position: relative;
      height: 420px;
      background-color: #dbb43f;
      .tringle {
        position: absolute;
        left: 20%;
        width: 0;
        top: -12%;
        height: 0;
        border-left: 7rem solid transparent;
        border-right: 7rem solid transparent;
        border-bottom: 5rem solid #dbb43f;
        z-index: 1;
      }

      .section2_data {
        width: 85%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: absolute;
        .section2_data_left {
          display: flex;
          width: 70%;
          height: 100%;
          justify-content: center;
          align-items: left;
          flex-direction: column;
          h2 {
            color: #27364e;
            position: relative;

            font-size: 55px;
            line-height: 46px;

            text-transform: uppercase;
            position: relative;
            padding: 5px 0px;
          }
          h2:after {
            position: absolute;
            content: "";
            display: block;
            height: 100%;
            width: 0.5rem;
            top: 0;
            left: -27px;
            background-color: #24334d;
          }

          p {
            width: 80%;
            color: white;
            font-size: 20px;
            line-height: 35px;
            color: #2e3031;
          }
          h3 {
            line-height: 1.1;
            color: white;
          }
        }

        .section2_data_right {
          display: flex;

          width: 58%;

          height: 80%;
          justify-content: space-between;
          align-items: center;

          flex-wrap: wrap;
          .top {
            width: 50%;

            display: flex;
            justify-content: flex-start;
            align-items: center;
            flex-direction: column;

            h2 {
              width: 100%;
              text-align: center;
              color: white;

              font-size: 139px;

              text-transform: uppercase;
            }
            h3 {
              margin-top: -38px;
              width: 100%;
              text-align: center;
              color: white;
              font-size: 70.44px;
              text-transform: uppercase;
            }
            span {
              width: 100%;

              text-align: center;

              font-size: 16px;

              text-transform: uppercase;
              color: white;
            }
          }
        }
      }
    }
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    .section6 {
      position: relative;

      display: flex;
      justify-content: center;

      width: 100%;
      align-items: center;
      position: relative;
      height: 37rem;
      background-color: #dbb43f;
      .tringle {
        position: absolute;
        left: 20%;
        width: 0;
        top: -6%;
        height: 0;
        border-left: 5rem solid transparent;
        border-right: 5rem solid transparent;
        border-bottom: 3rem solid #dbb43f;
        z-index: 1;
      }

      .section2_data {
        width: 95%;

        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: absolute;
        flex-direction: column-reverse;
        .section2_data_left {
          display: flex;
          width: 95%;
          height: 60%;
          justify-content: center;
          align-items: left;
          flex-direction: column;
          h2 {
            color: #27364e;
            position: relative;

            font-size: 1.5rem;
            width: 95%;

            text-transform: uppercase;
            position: relative;
          }
          h2:after {
            position: absolute;
            content: "";
            display: block;
            height: 100%;
            width: 0.3rem;
            top: 0;
            left: -4%;
            background-color: #24334d;
          }

          p {
            width: 95%;
            color: white;
            font-size: 20px;
            line-height: 35px;
            color: #2e3031;
          }
          h3 {
            line-height: 1.1;
            color: white;
          }
        }

        .section2_data_right {
          display: flex;
          width: 100%;
          height: 40%;
          justify-content: space-between;
          align-items: center;

          flex-wrap: wrap;
          .top {
            width: 50%;
            height: 60%;

            display: flex;
            justify-content: space-evenly;
            align-items: center;
            flex-direction: column;
            h2 {
              width: 100%;
              text-align: center;
              color: white;

              font-size: 100px;

              text-transform: uppercase;
            }
            h3 {
              width: 100%;
              text-align: center;
              color: white;
              font-size: 50.44px;
              text-transform: uppercase;
            }
            span {
              width: 100%;

              text-align: center;
              font-size: 16px;
              text-transform: uppercase;
              color: white;
            }
          }
        }
      }
    }
  }

  @media (max-width: 767px) {
    .section6 {
      position: relative;

      display: flex;
      justify-content: center;

      width: 100%;
      align-items: center;
      position: relative;
      height: 50rem;
      background-color: #dbb43f;
      .tringle {
        position: absolute;
        left: 20%;
        width: 0;
        top: -6%;
        height: 0;
        border-left: 5rem solid transparent;
        border-right: 5rem solid transparent;
        border-bottom: 3rem solid #dbb43f;
        z-index: 1;
      }

      .section2_data {
        width: 95%;

        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: absolute;
        flex-direction: column-reverse;
        .section2_data_left {
          display: flex;
          width: 95%;
          height: 60%;
          justify-content: flex-start;
          align-items: left;
          flex-direction: column;
          h2 {
            color: #27364e;
            position: relative;

            font-size: 1.5rem;
            width: 95%;

            text-transform: uppercase;
            position: relative;
          }
          h2:after {
            position: absolute;
            content: "";
            display: block;
            height: 100%;
            width: 0.3rem;
            top: 0;
            left: -4%;
            background-color: #24334d;
          }

          p {
            width: 95%;
            color: white;
            font-size: 20px;
            line-height: 35px;
            color: #2e3031;
          }
          h3 {
            line-height: 1.1;
            color: white;
          }
        }

        .section2_data_right {
          display: flex;
          width: 100%;
          height: 40%;
          justify-content: space-between;
          align-items: center;

          flex-wrap: wrap;
          .top {
            width: 50%;
            height: 60%;

            display: flex;
            justify-content: space-evenly;
            align-items: center;
            flex-direction: column;
            h2 {
              width: 100%;
              text-align: center;
              color: white;

              font-size: 100px;

              text-transform: uppercase;
            }
            h3 {
              width: 100%;
              text-align: center;
              color: white;
              font-size: 50.44px;
              text-transform: uppercase;
            }
            span {
              width: 100%;

              text-align: center;
              font-size: 16px;
              text-transform: uppercase;
              color: white;
            }
          }
        }
      }
    }
  }
`;
