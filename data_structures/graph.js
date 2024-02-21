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

	print() {
		const vertexList = this.vertices || [];
		vertexList.forEach(vertex => vertex.print());
	}
}
