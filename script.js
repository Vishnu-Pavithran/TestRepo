// let js = 3;

// if (js === 3) alert(5 + 6);

// let myFirstJob = "teacher";
// console.log(myFirstJob);

// let country = "India";
// let continent = "Asia";
// let population = 200;

// console.log(country);
// console.log(typeof continent);
// console.log(population);

// const age = 1997 - 1993;
// const ageff = 2000 - 1993;
// console.log(age, ageff);

// /* Test 1 - Write your code below. Good luck! 🙂 */

// const massMark = 78;
// const heightMark = 1.69;

// const massJohn = 92;
// const heightJohn = 1.95;

// const BMIMark = massMark / heightMark ** 2;
// const BMIJohn = massJohn / (heightJohn * heightJohn);

// console.log(BMIMark);
// console.log(BMIJohn);

// const markHigherBMI = BMIMark > BMIJohn;
// console.log(markHigherBMI);

// console.log("just a regular string");

// console.log("string \n with \n multiple \n line");

// console.log(`String
// with
// backtick
// multi
// line`);

// const age = 9;
// const isEnoughAge = age >= 18;
// const yearsLeft = 18 - age;
// if (age >= 18) {
//   console.log("Sara can Drive 🚗");
// } else {
//   console.log(`❌ Sara is too young, she can wait for (${yearsLeft}) years.`);
// }

// const favourite = Number(prompt("what is your favourite number"));

// console.log(favourite);
// console.log(typeof favourite);

// if (favourite === 25) {
//   console.log("25 is a number");
// }

// console.log(3 + 7);

// if else start
// const age = 55;
// age >= 18
//   ? console.log("sara can drive")
//   : console.log("anyone else can drive");

// if (age >= 18) {
//   console.log("sara can drive");
// } else {
//   console.log("anyone else can drive");
// }
// if else end

///Tip Calculator Start

// const bill = 275;
// let tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// console.log(tip);
// console.log(`Final Bill is ${bill + tip} Your tip is ${tip}`);

///Tip Calculator End

///Fruit Processor

// function fruitProcessor(apples, oranges) {
//   const juice = `Juice with ${apples} apples and ${oranges} Oranges`;
//   return juice;
// }

// console.log(fruitProcessor(3, 2));
// console.log(fruitProcessor(8, 10));
///Fruit Processor end

//Arrow function start
//Arrow function end

// function greet(name, secondname) {
//   return `Hello, ${name} ${secondname}`;
// }

// console.log(greet("Vishnu", "pavithran"));
// console.log(greet("Vipin", "pavithran"));
// console.log(greet("Ajitha", "pavithran"));
///

// const yearsUntilRetirement = (birthYear, firstName) => {
//   const age = 2028 - birthYear;
//   const retirement = 65 - age;

//   return `${firstName} retires in ${retirement} years`;
// };

// function yearsUntilRetirement(birthYear, firstName) {
//   const age = 2025 - birthYear;
//   const retirement = 65 - age;
//   return `${firstName} retires in ${retirement} years`;
// }

// console.log(yearsUntilRetirement(1993, "Jishnu"));
// console.log(yearsUntilRetirement(1996, "Don"));

// function multiply(a1, a2) {
//   return a1 * a2;
// }

// const result = multiply(6, 5);
// document.getElementById("test").innerHTML = result;

// console.log(multiply(5, 5));
// console.log(typeof result);
// console.log(typeof multiply(5, 5));

// const calcAverage = (score1, score2, score3) => {
//   const averagScore = (score1 + score2 + score3) / 3;
//   return averagScore;
// };

// const scoreDolphins = calcAverage();

// console.log(calcAverage(44, 23, 71));

// const scoreDolphins = averagScore;
// const scoreKoalas = averagScore;

// const checkWinner = (scoreDolphins, scoreKoalas) =>{

// }

// const friends = ["vishnu", "harish", "devan"];
// console.log(friends[(0, 1)]);

/////////

const calcAverage = (score1, score2, score3) => {
  const averagScore = (score1 + score2 + score3) / 3;
  return averagScore;
};

const scoreDolphins = calcAverage(44, 23, 71);
const scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);

const checkWinner = (scoreDolphins, scoreKoalas) => {
  return scoreDolphins <= scoreKoalas(console.log("scoreKoalas wins"));
};
