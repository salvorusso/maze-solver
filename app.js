import commandLineArgs from './utils/argsReader.js'
import fileReader from './utils/fileReader.js'

const args = commandLineArgs.readCommandLineArgs()
const map = fileReader.readJson(args.map)
const startId = args.start_room
const toCollect = args.objects_to_collect