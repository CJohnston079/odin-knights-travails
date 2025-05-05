# The Odin Project | Knights Travails

This project is a practical application of the Breadth First Search (BFS) algorithm for traversing undirected graphs. The reference used for this project is: [Breadth First Search or BFS for a Graph](https://www.geeksforgeeks.org/breadth-first-search-or-bfs-for-a-graph/).

## About

### Project aims

The project brief can be found here: [Project: Knights Travails | The Odin Project](https://www.theodinproject.com/lessons/javascript-knights-travails).

> Given enough turns, a knight on a standard 8x8 chess board can move from any square to any other square.
>
> The task is to build a function that shows the shortest possible way to get from one square to another.
>
> Each square on [a chess board] is a node (or vertex). A knight’s valid moves from any square represent the edges (or connections) between the vertices. Thus, the problem of finding the shortest path for the knight’s movement becomes a graph traversal problem. The goal is to traverse the graph (the chessboard) to find the shortest route between two nodes (the start and end positions).

## Setup

### Installing dependencies

After cloning the repository, install the project dependencies by running:

```Bash
npm install
```

### Testing

Tests are written in Jest, with Babel configured to allow the use of ES6 modules. To run the testing suite, use:

```Bash
npm test
```

Alternatively, you can watch for changes to the tests or modules using:

```Bash
npm run watch
```

## `Node` class

Returns a new `Node`, representing a two-dimensional coordinate that a `Knight` may be placed on.

### `Node` properties

#### `Node.position`

- The coordinate of the `Node`, which is `[0, 0]` by default.

#### `Node.path`

- The sequence of coordinates that have been travailed before reaching the current `Node` coordinate.
- `Node.path` expects an array of coordinates, which it creates a deep copy of without mutating the input.
- By default, `Node.path` is an empty array.

## `Queue` class

Returns a new `Queue`. `Queue`s are used as a First In, First Out data structure.

### `Queue` properties

#### `Queue._head`

- A pointer to the front-most element in the queue.

#### `Queue._tail`

- A pointer to the rear element of the queue.

#### `Queue._length`

- The number of items in the queue.

### `Queue` methods

#### `Queue.enqueue(item)`

- Adds an item to the rear of the queue.
- Points `Queue._tail` to the new item.
- Increments `Queue._length` by 1.

#### `Queue.dequeue(item)`

- Removes an item from the front of the queue.
- Moves `Queue._head` to point at the next item in the queue.
- Decrements `Queue._length` by 1.
- Throws an error if attempting to dequeue from an empty queue.

#### `Queue.isEmpty()`

- Checks how many items are in the queue, returning `true` if there is at least one item in the queue.

## `Knight` class

Returns a new `Knight` object, representing the movement pattern of the knight piece on an 8 x 8 board.

### `Knight` properties

#### `Knight._moves`

- An array of all the possible ways a knight can move from its current square.

### `Knight` methods

#### `Knight.isOnBoard([x, y])`

- Checks that the current coordinate of the knight is a valid square on an 8 x 8 board.
- Returns true if `x` and `y` are both greater than or equal to `0` and less than `8`, returning `false` otherwise.

#### `Knight.travail(start, end)`

- Returns the least number of moves and the path that a knight may take between two squares on an 8 x 8 board, in the form of an object `{ moves, path }`.
- Uses the BFS algorithm to determine the shortest possible path between `start` and `end`.
- Throws an error if one of both of the `start` and `end` coordinates are invalid.

