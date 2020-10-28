/*
checks if an operator was just entered
allows an "-" to be added after another operator
but not two operator ex. 8 + - - 7
*/
export const isOperator = (arr, oper) => {
  if(arr.length === 0) {
    return false;
  }

  const val = arr[arr.length-1];
  const val2 = arr[arr.length-2];

  if(oper === '-') {
    if(typeof val === 'string' && typeof val2 !== 'string'){
      return false;
    }
  }

  if (val === 'x' || val === '+' || val === '/' || val === '-') {
    return true;
  } else {
    return false;
  }
}

//makes sure other operator don't overwrite negative operator
export const isANegative = (arr) => {
  if(arr.length === 1 && arr[0] === '-'){
    return true;
  }
  if(arr[arr.length-1] === '-' && typeof arr[arr.length-2] === 'string'){
    return true;
  }
  return false;
}

//new array of value that has its last index cut off
export const trim = (arr) => {
  return arr.slice(0, arr.length-1);
}

//
export const newDecimal = (arr) => {
  if(arr.length === 0){
    return true;
  }

  let latestInput = arr[arr.length-1];
  if(typeof latestInput === 'string'){
    return true;
  }
}

export const noDecimal = (arr) => {
  for (var i = arr.length-1; i > 0; i--) {
    if(typeof arr[i] === 'string'){
      if(arr[i] === '.'){
        return false;
      } else {
        return true;
      }
    }
  }
  return true;
}
