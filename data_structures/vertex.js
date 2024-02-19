import { Edge } from './edge';

export class Vertex {
	print() {
		const edgeList =
			this.edges.map(edge =>
				edge.weight !== null
					? `${edge.end.data} (${edge.weight})`
					: edge.end.data,
			) || [];

		const output = `${this.data} --> ${edgeList.join(', ')}`;
		console.log(output);
	}
}
