import Link from 'next/link'
import React from 'react'
import { Foot } from './Style'
 const Footer: React.FC<{}> = () => {
    return (
        <Foot >
            <div className="footer_newsLetter" >
  
            </div>

            <div className="footer" >
    <div className="footer-top" >

    <ul className="footer-left">
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/about">
          <a>About Us</a>
        </Link>
      </li>
      <li>
        <Link href="/blog/hello-world">
          <a>Blog Post</a>
        </Link>
      </li>
    </ul>
       
    <ul className="footer-right" >

        <li></li>

        <li></li>


        <li></li>

        <li></li>
        </ul>
        </div>

        <span></span>

                </div>
        </Foot>
    )
}

export default Footer;