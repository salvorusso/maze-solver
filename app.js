import commandLineArgs from 'command-line-args'
import fileReader from './utils/fileReader.js'

//Read command line args
const argsDefinitions = [
    { name: 'map', alias: 'm', type: String },
    { name: "start_room", alias: 's', type: Number },
    { name: "objects_to_collect", alias: 'o',  multiple: true, type: String }
]
const args = commandLineArgs(argsDefinitions)