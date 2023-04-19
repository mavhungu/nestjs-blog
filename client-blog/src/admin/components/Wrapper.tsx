import React from 'react';
import Menu from './Menu';
import Navbar from './Navbar';

const Wrapper = (props:any)=>{
  return (
    <div className='wrapper'>
      <Navbar />
      <div className=''>
        <div className='flex'>
          <Menu />
            <main className=''>
              {props.children}
            </main>
        </div>
      </div>
    </div>
  )
}
export default Wrapper;