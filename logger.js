import chalk from 'chalk';

export function logInfo(message) {
	console.log(chalk.blue(message));
}

export function logError(message) {
	console.log(chalk.red(message));
}

export const defaultMessage = 'Hello World';
