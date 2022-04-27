import React, { Component } from 'react';
import './Calculator.css';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="calc_container">
        <div className="calc_row screen">
          {/* <div className="screen" /> */}
        </div>
        <div className="calc_row">
          <div className="calc_col">AC</div>
          <div className="calc_col">+/-</div>
          <div className="calc_col">%</div>
          <div className="calc_col orange">÷</div>
        </div>
        <div className="calc_row">
          <div className="calc_col">7</div>
          <div className="calc_col">8</div>
          <div className="calc_col">9</div>
          <div className="calc_col orange">X</div>
        </div>
        <div className="calc_row">
          <div className="calc_col">4</div>
          <div className="calc_col">5</div>
          <div className="calc_col">6</div>
          <div className="calc_col orange">-</div>
        </div>
        <div className="calc_row">
          <div className="calc_col">1</div>
          <div className="calc_col">2</div>
          <div className="calc_col">3</div>
          <div className="calc_col orange">+</div>
        </div>
        <div className="calc_row">
          <div className="calc_col_last">0</div>
          <div className="calc_col">.</div>
          <div className="calc_col orange">=</div>
        </div>
      </div>
    );
  }
}

export default Calculator;
