import formatNumber from 'numeral';
<<<<<<< HEAD:src/components/Routes/Calculator.js
import React from 'react';
import operators from '../../logic/Operators';
import inputRows from '../../logic/Input';
import lastBtns from '../../logic/LastBtns';
=======
import React, { useState } from 'react';
import operators from '../logic/Operators';
import inputRows from '../logic/Input';
>>>>>>> main:src/components/Calculator.js
import './css/Calculator.css';

const evaluate = (input, prev, setOutput) => {
  const func = String(input).replace('÷', '/');
  try {
    // eslint-disable-next-line
    setOutput(input.trim() ? Number(eval(func)).toFixed(3) : 0);
  } catch (e) {
    setOutput(prev);
    return null;
  }
  return evaluate;
};
function Calculator() {
  const [{ input, output }, setState] = useState({
    input: '',
    output: '',
  });

  const handleClick = (key) => {
    let next = input;
    if (key === '=') {
      next = output;
    } else if (key === 'del') {
      next = input.slice(0, input.length - 1).trimEnd();
    } else {
      next = (
        operators.includes(key) ? [input, ' ', key, ' '] : [input, key]
      ).join('');
    }

    evaluate(next, output, (output) => {
      setState((prev) => ({ ...prev, input: next, output }));
    });
  };

<<<<<<< HEAD:src/components/Routes/Calculator.js
  render() {
    const { input } = this.state;
    const { output } = this.state;
    return (
      <div className="calc_container">
        <div className="screen">
          <div className="input_screen">
            {input || <span className="blink">_</span>}
          </div>
          <div className="output_screen">{formatNumber(output).format('0,00')}</div>
        </div>

        <div className="keypad">
          <div className="input_rows">
            <div className="input_btns">
              {inputRows.map((row, index) => (
                <div key={`row-${index - 1}`}>
                  {row.map((input) => (
                    <div key={input} className="btns">
                      <button
                        type="button"
                        onClick={() => this.handleClick(input)}
                      >
                        {input === 'del' ? <>&larr;</> : input}
                      </button>
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="btns_flex">
              {lastBtns.map((lastBtns) => (
                <div key={lastBtns} className="last_btns">
                  <button
                    type="button"
                    onClick={() => this.handleClick(lastBtns)}
                  >
                    {lastBtns}
=======
  return (
    <div className="container">
      <div className="screen">
        <h6 className="input_screen">{input || <span className="blink">_</span>}</h6>
        <p className="output_screen">{formatNumber(output).format('0,00')}</p>
      </div>

      <div className="keypad">
        <div className="input_rows">
          {inputRows.map((row, index) => (
            <div key={`row-${index - 1}`}>
              {row.map((input) => (
                <div key={input}>
                  <button
                    type="button"
                    onClick={() => handleClick(input)}
                  >
                    {input === 'del' ? <>&larr;</> : input}
>>>>>>> main:src/components/Calculator.js
                  </button>
                </div>
              ))}
            </div>
<<<<<<< HEAD:src/components/Routes/Calculator.js
          </div>

          <div className="operators_row">
            {operators.map((operator) => (
              <div key={operator} className="operators">
                <button
                  type="button"
                  onClick={() => this.handleClick(operator)}
                >
                  {operator}
                </button>
              </div>
            ))}
          </div>
=======
          ))}
        </div>

        <div className="operators_row">
          {operators.map((operator) => (
            <div key={operator}>
              <button
                type="button"
                onClick={() => handleClick(operator)}
              >
                {operator}
              </button>
            </div>
          ))}
>>>>>>> main:src/components/Calculator.js
        </div>
      </div>
    </div>
  );
}

export default Calculator;
