class Triangle {
	getAria() {
		return (this.a * this.b) / 2;
	}
	getHypotenuse() {
		return Math.sqrt(this.a ** 2 + this.b ** 2);
	}
}

const myTry = new Triangle();
myTry.a = 3;
myTry.b = 5;

console.log('====================================');
console.log(myTry.getAria());
console.log('====================================');
