import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from './login'
import Register from './register'

const Index = () => {
  return (
    <Routes>
      <Route path={'/'} element={<Login />} />
      <Route index element={<Login />} />
      <Route path={"register"} element={<Register/>} />
    </Routes>
  )
}
export default Index;