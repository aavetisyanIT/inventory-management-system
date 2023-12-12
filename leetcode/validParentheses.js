const isValid = function (string) {
	const parenthesesArr = string.split('');
	const stack = [];

	for (let char of parenthesesArr) {
		switch (char) {
			case '(':
				stack.push(')');
				break;
			case '{':
				stack.push('}');
				break;
			case '[':
				stack.push(']');
				break;
			default:
				if (char !== stack.pop()) {
					return false;
				}
		}
	}
	return stack.length === 0;
};
