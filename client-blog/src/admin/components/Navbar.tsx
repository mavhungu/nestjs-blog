import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = ()=>{
  return (
    <div className='flex justify-between align-center h-[10vh] bg-primary-800 text-white mb-4 p-5'>
      <Link to={'/'} className='text-white'>Home</Link>
      <Link to={'/admin/add-post'}>Home</Link>
      <Link to={'/admin/add-tag'}>Home</Link>
      <Link to={'/admin/remove-post'}>Home</Link>
      <Link to={'/admin/add-post'}>Home</Link>
    </div>
  )
}

export default Navbar;