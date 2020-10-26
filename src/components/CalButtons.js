import React from 'react';

const CalButtons = (props) => {
  return (
    <button className="cal-button--actual" id={props.id}>
      {props.func}
    </button>
  )
}

export default CalButtons;
