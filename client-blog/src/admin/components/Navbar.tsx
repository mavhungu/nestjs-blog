import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = ()=>{
  return (
    <div className=''>
      <div className="nav">
        <Link to={'/'}>Home</Link>
      </div>
    </div>
  )
}
export default Navbar;