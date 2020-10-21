import React from 'react';

const Cbuttons = (props) => {
  return (
    <button className="cal-button--actual" id={props.id}>
      {props.func}
    </button>
  )
}

export default Cbuttons;
