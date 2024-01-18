class Circle {
	static allowedColors = new Set(['red', 'green', 'black']);
	constructor(radius, color) {
		this.radius = radius;
		this.setColor(color);
	}

	setColor(newColor) {
		if (Circle.allowedColors.has(newColor)) {
			this._color = newColor;
		} else {
			throw new Error('This color is not allowed');
		}
	}

	get diameter() {
		return this.radius * 2;
	}

	set color(newColor) {
		this.setColor(newColor);
	}
}

const myCircle = new Circle(3, 'red');
myCircle.color = 'red';
console.log(myCircle);
