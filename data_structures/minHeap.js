export class MinHeap {
	constructor() {
		this.heap = [null];
		this.size = 0;
	}

	add(value) {
		console.log(`.. adding ${value}`);
		this.heap.push(value);
		this.size++;
		this.bubbleUp();
		console.log(`added ${value} to heap`, this.heap);
	}

	bubbleUp() {
		let current = this.size;
		while (current > 1 && this.heap[current] < this.heap[getParent(current)]) {
			this.swap(current, getParent(current));
			current = getParent(current);
		}
	}

	heapify() {
		console.log('Heapify');
		let current = 1;
		let leftChild = getLeft(current);
		let rightChild = getRight(current);

		while (this.canSwap(current, leftChild, rightChild)) {
			if (this.exists(leftChild) && this.exists(rightChild)) {
				if (this.heap[leftChild] < this.heap[rightChild]) {
					this.swap(current, leftChild);
					current = leftChild;
				} else {
					this.swap(current, rightChild);
					current = rightChild;
				}
			} else {
				this.swap(current, leftChild);
				current = leftChild;
			}
			leftChild = getLeft(current);
			rightChild = getRight(current);
		}
	}

	swap(a, b) {
		[this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
	}
}

const getParent = current => Math.floor(current / 2);
const getLeft = current => current * 2;
const getRight = current => current * 2 + 1;
