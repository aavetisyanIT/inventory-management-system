class BinaryTree {
	constructor(value, depth = 1) {
		this.value = value;
		this.depth = depth;
		this.left = null;
		this.right = null;
	}

	insert(value) {
		if (value < this.value) {
			if (this.left) {
				return this.left.insert(value);
			}
			this.left = new BinaryTree(value, this.depth + 1);
		} else {
			if (this.right) {
				return this.right.insert(value);
			}
			this.right = new BinaryTree(value, this.depth + 1);
		}
	}
}
