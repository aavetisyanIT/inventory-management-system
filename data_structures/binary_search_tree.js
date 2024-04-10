class BinaryTree {
	constructor(value, depth = 1) {
		this.value = value;
		this.depth = depth;
		this.left = null;
		this.right = null;
	}

	insert(value) {
		if (value < this.value) {
			if (this.left) return this.left.insert(value);
			this.left = new BinaryTree(value, this.depth + 1);
		} else {
			if (this.right) return this.right.insert(value);
			this.right = new BinaryTree(value, this.depth + 1);
		}
	}

	getNodeByValue(value) {
		if (this.value === value) return this;
		if (value < this.value && this.left) return this.left.getNodeByValue(value);
		if (value > this.value && this.right)
			return this.right.getNodeByValue(value);
		return null;
	}

	depthFirstTraversal() {
		if (this.left) this.left.depthFirstTraversal();
		console.log('Value', this.value);
		if (this.right) this.right.depthFirstTraversal();
	}

	breadthFirstTraversal() {
		const result = [];
		const queue = [this];

		while (queue.length) {
			const currentNode = queue.shift();
			result.push(currentNode.value);
			if (currentNode.left) queue.push(currentNode.left);
			if (currentNode.right) queue.push(currentNode.right);
		}

		return result;
	}
}

const bt = new BinaryTree(100);

// insert values to the BinaryTree
bt.insert(50);
bt.insert(125);
bt.insert(75);
bt.insert(25);
bt.insert(55);
console.log(bt);

console.log(bt.breadthFirstTraversal());
