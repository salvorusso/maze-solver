/**
 * 
 * @param {Object} room 
 * Takes the adjacent rooms
 */
function getNeighbours ( room ){

    let queue = []
    let nextRoom = ""

    if ( room.north){
        nextRoom = room.north
        queue.push(nextRoom)
    }

    if ( room.south){
        nextRoom = room.south
        queue.push(nextRoom)
    }

    if ( room.west){
        nextRoom = room.west
        queue.push(nextRoom)
    }

    if ( room.east){
        nextRoom = room.east
        queue.push(nextRoom)
    }

    return queue
}
/**
 * @param {Object} neighbours 
 * @param {Number} neighbour 
 * @param {Number} currentRoom 
 * Check adjacent rooms already visited from the current room
 */
function alreadyVisited( neighbours, neighbour, currentRoom ) {
    return neighbours[currentRoom].indexOf(neighbour) !== -1
}

export default { getNeighbours, alreadyVisited }