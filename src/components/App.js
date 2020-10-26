import React, { useState } from 'react';
import CalButtons from './CalButtons';
import '../styles/style.css';
import {numberArray, operationArray} from './buttonArrays';

const App = () => {

  const [history, setHistory] = useState([0]);

  const funcButtons = operationArray.map((obj) =>
    <CalButtons
      id={obj.id}
      func={obj.func}
    />
  )
  const numButtons = numberArray.map((obj) =>
    <CalButtons
      id={obj.id}
      func={obj.num}
    />
  )

  return (
    <div className="cal">
      <div className="cal-board">

        <div className="cal-value" id="display">
          <div className="cal-value--array">{history}</div>
          <div className="cal-value--current">{history[0]}</div>
        </div>

        <div className="cal-buttons">
          {funcButtons}
          {numButtons}
        </div>

      </div>
    </div>
  )
}

export default App;
