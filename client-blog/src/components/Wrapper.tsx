import React from 'react';
import { Aside, Navbar, Footer } from '.';

type WrapperProps = {
    children: React.ReactNode;
}

const Wrapper = (props: WrapperProps)=>{
  return(
    <div>
      <Navbar/>
        <div className='flex justify-between'>
          <Aside/>
            <main className='h-[100vh] pt-4 w-full'>
              {props.children}
            </main>
        </div>
      <Footer/>
    </div>
  )
}

export default Wrapper;