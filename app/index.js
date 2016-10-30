const calc = require('./calc')
const readline = require('readline');


const numbersToAdd = [
	3,
	4,
	10,
	2
];

const result = calc.sum(numbersToAdd)
console.log(`The result is ${result}`)

const interface = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

console.log('before first question');
interface.question('Enter first number to add:', answer => {
	let firstNumber, secondNumber;
	firstNumber = +answer;
console.log('before second question');
	interface.question('Enter second number to add:', answer => {
		secondNumber = +answer;

		const result2 = firstNumber + secondNumber;
		console.log(`The result is ${result2}`);

		interface.close();
	});
});

console.log('Enter second number to add:');

