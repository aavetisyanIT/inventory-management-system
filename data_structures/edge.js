import { Vertex } from './vertex';

export class Edge {
	constructor(data) {
		this.data = data;
		this.edges = [];
	}

	addEdge(vertex) {
		if (vertex instanceof Vertex) {
			const edge = new Edge(this, vertex);
			this.edges.push(edge);
		} else {
			throw new Error('non-vertex');
		}
	}
	print() {
		const edgeList = this.edges.map(edge =>
			edge.weight !== null
				? `${edge.end.data} (${edge.weight})`
				: edge.end.data,
		);

		const output = `${this.data} --> ${edgeList.join(', ')}`;
		console.log(output);
	}
}
