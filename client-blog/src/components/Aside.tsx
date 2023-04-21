import React from 'react';
import { Search } from '.';

const Aside = ()=>{
  return (
    <div className='flex flex-col w-1/5'>
      <div className='px-3 mx-3'>
        <Search />
        <p className="pt-2">Main Aside</p>
      </div>
    </div>
  )
}

export default Aside;