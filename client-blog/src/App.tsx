import React from 'react';
import { Routes, Route, } from 'react-router-dom';
import './App.css';
import Ronewa from './ronewa';
import Login from './login'
import Register from './register'
import Admin from './admin/index'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Ronewa/>} />
        <Route index element={<Ronewa />} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path={'/admin'} element={<Admin/>} />
      </Routes>
    </div>
  );
}

export default App;
