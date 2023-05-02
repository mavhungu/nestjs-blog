import React from 'react';
import { Search } from '.';
import { RiSearchLine } from 'react-icons/ri';

const Aside = ()=>{
  return (
    <div className='hidden lg:flex flex-col w-1/5 h-[100vh] sticky top-0'>
      <div className='mx-2'>
        <Search />
        <div className="">
          <div className="bg-primary-600 flex justify-between items-center py-4">
            <p className="text-white center ml-2">Main Aside</p>
            <RiSearchLine size={15} className='mr-3'/>
          </div>

          <div className='relative flex items-center justify-start mt-2 border-b border-gray-200 pb-3 space-y-3 space-x-4 w-full'>
            <img src='https://images.unsplash.com/photo-1537498425277-c283d32ef9db?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y29tcHV0ZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60' alt='me' className='w-10 rounded ml-2 h-14' />
            <div className='flex justify-start items-start flex-col space-y-2'>
              <p className='text-base font-semibold leading-4 text-left text-gray-800'>Trying image circle</p>
              <p className='text-sm leading-5 text-gray-600'>Mavhungu Ronewa</p>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Aside;