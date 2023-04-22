import React,{ useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PageNotFound = ()=>{
  const navigate = useNavigate();
  return (
    <div className="flex flex-col justify-center align-center height-[100vh]">
      <p>Page not found - 404</p>
      <button onClick={()=>navigate(-1)}>Return back</button>
    </div>
  )
}

export default PageNotFound;