import Knight from "../src/Knight.js";

describe("Knight", () => {
	let knight;

	beforeEach(() => {
		knight = new Knight();
	});

	describe("initialisation", () => {
		it("should initialise with the correct moveset", () => {
			const knight = new Knight();
			const moveset = [
				[1, 2],
				[2, 1],
				[-1, 2],
				[-2, 1],
				[1, -2],
				[2, -1],
				[-1, -2],
				[-2, -1],
			];
			expect(knight.moves).toEqual(moveset);
		});
	});
	describe("isOnBoard(x, y)", () => {
		const getCoords = () => [Math.floor(Math.random() * 8), Math.floor(Math.random() * 8)];
		it("returns true if 'x' and 'y' are valid board coordinates", () => {
			const validCoords = getCoords();
			expect(knight.isOnBoard(validCoords)).toBe(true);
		});
		it("returns false if 'x' and 'y' are invalid board coordinates", () => {
			const invalidCoords = getCoords().map(coord => coord + 8);
			expect(knight.isOnBoard(invalidCoords)).toBe(false);
		});
	});
	describe("travail(start, end)", () => {
		it("returns an object with the properties 'moves(number)' and 'path(arr)'", () => {
			expect(knight.travail([0, 0], [1, 2])).toEqual(
				expect.objectContaining({
					moves: expect.any(Number),
					path: expect.arrayContaining([expect.any(Array), expect.any(Array)]),
				})
			);
		});
		it("finds the shortest path between 'start' and 'end", () => {
			expect(knight.travail([3, 3], [4, 3]).moves).toBe(3);
		});
		it("returns the path of nodes visited, including 'start' and 'end'", () => {
			const path = knight.travail([3, 3], [4, 3]).path;
			expect(path.length).toBe(4);
			expect(path[0]).toEqual([3, 3]);
			expect(path[3]).toEqual([4, 3]);
		});
	});
});
