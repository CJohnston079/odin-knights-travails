import Knight from "./src/Knight.js";

const knight = new Knight();

const logResult = res => {
	console.log(`Start: [${res.path[0]}]; end: [${res.path[res.path.length - 1]}]`);
	console.log(`Your knight travailed in ${res.moves} moves! Here's your path:`);
	console.log(...res.path, "\n");
};

logResult(knight.travail([3, 3], [4, 3]));
logResult(knight.travail([5, 6], [2, 2]));
logResult(knight.travail([7, 6], [2, 1]));
logResult(knight.travail([0, 0], [7, 7]));
