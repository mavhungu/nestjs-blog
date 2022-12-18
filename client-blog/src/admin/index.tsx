import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from './login'
import Register from './register'

const Index = () => {
  return (
    <div className=''>
      <Routes>
        <Route path={'/'} element={<Login />} />
        <Route index element={<Login />} />
        <Route path={"register"} element={<Register/>} />
      </Routes>
    </div>
  )
}
export default Index;