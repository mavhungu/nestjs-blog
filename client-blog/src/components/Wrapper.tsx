import React from 'react';
import { Aside, Navbar, Footer } from '.';

type WrapperProps = {
  children: React.ReactNode;
}

const Wrapper = (props: WrapperProps)=>{
  return(
    <div>
      <Navbar/>
        <div className='container mx-auto px-6 pb-8 flex justify-between overflow-y-hidden'>
          <Aside/>
            <main className='pt-4 w-full'>
              {props.children}
            </main>
        </div>
        <Footer/>
    </div>
  )
}

export default Wrapper;