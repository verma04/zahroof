import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { Foot } from './Style'
 const Footer: React.FC<{}> = () => {
    return (
        <Foot >
            <div className="footer_newsLetter" >

                <h3>Stay informed  recieve our <br/> monthly zmail industry report</h3>

                <form>
  <input  placeholder="Enter Your Email" ></input>
  <div className="message" >
  <Image     objectFit="contain" layout="fill" src={'https://res.cloudinary.com/dzcmadjl1/image/upload/v1623843328/kclegz6cvq3lqyqqzkvt.png'} alt="Picture of the author" />
  </div>

                </form>
  
            </div>

            <div className="footer" >
    <div className="footer-top" >

    <ul className="footer-left">
      <li>
        <Link href="/">
          <a>Privacy ploicy</a>
        </Link>
      </li>
      <li>
        <Link href="/about">
          <a>About Us</a>
        </Link>
      </li>
      <li>
        <Link href="/blog/hello-world">
          <a>Support</a>
        </Link>
      </li>
      <li>
        <Link href="/blog/hello-world">
          <a>Faq</a>
        </Link>
      </li>
      <li>
        <Link href="/blog/hello-world">
          <a>Blog</a>
        </Link>
      </li>
      <li>
        <Link href="/blog/hello-world">
          <a>FORM</a>
        </Link>
      </li>
    </ul>
       
    <ul className="footer-right" >

        <li>
        <Image     objectFit="contain" layout="fill" src={'https://res.cloudinary.com/dzcmadjl1/image/upload/v1623841777/n6f7lujxbhvkz6za2frl.png'} alt="Picture of the author" />
        </li>

        <li>
        <Image     objectFit="contain" layout="fill" src={'https://res.cloudinary.com/dzcmadjl1/image/upload/v1623841790/jw3muruu6zwsdmnv9xc3.png'} alt="Picture of the author" />
        </li>


        <li>
        <Image     objectFit="contain" layout="fill" src={'https://res.cloudinary.com/dzcmadjl1/image/upload/v1623841790/cpqdsggklntteghzqxv3.png'} alt="Picture of the author" />
        </li>

        <li>
        <Image     objectFit="contain" layout="fill" src={'https://res.cloudinary.com/dzcmadjl1/image/upload/v1623841790/z2atpdve4bhqjlnnmtbf.png'} alt="Picture of the author" />
        </li>
        </ul>
        </div>

        <span>@{new Date().getFullYear()} All Right reserved Zahroof Inc . EOE </span>

                </div>
        </Foot>
    )
}

export default Footer;