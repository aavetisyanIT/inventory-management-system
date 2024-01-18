class Circle {
	constructor(radius) {
		this.radius = radius;
	}

	get diameter() {
		return this.radius * 2;
	}
}

const myCircle = new Circle(3);
console.log(myCircle.diameter);
