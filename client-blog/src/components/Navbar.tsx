import { useState } from 'react'
import {Link} from "react-router-dom"
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import styles from '../styles/Navbar.module.css'

const Navbar = ()=>{
  const [open , setOpen] = useState(false);
  const [toggle, setToggle] = useState(false);
  const handleMenu =()=>{
    setOpen(!open);
    setToggle(!toggle);
  };
    return (
        <nav className={styles.header}>
          <h2 className={styles.log}>Logo</h2>
          <div className={ open ? `${styles.nav}`+ 'toggle' : `${styles.nav}` } >
            <Link to={'#'}>Contact</Link>
            <Link to={'#'}>Careers</Link>
            <Link to={'#'}>Blog</Link>
            <Link to={'#'}>Team</Link>
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
