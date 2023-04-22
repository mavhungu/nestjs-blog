import React from 'react';
import { Routes, Route, } from 'react-router-dom';
import { BlogPost, Home, PageNotFound } from'./pages';
import { Dashboard } from './admin/pages/Dashboard';
import Blog from './Blog';
import Login from './admin/login';
import Register from './admin/register';

function App() {
  return (
    <Routes>
      <Route path='/' />
      <Route index element={<Home />} />
      <Route path='blog-post' element={<BlogPost/>} />
      <Route path={'admin'} >
        <Route index element={<Login/>} />
        <Route path="register" element={<Register/>} />
        <Route path={"dashboard"} element={<Dashboard/>} />
        <Route path="*" element={<PageNotFound/>} />
      </Route>
      <Route path="*" element={<PageNotFound/>} />
    </Routes>
  );
}

export default App;
