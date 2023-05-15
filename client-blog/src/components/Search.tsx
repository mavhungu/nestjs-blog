import React,{ useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CgSearch } from 'react-icons/cg';

const Search = ()=> {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');

  const submitSearch =()=> {
    if(search === '') return;
    navigate(`/blog-post/search/${search}`);
    setSearch('');
  }
  return (
    <div className='flex justify-start items-center py-7 relative'>
      <input onChange={(e)=>setSearch(e.target.value)} value={search} className='text-sm leading-none text-left text-gray-600 px-4 py-3 w-full border rounded border-gray-300 outline-none' type='text' name='search' placeholder='Search' />
      <CgSearch size={24} height={24} className='absolute right-3 z-10 cursor-pointer' onClick={()=>submitSearch()} />
    </div>
  )
}

export default Search;