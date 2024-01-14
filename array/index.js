const numbers = [5, 2, 8, 10, 9, 4, 3, 5, 20, 25, 5];
const lowestNumber = findLowestNumber(numbers);
const result = findHighestNumber(numbers);
console.log(`The lowest number is: ${lowestNumber}`);
console.log(`The highest number is: ${result}`);

const x = 5;
const occurrences = countOccurrences(numbers, x);
console.log(`The number ${x} appears ${occurrences} times in the array.`);


function findLowestNumber(arr) {
  if (!Array.isArray(arr) || arr.length === 0) {
    return undefined;
  }
  const sortedArray = [...arr].sort((a, b) => a - b);
  return sortedArray[0];
}

function findHighestNumber(numbers) {
  if (!Array.isArray(numbers) || numbers.length === 0) {
    return "Invalid input. Please provide a non-empty array of numbers.";
  }

  let highestNumber = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > highestNumber) {
      highestNumber = numbers[i];
    }
  }

  return highestNumber;
}

function countOccurrences(arr, num) {
  const count = arr.reduce((acc, currentNum) => {
    if (currentNum === num) {
      return acc + 1;
    }
    return acc;
  }, 0);

  return count;
}

