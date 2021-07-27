import Link from "next/link";
import React from "react";
import Image from "next/image";
import { Foot } from "./Style";
const Footer: React.FC<{}> = () => {
  return (
    <Foot>
      <div className="footer_newsLetter">
        <h3>
          Stay informed. Receive our <br /> monthly zmail industry report
        </h3>

        <form>
          <input placeholder="Enter Your Email"></input>
          <div className="message">
            <Image
              objectFit="contain"
              layout="fill"
              src={
                "https://res.cloudinary.com/dzcmadjl1/image/upload/v1627383069/nf89smpilwlxedcq4qrm.png"
              }
              alt="Picture of the author"
            />
          </div>
        </form>
      </div>

      <div className="footer">
        <div className="footer-top">
          <ul className="footer-left">
            <li>
              <Link href="/">
                <a>Privacy policy</a>
              </Link>
            </li>
            <li>
              <Link href="/aboutus">
                <a>About Us</a>
              </Link>
            </li>
          
         
            <li>
              <Link href="/blog/hello-world">
                <a>Blog</a>
              </Link>
            </li>
            
          </ul>

          <ul className="footer-right">
            <li>
              <Image
                objectFit="contain"
                layout="fill"
                src={
                  "https://res.cloudinary.com/dzcmadjl1/image/upload/v1627383443/jiicypmbtxjvxgmis4il.png"
                }
                alt="Picture of the author"
              />
            </li>

            <li>
              <Image
                objectFit="contain"
                layout="fill"
                src={
                  "https://res.cloudinary.com/dzcmadjl1/image/upload/v1627383068/jpnotffcgm9bs0f1bgod.png"
                }
                alt="Picture of the author"
              />
            </li>

            <li>
              <Image
                objectFit="contain"
                layout="fill"
                src={
                  "https://res.cloudinary.com/dzcmadjl1/image/upload/v1627383068/hyqvec3pze4pak12jx01.png"
                }
                alt="Picture of the author"
              />
            </li>

            <li>
              <Image
                objectFit="contain"
                layout="fill"
                src={
                  "https://res.cloudinary.com/dzcmadjl1/image/upload/v1627383068/lcurd08lwfnh8nmirmza.png"
                }
                alt="Picture of the author"
              />
            </li>
          </ul>
        </div>

        <span>
          ©{new Date().getFullYear()} All Rights Reserved Zahroof Inc . EOE{" "}
        </span>
      </div>
    </Foot>
  );
};

export default Footer;
