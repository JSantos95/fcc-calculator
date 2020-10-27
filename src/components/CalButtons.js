import React from 'react';
import { useDispatch } from 'react-redux';
import {addNumber, addOp, clearAll, decimalPoint, equals} from '../actions';

const CalButtons = (props) => {

  const dispatch = useDispatch();

  const actionCaller = () => {
    if(typeof props.func === 'number'){
      dispatch(addNumber(props.func));
    }else if (props.id === 'clear'){
      dispatch(clearAll());
    }else if (props.id === 'decimal'){
      dispatch(decimalPoint(props.func));
    }else if (props.id === 'equal'){
      dispatch(equals(props.func));
    }else {
      dispatch(addOp(props.func));
    }
  }

  return (
    <button className="cal-button--actual" id={props.id} onClick={actionCaller}>
      {props.func}
    </button>
  )
}

export default CalButtons;
