import React from 'react';
import { Aside, Navbar } from '.';

type WrapperProps = {
  children: React.ReactNode;
}

const Wrapper = (props: WrapperProps)=>{
  return(
    <div>
      <Navbar/>
        <div className='container mx-auto px-6 flex justify-between overflow-y-hidden'>
          <Aside/>
            <main className='h-[100vh] pt-4 w-full'>
              {props.children}
            </main>
        </div>
    </div>
  )
}

export default Wrapper;