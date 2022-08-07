/**
 * 1. Triangle
Determine whether a triangle can be built from a given set of edges.
Task Score
100%
Correctness
100%
Performance
100%
Task description
An array A consisting of N integers is given. A triplet (P, Q, R) is triangular if 0 ≤ P < Q < R < N and:

A[P] + A[Q] > A[R],
A[Q] + A[R] > A[P],
A[R] + A[P] > A[Q].
For example, consider array A such that:

  A[0] = 10    A[1] = 2    A[2] = 5
  A[3] = 1     A[4] = 8    A[5] = 20
Triplet (0, 2, 4) is triangular.

Write a function:

function solution(A);

that, given an array A consisting of N integers, returns 1 if there exists a triangular triplet for this array and returns 0 otherwise.

For example, given array A such that:

  A[0] = 10    A[1] = 2    A[2] = 5
  A[3] = 1     A[4] = 8    A[5] = 20
the function should return 1, as explained above. Given array A such that:

  A[0] = 10    A[1] = 50    A[2] = 5
  A[3] = 1
the function should return 0.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [0..100,000];
each element of array A is an integer within the range [−2,147,483,648..2,147,483,647].

2008 - 2025
 */

const solution = (A = []) => {
  let flag = false;
  for (let p = 0; p < A.length; p++) {
    const pValue = A[p];
    for (let q = 0; q < A.length; q++) {
      const qValue = A[q];
      if (p === q) {
        continue;
      }
      for (let r = 0; r < A.length; r++) {
        const rValue = A[r];
        if ((r === p) | (r === q)) {
          continue;
        }
        // console.log({ pValue, qValue, rValue });
        if (0 <= p && pValue < qValue && qValue < rValue && rValue < A.length) {
          if (
            pValue + qValue > rValue ||
            qValue + rValue > pValue ||
            rValue + pValue > qValue
          ) {
            console.log("HEYYYYYYYY", { pValue, qValue, rValue });
            return (flag = true);
          }
        }
      }
    }
  }

  return flag;
};

console.log(solution([10, 2, 5, 1, 8, 20]));
console.log(solution([10, 50, 5, 1]));
