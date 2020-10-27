import { NUMBER, OP, CLEAR, DEC, EQ } from '../actions/actionTypes';
import { isOperator, trim, isANegative } from './helperFunctions';

const calValue = (value = [], action) => {
  switch(action.type) {
    case NUMBER:
      if(typeof value[value.length-1] === 'number') { //replaces the last num with itself plus the new number added to the end
        return [...trim(value), ((value[value.length-1]*10) + action.payload.num)];
      } else {
        return [...value, action.payload.num];
      }
    case OP:
      if((value.length === 0 & action.payload.func !== "-") || isANegative(value)) {
        return value;
      }
      if (isOperator(value, action.payload.func)) { //new operator replaces the last one unless its "-"
        return [...trim(value), action.payload.func];
      } else {
        return [...value, action.payload.func];
      }
    case CLEAR:
      return value = [];
    case DEC:
      return value;
    case EQ:
      return value;
    default:
      return value;
  }
}

export default calValue;
