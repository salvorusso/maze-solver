import commandLineArgs from 'command-line-args'

//Read command line args
const argsDefinitions = [
    { name: 'map', alias: 'm', type: String },
    { name: "start_room", alias: 's', type: Number },
    { name: "objects_to_collect", alias: 'o',  multiple: true, type: String }
]

function readCommandLineArgs () {
    return commandLineArgs(argsDefinitions)
}

export default { readCommandLineArgs }