// check odd even
function checkOddEven(num) {
  let evenOrOdd = "";
  if (num % 2 === 0) {
    evenOrOdd = "Even";
  } else {
    evenOrOdd = "Odd";
  }
  return evenOrOdd;
}

// console.log(checkOddEven(10)); // আউটপুট: Even
// console.log(checkOddEven(7)); // আউটপুট: Odd

// sum all array item

function sumArray(arr) {
  let sum = 0;
  for (const item of arr) {
    sum += item;
  }
  return sum;
}

// console.log(sumArray([1, 2, 3, 4, 5])); // আউটপুট: 15
// console.log(sumArray([-1, -2, -3, 3])); // আউটপুট: -3

function findNumber(arr, num) {
  let output = null;
  if (arr.includes(num)) {
    output = true;
  } else {
    output = false;
  }
  return output;
}

// console.log(findNumber([1, 2, 3, 4, 5], 3)); // আউটপুট: true
// console.log(findNumber([1, 2, 3, 4, 5], 6)); // আউটপুট: false

function fibonacci(n) {
  let result = [0, 1];
  for (let i = 2; i < n; i++) {
    result.push(result[i - 1] + result[i - 2]);
  }
  return result;
}

// console.log(fibonacci(10)); // আউটপুট: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34

function isPrime(num) {
  if (num <= 1) return false;
  if (num <= 3) return true;
  if (num % 2 === 0 || num % 3 === 0) return false;
  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }
  return true;
}

// console.log(isPrime(7)); // আউটপুট: false
// console.log(isPrime(10)); // আউটপুট: true

/* function countVowels(str) {
  let count = 0;
  for (const char of str) {
    const uppercaseChar = char.toUpperCase();
    if (
      uppercaseChar === "A" ||
      uppercaseChar == "E" ||
      uppercaseChar == "I" ||
      uppercaseChar == "O" ||
      uppercaseChar == "U"
    )
      count++;
  }
  return count;
} */

function countVowels(str) {
  let count = 0;
  const vowel = "aeiouAEIOU";
  for (const char of str) {
    if (vowel.includes(char)) {
      count++;
    }
  }
  return count;
}

// console.log(countVowels("hello world")); // আউটপুট: 3
// console.log(countVowels("javascript")); // আউটপুট: 3

function findDuplicates(arr) {
  //   let seen = new Set();
  //   let findDuplicates = new Set();
  //   for (const num of arr) {
  //     if (seen.has(num)) {
  //       findDuplicates.add(num);
  //     } else {
  //       seen.add(num);
  //     }
  //   }
  const seen = [];
  const findDuplicates = [];
  for (let i = 0; i < arr.length; i++) {
    if (seen.includes(arr[i])) {
      findDuplicates.push(arr[i]);
    } else {
      seen.push(arr[i]);
    }
    console.log(arr[i]);
  }
  return findDuplicates;
}

// console.log(findDuplicates([1, 1, 1, 2, 3, 4, 2, 5, 6, 3])); // আউটপুট: [2, 3]

function randomNumber(min, max) {
  return Math.round(Math.random() * (max - min + 1)) + min;
}

// console.log(randomNumber(1, 10)); // আউটপুট: ১ থেকে ১০ এর মধ্যে যেকোনো সংখ্যা
// console.log(randomNumber(50, 100)); // আউটপুট: ৫০ থেকে ১০০ এর মধ্যে যেকোনো সংখ্যা

function sortArray(arr) {
  return arr.sort((a, b) => a - b);
}

// console.log(sortArray([5, 3, 8, 1, 2])); // আউটপুট: [1, 2, 3, 5, 8]

function findUnique(arr) {
  const unique = [];
  for (const num of arr) {
    if (arr.indexOf(num) === arr.lastIndexOf(num)) {
      unique.push(num);
    }
  }
  return unique;
}

// console.log(findUnique([1, 2, 3, 4, 3, 2, 1, 5])); // আউটপুট: [4, 5]

function firstNthElm(arr, defVal = 1) {
  const newArr = [];
  for (let i = 0; i < defVal; i++) {
    newArr.push(arr[i]);
  }
  return newArr;
}

// console.log(firstElm([2, 234, 234234], 2));

function lastNthElm(arr, defVal = 1) {
  const newArr = [];
  //   const revArr = arr.reverse();
  for (let i = 0; i < defVal; i++) {
    newArr.push(arr[arr.length - 1 - i]);
  }
  return newArr;
}

// console.log(lastNthElm([2, 234, 234234], 2));

function freqNum(arr) {
  const newObj = {};
  arr.forEach((elm) => {
    if (!newObj.hasOwnProperty(elm)) {
      newObj[elm] = 1;
    } else {
      newObj[elm]++;
    }
  });

  let maxCount = 0;
  let mostRepeated = null;
  for (const key in newObj) {
    if (newObj[key] > maxCount) {
      maxCount = newObj[key];
      mostRepeated = key;
    }
  }
  return mostRepeated;
}
// console.log(freqNum([22, 22, 2, 2, 2, 2, 3, 3, 3, 3, 3, 99, 21, 88]));

function shuffleArr(arr) {
  let arrLength = arr.length;
  while (arrLength > 0) {
    arrLength--;
    const randomNumber = Math.floor(Math.random() * arrLength);
    const temp = arr[arrLength];
    arr[arrLength] = arr[randomNumber];
    arr[randomNumber] = temp;
  }
  return arr;
}
// console.log(shuffleArr([1, 2, 3, 4, 5, 6]));

function arrReunion(arr1, arr2) {
  return [...new Set(arr1.concat(arr2))];
}
console.log(arrReunion([1, 2, 4], [2, 3, 5]));
