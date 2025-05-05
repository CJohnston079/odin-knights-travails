import Node from "./Node.js";
import Queue from "./Queue.js";

class Knight {
	constructor() {
		this._moves = [
			[1, 2],
			[2, 1],
			[-1, 2],
			[-2, 1],
			[1, -2],
			[2, -1],
			[-1, -2],
			[-2, -1],
		];
	}

	isOnBoard([x, y]) {
		return x >= 0 && x < 8 && y >= 0 && y < 8;
	}

	travail(start, end) {
		const isValidCoordinate = ([x, y]) => {
			const isNumber = Number.isInteger(x) && Number.isInteger(y);
			const isOnBoard = x >= 0 && x < 8 && y >= 0 && y < 8;
			return isNumber && isOnBoard;
		};

		const invalidCoords = [];

		if (!isValidCoordinate(start)) {
			invalidCoords.push(`start: [${start}]`);
		}

		if (!isValidCoordinate(end)) {
			invalidCoords.push(`end: [${end}]`);
		}

		if (invalidCoords.length) {
			const errorMessage = `Invalid coordinate${invalidCoords.length > 1 ? "s" : ""}:`;
			throw new Error(`${errorMessage} ${invalidCoords.join(", ")}`);
		}

		const queue = new Queue();
		const visited = new Set();

		queue.enqueue(new Node(start));

		while (!queue.isEmpty()) {
			const current = queue.dequeue();
			const position = current.position.join(",");

			if (position === end.join(",")) {
				return { moves: current.path.length - 1, path: current.path };
			}

			if (visited.has(position)) {
				continue;
			}

			visited.add(position);

			for (const [dx, dy] of this._moves) {
				const next = [current.position[0] + dx, current.position[1] + dy];

				if (this.isOnBoard(next)) {
					queue.enqueue(new Node(next, current.path));
				}
			}
		}

		return null;
	}
}

export default Knight;
