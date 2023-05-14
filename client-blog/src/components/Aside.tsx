import React from 'react';
import { Search } from '.';
import { RiSearchLine } from 'react-icons/ri';

const Aside = ()=>{
  return (
    <div className='hidden lg:flex flex-col w-[25%] h-[100vh] sticky top-0'>
      <div className='mr-2'>
        <Search />
        <div className="">
          <div className="bg-primary-600 flex justify-between items-center py-4">
            <p className="text-white center ml-2">Main Aside</p>
            <RiSearchLine size={15} className='mr-3'/>
          </div>

          <div className='relative flex items-center mt-2 border-b border-gray-200 pb-3 space-y-3 space-x-6 w-full'>
            <img className='w-12 h-12 rounded-full ml-2' src='https://images.unsplash.com/photo-1537498425277-c283d32ef9db?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y29tcHV0ZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60' alt='me' />
            <div className='flex justify-start items-start flex-col'>
              <h3 className='text-base font-semibold leading-7 text-left text-gray-900'>Trying image circle</h3>
              <p className='text-sm leading-6 font-semibold text-indigo-600'>Mavhungu Ronewa</p>
            </div>
          </div>

          <div className="flex items-center gap-x-6 mt-2 border-b border-gray-200 pb-3">
            <img className="h-12 w-12 rounded-full ml-2" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="d" />
            <div>
              <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">Leslie Alexander</h3>
            <p className="text-sm font-semibold leading-6 text-indigo-600">Co-Founder / CEO</p>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Aside;