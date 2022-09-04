import React from 'react'
import { Aside } from './Aside'
import { Navbar } from './Navbar'
export const Wrapper = (props:any)=>{
  return(
    <div className='wrapper'>
      <Navbar/>
        <div className='container-fluid'>
          <div className='row'>
            <Aside/>
              <main className='col-md-10 ms-sm-auto col-lg-10 px-md-4'>
                {props.children}
              </main>
          </div>
        </div>
    </div>
  )
}