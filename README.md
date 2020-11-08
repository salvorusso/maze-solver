# maze-solver
A-Maze-ingly Retro Route Puzzle

This program will output a valid route one could follow to collect all specified items within a map. 
The map is a json description of set of rooms with allowed path and contained object. 
This is also a simple implementation of a [bfs algorithm](https://en.wikipedia.org/wiki/Breadth-first_search).

### How to Build
`docker build -t maze-solver -f Dockerfile . `

### Usage
Local Usage:

`node app.js -m ./map/map2.json  -s 4 -o 'Knife' 'PottedPlant' 'Pillow'`

Using Docker:

` docker run -v $(pwd):/mnt maze-solver:1.0.0 ./scripts/run.sh -m ./map/map.json -s 2 -o Knife PottedPlant`
