import React from 'react';
import { connect } from 'react-redux';

const Output = (props) => {
  return (
    <div className="cal-value" id="display">
      <div className="cal-value--array">{props.history}</div>
      <div className="cal-value--current">{props.currentVal}</div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    currentVal: state[state.length-1],
    history: state
  }
}

export default connect(mapStateToProps)(Output);
