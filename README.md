# maze-solver
A-Maze-ingly Retro Route Puzzle

### How to Build
`docker build -t maze-solver -f Dockerfile . `

### Usage
Local Usage:

`node app.js -m ./map/map2.json  -s 4 -o 'Knife' 'Potted Plant' 'Pillow'`

Using Docker:

` docker run -v $(pwd):/mnt maze-solver:1.0.0 ./scripts/run.sh -m ./map/map.json -s 2 -o Knife PottedPlant`