import React, {} from 'react'
import { Link } from 'react-router-dom';
import { AiOutlineMenu } from 'react-icons/ai';
import { useMenuContext } from '../context/NavbarContext';

const Navbar = ()=>{
  const { toggleMenu } = useMenuContext();

  return (
    <div className='w-full h-[6vh] bg-primary-800 text-white p-5'>
      <div className="container mx-auto">
        {/* Desktop Navbar */}
        <div className="hidden md:block">
          <div className="flex items-center justify-between">
            <div className="">
              <Link to={'/'} className='text-white'>Home</Link>
            </div>
            <div className='flex justify-start items-center space-x-3'>
              <Link to={'/admin/add-post'} className="hover:text-gray-500 text-bold">Home</Link>
              <Link to={'/admin/add-tag'} className="hover:text-gray-500 text-bold">Home</Link>
              <Link to={'/admin/remove-post'} className="hover:text-gray-500 text-bold">Home</Link>
              <Link to={'/admin/add-post'} className="hover:text-gray-500 text-bold">Home</Link>
            </div>
          </div>
        </div>
        {/* Mobile responsive sidebar */}
        <div className="block md:hidden">
          <div className="flex flex-end justify-end">
            <div role="button" className="text-white items-center hover:text-gray-700 focus:text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500" onClick={toggleMenu}>
              <AiOutlineMenu size={'1.5em'}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar;