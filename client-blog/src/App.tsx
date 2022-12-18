import React from 'react';
import { Routes, Route, } from 'react-router-dom';
//import './App.css';
import Ronewa from './ronewa';
import Admin from './admin/index';
import Login from './admin/login'
import Register from './admin/register'

function App() {
  return (
    <div className="">
      <Routes>
        <Route path='/' />
        <Route index element={<Ronewa />} />
        <Route path={'admin'} >
        	<Route index element={<Login/>} />
        	<Route path="register" element={<Register/>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
