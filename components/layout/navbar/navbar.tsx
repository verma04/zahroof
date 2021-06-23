
import React from 'react'
import { Nav} from './Style'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
const Navbar: React.FC<{}> = () => {
  const router = useRouter()
    return (
        <Nav>
        <div  className="navbar" >
            <div onClick={()=> router.push('/')} className="navbar_left" >
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
        <Link href="/engineeringSolutions">
          <a>Engineering Solutions</a>
        </Link>
      </li>
      <li>
        <Link href="/esgbenifits">
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