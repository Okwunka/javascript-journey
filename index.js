let a = 823;
let b = 7482;
let c = 54156;
let d = 516;
let e = 546;
let f = 98;
let g = 7491;
let h = 3541;
let i = 8423;
let j = 1561;

const k = 10;

const average = (a + b + c + d + e + f + g + h + i + j) / k;
console.log(average);

const sumOfSquare = ((a - average)**2 + (b - average)**2 + (c - average)**2 + (d - average)**2 + (e - average)**2 + (f - average)**2 + (g - average)**2 + (h - average)**2 + (i - average)**2 + (j - average)**2);
console.log(sumOfSquare);

const variance = sumOfSquare / k;
console.log(variance);