import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Calculator from './components/Routes/Calculator';
import Home from './components/Routes/Home';
import About from './components/Routes/About';
import Quotes from './components/Routes/Quotes';
import './Styles.css';

const app = () => (
  <div className="app">
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="calculator" element={<Calculator />} />
      <Route path="quotes" element={<Quotes />} />
      <Route path="about" element={<About />} />
    </Routes>
  </div>
);
export default app;
