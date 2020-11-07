import assert from "assert"
import algorithm from '../algorithm/search.js'

const testRoom = {
    "id":1,
    "name":"Bedroom",
    "north":2,
    "east":3,
    "west":1,
    "objects":[
       "something"
    ]
 }

const testNeighbours = {
    1:[2, 1]
}

describe( "Algorithm Test Suite", () => {
    describe("#getNeighbours()", () => {
        it("should return [2, 1, 3] when input is testRoom", () => {
            assert.deepStrictEqual([2, 1, 3], algorithm.getNeighbours(testRoom))
        })
    })

    describe("#alreadyVisited()", () => {
        it("should return true when input is 1:[2, 1], 2, 1", () => {
            assert.deepStrictEqual(true, algorithm.alreadyVisited(testNeighbours, 2, 1))
        })
    })
});