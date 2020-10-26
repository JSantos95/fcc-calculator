import { NUMBER, OP, CLEAR, DEC, EQ } from 'actionTypes';

export const addNumber = (num) => {
  return {
    type: NUMBER,
    payload: {
      num: num
    }
  }
}

export const addOp = (func) => {
  return {
    type: OP,
    payload: {
      func: func
    }
  }
}

export const clearAll = () => {
  return {
    type: CLEAR,
  }
}

export const decimalPoint = () => {
  return {
    type: DEC,
  }
}

export const EQ = (func) => {
  return{
    type: 'CLEAR',
    payload: {
      func: func
    }
  }
}
