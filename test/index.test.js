/* eslint-env jest */
const icons = require('../index.js')

describe('test file name with extention "index.js"', () => {
  test('get class string', () => {
    expect(icons.getClass('index.js')).toBe('icons js-icon medium-yellow')
  })
  test('get class string without color', () => {
    expect(icons.getClass('index.js', { color: false })).toBe('icons js-icon')
  })
  test('get class array', () => {
    expect(icons.getClass('index.js', { array: true })).toEqual(['icons', 'js-icon', 'medium-yellow'])
  })
  test('get class array without color', () => {
    expect(icons.getClass('index.js', { color: false, array: true })).toEqual(['icons', 'js-icon'])
  })
})

describe('test directory name "node_modules"', () => {
  test('get class string', () => {
    expect(icons.getClass('node_modules')).toBe('icons node-icon medium-green')
  })
  test('get class string without color', () => {
    expect(icons.getClass('node_modules', { color: false })).toBe('icons node-icon')
  })
  test('get class array', () => {
    expect(icons.getClass('node_modules', { array: true })).toEqual(['icons', 'node-icon', 'medium-green'])
  })
  test('get class array without color', () => {
    expect(icons.getClass('node_modules', { color: false, array: true })).toEqual(['icons', 'node-icon'])
  })
})

describe('test language name "typescript"', () => {
  test('get class string', () => {
    expect(icons.getClass('typescript')).toBe('icons ts-icon medium-blue')
  })
  test('get class string without color', () => {
    expect(icons.getClass('typescript', { color: false })).toBe('icons ts-icon')
  })
  test('get class array', () => {
    expect(icons.getClass('typescript', { array: true })).toEqual(['icons', 'ts-icon', 'medium-blue'])
  })
  test('get class array without color', () => {
    expect(icons.getClass('typescript', { color: false, array: true })).toEqual(['icons', 'ts-icon'])
  })
})
