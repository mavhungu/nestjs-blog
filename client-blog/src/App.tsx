import React from 'react';
import { Routes, Route, } from 'react-router-dom';
import './App.css';
import Ronewa from './ronewa';
import Admin from './admin/index';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Ronewa/>} />
        <Route index element={<Ronewa />} />
        <Route path={'/admin'} element={<Admin/>} />
      </Routes>
    </div>
  );
}

export default App;
