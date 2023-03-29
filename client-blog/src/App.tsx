import React from 'react';
import { Routes, Route, } from 'react-router-dom';
import Blog from './Blog';
import Login from './admin/login'
import Register from './admin/register'

function App() {
  return (
      <Routes>
        <Route path='/' />
        <Route index element={<Blog />} />
        <Route path={'admin'} >
            <Route index element={<Login/>} />
            <Route path="register" element={<Register/>} />
        </Route>
      </Routes>
  );
}

export default App;
