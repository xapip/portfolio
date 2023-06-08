import React from 'react'
import { Routes, Route } from 'react-router-dom';

import {Header} from './components/Header';
import Home from "./components/pages/Home"
import About from './components/pages/About';
import Works from './components/pages/Works';


import "./style/style.scss"

function App() {
  return (
    <div>
      <div className='theme'>
        <Header />
        <div className='container'>
          <Routes>
            <Route path='/' element={<Home  />} />
            <Route path='/about-me' element={<About />} />
            <Route path='/my-works' element={<Works />} />
  
            <Route path='*' element={<h1>Not found</h1>}/>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
