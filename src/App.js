import React from 'react';
import './App.css';
import Login from './Login';
import Hello from './Hello';
import { BrowserRouter as Switch, Route, Router, Link } from 'react-router-dom';
import { ReactDOM } from 'react-dom';
import { Routes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';


const App = () => {

  return (
    <div className='app'>
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<Login />}/>
          <Route path="/autho" element={<Hello/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App