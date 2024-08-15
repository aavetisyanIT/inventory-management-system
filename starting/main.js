const prompt = require('prompt-sync')({ sigint: true });

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field {
	constructor(field) {
		this.field = field;
		this.currentPositionCoordinates = { row: 0, column: 0 };
		this.hasWon = false;
		this.hasLost = false;
	}

	startGame() {
		while (true) {
			if (this.hasWon) return console.log('You have won!');
			if (this.hasLost) return console.log('You have lost!');
			this.promptMoveDirections();
			this.print();
			const nextMove = this.askForNextMove();
			if (!nextMove) {
				this.hasLost = true;
				return console.log('Use correct moves');
			}
			this.updateCurrentPosition(nextMove);
		}
	}

	print() {
		this.field[this.currentPositionCoordinates.row].splice(
			this.currentPositionCoordinates.column,
			1,
			pathCharacter,
		);

		this.field.forEach(row => console.log(row.join('')));
	}

	askForNextMove() {
		const move = prompt('Which way? ');

		if (move === 'l' || move === 'r' || move === 'd' || move === 'u')
			return move;
		return null;
	}

	updateCurrentPosition(move) {
		if (move === 'r') {
			this.currentPositionCoordinates.column += 1;
			this.checkGameIsOver();
		}
		if (move === 'l') {
			this.currentPositionCoordinates.column -= 1;
			this.checkGameIsOver();
		}
		if (move === 'd') {
			this.currentPositionCoordinates.row += 1;
			this.checkGameIsOver();
		}
		if (move === 'u') {
			this.currentPositionCoordinates.row -= 1;
			this.checkGameIsOver();
		}
	}

	promptMoveDirections() {
		console.log('Use "l" to go Left');
		console.log('Use "r" to go Right');
		console.log('Use "d" to go Down');
		console.log('Use "u" to go Up');
	}

	checkGameIsOver() {
		console.log(
			'this.currentPositionCoordinates.row',
			this.currentPositionCoordinates.row,
		);
		if (
			this.field.length - 1 < this.currentPositionCoordinates.row ||
			!this.field[this.currentPositionCoordinates.row][
				this.currentPositionCoordinates.column
			]
		) {
			this.hasLost = true;
			return;
		}
		if (
			this.field[this.currentPositionCoordinates.row][
				this.currentPositionCoordinates.column
			] === hole
		) {
			this.hasLost = true;
			return;
		}
		if (
			this.field[this.currentPositionCoordinates.row][
				this.currentPositionCoordinates.column
			] === hat
		) {
			this.hasWon = true;
			return;
		}
	}
}

const myField = new Field([
	[fieldCharacter, fieldCharacter, hole],
	[fieldCharacter, hole, fieldCharacter],
	[fieldCharacter, hat, fieldCharacter],
]);

myField.startGame();
