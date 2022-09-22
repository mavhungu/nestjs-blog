import { useState } from 'react'
import {Link} from "react-router-dom"
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import styles from '../styles/Navbar.module.css';

const Navbar = ()=>{
  const [open , setOpen] = useState(false);
  const [toggle, setToggle] = useState(false);
  const handleMenu =()=>{
    
    const headerEl = document.getElementsByClassName("header");
    const body = document.querySelector('body');

    headerEl.classList.toggle("nav-open");
    body.classList.toggle('noscroll');

    setOpen(!open);
    setToggle(!toggle);

  };
    return (
      <nav className={styles.header}>
        <h2 className={styles.log}>Logo</h2>
        <div className={toggle ? `${styles.nav} opn_nav` : `${styles.nav}` }>
          <ul className={styles.nav_list}>
            <li><Link to={'#'} className={styles.nav_link}>Contact</Link></li>
            <li><Link to={'#'} className={styles.nav_link}>Careers</Link></li>
            <li><Link to={'#'} className={styles.nav_link}>Blog</Link></li>
            <li><Link to={'#'} className={styles.nav_link}>Team</Link></li>
          </ul>
        </div>
        <div className={styles.menu} onClick={handleMenu}>
          { open ?
            <AiOutlineClose size={'2em'}/>
            :
            <AiOutlineMenu size={'2em'}/>
          }
        </div>
      </nav>
    )
}
export default Navbar;
