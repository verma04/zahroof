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
      height: 44.5rem;
      background-image: url("https://res.cloudinary.com/dzcmadjl1/image/upload/v1625648083/say2tbvtmz54opz2f2xh.png");

      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      position: relative;

      .section-1 {
        position: absolute;
        width: 100%;
        height: 100%;

        .wrapper {
          width: 100%;
          height: 100%;
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          .section-data {
            width: 100%;
            
            height: 90%;
            position: absolute;
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 1;
            .left {
              width: 50%;
              height: 100%;

              align-items: center;
              display: flex;
              justify-content: center;
              flex-direction: column;
              ul {
                margin-left: 0.5rem;
                width: 70%;

                li {
                  width: 100%;
                  font-size: 41px;

                  text-align: left;
                  line-height: 46px;
                  color: white;
                  font-family: Proxima-Bold;
                  font-weight: 1000;
                  text-transform: uppercase;
                }
                li:nth-child(1) {
                  position: relative;
                }
              }

              p {
                font-family: Proxima-Bold;
                margin-top: 3rem;
                width: 70%;
                line-height: 30px;
                font-size: 16px;
                color: white;
                position: relative;
                padding-left: 1rem;
              }
              p:after {
                content: "";
                display: block;
                height: 100%;
                width: 0.3rem;
                position: absolute;
                background-color: #eeba18;
                top: 0%;
                left: -0.5rem;
              }
            }
            .right {
              width: 50%;
              height: 70%;
   
              align-items: center;
              display: flex;
              justify-content: center;
              align-items: center;
              flex-direction: column;
              .right_logo {
                width: 100%;
                
                height: 33%;
                display: flex;
                justify-content: flex-start;
                align-items: center;

                .logo-wrapper {
                  width: 30%;
                  height: 60%;
                  position: relative;
                }
                p {
                  font-family: Proxima-Bold;
                  color: white;
                  width: 55%;
                  line-height: 30px;
                  font-size: 16px;
                  position: relative;
                }
                p::after {
                  content: "";
                  display: block;
                  height: 100%;
                  width: 0.3rem;
                  position: absolute;
                  background-color: #eeba18;
                  top: 0%;
                  left: -1rem;
                }
              }
            }
          }
        }
      }
    }
  }

  @media (max-width: 767px) {
    .section {
      position: relative;

      display: flex;
      justify-content: center;

      width: 100%;
      align-items: center;
      height: 69rem;

      background-image: url("https://res.cloudinary.com/dzcmadjl1/image/upload/v1625648083/say2tbvtmz54opz2f2xh.png");

      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      position: relative;

      .section-1 {
        position: absolute;
        width: 100%;
        height: 100%;

        .wrapper {
          width: 100%;
          height: 100%;
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          .section-data {
            width: 100%;
            height: 100%;
            position: absolute;
            display: flex;
            justify-content: center;
            align-items: center;
           
            flex-direction: column;
            .left {
              width: 100%;
              height: 50%;

              align-items: center;
              display: flex;
              justify-content: center;
              flex-direction: column;
              ul {
                margin-left: 0.5rem;
                width: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;

                li {
                  width: 90%;
                  font-size: 41px;

                  text-align: left;
                  line-height: 46px;
                  color: white;
                  font-family: Proxima-Bold;
                  font-weight: 1000;
                  text-transform: uppercase;
                }
                li:nth-child(1) {
                  position: relative;
                }
              }

              p {
                font-family: Proxima-Light;
                margin-top: 3rem;
                width: 90%;
                line-height: 1.3;
                font-size: 18px;
                color: white;
                position: relative;
                padding-left: 1rem;
                font-weight: 600;
              }
              p:after {
                content: "";
                display: block;
                height: 100%;
                width: 0.3rem;
                position: absolute;
                background-color: #eeba18;
                top: 0%;
                left: -0.5rem;
              }
            }
            .right {
              width: 100%;
              height: 50%;

              align-items: center;
              display: flex;
              justify-content: space-evenly;
              align-items: center;
              flex-direction: column;
              .right_logo {
                width: 100%;
                height: 20%;
                display: flex;
                justify-content: space-between;
                align-items: center;

                .logo-wrapper {
                  width: 20%;
                  margin-left: 0.5rem;
                  height: 60%;
                  position: relative;
                }
                p {
                  font-family: Proxima-Light;
                  color: white;
                  width: 70%;
                  line-height: 1.3;
                  font-size: 18px;
                  position: relative;
                  font-weight: 600;
                }
                p::after {
                  content: "";
                  display: block;
                  height: 100%;
                  width: 0.3rem;
                  position: absolute;
                  background-color: #eeba18;
                  top: 0%;
                  left: -1rem;
                }
              }
            }
          }
        }
      }
    }
  }

  @media (min-width: 1024px) and (max-width: 1280px) {
    .section {
      position: relative;

      display: flex;
      justify-content: center;
      flex-direction: column;
      width: 100%;
      align-items: center;
      height: 44.5rem;
      background-image: url("https://res.cloudinary.com/dzcmadjl1/image/upload/v1625648083/say2tbvtmz54opz2f2xh.png");

      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      position: relative;

      .section-1 {
        position: absolute;
        width: 100%;
        height: 100%;

        .wrapper {
          width: 100%;
          height: 100%;
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          .section-data {
            width: 100%;
            height: 80%;
            position: absolute;
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 1;
            .left {
              width: 50%;
              height: 100%;

              align-items: center;
              display: flex;
              justify-content: center;
              flex-direction: column;
              ul {
                margin-left: 0.5rem;
                width: 70%;

                li {
                  width: 100%;
                  font-size: 41px;

                  text-align: left;
                  line-height: 46px;
                  color: white;
                  font-family: Proxima-Bold;
                  font-weight: 1000;
                  text-transform: uppercase;
                }
                li:nth-child(1) {
                  position: relative;
                }
              }

              p {
                font-family: Proxima-Bold;
                margin-top: 3rem;
                width: 70%;
                line-height: 30px;
                font-size: 16px;
                color: white;
                position: relative;
                padding-left: 1rem;
              }
              p:after {
                content: "";
                display: block;
                height: 100%;
                width: 0.3rem;
                position: absolute;
                background-color: #eeba18;
                top: 0%;
                left: -0.5rem;
              }
            }
            .right {
              width: 50%;
              height: 70%;

              align-items: center;
              display: flex;
              justify-content: space-between;
              align-items: center;
              flex-direction: column;
              .right_logo {
                width: 100%;
                height: 20%;
                display: flex;
                justify-content: flex-start;
                align-items: center;

                .logo-wrapper {
                  width: 20%;
                  height: 60%;
                  position: relative;
                  margin-right: 1rem;
                }
                p {
                  font-family: Proxima-Bold;
                  color: white;
                  width: 60%;
                  line-height: 30px;
                  font-size: 16px;
                  position: relative;
                }
                p::after {
                  content: "";
                  display: block;
                  height: 100%;
                  width: 0.3rem;
                  position: absolute;
                  background-color: #eeba18;
                  top: 0%;
                  left: -1rem;
                }
              }
            }
          }
        }
      }
    }
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    .section {
      position: relative;

      display: flex;
      justify-content: center;

      width: 100%;
      align-items: center;
      height: 50rem;
      background-image: url("https://res.cloudinary.com/dzcmadjl1/image/upload/v1625648083/say2tbvtmz54opz2f2xh.png");

      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      position: relative;

      .section-1 {
        position: absolute;
        width: 100%;
        height: 100%;

        .wrapper {
          width: 100%;
          height: 100%;
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          .section-data {
            width: 100%;
            height: 100%;
            position: absolute;
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 1;
            flex-direction: column;
            .left {
              width: 100%;
              height: 50%;

              align-items: center;
              display: flex;
              justify-content: center;
              flex-direction: column;
              ul {
                margin-left: 0.5rem;
                width: 70%;

                li {
                  width: 100%;
                  font-size: 41px;

                  text-align: left;
                  line-height: 46px;
                  color: white;
                  font-family: Proxima-Bold;
                  font-weight: 1000;
                  text-transform: uppercase;
                }
                li:nth-child(1) {
                  position: relative;
                }
              }

              p {
                font-family: Proxima-Bold;
                margin-top: 3rem;
                width: 70%;
                line-height: 30px;
                font-size: 16px;
                color: white;
                position: relative;
                padding-left: 1rem;
              }
              p:after {
                content: "";
                display: block;
                height: 100%;
                width: 0.3rem;
                position: absolute;
                background-color: #eeba18;
                top: 0%;
                left: -0.5rem;
              }
            }
            .right {
              width: 100%;
              height: 50%;

              align-items: center;
              display: flex;
              justify-content: space-evenly;
              align-items: center;
              flex-direction: column;
              .right_logo {
                width: 100%;
                height: 20%;
                display: flex;
                justify-content: flex-start;
                align-items: center;

                .logo-wrapper {
                  width: 20%;
                  height: 60%;
                  position: relative;
                  margin-right: 1rem;
                }
                p {
                  font-family: Proxima-Bold;
                  color: white;
                  width: 60%;
                  line-height: 30px;
                  font-size: 16px;
                  position: relative;
                }
                p::after {
                  content: "";
                  display: block;
                  height: 100%;
                  width: 0.3rem;
                  position: absolute;
                  background-color: #eeba18;
                  top: 0%;
                  left: -1rem;
                }
              }
            }
          }
        }
      }
    }
  }
`;
