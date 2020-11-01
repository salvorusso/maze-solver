import fs from 'fs'

function readJson(filePath){
    return JSON.parse(fs.readFileSync(filePath));
}

export default { readJson }