/*

1. PermMissingElem
Find the missing element in a given permutation.

Task description
An array A consisting of N different integers is given. The array contains 
integers in the range [1..(N + 1)], which means that exactly one element is missing.

Your goal is to find that missing element.

Write a function:

function solution(A);

that, given an array A, returns the value of the missing element.

For example, given array A such that:

  A[0] = 2
  A[1] = 3
  A[2] = 1
  A[3] = 5
the function should return 4, as it is the missing element.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [0..100,000];
the elements of A are all distinct;
each element of array A is an integer within the range [1..(N + 1)].
*/

// 715-727

const solution = (A = []) => {
  A.sort();
  console.log({ A });

  let testNum = Math.min(...A) + 1;
  console.log(testNum);
  let solution = 0;

  for (i = 0; i < A.length - 1; i++) {
    console.log({ testNum, arr: A[i + 1] });

    if (A[i + 1] !== testNum) {
      return (solution = testNum);
    }
    testNum++;
  }
  return solution;
};

console.log(solution([12, 13, 11, 15, 16, 17, 18]));
