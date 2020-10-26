import { combineReducers } from 'redux';
import { NUMBER, OP, CLEAR, DEC, EQ } from '../actions/actionTypes';

const isOperator = (arr) => {
  const val = arr.length-1;
  if (val === 'x' || val === '+' || val === '/' || val === '-'){
    return true;
  } else
    return false;
}

const calValue = (value = [0], action) => {
  switch(action.type) {
    case NUMBER:
      if(!isOperator(value)) {
        //replacing the last num with it plus the new number added to the end
        return value.splice(value.length-1, 1, ((value[value.length-1] * 10) + action.payload.num));
      } else {
        return [...value, action.payload.num];
      }
    case OP:
      if (isOperator(value)) {
        //new operator replaces the last one
        return value.splice(value.length-1, 1, action.payload.func);
      } else {
        return [...value, action.payload.func];
      }
    case CLEAR:
      return value = [0];
    default:
      return value;
  }
}

export default combineReducers({
  val: calValue
})
