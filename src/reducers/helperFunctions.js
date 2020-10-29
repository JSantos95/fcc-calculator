/**************** Reducer HELPER  **************/
//new array of value that has its last index cut off
export const trim = (arr) => {
  return arr.slice(0, arr.length-1);
}

export const isStringANum = (val) => {
  return (!isNaN(Number(val))) ? true : false;
}
/**************** EQUAL HELPER  **************/
//new array of value that has its last index cut off

const toDec = (num) => {
  let newNum = num;
  while(newNum > 1){
    newNum /= 10;
  }
  return newNum;
}

export const doMath = (arr) => {
  //base cases
  switch(arr.length){
    case 0:
      return [];
    case 1:
      return (typeof arr[0] === 'number') ? [arr[0].toString()] : [];
    case 2:
      if(arr[0] ==='-') return [(0 - arr[1]).toString()];
      break;
    case 3:
      if((arr[1]) ==='.') return [(arr[0] + (toDec(arr[2]))).toString()];
      break;
    default:
      break;
  }

  //must be an array of 3 or more
  let op1, op2 , opR, cutArr;

  if(arr[0] === 'string'){
    op1 = 0 - arr[1];
    cutArr = arr.slice(2);
  }else if(arr[1] === '.'){
    op1 = arr[0] + (toDec(arr[2]));
    cutArr = arr.slice(3);
  }else{
    op1 = arr[0];
    cutArr = arr.slice(1);
  }
  opR = cutArr[0];
  cutArr = cutArr.slice(1);
  if(cutArr[0] === 'string'){
    op2 = 0 - cutArr[1];
    cutArr = cutArr.slice(2);
  }else if(cutArr[1] === '.'){
    op2 = cutArr[0] + (toDec(cutArr[2]));
    cutArr = cutArr.slice(3);
  }else{
    op2 = cutArr[0];
    cutArr = cutArr.slice(1);
  }
  console.log("op1: " + op1 + " op2: " + op2 + " opR: " + opR);
  switch(opR){
    case "+":
      op1 += op2;
      if((op1 % 1).toString().length > 4){
        //rounds to 4 decimal places
        op1 = Number(op1.toFixed(4));
      }
      break;
    case "x":
      op1 *= op2;
      if((op1 % 1).toString().length > 4){
        //rounds to 4 decimal places
        op1 = Number(op1.toFixed(4));
      }
      break;
    case "/":
      op1 /= op2;
      if((op1 % 1).toString().length > 4){
        //rounds to 4 decimal places
        op1 = Number(op1.toFixed(4));
      }
      break;
    case "-":
      op1 -= op2;
      if((op1 % 1).toString().length > 4){
        //rounds to 4 decimal places
        op1 = Number(op1.toFixed(4));
      }
      break;
    default:
      console.log("FAIL: operator: " + opR);
  }
  console.log([op1].concat(cutArr))
  return doMath([op1].concat(cutArr));
}

/**************** OPERATION HELPERS  **************/
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

/**************** DECIMAL HELPER  **************/
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
