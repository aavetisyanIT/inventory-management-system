import { Edge } from './edge';
import { Vertex } from './vertex';

export class Graph {
	constructor() {
		this.vertices = [];
	}

	addVertex(data) {
		const newVertex = new Vertex(data);
		this.vertices.push(newVertex);
		return newVertex;
	}

	addEdge(vertexOne, vertexTwo) {
		if (vertexOne instanceof Vertex && vertexTwo instanceof Vertex) {
			vertexOne.addEdge(vertexTwo);
			vertexTwo.addEdge(vertexOne);
			return;
		}
		throw new Error('Expected Vertex arguments.');
	}

	print() {
		const vertexList = this.vertices || [];
		vertexList.forEach(vertex => vertex.print());
	}
}
const trainNetwork = new Graph();
const atlantaStation = trainNetwork.addVertex('Atlanta');
const newYorkStation = trainNetwork.addVertex('New York');
trainNetwork.print();
