/*
ASSIGNMENT RULES
- All the answers must be in JavaScript
- The solution must be pushed to the repository and be available for the tutors by the end of the day
- You can ask for tutor's help
- You can google / use StackOverflow BUT we suggest you to use just the material provided
*/

/* EXERCISE 1
Write a function "area" which receives 2 parameters (l1,l2) and calculate the area of the rectangle.
*/

const area = function (l1, l2) {
  return l1 * l2;
};

console.log(area(3, 4));

/* EXERCISE 2
Write a function "crazySum" which receives two given integers. If the two values are same, then returns triple their sum.
*/

let crazySum = (x, y) => {
  if (x === y) {
    return (x + y) * 3;
  } else {
    return x + y;
  }
};

console.log(crazySum(5, 5));
console.log(crazySum(3, 5));

/* EXERCISE 3
Write a function "crazyDiff" that computes the 
absolute difference between a given number and 19. 
Returns triple their absolute difference if 
the specified
number is greater than 19.
*/

function crazyDiff(y) {
  if (y <= 19) {
    return y - 19;
  } else {
    return (y - 19) * 3;
  }
}

console.log(crazyDiff(50));

/* EXERCISE 4
Write a function "boundary" which accept an integer N and returns true if N is within 20 and 100 (included) or equal to 400.
*/

function boundary(int) {
  return (20 < int && int <= 100) || int === 400 ? true : false;
}

console.log(boundary(500));

/* EXERCISE 5
Write a function "strivify" which accepts a string S. Add to S "Strive" in front of a given string, if the given string begins with "Strive" then return the original string.
*/

function strivify(S) {
  const result = S + 'trive';

  return result;
}
console.log(strivify('S'));
console.log(strivify('strive'));

/* EXERCISE 6
Write a function "check3and7" which accepts a positive number and check if it is a multiple of 3 or a multiple of 7.
HINT: Module Operator
*/

function check3and7(x) {
  if (Math.floor(parse.int(x)) % 7 === 0) {
    return 'ok';
  } else if (Math.floor(parse.int(x)) % 3 === 0) {
    return 'ciao';
  }
}

console.log(5);

/* EXERCISE 7
Write a function "reverseString" to reverse programmatically a given string (es.: Strive => evirtS).
*/

let reverseString = (revS) =>{
  return revS.split("").reverse().join("");
  
};

console.log(reverseString("Ciao"));
/* EXERCISE 8
Write a function "upperFirst" to capitalize the first letter of each word of a given string passed as parameter
*/

function upperFirst (x) {
  
return x[0].toUpperCase()+ x.substring(1);
}
console.log(upperFirst("hola"))
/* EXERCISE 9
Write a function "cutString" to create a new string without the first and last character of a given string.
*/

function cutString(x) {
  return x.substring(1, x.length - 1);
}

console.log(cutString("Buongiorno"))

/* EXERCISE 10
Write a function "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10
*/

const giveMeRandom0 = (n) => {
  let arrayN = [];
  for (i = 0; i <= n; i++) {
    arrayN.push(Math.floor(Math.random() * 10 + 0));
  }
  return arrayN;
};
console.log(giveMeRandom0(6));

/* WHEN YOU ARE FINISHED
Commit and push the code to your personal GitHub repository and share the link to your commit with your tutor.
*/
