import React from 'react';
import Menu from './Menu';
import Navbar from './Navbar';

const Wrapper = (props:any)=>{
  return (
    <div className='wrapper'>
      <Navbar />
      <div className='container mx-auto'>
        <div className='flex md:flex-raw md:space-x-5'>
          <Menu />
            <main className='w-full'>
              {props.children}
            </main>
        </div>
      </div>
    </div>
  )
}
export default Wrapper;