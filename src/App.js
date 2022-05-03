import React from 'react';
import Calculator from './components/Calculator';
import Header from './components/Header';
import './Styles.css';

const app = () => (
  <div className="app">
    <Header />
    <div className="main">
      <Calculator />
    </div>
  </div>
);
export default app;
