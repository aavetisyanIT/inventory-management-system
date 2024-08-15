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

class ColorTriangle extends Triangle {
	constructor(a, b, color) {
		super(a, b);
		this.color = color;
	}

	logColor() {
		console.log(this.color);
	}
}

class Book {
	constructor(title, author, year) {
		this.title = title;
		this.author = author;
		this.year = year;
	}
}

class Ebook extends Book {
	constructor(title, author, year, fileSize) {
		super(title, author, year);
		this.fileSize = fileSize;
	}

	download() {
		console.log(`${this.title} ${this.fileSize}`);
	}
}

class ArrayUtils {
	constructor() {
		throw new Error('ArrayUtils cannot be instantiated.');
	}
	static average(numArray) {
		if (!numArray.length) throw new Error('Array cannot be empty.');
		return numArray.reduce((a, b) => a + b) / numArray.length;
	}
	static max(numArray) {
		if (!numArray.length) throw new Error('Array cannot be empty.');
		return numArray.reduce(
			(largest, current) => (current > largest ? current : largest),
			numArray[0],
		);
	}
}

console.log(ArrayUtils.average([1, 32, 3]));
console.log(ArrayUtils.max([1, 32, 3]));
