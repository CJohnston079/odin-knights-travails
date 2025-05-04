export class Node {
	constructor(position = [0, 0], path = []) {
		this.position = position;
		this.path = [...path.map(coord => [...coord]), [...position]];
	}
}

export default Node;
