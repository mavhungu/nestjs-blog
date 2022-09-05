import React,{useState} from 'react';
import {MdManageSearch} from 'react-icons/md'

const Aside = ()=>{
  const [search, setSearch] = useState('')
  const submitSearch =()=>{
    //e.preventdefault();
    console.log(search);
    setSearch('')
  }
  return (
    <div className='col-md-2 col-lg-2 d-md-block aside' id='aside'>
      <div className='position-sticky pt-3'>
        <div className="input-group mb-3 search">
          <input type={'text'} className="form-control" value={search} name='searchInput' onChange={(e)=>setSearch(e.target.value)}/>
          <button onClick={()=>submitSearch()} className="btn btn-primary"><i className="fa fa-search" aria-hidden="true"><MdManageSearch size={30}/></i>Search</button>
        </div>
      </div>
    </div>
  )
}
export default Aside;