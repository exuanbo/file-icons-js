/* eslint-env jest */
const icons = require('../dist/js/file-icons')

describe('matchName file "index.js"', () => {
  test('get class string', () => {
    expect(icons.getClass('index.js')).toBe('icon js-icon medium-yellow')
  })
  test('get class string without color', () => {
    expect(icons.getClass('index.js', { color: false })).toBe('icon js-icon')
  })
  test('get class array', () => {
    expect(icons.getClass('index.js', { array: true })).toEqual([
      'icon',
      'js-icon',
      'medium-yellow'
    ])
  })
  test('get class array without color', () => {
    expect(icons.getClass('index.js', { color: false, array: true })).toEqual([
      'icon',
      'js-icon'
    ])
  })
})

describe('matchName directory ".github"', () => {
  test('get class string', () => {
    expect(icons.getClass('.github')).toBe('icon github-icon')
  })
  test('get class string without color', () => {
    expect(icons.getClass('.github', { color: false })).toBe('icon github-icon')
  })
  test('get class array', () => {
    expect(icons.getClass('.github', { array: true })).toEqual([
      'icon',
      'github-icon'
    ])
  })
  test('get class array without color', () => {
    expect(icons.getClass('.github', { color: false, array: true })).toEqual([
      'icon',
      'github-icon'
    ])
  })
})

describe('matchName directory "node_modules/"', () => {
  test('get class string', () => {
    expect(icons.getClass('node_modules/')).toBe('icon node-icon medium-green')
  })
  test('get class string without color', () => {
    expect(icons.getClass('node_modules/', { color: false })).toBe(
      'icon node-icon'
    )
  })
  test('get class array', () => {
    expect(icons.getClass('node_modules/', { array: true })).toEqual([
      'icon',
      'node-icon',
      'medium-green'
    ])
  })
  test('get class array without color', () => {
    expect(
      icons.getClass('node_modules/', { color: false, array: true })
    ).toEqual(['icon', 'node-icon'])
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
    expect(icons.getClass('typescript', { array: true })).toEqual([
      'icon',
      'ts-icon',
      'medium-blue'
    ])
  })
  test('get class array without color', () => {
    expect(
      icons.getClass('typescript', { color: false, array: true })
    ).toEqual(['icon', 'ts-icon'])
  })
})

describe('matchScope "item.gdscript"', () => {
  test('get class string', () => {
    expect(icons.getClass('item.gdscript')).toBe('icon godot-icon medium-blue')
  })
  test('get class string without color', () => {
    expect(icons.getClass('item.gdscript', { color: false })).toBe(
      'icon godot-icon'
    )
  })
  test('get class array', () => {
    expect(icons.getClass('item.gdscript', { array: true })).toEqual([
      'icon',
      'godot-icon',
      'medium-blue'
    ])
  })
  test('get class array without color', () => {
    expect(
      icons.getClass('item.gdscript', { color: false, array: true })
    ).toEqual(['icon', 'godot-icon'])
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
    expect(icons.getClass('zsh', { array: true })).toEqual([
      'icon',
      'terminal-icon',
      'medium-purple'
    ])
  })
  test('get class array without color', () => {
    expect(icons.getClass('zsh', { color: false, array: true })).toEqual([
      'icon',
      'terminal-icon'
    ])
  })
})

describe('matchNothing "hello.world"', () => {
  test('get class string', () => {
    expect(icons.getClass('hello.world')).toBe('icon default-icon')
  })
  test('get class string without color', () => {
    expect(icons.getClass('hello.world', { color: false })).toBe(
      'icon default-icon'
    )
  })
  test('get class array', () => {
    expect(icons.getClass('hello.world', { array: true })).toEqual([
      'icon',
      'default-icon'
    ])
  })
  test('get class array without color', () => {
    expect(
      icons.getClass('hello.world', { color: false, array: true })
    ).toEqual(['icon', 'default-icon'])
  })
})
