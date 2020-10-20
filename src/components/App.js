import React from 'react';
import Cbuttons from './Cbuttons';
import {numberArray, operationArray} from './buttonArrays';

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

const App = () => {
  return (
    <div className="cal">
      <div className="cal-buttons">
        {funcButtons}
        {numButtons}
      </div>
    </div>
  )
}

export default App;
