import fs from 'fs';

const asyncReadFile = filePath => {
	return new Promise(function (resolve, reject) {
		fs.readFile(filePath, 'utf-8', (err, data) => {
			if (err) {
				return reject(err);
			}
			resolve(data);
		});
	});
};

asyncReadFile('./test.txt')
	.then(data => {
		console.log(data);
		return asyncReadFile('./test.txt');
	})
	.then(data => console.log(data))
	.catch(err => console.log(err));
