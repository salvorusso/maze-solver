import commandLineArgs from './utils/argsReader.js'
import fileReader from './utils/fileReader.js'
import algorithm from './algorithm/search.js'

const args = commandLineArgs.readCommandLineArgs()
const map = fileReader.readJson(args.map)
const startId = args.start_room
const toCollect = args.objects_to_collect
let seen = {}
solveMaze()

/**
 * 
 * @param {*} currentRoom
 * Continue the search in the maze 
 */
function walk ( currentRoom ) {

    const neighbours = algorithm.getNeighbours(currentRoom)
    
    if (!seen[currentRoom.id])
        seen[currentRoom.id] = []

    neighbours.forEach( room => {
        if ( !algorithm.alreadyVisited(seen, room, currentRoom.id) )
        {
            seen[currentRoom.id].push(room)
            collect(room)
        }
    });
}

/**
 * @param {Number} roomId 
 * Retrieve the objects in that room
 */
function collect ( roomId ) {
    const currentRoom = map.rooms.filter( room => room.id === roomId )[0]
    let collected = []

    if ( currentRoom.objects.length > 0 ){
        currentRoom.objects.forEach(obj => {
            collected.push(obj.name)
            const index = toCollect.indexOf(obj.name)
            if (index > -1)
                toCollect.splice(index, 1)
        });
    }
    else
        collected = 'None'

    console.log( roomId + "\t" + currentRoom.name + "\t\t" + collected)
    if ( toCollect.length > 0)
        walk(currentRoom)
    else{
        console.log("All objects Collected")
        process.exit(0)
    }
        
}

function solveMaze () {
    console.log("\nID\tRoom\t\tObject Collected")
    console.log("----------------------------------------")
    collect(startId)
}