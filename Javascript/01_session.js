// 01. Solution of factorial Number making
// console.log(factorial(5)); // output: 120
// console.log(factorial(0)); // output: 1

function factorial(num) {
  let result = 1;
  for (let i = 1; i <= num; i++) {
    result *= i;
  }
  return result;
}

// 02. Solution of Palindrome word checking
// console.log(isPalindrome("madam")); // output: true
// console.log(isPalindrome("hello")); // output: false

function isPalindrome(str) {
  let revStr = str.split("").reverse().join("");
  let result;
  if (str === revStr) {
    result = true;
  } else {
    result = false;
  }
  return result;
}

// 03. Solution of Finding Maximum Number In an Array
// console.log(findMax([1, 5, 3, 9, 2])); // আউটপুট: 9
// console.log(findMax([-10, -5, -2, -8])); // আউটপুট: -2

function findMax(arr) {
  let max = arr[0];
  for (const item of arr) {
    if (item > max) {
      max = item;
    }
  }
  return max;
}

// 04. Solution of fizzBuzz

function fizzBuzz() {
  const arr = Array.from(Array(100 + 1).keys()).slice(1);
  for (const index of arr) {
    if (index % 5 === 0 || index % 3 === 0) {
      if (index % 3 === 0) console.log("Fizz");
      if (index % 5 === 0) console.log("Buzz");
      if (index % 5 === 0 && index % 3 === 0) console.log("FizzBuzz");
    } else {
      console.log(index);
    }
  }
}

// 05 Solution of Reverse Strings Functions
// console.log(reverseString("hello")); // output: "olleh"
// console.log(reverseString("javascript")); // output: "tpircsavaj"

function reverseString(str) {
  return str.split("").reverse().join("");
}

// 06 Finding min value in the Arr
function findMin(arr) {
  let min = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}
console.log(findMin([39, 32943, 234234, 344, 5, 33, 3]));
