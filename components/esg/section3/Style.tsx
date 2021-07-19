import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  align-items: center;

  @media (min-width: 1281px) {
    .section2 {
      position: relative;

      display: flex;
      justify-content: center;

      width: 100%;
      align-items: center;
      position: relative;
      height: 20rem;
      background-color: #3c4e62;
      .tringle {
        position: absolute;
        left: 9%;
        top: -5rem;
        bottom: -5%;
        height: 0;
        border-left: 5rem solid transparent;
        border-right: 5rem solid transparent;
        border-bottom: 5rem solid #3c4e62;
        z-index: 1;
      }

      .section_data {
        position: absolute;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        flex-direction: column;
        h3 {
          width: 80%;
          color: white;
          font-size: 30px;
          line-height: 38px;
        }
        p {
          text-transform: uppercase;
          width: 80%;
          color: white;

          font-size: 30px;
          line-height: 38px;
        }
      }
    }
  }

  @media (min-width: 1024px) and (max-width: 1280px) {
    .section2 {
      position: relative;

      display: flex;
      justify-content: center;

      width: 100%;
      align-items: center;
      position: relative;
      height: 20rem;
      background-color: #3c4e62;
      .tringle {
        position: absolute;
        left: 9%;
        top: -5rem;
        bottom: -5%;
        height: 0;
        border-left: 5rem solid transparent;
        border-right: 5rem solid transparent;
        border-bottom: 5rem solid #3c4e62;
        z-index: 1;
      }

      .section_data {
        position: absolute;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        flex-direction: column;
        h3 {
          width: 80%;
          color: white;
          font-size: 30px;
          line-height: 38px;
        }
        p {
          text-transform: uppercase;
          width: 80%;
          color: white;

          font-size: 30px;
          line-height: 38px;
        }
      }
    }
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    .section2 {
      position: relative;

      display: flex;
      justify-content: center;

      width: 100%;
      align-items: center;
      position: relative;
      height: 15rem;
      background-color: #3c4e62;
      .tringle {
        position: absolute;
        left: 9%;
        top: -5rem;
        bottom: -5%;
        height: 0;
        border-left: 5rem solid transparent;
        border-right: 5rem solid transparent;
        border-bottom: 5rem solid #3c4e62;
        z-index: 1;
      }

      .section_data {
        position: absolute;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        flex-direction: column;
        h3 {
          width: 80%;
          color: white;
          font-size: 26px;
          line-height: 32px;
        }
        p {
          text-transform: uppercase;
          width: 90%;
          color: white;

          font-size: 20px;
          line-height: 22px;
        }
      }
    }
  }

  @media (max-width: 767px) {
    .section2 {
      position: relative;

      display: flex;
      justify-content: center;

      width: 100%;
      align-items: center;
      position: relative;
      height: 25rem;
      background-color: #3c4e62;
      .tringle {
        position: absolute;
        left: 9%;
        top: -5rem;
        bottom: -5%;
        height: 0;
        border-left: 5rem solid transparent;
        border-right: 5rem solid transparent;
        border-bottom: 5rem solid #3c4e62;
        z-index: 1;
      }

      .section_data {
        position: absolute;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        flex-direction: column;
        h3 {
          width: 90%;
          color: white;
          font-size: 26px;
          line-height: 32px;
        }
        p {
          text-transform: uppercase;
          width: 90%;
          color: white;

          font-size: 20px;
          line-height: 22px;
        }
      }
    }
  }
`;
