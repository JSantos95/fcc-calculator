import React from 'react';

const Cbuttons = (props) => {
  return (
    <div className="cal-buttons--val">
      <button id={props.id}>
        {props.func}
      </button>
    </div>
  )
}

export default Cbuttons;
