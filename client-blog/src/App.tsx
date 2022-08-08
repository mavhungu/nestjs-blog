import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Ronewa from './ronewa';
import Login from './login'
import Register from './register'

function App() {
  return (
    <div className="App">
      <header className="">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
      </header>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Ronewa/>}></Route>
          <Route path='/login' element={<Login/>} />
          <Route path='/register' element={<Register/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
