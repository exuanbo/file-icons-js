/* eslint-env jest */
const icons = require('../index.js')

describe('matchName file "index.js"', () => {
  test('get class string', () => {
    expect(icons.getClass('index.js')).toBe('icon js-icon medium-yellow')
  })
  test('get class string without color', () => {
    expect(icons.getClass('index.js', { color: false })).toBe('icon js-icon')
  })
  test('get class array', () => {
    expect(icons.getClass('index.js', { array: true })).toEqual(['icon', 'js-icon', 'medium-yellow'])
  })
  test('get class array without color', () => {
    expect(icons.getClass('index.js', { color: false, array: true })).toEqual(['icon', 'js-icon'])
  })
})

describe('matchName directory "node_modules"', () => {
  test('get class string', () => {
    expect(icons.getClass('node_modules')).toBe('icon node-icon medium-green')
  })
  test('get class string without color', () => {
    expect(icons.getClass('node_modules', { color: false })).toBe('icon node-icon')
  })
  test('get class array', () => {
    expect(icons.getClass('node_modules', { array: true })).toEqual(['icon', 'node-icon', 'medium-green'])
  })
  test('get class array without color', () => {
    expect(icons.getClass('node_modules', { color: false, array: true })).toEqual(['icon', 'node-icon'])
  })
})

describe('matchLanguage "typescript"', () => {
  test('get class string', () => {
    expect(icons.getClass('typescript')).toBe('icon ts-icon medium-blue')
  })
  test('get class string without color', () => {
    expect(icons.getClass('typescript', { color: false })).toBe('icon ts-icon')
  })
  test('get class array', () => {
    expect(icons.getClass('typescript', { array: true })).toEqual(['icon', 'ts-icon', 'medium-blue'])
  })
  test('get class array without color', () => {
    expect(icons.getClass('typescript', { color: false, array: true })).toEqual(['icon', 'ts-icon'])
  })
})

describe('matchScope "source.js"', () => {
  test('get class string', () => {
    expect(icons.getClass('source.js')).toBe('icon js-icon medium-yellow')
  })
  test('get class string without color', () => {
    expect(icons.getClass('source.js', { color: false })).toBe('icon js-icon')
  })
  test('get class array', () => {
    expect(icons.getClass('source.js', { array: true })).toEqual(['icon', 'js-icon', 'medium-yellow'])
  })
  test('get class array without color', () => {
    expect(icons.getClass('source.js', { color: false, array: true })).toEqual(['icon', 'js-icon'])
  })
})

describe('matchInterprater "zsh"', () => {
  test('get class string', () => {
    expect(icons.getClass('zsh')).toBe('icon terminal-icon medium-purple')
  })
  test('get class string without color', () => {
    expect(icons.getClass('zsh', { color: false })).toBe('icon terminal-icon')
  })
  test('get class array', () => {
    expect(icons.getClass('zsh', { array: true })).toEqual(['icon', 'terminal-icon', 'medium-purple'])
  })
  test('get class array without color', () => {
    expect(icons.getClass('zsh', { color: false, array: true })).toEqual(['icon', 'terminal-icon'])
  })
})

describe('matchSignature "\x1F\x8B"', () => {
  test('get class string', () => {
    expect(icons.getClass('\x1F\x8B')).toBe('icon zip-icon dark-blue')
  })
  test('get class string without color', () => {
    expect(icons.getClass('\x1F\x8B', { color: false })).toBe('icon zip-icon')
  })
  test('get class array', () => {
    expect(icons.getClass('\x1F\x8B', { array: true })).toEqual(['icon', 'zip-icon', 'dark-blue'])
  })
  test('get class array without color', () => {
    expect(icons.getClass('\x1F\x8B', { color: false, array: true })).toEqual(['icon', 'zip-icon'])
  })
})
