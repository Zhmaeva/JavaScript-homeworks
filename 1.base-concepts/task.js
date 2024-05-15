"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  
  // Вычисляем дискриминант.
  let d = b ** 2 - 4 * a * c;  
  
  // Если дискриминант меньше нуля, то корней нет (пустой массив).
  if (d < 0) {
    return arr;
  }

  // Если дискриминант равен нулю, то корень один.
  if (d === 0) {
    let x = -b / (2 * a);
    arr.push(x);
  }

  // Если дискриминант больше нуля, то существует два решения уравнения.
  if (d > 0) {
    let x1 = (-b + Math.sqrt(d)) / (2 * a);
    let x2 = (-b - Math.sqrt(d)) / (2 * a);
    arr.push(x1, x2);
  }

  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let percentPerMonth = percent / 100 / 12;
  let creditBody = amount - contribution;
  let payment = creditBody * (percentPerMonth + (percentPerMonth / (((1 + percentPerMonth) ** countMonths) - 1)));
  let totalAmount = payment * countMonths;
  return +totalAmount.toFixed(2);
}
