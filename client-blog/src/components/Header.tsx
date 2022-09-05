import React, { useState } from 'react'
import { Link } from  'react-router-dom'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import '../css/style.css'
import '../css/general.css'
import '../css/queries.css'

const Header = () => {
  const [open , setOpen] = useState(false);
  const [toggle, setToggle] = useState(false);
  const handleMenu =()=>{
    setOpen(!open);
    setToggle(!toggle);
  };
  return (
    <header className="header">
    <Link to="#">
      {/*<img className="logo" src="img/omnifood-logo.png" alt="omnifood logo"/>*/}
      <h2 className="logo">Logo</h2>
    </Link>

    <nav className="main-nav">
      <ul className="main-nav-list">
        <li><Link className="main-nav-link" to="#how">How it works</Link></li>
        <li><Link className="main-nav-link" to="#meals">Meals</Link></li>
        <li>
          <Link className="main-nav-link" to="#testimonials">Testimonials</Link>
        </li>
        <li><Link className="main-nav-link" to="#pricing">Pricing</Link></li>
        <li>
          <Link className="main-nav-link nav-cta" to="#cta">Try for free!</Link>
        </li>
      </ul>
    </nav>
    <button className="btn-mobile-nav" aria-label="open and close menu button" onClick={handleMenu}>
      { open ?
        <AiOutlineClose size={'2em'} className={"mobile-nav-icon"}/>
        :
        <AiOutlineMenu size={'2em'} className={"mobile-nav-icon"}/>
      }
    </button>
  </header>
  )
}

export default Header;