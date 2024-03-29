/**
 * An array A consisting of N integers is given. The dominator of array A is the value that occurs in more than half of the elements of A.

For example, consider array A such that

 A[0] = 3    A[1] = 4    A[2] =  3
 A[3] = 2    A[4] = 3    A[5] = -1
 A[6] = 3    A[7] = 3
The dominator of A is 3 because it occurs in 5 out of 8 elements of A (namely in those with indices 0, 2, 4, 6 and 7) and 5 is more than a half of 8.

Write a function

function solution(A);

that, given an array A consisting of N integers, returns index of any element of array A in which the dominator of A occurs. The function should return −1 if array A does not have a dominator.

For example, given array A such that

 A[0] = 3    A[1] = 4    A[2] =  3
 A[3] = 2    A[4] = 3    A[5] = -1
 A[6] = 3    A[7] = 3
the function may return 0, 2, 4, 6 or 7, as explained above.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [0..100,000];
each element of array A is an integer within the range [−2,147,483,648..2,147,483,647].
 */

const solution = (A = []) => {
  const newArray = A.filter(
    (value, index, array) => array.indexOf(value) === index
  );
  //   console.log({ newArray });

  const elementsCounter = {};

  newArray.forEach((element) => {
    elementsCounter[element] = 0;
  });

  //   console.log({ elementsCounter });

  A.forEach((element) => {
    elementsCounter[element] = elementsCounter[element] + 1;
  });

  //   console.log({ elementsCounter });
  //   get the max

  let maxOcurrences = 0;
  for (const key in elementsCounter) {
    maxOcurrences = Math.max(maxOcurrences, elementsCounter[key]);
  }
  let elementsWithMaxOcurrences = 0;
  let valueWithMaxOcurrences = 0;
  for (const key in elementsCounter) {
    if (elementsCounter[key] === maxOcurrences) {
      valueWithMaxOcurrences = key;
      elementsWithMaxOcurrences++;
    }
  }

  //   console.log({
  //     elementsCounter,
  //     maxOcurrences,
  //     elementsWithMaxOcurrences,
  //     valueWithMaxOcurrences,
  //   });
  if (elementsWithMaxOcurrences === 1 && maxOcurrences > A.length / 2) {
    return A.indexOf(Number(valueWithMaxOcurrences));
  }

  return -1;
};

console.log(solution([3, 4, 3, 2, 3, -1, 3, 3]));
console.log(solution([1, 2, 3]));
console.log(solution([1, 1, 1, 1, 2, 2, 2, 3]));
