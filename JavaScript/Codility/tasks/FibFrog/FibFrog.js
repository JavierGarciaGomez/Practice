/**
 * 
 * The Fibonacci sequence is defined using the following recursive formula:

    F(0) = 0
    F(1) = 1
    F(M) = F(M - 1) + F(M - 2) if M >= 2
A small frog wants to get to the other side of a river. The frog is initially located at one bank of the river (position −1) and wants to get to the other bank (position N). The frog can jump over any distance F(K), where F(K) is the K-th Fibonacci number. Luckily, there are many leaves on the river, and the frog can jump between the leaves, but only in the direction of the bank at position N.

The leaves on the river are represented in an array A consisting of N integers. Consecutive elements of array A represent consecutive positions from 0 to N − 1 on the river. Array A contains only 0s and/or 1s:

0 represents a position without a leaf;
1 represents a position containing a leaf.
The goal is to count the minimum number of jumps in which the frog can get to the other side of the river (from position −1 to position N). The frog can jump between positions −1 and N (the banks of the river) and every position containing a leaf.

For example, consider array A such that:

    A[0] = 0
    A[1] = 0
    A[2] = 0
    A[3] = 1
    A[4] = 1
    A[5] = 0
    A[6] = 1
    A[7] = 0
    A[8] = 0
    A[9] = 0
    A[10] = 0
The frog can make three jumps of length F(5) = 5, F(3) = 2 and F(5) = 5.

Write a function:

function solution(A);

that, given an array A consisting of N integers, returns the minimum number of jumps by which the frog can get to the other side of the river. If the frog cannot reach the other side of the river, the function should return −1.

For example, given:

    A[0] = 0
    A[1] = 0
    A[2] = 0
    A[3] = 1
    A[4] = 1
    A[5] = 0
    A[6] = 1
    A[7] = 0
    A[8] = 0
    A[9] = 0
    A[10] = 0
the function should return 3, as explained above.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [0..100,000];
each element of array A is an integer that can have one of the following values: 0, 1.

2025
 */

const solution = (A = []) => {
  const validJumps = [...A];
  let startingPosition = -1;
  let finalPosiiton = A.length - 1;
  let currentPosition = -1;
  const fib = [0, 1];
  let jumps = 0;

  //   add 1 element to array
  validJumps.push(1);
  //   fill the fibonacci shit
  for (i = 2; i <= finalPosiiton; i++) {
    let newNum = fib[i - 2] + fib[i - 1];
    if (newNum > finalPosiiton) break;
    fib[i] = newNum;
  }
};

console.log(solution2([0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0]));

// const solution = (A = []) => {
//     const validJumps = [...A];
//     let startingPosition = -1;
//     let finalPosiiton = A.length;
//     let currentPosition = -1;
//     const fib = [0, 1];
//     let jumps = 0;

//     for (i = 2; i <= finalPosiiton; i++) {
//       let newNum = fib[i - 2] + fib[i - 1];
//       if (newNum > finalPosiiton) break;
//       fib[i] = newNum;
//     }

//     const object = {
//       validJumps,
//       startingPosition,
//       finalPosiiton,
//       currentPosition,
//       fib,
//       jumps,
//     };
//     //   console.log(fib);

//     //   let jumps = 0;
//     if (fib[length] === finalPosiiton) {
//       return 1;
//     }

//     for (i = 0; i <= finalPosiiton; i++) {
//       let possibleJump = fib[i];
//       let isJumpPossible = A[possibleJump - 1];
//       console.log("AAAAAAA", { i, possibleJump, isJumpPossible });
//       // it could be jumped?
//       if (isJumpPossible) {
//         jumps++;
//         currentPosition += possibleJump;

//         // it gets to goal?
//         if (currentPosition === finalPosiiton) {
//           break;
//           // it has jumped
//         } else {
//           // is less than goal?
//           if (currentPosition < finalPosiiton) {
//             // TODO
//             //   call this shit again
//           }

//           // is more than goal: RESTART ALL
//           else {
//             jumps = 0;
//             currentPosition = -1;
//             break;
//           }
//         }
//         //   It couldn't jump
//       } else {
//         jumps = 0;
//         currentPosition = -1;
//       }
//       console.log("BBBBBBB", { possibleJump, currentPosition, jumps });
//     }
//   };
// }
