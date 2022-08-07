/**
 * You are given an array A consisting of N integers.

For each number A[i] such that 0 ≤ i < N, we want to count the number of elements of the array 
that are not the divisors of A[i]. We say that these elements are non-divisors.

For example, consider integer N = 5 and array A such that:

    A[0] = 3
    A[1] = 1
    A[2] = 2
    A[3] = 3
    A[4] = 6
For the following elements:

A[0] = 3, the non-divisors are: 2, 6,
A[1] = 1, the non-divisors are: 3, 2, 3, 6,
A[2] = 2, the non-divisors are: 3, 3, 6,
A[3] = 3, the non-divisors are: 2, 6,
A[4] = 6, there aren't any non-divisors.
Write a function:

class Solution { public int[] solution(int[] A); }

that, given an array A consisting of N integers, returns a sequence of integers representing the amount of non-divisors.

Result array should be returned as an array of integers.

For example, given:

    A[0] = 3
    A[1] = 1
    A[2] = 2
    A[3] = 3
    A[4] = 6
the function should return [2, 4, 3, 2, 0], as explained above.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [1..50,000];
each element of array A is an integer within the range [1..2 * N].

// 1733-
 */

const solution = (A = []) => {
  const newArray = [];

  for (let i = 0; i < A.length; i++) {
    const el1 = A[i];
    newArray[i] = 0;
    for (let j = 0; j < A.length; j++) {
      const el2 = A[j];
      if (el1 % el2 !== 0) {
        newArray[i]++;
      }
    }
  }
  return newArray;
};

// let newAr = [];
// for (i = 1; i < 20000; i++) {
//   newAr.push(i);
// }
console.log(solution([3, 1, 2, 3, 6]));
// console.log(solution(newAr));

const solutionB = (A) => {
  // write your code in JavaScript (Node.js 4.0.0)

  //   result array
  var result = [];
  var max = 0;
  var i = 0;
  var arr = JSON.parse(JSON.stringify(A));

  //   SORTING
  arr.sort(function (a, b) {
    return a - b;
  });

  //   Defines max with the hightest value
  max = arr[arr.length - 1];
  //   collection of booleans (index is unique number from 0 to max) , true if they are in the array
  var divs = [];
  //   collection of numbers (index is unique number from 0 to max), number of times they appear
  var totals = [];

  // loops through all the numbers in between and stores them in divs (falses) and totals (0)
  for (i = 0; i <= max; i++) {
    divs[i] = false;
    totals[i] = 0;
  }

  //   console.log({ A, arr: [...arr], max, divs: [...divs], totals: [...totals] });

  //   loops through the array to fill divs and totals
  for (i = 0; i < A.length; i++) {
    var total = 0;
    var j = 0;
    var k = 0;

    divs[A[i]] = true;
    totals[A[i]]++;
  }
  console.log({ A, arr: [...arr], max, divs: [...divs], totals: [...totals] });

  //   looops through the array
  for (i = 0; i < A.length; i++) {
    // loops again until A[i] * k is less or equal than max. So in the first round 3*2(6) is equal to max, so it wont run
    for (k = 2; A[i] * k <= max; k++) {
      // if the number exists in the array
      if (divs[A[i] * k]) {
        totals[A[i] * k]++;
      }
    }
  }

  console.log({ A, arr: [...arr], max, divs: [...divs], totals: [...totals] });

  //   push the totals
  for (i = 0; i < A.length; i++) {
    result.push(A.length - totals[A[i]]);
  }

  return result;
};

console.log(solutionB([3, 1, 2, 3, 6]));
