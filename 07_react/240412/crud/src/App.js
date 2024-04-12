import React, { useState } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Main from './components/Main';
import Header from './components/layouts/Header';
import About from './components/About';
import Service from './components/Service';
import Product from './components/Product';

function App() {
  return (
      <div className="App">
        <Header></Header>
        <Routes>
          <Route path='/' element={<Main />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/service' element={<Service />}/>
          <Route path='/product' element={<Product />}/>
          <Route path='/product/:id' element={<Product />}/>
        </Routes>
      </div>
    );
}

export default App;
