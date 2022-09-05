import React, { useState } from 'react'
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
    <a href="#">
      {/*<img className="logo" src="img/omnifood-logo.png" alt="omnifood logo"/>*/}
      <h2 className="logo">Logo</h2>
    </a>

    <nav className="main-nav">
      <ul className="main-nav-list">
        <li><a className="main-nav-link" href="#how">How it works</a></li>
        <li><a className="main-nav-link" href="#meals">Meals</a></li>
        <li>
          <a className="main-nav-link" href="#testimonials">Testimonials</a>
        </li>
        <li><a className="main-nav-link" href="#pricing">Pricing</a></li>
        <li>
          <a className="main-nav-link nav-cta" href="#cta">Try for free!</a>
        </li>
      </ul>
    </nav>
    <button className="btn-mobile-nav" aria-label="open and close menu button" onClick={handleMenu}>
      { open ?
        <AiOutlineClose size={'2em'}/>
        :
        <AiOutlineMenu size={'2em'}/>
      }
    </button>
  </header>
  )
}

export default Header