const messagesSort = require('../src/messagesSort')

test('message sort1', ()=>{
    expect(JSON.stringify(messagesSort([77, 23, 5, 7, 101]))).toBe(JSON.stringify([101, 23, 77, 5, 7]))
})

test('message sort2', ()=>{
    expect(JSON.stringify(messagesSort([1, 5, 9, 2, 789, 563, 444]))).toBe(JSON.stringify([444, 563, 789, 1, 2, 5, 9]))
})

test('message sort3', ()=>{
    expect(JSON.stringify(messagesSort([53219, 3772, 564, 32, 1]))).toBe(JSON.stringify([53219, 3772, 564, 32, 1]))
})

test('message sort4', ()=>{
    expect(JSON.stringify(messagesSort([5]))).toBe(JSON.stringify([5]))
})