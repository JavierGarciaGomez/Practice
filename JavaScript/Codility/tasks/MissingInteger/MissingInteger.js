/**
 * CodeCheck Report: trainingPBJ5G7-2QB
Test Name:
Summary

1. MissingInteger
Find the smallest positive integer that does not occur in a given sequence.

Write a function:

function solution(A);

that, given an array A of N integers, returns the smallest positive integer (greater than 0) 
that does not occur in A.

For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.

Given A = [1, 2, 3], the function should return 4.

Given A = [−1, −3], the function should return 1.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [1..100,000];
each element of array A is an integer within the range [−1,000,000..1,000,000].
Copyright 2009–2022 by Codility Limited. All Rights Reserved. Unauthorized copying, publication or disclosure prohibited.

1545-1557
 */

const solution = (A = []) => {
  const minNumber = Math.max(1, Math.min(...A));
  const maxNumber = Math.max(...A);

  console.log({ minNumber, maxNumber, A });

  let foundNum = 0;

  for (let index = minNumber; index < A.length; index++) {
    if (!A.find((element) => element === index)) {
      return (foundNum = index);
    }
    if (index === A.length - 1) return (foundNum = maxNumber + 1);
  }
  console.log({ maxNumber });
};

console.log(solution([1, 3, 6, 4, 1, 2]));
console.log(solution([1, 2, 3]));
console.log(solution([-1, -3]));
