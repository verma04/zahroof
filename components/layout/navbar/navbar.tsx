
import React from 'react'
import { Nav} from './Style'
import Image from 'next/image'
import Link from 'next/link'
const Navbar: React.FC<{}> = () => {
    return (
        <Nav>
        <div  className="navbar" >
            <div className="navbar_left" >
            <Image     objectFit="contain" layout="fill" src={'https://res.cloudinary.com/dzcmadjl1/image/upload/v1623821289/z5k5c8xjr9o0dunv7gce.png'} alt="Picture of the author" />
            </div>
         
            <ul className="navbar_right" >
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/about">
          <a>Enterprise Solutions</a>
        </Link>
      </li>
      <li>
        <Link href="/blog/hello-world">
          <a>Enterprise Solutions</a>
        </Link>
      </li>
      <li>
        <Link href="/blog/hello-world">
          <a>ESG BENIFITS</a>
        </Link>
      </li>
      <li>
        <Link href="/blog/hello-world">
          <a>News & Resources</a>
        </Link>
      </li>
      <li>
        <Link href="/contactus">
          <a>Contact</a>
        </Link>
      </li>
    </ul>
  
           
        </div>
        </Nav>
    )
}

export  default Navbar;