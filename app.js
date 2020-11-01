import commandLineArgs from './utils/argsReader.js'
import fileReader from './utils/fileReader.js'

const args = commandLineArgs.readCommandLineArgs()
const map = fileReader.readJson(args.map)
const startId = args.start_room
const toCollect = args.objects_to_collect
solveMaze()

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
        });
    }
    else
        collected = 'None'

    console.log( roomId + "\t" + currentRoom.name + "\t" + collected)

}

function solveMaze () {
    console.log("\nID\tRoom\t\tObject Collected")
    console.log("----------------------------------------")
    collect(startId)
}