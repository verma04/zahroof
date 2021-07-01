
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
            <Image     objectFit="contain" layout="fill" src={'https://res.cloudinary.com/dzcmadjl1/image/upload/v1623821289/z5k5c8xjr9o0dunv7gce.png'} alt="Zaharoof Logo" />
            </div>
         
            <ul className="navbar_right" >
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/enterpriseSolutions">
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
        <Link href="/aboutus">
          <a>About Us</a>
        </Link>
      </li>
      <li>
        <Link href="/contactus">
          <a>Contact</a>
        </Link>
      </li>
    </ul>
  
           
        </div>
       
        <div  className="nav-sm" >
      <div  className="nav-item" >
    
    <div onClick={() => router.push('/') } className="nav-center" >
     
    <Image    layout="fill" objectFit="contain"  alt="Zahroof Logo" src="https://res.cloudinary.com/dzcmadjl1/image/upload/v1623821289/z5k5c8xjr9o0dunv7gce.png" ></Image>


    </div>
    <div className="nav-right" >


    <i className="fas fa-bars"></i>


    </div>
    </div>
    </div>
        
       
        </Nav>
    )
}

export  default Navbar;