import React from 'react';
import './App.css'
import { Route, Routes } from 'react-router-dom';
import Success from './Success';
import Signup from './Signup.js'
import Login from './login.js';
import Setpassword from './Setpassword';
function App() {
  return (
    <div>
      <h2>bhushan</h2>
    <Routes>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/' element={<Signup/>}/>
      <Route path='/Login/success' element={<Success/>}/>
      <Route path='/Login/setpassword' element={<Setpassword/>}/> 
    </Routes>
    </div>
  );
}

export default App;
