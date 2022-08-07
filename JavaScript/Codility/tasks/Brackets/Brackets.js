/**
 * 1. Brackets
Determine whether a given string of parentheses (multiple types) is properly nested.
Task Score
100%
Correctness
100%
Performance
100%
Task description
A string S consisting of N characters is considered to be properly nested if any of the following conditions is true:

S is empty;
S has the form "(U)" or "[U]" or "{U}" where U is a properly nested string;
S has the form "VW" where V and W are properly nested strings.
For example, the string "{[()()]}" is properly nested but "([)()]" is not.

Write a function:

function solution(S);

that, given a string S consisting of N characters, returns 1 if S is properly nested and 0 otherwise.

For example, given S = "{[()()]}", the function should return 1 and given S = "([)()]",
 the function should return 0, as explained above.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [0..200,000];
string S consists only of the following characters: "(", "{", "[", "]", "}" and/or ")".

2056    
 */

const solution = (S = "") => {
  // "(", "{", "[", "]", "}" and/or ")"
  const array = S.split("");
  let openA = 0; // ()
  let openB = 0; // []
  let openC = 0; // {}

  let flag = 1;

  array.forEach((element) => {
    if (element === "(") openA++;
    if (element === ")") openA--;
    if (element === "[") openB++;
    if (element === "]") openB--;
    if (element === "{") openC++;
    if (element === "}") openC--;

    if (openA < 0 || openB < 0 || openC < 0) return (flag = 0);
  });

  return flag;

  //
  //   if (array.find("(") | array.find(")")) {
  //     let opened = 0;
  //     let firstOpenPos =
  //   }
};

console.log(solution("{[()()]}"));
console.log(solution("[)()"));
console.log(solution("(([)])"));
console.log(solution(""));
