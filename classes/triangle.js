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

const myColorTri = new ColorTriangle(2, 3, 'red');

console.log(myColorTri.logColor());
