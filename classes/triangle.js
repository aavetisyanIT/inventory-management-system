class Triangle {
	constructor(a, b) {
		if (!Number.isFinite(a) || a <= 0) {
			throw new Error(`Invalid a: ${a}`);
		}
		if (!Number.isFinite(b) || b <= 0) {
			throw new Error(`Invalid b: ${b}`);
		}
		this.a = a;
		this.b = b;
	}
	getAria() {
		return (this.a * this.b) / 2;
	}
	getHypotenuse() {
		return Math.sqrt(this.a ** 2 + this.b ** 2);
	}
}

const myTry = new Triangle(2, 3);

console.log('====================================');
console.log(myTry.getAria());
console.log('====================================');
