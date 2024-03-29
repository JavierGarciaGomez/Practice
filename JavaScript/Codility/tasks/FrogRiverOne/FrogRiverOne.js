/**
 * Tasks Details
Easy
1. FrogRiverOne
Find the earliest time when a frog can jump to the other side of a river.

Task description
A small frog wants to get to the other side of a river. The frog is initially located on one bank 
of the river (position 0) and wants to get to the opposite bank (position X+1). 
Leaves fall from a tree onto the surface of the river.

You are given an array A consisting of N integers representing the falling leaves. 
A[K] represents the position where one leaf falls at time K, measured in seconds.

The goal is to find the earliest time when the frog can jump to the other side of the river. 
The frog can cross only when leaves appear at every position across the river from 1 to X 
(that is, we want to find the earliest moment when all the positions from 1 to X are covered by leaves). 
You may assume that the speed of the current in the river is negligibly small, 
i.e. the leaves do not change their positions once they fall in the river.

For example, you are given integer X = 5 and array A such that:

  A[0] = 1
  A[1] = 3
  A[2] = 1
  A[3] = 4
  A[4] = 2
  A[5] = 3
  A[6] = 5
  A[7] = 4
In second 6, a leaf falls into position 5. 
This is the earliest time when leaves appear in every position across the river.

Write a function:

function solution(X, A);

that, given a non-empty array A consisting of N integers and integer X, 
returns the earliest time when the frog can jump to the other side of the river.

If the frog is never able to jump to the other side of the river, the function should return −1.

For example, given X = 5 and array A such that:

  A[0] = 1
  A[1] = 3
  A[2] = 1
  A[3] = 4
  A[4] = 2
  A[5] = 3
  A[6] = 5
  A[7] = 4
the function should return 6, as explained above.

Write an efficient algorithm for the following assumptions:

N and X are integers within the range [1..100,000];
each element of array A is an integer within the range [1..X].

1600-1625
 */

const solution = (X = 0, A = []) => {
  const stepsInSeconds = [];
  let isCrossable = true;
  for (let index = 1; index <= X; index++) {
    let seconds = A.findIndex((element) => index === element);
    if (seconds < 0) {
      return (isCrossable = false);
    }
    stepsInSeconds.push(A.findIndex((element) => index === element));
  }

  if (!isCrossable) {
    return -1;
  }
  return Math.max(...stepsInSeconds);

  // let leaveInEachStep = true;
  // let currentPosition = 1;

  // for(let i; i===X; i++){
  //     if(!A.find(element => element===i)) return leaveInEachStep = false;
  // }
  // if(!leaveInEachStep){
  //     return -1
  // }
};

console.log(solution(5, [1, 3, 1, 4, 2, 3, 5, 4]));
