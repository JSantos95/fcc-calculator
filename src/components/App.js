import React, { useState } from 'react';
import Cbuttons from './Cbuttons';
import '../styles/style.css';
import {numberArray, operationArray} from './buttonArrays';

const App = () => {

  const [value, setValue] = useState(0);

  const funcButtons = operationArray.map((obj) =>
    <Cbuttons
      id={obj.id}
      func={obj.func}
    />
  )
  const numButtons = numberArray.map((obj) =>
    <Cbuttons
      id={obj.id}
      func={obj.num}
    />
  )
  return (
    <div className="cal">
      <div className="cal-board">

        <div className="cal-value">
          {value}
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
