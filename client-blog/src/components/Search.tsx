import React,{ useState } from 'react';
import { MdManageSearch } from 'react-icons/md'

const Search = (e:SyntheticEvent)=>{
  const [search, setSearch] = useState('')
  const submitSearch =()=>{
    e.preventdefault();
    console.log(search);
    setSearch('')
  }
  return (
    <div className='flex justify-start items-center py-7 relative mt-4 pt-4'>
      <input className='text-sm leading-none text-left text-gray-600 px-4 py-3 w-full border rounded border-gray-300 outline-none' type='text' placeholder='Search' />
      <MdManageSearch size={24} height={24} className='absolute right-3 z-10 cursor-pointer' onClick={(e)=>submitSearch(e)}/>
    </div>
  )
}
export default Search;