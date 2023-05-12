import React from 'react';
import { Routes, Route, } from 'react-router-dom';
import { BlogPost, Home, SearchPost, PageNotFound } from'./pages';
import { Dashboard } from './admin/pages/Dashboard';
import Login from './admin/login';
import Register from './admin/register';

function App() {
  return (
    <Routes>
      <Route path='/' />
      <Route index element={<Home />} />
      <Route path='blog-post'>
        <Route path={':id'} element={<BlogPost/>}/>
        <Route path={'search/:id'} element={<SearchPost/>} />
      </Route>
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
