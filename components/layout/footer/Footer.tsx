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
                "https://app.zahroofvalves.com/wp-content/uploads/2021/08/nt4lgdaec6ngnwwo8bro.png"
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
              <Link href="/privacypolicy">
                <a>Privacy policy</a>
              </Link>
            </li>
            <li>
              <Link href="/aboutus">
                <a>About Us</a>
              </Link>
            </li>
          
         
            <li>
              <Link href="/blog">
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
                  "https://app.zahroofvalves.com/wp-content/uploads/2021/08/n6f7lujxbhvkz6za2frl.png"
                }
                alt="Picture of the author"
              />
            </li>

            <li>
              <Image
                objectFit="contain"
                layout="fill"
                src={
                  "https://app.zahroofvalves.com/wp-content/uploads/2021/08/jw3muruu6zwsdmnv9xc3.png"
                }
                alt="Picture of the author"
              />
            </li>

            <li>
              <Image
                objectFit="contain"
                layout="fill"
                src={
                  "https://app.zahroofvalves.com/wp-content/uploads/2021/08/pf9m8jb8z90g8qznl1bw.png"
                }
                alt="Picture of the author"
              />
            </li>

            <li>
              <Image
                objectFit="contain"
                layout="fill"
                src={
                  "https://app.zahroofvalves.com/wp-content/uploads/2021/08/z2atpdve4bhqjlnnmtbf.png"
                }
                alt="Picture of the author"
              />
            </li>
          </ul>
        </div>

        <span>
          ©{new Date().getFullYear()} All Rights Reserved Zahroof Valves Inc . EOE{" "}
        </span>
      </div>
    </Foot>
  );
};

export default Footer;
