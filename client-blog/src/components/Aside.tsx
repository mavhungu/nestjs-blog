import React from 'react';
import { Search } from '.';
import { RiSearchLine } from 'react-icons/ri';

const Aside = ()=>{
  return (
    <div className='hidden lg:flex flex-col w-1/5'>
      <div className='mx-2'>
        <Search />
        <div className="">
          <div className="bg-primary-600 flex justify-between items-center">
            <p className="text-white center">Main Aside</p>
            <RiSearch/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Aside;