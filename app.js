import commandLineArgs from './utils/argsReader.js'
import fileReader from './utils/fileReader.js'

const args = commandLineArgs.readCommandLineArgs()
const map = fileReader.readJson(args.map)
const startId = args.start_room
const toCollect = args.objects_to_collect
const seen = []
solveMaze()

/**
 * 
 * @param {*} currentRoom
 * Continue the search in the maze 
 */
function walk ( currentRoom ) {
    //console.log("currentRoom:",currentRoom)
    const index = map.rooms.indexOf(currentRoom)

    let nextRoom = ""
    if ( currentRoom.north){
        nextRoom = currentRoom.north
        delete map.rooms[index].north
        collect(nextRoom)
    }

    if ( currentRoom.south){
        nextRoom = currentRoom.south
        delete map.rooms[index].south
        collect(nextRoom)
    }

    if ( currentRoom.west){
        nextRoom = currentRoom.west
        delete map.rooms[index].west
        collect(nextRoom)
    }

    if ( currentRoom.east){
        nextRoom = currentRoom.east
        delete map.rooms[index].east
        collect(nextRoom)
    }
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
    seen.push(roomId)
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