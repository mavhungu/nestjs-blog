import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from './login'
import Register from './register'
import { Dashboard } from './pages/Dashboard'

const Index = () => {
  return (
    <Routes>
      <Route path={'/'} element={<Login />} />
      <Route index element={<Login />} />
      <Route path={"register"} element={<Register/>} />
      <Route path={"dashboard"} element={<Dashboard/>} />
    </Routes>
  )
}
export default Index;