import { useState } from 'react';
import { Link } from  'react-router-dom';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import logo from "../img/omnifood-logo.png";


const Header = () => {
    const [open , setOpen] = useState(false);
    const [toggles, setToggle] = useState(false);

    const handleMenu =()=>{

    const headerEl = document.querySelector(".header");
    const body = document.querySelector('body');

    headerEl.classList.toggle('nav-open');
    body.classList.toggle('noscroll');

    setOpen(!open);
    setToggle(!toggles);
  };
  return (
    <header className="header sticky">
      <Link to="/">
        <img className="logo" src={logo} alt="logo"/>
      </Link>
        <nav className="main-nav">
          <ul className="main-nav-list">
            <li><Link className="main-nav-link" to="/">Home</Link></li>
            <li><Link className="main-nav-link" to="#">Services</Link></li>
            <li><Link className="main-nav-link" to="#">Gallery</Link></li>
            <li><Link className="main-nav-link" to="#">Contact</Link></li>
          </ul>
        </nav>
        <div className="btn-mobile-nav" aria-label="open and close menu button" onClick={handleMenu}>
          { open ?
            <AiOutlineClose size={'2em'} className={"mobile-nav-icon"}/>
            :
            <AiOutlineMenu size={'2em'} className={"mobile-nav-icon"}/>
          }
        </div>
    </header>
  )
}

export default Header;