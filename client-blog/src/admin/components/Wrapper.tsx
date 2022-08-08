import React from 'react'
import Menu from './Menu';
import Navbar from './Navbar';

const Wrapper = (props:any)=>{
  return (
    <div className='wrapper'>
      <Navbar />
      <div className='container-fluid'>
        <div className='row'>
          <Menu />
            <main className='col-md-10 ms-sm-auto'>
              {props.children}
            </main>
        </div>
      </div>
    </div>
  )
}
export default Wrapper;