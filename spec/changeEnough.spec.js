/* eslint-disable */

const changeEnough = require('../src/changeEnough')

test('change enough ', ()=>{
    expect(changeEnough([25, 20, 5, 1], 4.25)).toBe(true)
})
test('change not enough ', ()=>{
    expect(changeEnough([0, 5, 0, 0], 4.25)).toBe(false)
})
test('change not enough ', ()=>{
    expect(changeEnough([16, 2, 0, 5], 4.25)).toBe(true)
})