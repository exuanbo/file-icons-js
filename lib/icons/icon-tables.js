'use strict'

const Icon = require('./icon.js')
const data = require('./.icondb.js')

/**
 * Populate icon-lists from a compiled data table.
 *
 * @param {Array} table
 * @return {Object}
 * @private
 */
const read = table => {
  let [icons, indexes] = table
  icons = icons.map((i, offset) => new Icon(offset, ...i))

  // Dereference Icon instances from their stored offset
  indexes = indexes.map(index => index.map(offset => icons[offset]))

  const [byInterpreter, byLanguage, byScope] = indexes

  return {
    byName: icons,
    byInterpreter,
    byLanguage,
    byScope
  }
}

/**
 * Interface providing access to the package's databases.
 *
 * @property {Array} directoryIcons - Icons to match directory-type resources.
 * @property {Array} fileIcons      - Icons to match file resources.
 * @class
 */
class IconTables {
  constructor() {
    this.directoryIcons = read(data[0])
    this.fileIcons = read(data[1])
  }

  /**
   * Match an icon using a resource's basename.
   *
   * @param {String} name - Name of filesystem entity
   * @param {Boolean} [directory=false] - Match folders instead of files
   * @return {Promise}
   */
  matchName(name, directory = false) {
    return new Promise((resolve, reject) => {
      const [cachedIcons, icons] = directory
        ? [cache.directoryName, this.directoryIcons.byName]
        : [cache.fileName, this.fileIcons.byName]
      const cached = cachedIcons.get(name)
      if (cached) return resolve(cached)
      const matched = []
      for (let i = 0, l = icons.length; i < l; ++i) {
        const icon = icons[i]
        if (icon.match.test(name)) matched.push(icon)
      }
      const matchCount = matched.length
      if (matchCount) {
        if (matchCount > 1) matched.sort((a, b) => b.priority - a.priority)
        const bestMatch = matched[0]
        cachedIcons.set(name, bestMatch)
        return resolve(bestMatch)
      }
      resolve(null)
    })
  }

  /**
   * Match an icon using the human-readable form of its related language.
   *
   * Typically used for matching modelines and Linguist-language attributes.
   *
   * @example IconTables.matchLanguage("JavaScript")
   * @param {String} name - Name/alias of language
   * @return {Promise}
   */
  matchLanguage(name) {
    return new Promise((resolve, reject) => {
      const cached = cache.language.get(name)
      if (cached) return resolve(cached)
      const icons = this.fileIcons.byLanguage
      const matched = []
      for (let i = 0, l = icons.length; i < l; ++i) {
        const icon = icons[i]
        if (icon.lang.test(name)) matched.push(icon)
      }
      const matchCount = matched.length
      if (matchCount) {
        if (matchCount > 1) matched.sort((a, b) => b.priority - a.priority)
        const bestMatch = matched[0]
        cache.language.set(name, bestMatch)
        return resolve(bestMatch)
      }
      resolve(null)
    })
  }

  /**
   * Match an icon using the grammar-scope assigned to it.
   *
   * @example IconTables.matchScope("source.js")
   * @param {String} name
   * @return {Promise}
   */
  matchScope(name) {
    return new Promise((resolve, reject) => {
      const cached = cache.scope.get(name)
      if (cached) return resolve(cached)
      const icons = this.fileIcons.byScope
      const matched = []
      for (let i = 0, l = icons.length; i < l; ++i) {
        const icon = icons[i]
        if (icon.scope.test(name)) matched.push(icon)
      }
      const matchCount = matched.length
      if (matchCount) {
        if (matchCount > 1) matched.sort((a, b) => b.priority - a.priority)
        const bestMatch = matched[0]
        cache.scope.set(name, bestMatch)
        return resolve(bestMatch)
      }
      resolve(null)
    })
  }

  /**
   * Match an icon using the name of an interpreter which executes its language.
   *
   * Used for matching interpreter directives (a.k.a., "hashbangs").
   *
   * @example IconTables.matchInterpreter("bash")
   * @param {String} name
   * @return {Promise}
   */
  matchInterpreter(name) {
    return new Promise((resolve, reject) => {
      const cached = cache.interpreter.get(name)
      if (cached) return resolve(cached)
      const icons = this.fileIcons.byInterpreter
      const matched = []
      for (let i = 0, l = icons.length; i < l; ++i) {
        const icon = icons[i]
        if (icon.interpreter.test(name)) matched.push(icon)
      }
      const matchCount = matched.length
      if (matchCount) {
        if (matchCount > 1) matched.sort((a, b) => b.priority - a.priority)
        const bestMatch = matched[0]
        cache.interpreter.set(name, bestMatch)
        return resolve(bestMatch)
      }
      resolve(null)
    })
  }
}

// TODO: Searching/caching should be a different class's responsibility.
// Add a class to represent individual tables to obviate this mess.
const cache = {
  directoryName: new Map(),
  fileName: new Map(),
  interpreter: new Map(),
  scope: new Map(),
  language: new Map()
}

module.exports = new IconTables()
