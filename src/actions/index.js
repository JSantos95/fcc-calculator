import { NUMBER, OP, CLEAR, DEC, EQ } from './actionTypes';

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

export const decimalPoint = (func) => {
  return {
    type: DEC,
    payload: {
      func: func
    }
  }
}

export const equals = (func) => {
  return{
    type: EQ,
    payload: {
      func: func
    }
  }
}
