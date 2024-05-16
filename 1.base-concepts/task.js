"use strict"
function solveEquation(a, b, c) {
  const arr = [];
  
  // Вычисляем дискриминант.
  const d = b ** 2 - 4 * a * c;  
  
  // Если дискриминант меньше нуля, то корней нет (пустой массив).
  if (d < 0) {
    return arr;
  }

  // Если дискриминант равен нулю, то корень один.
  if (d === 0) {
    const x = -b / (2 * a);
    arr.push(x);
  }

  // Если дискриминант больше нуля, то существует два решения уравнения.
  if (d > 0) {
    const x1 = (-b + Math.sqrt(d)) / (2 * a);
    const x2 = (-b - Math.sqrt(d)) / (2 * a);
    arr.push(x1, x2);
  }

  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  const percentPerMonth = percent / 100 / 12;
  const creditBody = amount - contribution;
  const payment = creditBody * (percentPerMonth + (percentPerMonth / (((1 + percentPerMonth) ** countMonths) - 1)));
  const totalAmount = payment * countMonths;
  return +totalAmount.toFixed(2);
}
