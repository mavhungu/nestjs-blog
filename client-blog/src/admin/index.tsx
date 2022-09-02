import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from './login'

const Index = ()=>{
  return (
    <div className=''>
      <Routes>
        <Route path={'/'} element={<Login />} />
        <Route index element={<Login />} />
      </Routes>
    </div>
  )
}
export default Index;