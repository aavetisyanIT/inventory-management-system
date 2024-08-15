import crypto from 'crypto';
const start = Date.now();

for (let i = 1; i <= 5; i++) {
	crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
		console.log('====================================');
		console.log(`${i}: `, Date.now() - start);
		console.log('====================================');
	});
}
