const {normalizeURL} = require('./crawl.js')
const {test, expect} = require('@jest/globals')

test('normalizeURL strip protocol', () => {
    const input = 'https://blog.boot.dev/path'
    const actual = normalizeURL(input)
    const expected = 'blog.boot.dev/path'
    expect(actual).toEqual(expected)
    // I'm expecting the actual output of normalizeURL to equal the expected output that I've specified
    // If they do equal each other, jest will mark it as a passed test
})

test('normalizeURL strip trailing slash', () => {
    const input = 'https://blog.boot.dev/path/'
    const actual = normalizeURL(input)
    const expected = 'blog.boot.dev/path'
    expect(actual).toEqual(expected)
    // I'm expecting the actual output of normalizeURL to equal the expected output that I've specified
    // If they do equal each other, jest will mark it as a passed test
})

test('normalizeURL capital', () => {
    const input = 'https://BLOG.boot.dev/path'
    const actual = normalizeURL(input)
    const expected = 'blog.boot.dev/path'
    expect(actual).toEqual(expected)

})

test('normalizeURL different protocol', () => {
    const input = 'http://blog.boot.dev/path'
    const actual = normalizeURL(input)
    const expected = 'blog.boot.dev/path'
    expect(actual).toEqual(expected)

})
