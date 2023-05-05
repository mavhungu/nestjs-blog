import { useState } from 'react'
import {Link} from "react-router-dom"
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import styles from '../styles/Navbar.module.css';

const Navbar = ()=>{
  const [open , setOpen] = useState(false);
  const [toggles, setToggle] = useState(false);

  const handleMenus =()=>{  
    const body = document.querySelector('body');
    const header = document.getElementById('header');

    header.classList.toggle('nav-open');
    body.classList.toggle('noscroll');

    setOpen(!open);
    setToggle(!toggles);

  };
    return (
      <nav className={`${styles.header}`} id='header'>
        <h2 className={styles.log}>Logo</h2>
          <ul className={`${open ? 'translate-x-0 bg-indigo-400':'-translate-x-full'} transform-all ease-in transition duration-500 top-[60px] md:h-screen md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9`}>
            <li className='md:ml-8 text-xl md:my-0 my-7'><Link to={'#'} className={styles.nav_link}>Contact</Link></li>
            <li className='md:ml-8 text-xl md:my-0 my-7'><Link to={'#'} className={styles.nav_link}>Careers</Link></li>
            <li className='md:ml-8 text-xl md:my-0 my-7'><Link to={'#'} className={styles.nav_link}>Blog</Link></li>
            <li className='md:ml-8 text-xl md:my-0 my-7'><Link to={'#'} className={styles.nav_link}>Team</Link></li>
          </ul>
        <div className={styles.menu} onClick={handleMenus}>
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
