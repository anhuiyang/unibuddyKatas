const uppercaseString = require('../src/debugging')

test('uppercase', ()=>{
    expect(uppercaseString('hiiiii')).toBe('HIIIII')
})

test('uppercase', ()=>{
    expect(uppercaseString('Hi I am interviewing')).toBe('HI I AM INTERVIEWING')
})

test('uppercase', ()=>{
    expect(uppercaseString('{?3#[')).toBe('{?3#[')
})

test('more characters', ()=>{
    expect(uppercaseString()).toBe()
})

test('more characters', ()=>{
    expect(uppercaseString('')).toBe('')
})