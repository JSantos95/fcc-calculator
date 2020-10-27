import React from 'react';
import CalButtons from './CalButtons';
import Output from './Output';
import '../styles/style.css';
import {numberArray, operationArray} from './buttonArrays';

const App = () => {

  const funcButtons = operationArray.map((obj) =>
    <CalButtons
      key={obj.id}
      id={obj.id}
      func={obj.func}
    />
  )
  const numButtons = numberArray.map((obj) =>
    <CalButtons
      key={obj.id}
      id={obj.id}
      func={obj.num}
    />
  )

  return (
    <div className="cal">
      <div className="cal-board">

        <Output />

        <div className="cal-buttons">
          {funcButtons}
          {numButtons}
        </div>

      </div>
    </div>
  )
}

export default App;
