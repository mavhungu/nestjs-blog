import { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import styles from '../styles/Navbar.module.css'
const Navbar = ()=>{
  const [open , setOpen] = useState(false);
    return (
        <nav className={styles.nav}>
          <h2 className={styles.log}>Logo</h2>
          <div className={''}>
            <a href={''}></a>
            <a href={''}></a>
            <a href={''}></a>
            <a href={''}></a>
          </div>
          <div className={''}>
            { open ?
              <AiOutlineClose/>
              :
              <AiOutlineMenu/>
            }
          </div>
        </nav>
    )
}
export default Navbar;
