////////////////////////////////////////// Variable declaration: No 1

const firstName = 'Salmat';
const lastName = 'Muritala';
const country = 'Nigeria';
const city = 'Ilorin';
const age = '23';
const isMarried = 'false';
const year = '2025';

//////////////////////////////////// Checking data types (typeof)

console.log(typeof firstName);
console.log('10' === 10);
console.log(parseInt('9.8') == 10);

////////////////////////////////// 3 js statements providing truthy value

console.log('10' == 10);
console.log(10 / 10 == 1 && 20 == 20);
console.log(400 / 8 == 50 || 8 - 5 == 6);

///////////////////////////////// 3 js statements providing falsy value

console.log('10' === 10);
console.log(100 / 10 === 1 && 20 === 20);
console.log(40 / 8 == 50 || 8 - 5 == 6);

////////////////////////////////// Confirming the result of the ffg results without using console.log
4 > 3 && 10 < 12; //true
4 > 3 && 10 > 12; //false
4 > 3 || 10 < 12; //true
4 > 3 || 10 > 12; //true
!(4 > 3); //false
!(4 < 3); //true
!false; //true
!(4 > 3 && 10 < 12); //false
!(4 > 3 && 10 > 12); //true
!(4 === '4'); //true

///////////////////////////////confirming result using console.log
console.log(4 > 3 && 10 < 12); //true
console.log(4 > 3 && 10 > 12); //false
console.log(4 > 3 || 10 < 12); //true
console.log(4 > 3 || 10 > 12); //true
console.log(!(4 > 3)); //false
console.log(!(4 < 3)); //true
console.log(!false); //true
console.log(!(4 > 3 && 10 < 12)); //false
console.log(!(4 > 3 && 10 > 12)); //true
console.log(!(4 === '4')); //true

/////////////////////////// Script that prompt user to enter the base and height of a triangle

let base = parseFloat(prompt('Enter the base of a triangle:'));
let height = parseFloat(prompt('Enter the height of a triangle:'));

let area = 0.5 * base * height;

alert(
	`The area of a triangle with base of ${base} and height of ${height} = ${area}`
);

///////////////////////// Checking the legality of driving
let userYear = parseFloat(prompt('Enter the year you were born:'));
const now = 2025;

if (now - userYear >= 18) {
	alert(`You are ${now - userYear}. You are old enough to drive`);
} else {
	alert(
		`You are ${now - userYear}. You will be allowed to drive after ${
			18 - (now - userYear)
		} years`
	);
}

////////////////////////////// Variable Declaration
let challenge = '30 Days Of Javascript';

/////////////////////////////// Change to uppercase
console.log(challenge.toUpperCase());
console.log(challenge.toLowerCase());

let firstWord = challenge.slice(0, 2);
console.log(firstWord);

let PhraseSliced = challenge.slice(3);
console.log(PhraseSliced);

console.log(challenge.includes('script'));

console.log(challenge.indexOf('a'));

console.log(challenge.lastIndexOf('a'));

let sentence =
	'You cannot end a sentence with because because because is a conjuction';
console.log(sentence.indexOf('because'));

console.log(challenge.startsWith('3'));

console.log(challenge.endsWith('Javascript'));

const randNum = Math.floor(Math.random() * 100 + 1);
console.log(randNum);

/////////////////////////// Using IF & TERNARY operator
const a = 20;
const b = 20;

//IF
if (a > b) {
	console.log('a is greater than b');
} else {
	console.log('a is less than b');
}

//TERNARY
let result = a > b ? 'a is greater than b' : 'a is less than b';
console.log(result);

// ////////////////////////////// Score assigning to students
const studentScore = 10;
let studentGrade = '';

if (studentScore >= 80 && studentScore <= 100) {
	studentGrade = 'A';
} else if (studentScore >= 70 && studentScore <= 89) {
	studentGrade = 'B';
} else if (studentScore >= 60 && studentScore <= 69) {
	studentGrade = 'C';
} else if (studentScore >= 50 && studentScore <= 59) {
	studentGrade = 'D';
} else if (studentScore >= 0 && studentScore <= 49) {
	studentGrade = 'F';
} else {
	studentGrade = 'Invalid score';
}

console.log(`Your grade is: ${studentGrade}`);
