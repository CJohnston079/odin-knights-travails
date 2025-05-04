import { Node } from "../src/Node.js";

describe("Node", () => {
	const position = [2, 3];
	const path = [
		[0, 0],
		[1, 2],
	];

	let node;

	beforeEach(() => {
		node = new Node(position, path);
	});

	it("should initialise with a position and default path", () => {
		const newNode = new Node(position);
		expect(newNode.position).toEqual(position);
		expect(newNode.path).toEqual([position]);
	});
	it("should build a path based on previous path and current position", () => {
		expect(node.position).toEqual(position);
		expect(node.path).toEqual([...path, position]);
	});
	it("should not mutate the original path array", () => {
		node.path[0][0] = 99;
		expect(path[0][0]).toBe(0);
	});
});
