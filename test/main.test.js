/* eslint-env jest */
const icons = require('../lib/main')

describe('matchName file "package.json"', () => {
  test('get class string', async () => {
    expect(await icons.getClass('package.json')).toBe(
      'icon npm-icon medium-red'
    )
  })
  test('get class string without color', async () => {
    expect(await icons.getClass('package.json', { color: false })).toBe(
      'icon npm-icon'
    )
  })
  test('get class array', async () => {
    expect(await icons.getClass('package.json', { array: true })).toEqual([
      'icon',
      'npm-icon',
      'medium-red'
    ])
  })
  test('get class array without color', async () => {
    expect(
      await icons.getClass('package.json', { color: false, array: true })
    ).toEqual(['icon', 'npm-icon'])
  })
})

describe('matchName directory ".github"', () => {
  test('get class string', async () => {
    expect(await icons.getClass('.github')).toBe('icon github-icon')
  })
  test('get class string without color', async () => {
    expect(await icons.getClass('.github', { color: false })).toBe(
      'icon github-icon'
    )
  })
  test('get class array', async () => {
    expect(await icons.getClass('.github', { array: true })).toEqual([
      'icon',
      'github-icon'
    ])
  })
  test('get class array without color', async () => {
    expect(
      await icons.getClass('.github', { color: false, array: true })
    ).toEqual(['icon', 'github-icon'])
  })
})

describe('matchName directory "node_modules/"', () => {
  test('get class string', async () => {
    expect(await icons.getClass('node_modules/')).toBe(
      'icon node-icon medium-green'
    )
  })
  test('get class string without color', async () => {
    expect(await icons.getClass('node_modules/', { color: false })).toBe(
      'icon node-icon'
    )
  })
  test('get class array', async () => {
    expect(await icons.getClass('node_modules/', { array: true })).toEqual([
      'icon',
      'node-icon',
      'medium-green'
    ])
  })
  test('get class array without color', async () => {
    expect(
      await icons.getClass('node_modules/', { color: false, array: true })
    ).toEqual(['icon', 'node-icon'])
  })
})

describe('matchLanguage "typescript"', () => {
  test('get class string', async () => {
    expect(await icons.getClass('typescript')).toBe('icon ts-icon medium-blue')
  })
  test('get class string without color', async () => {
    expect(await icons.getClass('typescript', { color: false })).toBe(
      'icon ts-icon'
    )
  })
  test('get class array', async () => {
    expect(await icons.getClass('typescript', { array: true })).toEqual([
      'icon',
      'ts-icon',
      'medium-blue'
    ])
  })
  test('get class array without color', async () => {
    expect(
      await icons.getClass('typescript', { color: false, array: true })
    ).toEqual(['icon', 'ts-icon'])
  })
})

describe('matchScope "item.gdscript"', () => {
  test('get class string', async () => {
    expect(await icons.getClass('item.gdscript')).toBe(
      'icon godot-icon medium-blue'
    )
  })
  test('get class string without color', async () => {
    expect(await icons.getClass('item.gdscript', { color: false })).toBe(
      'icon godot-icon'
    )
  })
  test('get class array', async () => {
    expect(await icons.getClass('item.gdscript', { array: true })).toEqual([
      'icon',
      'godot-icon',
      'medium-blue'
    ])
  })
  test('get class array without color', async () => {
    expect(
      await icons.getClass('item.gdscript', { color: false, array: true })
    ).toEqual(['icon', 'godot-icon'])
  })
})

describe('matchInterprater "zsh"', () => {
  test('get class string', async () => {
    expect(await icons.getClass('zsh')).toBe('icon terminal-icon medium-purple')
  })
  test('get class string without color', async () => {
    expect(await icons.getClass('zsh', { color: false })).toBe(
      'icon terminal-icon'
    )
  })
  test('get class array', async () => {
    expect(await icons.getClass('zsh', { array: true })).toEqual([
      'icon',
      'terminal-icon',
      'medium-purple'
    ])
  })
  test('get class array without color', async () => {
    expect(await icons.getClass('zsh', { color: false, array: true })).toEqual([
      'icon',
      'terminal-icon'
    ])
  })
})

describe('matchNothing "hello.world"', () => {
  test('get class string', async () => {
    expect(await icons.getClass('hello.world')).toBe('icon default-icon')
  })
  test('get class string without color', async () => {
    expect(await icons.getClass('hello.world', { color: false })).toBe(
      'icon default-icon'
    )
  })
  test('get class array', async () => {
    expect(await icons.getClass('hello.world', { array: true })).toEqual([
      'icon',
      'default-icon'
    ])
  })
  test('get class array without color', async () => {
    expect(
      await icons.getClass('hello.world', { color: false, array: true })
    ).toEqual(['icon', 'default-icon'])
  })
})
