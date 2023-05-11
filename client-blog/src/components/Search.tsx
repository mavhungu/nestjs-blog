import React,{ useState } from 'react';
import { CgSearch } from 'react-icons/cg';
import axios, { CanceledError } from 'axios';

const Search = ()=> {
  const [search, setSearch] = useState('');
  const [searched, setSearched] = useState('');
  const [error, setError ] = useState('');
  console.log(search)

  const submitSearch =()=> {
    //e.preventDefault();
    
    (()=>{
      const controller = new AbortController();
      axios.get(`http://localhost:5000/api/blog-post/search/${search}`,{ signal: controller.signal})
      .then((res)=>{ 
        setSearched(res.data)
        console.log(search)
        console.log("coming back data :", res);
      })
      .catch((err)=>{
        if(err instanceof CanceledError) return;
          setError(err.message);
          console.log(err.message)
      });
      return ()=> controller.abort();
    })();
    setSearch('');
    console.log(error)
  }
  return (
    <div className='flex justify-start items-center py-7 relative'>
      <input onChange={(e)=>setSearch(e.target.value)} value={search} className='text-sm leading-none text-left text-gray-600 px-4 py-3 w-full border rounded border-gray-300 outline-none' type='text' name='search' placeholder='Search' />
      <CgSearch size={24} height={24} className='absolute right-3 z-10 cursor-pointer' onClick={()=>submitSearch()} />
    </div>
  )
}

export default Search;