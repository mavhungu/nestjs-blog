import React from 'react';
import { Routes, Route, } from 'react-router-dom';
import Blog from './Blog';
import Login from './admin/login'
import Register from './admin/register'
import { Dashboard } from './admin/pages/Dashboard';

function App() {
  return (
    <Routes>
      <Route path='/' />
      <Route index element={<Blog />} />
      <Route path={'admin'} >
        <Route index element={<Login/>} />
        <Route path="register" element={<Register/>} />
        <Route path={"dashboard"} element={<Dashboard/>} />
      </Route>
    </Routes>
  );
}

export default App;
