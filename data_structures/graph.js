import { Edge } from './edge';
import { Vertex } from './vertex';

export class Graph {
	print() {
		const vertexList = this.vertices || [];
		vertexList.forEach(vertex => vertex.print());
	}
}
