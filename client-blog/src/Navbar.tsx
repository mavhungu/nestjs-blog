import {useState} from "react"
import { Link } from 'react-router-dom'
import { VscThreeBars, VscHome } from 'react-icons/vsc'
import { GrClose } from 'react-icons/gr'
import './navbar.css';

const Navbar = ()=>{
    const [open, setOpen] = useState(false)
    const handleMenu = ()=>{
        setOpen(!open)
        console.log("Clicked Icon")
    }
    return(
        <header className={"main_header"}>
            <a href={'/'} className={'home_link'}><VscHome/></a>
            <ul className={open ? 'header_link header_link_active' : 'header_link'}>
                <li><Link to={'#'}>Home</Link></li>
                <li><Link to={'#'}>Home</Link></li>
                <li><Link to={'#'}>Home</Link></li>
                <li><Link to={'#'}>Home</Link></li>
            </ul>
            <div className={'header_icons'} onClick={handleMenu}>
                {
                    open ?
                        <div><GrClose/></div>
                        :
                        <div><VscThreeBars /></div>
                }
            </div>
        </header>
    )
}
export default Navbar;