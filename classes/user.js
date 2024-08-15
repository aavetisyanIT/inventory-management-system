class User {
	constructor(firstName, lastName) {
		this.firstName = firstName;
		this.lastName = lastName;
	}

	get fullName() {
		return `${this.firstName} ${this.lastName}`;
	}

	set fullName(input) {
		const fullNameArr = input.split(' ');
		this.firstName = fullNameArr[0];
		this.lastName = fullNameArr[1];
	}
}

const myUser = new User('Joe', 'Doe');
myUser.fullName = 'Tom Cruse';
console.log(myUser.fullName);
