import formatNumber from 'numeral';
import React from 'react';
import operators from '../logic/Operators';
import inputRows from '../logic/Input';
import './css/Calculator.css';

const evaluate = (input, prev, setOutput) => {
  const func = String(input).replace('÷', '/');
  // return new Function("return " + func)();
  try {
    // eslint-disable-next-line
    setOutput(input.trim() ? Number(eval(func)).toFixed(3) : 0);
  } catch (e) {
    setOutput(prev);
    return null;
  }
  return evaluate;
};
class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      output: '',
    };
  }

  handleClick = (key) => {
    const { input } = this.state;
    const { output } = this.state;
    let next = input;
    if (key === '=') {
      next = input;
    } else if (key === 'del') {
      next = input.slice(0, input.length - 1).trimEnd();
    } else {
      next = (
        operators.includes(key) ? [input, ' ', key, ' '] : [input, key]
      ).join('');
    }

    evaluate(next, output, (output) => {
      this.setState((prev) => ({ ...prev, input: next, output }));
    });
    // setInput(next);
  };

  render() {
    const { input } = this.state;
    const { output } = this.state;
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
                      onClick={() => this.handleClick(input)}
                    >
                      {input === 'del' ? <>&larr;</> : input}
                    </button>
                  </div>
                ))}
              </div>
            ))}
          </div>

          <div className="operators_row">
            {operators.map((operator) => (
              <div key={operator}>
                <button
                  type="button"
                  onClick={() => this.handleClick(operator)}
                >
                  {operator}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
