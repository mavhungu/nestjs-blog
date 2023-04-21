import React from 'react'
import { Aside, Navbar, Footer } from '.'

type WrapperProps = {
    children: React.ReactNode;
}

const Wrapper = (props: WrapperProps)=>{
  return(
    <div>
      <Navbar/>
        <div className='flex justify-between'>
          <Aside/>
            <main className='h-[100%] pt-4 w-full bg-primary-800'>
              {props.children}
            </main>
        </div>
      <Footer/>
    </div>
  )
}

export default Wrapper;