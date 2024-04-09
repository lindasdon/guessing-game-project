const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});
if (true) {
	let limit = 0;
	let randomInRange = (min, max) => {
		return min + Math.floor(Math.random() * (max + 1 - min));
	}

	let secretNumber;

	let checkGuess = guess => {
		if (guess > secretNumber) {
			console.log('Too high.');
			return false;
		}
		if (guess < secretNumber) {
			console.log('Too low.');
			return false;
		}
		if (guess === secretNumber) {
			console.log('Correct!');
			return true;
		}
	}

	let askGuess = () => {
		rl.question('Enter a guess:', guess => {
			if(checkGuess(Number(guess))) {
				rl.close();
			} else {
				limit--;
				if (limit === 0) {
					console.log('You lose!');
					rl.close();
				} else {
					askGuess();
				}
			}
		});
	}

	let askLimit = () => {
		rl.question('How many tries do you need?', num => {
			limit = Number(num);
			askGuess();
		});
	}

	let askRange = () => {
		rl.question('Enter a min number:', minStr => {
			rl.question('Enter a max number:', maxStr => {
				let min = Number(minStr); let max = Number(maxStr);
				if(Number(max) >= Number(min)) {
					console.log("I'm thinking of a number between " + min + " and " + max + "...");
					secretNumber = randomInRange(min, max);
					askLimit();
				}
			});
		});
	}

askRange();
}
