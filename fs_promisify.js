import fs from 'fs';

fs.readFile('./test.txt', 'utf-8', (error, data) => {
	if (error) {
		return console.log('Error', error);
	}
	console.log('Data', data);
});


