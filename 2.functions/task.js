function getArrayParams(...arr) {
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;
  let avg = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
    sum += arr[i];
  }
  avg = Number((sum / arr.length).toFixed(2));

  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  const sum = arr.reduce(function (resultSum, currentElement) {
    return resultSum + currentElement
  }, 0)

  return sum;
}

function differenceMaxMinWorker(...arr) {
  if(arr.length === 0) {
    return 0;
  }

  let min = Math.min(...arr);
  let max = Math.max(...arr);
  let difference = max - min;
  
  return difference;
}

function differenceEvenOddWorker(...arr) {
  if(arr.length === 0) {
    return 0;
  }

  let sumEvenElement = 0;
  let sumOddElement = 0;
  for (let i= 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
    } else {
      sumOddElement += arr[i];
    }
  }

  return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
  if(arr.length === 0) {
    return 0;
  }

  let sumEvenElement = 0;
  let countEvenElement = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
      countEvenElement += 1;
    }
  }

  return sumEvenElement / countEvenElement;
}

function makeWork (arrOfArr, func) {

}
