import React,{ useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PageNotFound = ()=>{
  const navigate = useNavigate();
  return (
    <div className="min-h-screen lg:p-24 md:py-20 md:px-44 py-324 flex justify-center items-center flex-col-reverse lg:flex-row md:gap-28 gap-16">
      <div className='xl:pt-24 w-full xl:w-1/2 relative pb-12 lg:pb-0'>
        <div className='relative'>
          <div className='absolute'>
            <div className="font-sans">
              <h1 className='my-2 text-grey-800 font-bold text-2xl'>Page not found - 404</h1>
              <p className="my-2 text-grey-800">Sorry fort hat!</p>
              <button className='sm:w-full lg:w-auto my-2 border rounded md py-4 px-8 text-center bg-indigo-600 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-opacity-50' onClick={()=>navigate(-1)}>Return back</button>
            </div>
          </div>
          <div className=''>
            <img src='https://i.ibb.co/G9DC8S0/404-2.png' alt="ibb" />
          </div>
        </div>
      </div>
      <div className='hidden md:block'>
        <img src='https://i.ibb.co/ck1SGFJ/Group.png' alt='ck1' />
      </div>
    </div>
  )
}

export default PageNotFound;