import chalk from 'chalk';

export class Logger {
	static defaultMessage = 'Hello World';

	static info(message) {
		console.log(chalk.blue(message));
	}

	static error(message) {
		console.log(chalk.red(message));
	}
}
