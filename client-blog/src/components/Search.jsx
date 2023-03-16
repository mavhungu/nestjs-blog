import React,{ useState } from 'react';
import { MdManageSearch } from 'react-icons/md'

const Search = ()=>{
  const [search, setSearch] = useState('')
  const submitSearch =()=>{
    //e.preventdefault();
    console.log(search);
    setSearch('')
  }
  return (
    <div className='hidden md:block col-md-2 col-lg-2 d-md-block border-r-2 w-1/5 border-3 rounded h-[100vh]' id='aside'>
      <div className='position-sticky'>
        <div className="input-group mb-3 search flex justify-center items-center mt-4 pt-4 px-4">
          <input type={'text'} className="w-[100%] rounded-md border border-gray-300 px-3 py-2.5 placeholder-gray-300 shadow shadow-gray-100 focus:border-gray-500 focus:outline-none" value={search} name='searchInput' onChange={(e)=>setSearch(e.target.value)}/>
          <button onClick={()=>submitSearch()} className="btn btn-primary">
            <i className="fa fa-search" aria-hidden="true">
              <MdManageSearch size={30}/>
            </i>
          </button>
        </div>
      </div>
    </div>
  )
}
export default Search;