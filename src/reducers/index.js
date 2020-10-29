import { NUMBER, OP, CLEAR, DEC, EQ } from '../actions/actionTypes';
import { isOperator, trim, isANegative, newDecimal, noDecimal, doMath, isStringANum } from './helperFunctions';

const calValue = (value = [], action) => {
  switch(action.type) {
    case NUMBER:
      if(value.length === 1 && typeof value[0] === 'string' && isStringANum(value[0])){
        return [action.payload.num];
      }else if (typeof value[value.length-1] === 'number') { //replaces the last num with itself plus the new number added to the end
        return [...trim(value), ((value[value.length-1] * 10) + action.payload.num)];
      } else {
        return [...value, action.payload.num];
      }
    case OP:
      if((value.length === 0 & action.payload.func !== "-") || isANegative(value)) {
        return value;
      }
      if(value.length === 1 && typeof value[0] === 'string' && isStringANum(value[0])){
        return [Number(value[0]), action.payload.func];
      } else
      if (isOperator(value, action.payload.func)) { //new operator replaces the last one unless its "-"
        return [...trim(value), action.payload.func];
      } else {
        return [...value, action.payload.func];
      }
    case CLEAR:
      return value = [];
    case DEC:
      if(value.length === 1 && typeof value[0] === 'string' && isStringANum(value[0])){
        return [Number(value[0]), '.', 0];
      } else if(newDecimal(value)) {
        return [...value, 0, '.', 0];
      } else if (noDecimal(value)) {
        return [...value, '.', 0];
      } else {
        return value;
      }
    case EQ:
      return doMath(value);
    default:
      return value;
  }
}

export default calValue;
