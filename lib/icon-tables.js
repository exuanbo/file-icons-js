'use strict'

const Icon = require('./icon.js')

/**
 * Interface providing access to the package's databases.
 *
 * @property {Array} directoryIcons - Icons to match directory-type resources.
 * @property {Array} fileIcons      - Icons to match file resources.
 * @class
 */
class IconTables {
  constructor() {
    const data = require('./.icondb.js')
    this.directoryIcons = this.read(data[0])
    this.fileIcons = this.read(data[1])
  }

  /**
   * Populate icon-lists from a compiled data table.
   *
   * @param {Array} table
   * @return {Object}
   * @private
   */
  read(table) {
    let [icons, indexes] = table
    icons = icons.map((i, offset) => new Icon(offset, ...i))

    // Dereference Icon instances from their stored offset
    indexes = indexes.map(index => index.map(offset => icons[offset]))

    const [byInterpreter, byLanguage, byPath, byScope, bySignature] = indexes

    return {
      byName: icons,
      byInterpreter,
      byLanguage,
      byPath,
      byScope,
      bySignature
    }
  }

  /**
   * Match an icon using a resource's basename.
   *
   * @param {String} name - Name of filesystem entity
   * @param {Boolean} [directory=false] - Match folders instead of files
   * @return {Icon}
   */
  matchName(name, directory = false) {
    const [cachedIcons, icons] = directory
      ? [cache.directoryName, this.directoryIcons.byName]
      : [cache.fileName, this.fileIcons.byName]
    const cached = cachedIcons.get(name)
    if (cached) return cached
    for (let i = 0, l = icons.length; i < l; ++i) {
      const icon = icons[i]
      if (icon.match.test(name)) {
        cachedIcons.set(name, icon)
        return icon
      }
    }
    return null
  }

  /**
   * Match an icon using the human-readable form of its related language.
   *
   * Typically used for matching modelines and Linguist-language attributes.
   *
   * @example IconTables.matchLanguage("JavaScript")
   * @param {String} name - Name/alias of language
   * @return {Icon}
   */
  matchLanguage(name) {
    const cached = cache.language.get(name)
    if (cached) return cached
    const icons = this.fileIcons.byLanguage
    for (let i = 0, l = icons.length; i < l; ++i) {
      const icon = icons[i]
      if (icon.lang.test(name)) {
        cache.language.set(name, icon)
        return icon
      }
    }
    return null
  }

  /**
   * Match an icon using the grammar-scope assigned to it.
   *
   * @example IconTables.matchScope("source.js")
   * @param {String} name
   * @return {Icon}
   */
  matchScope(name) {
    const cached = cache.scope.get(name)
    if (cached) return cached
    const icons = this.fileIcons.byScope
    for (let i = 0, l = icons.length; i < l; ++i) {
      const icon = icons[i]
      if (icon.scope.test(name)) {
        cache.scope.set(name, icon)
        return icon
      }
    }
    return null
  }

  /**
   * Match an icon using the name of an interpreter which executes its language.
   *
   * Used for matching interpreter directives (a.k.a., "hashbangs").
   *
   * @example IconTables.matchInterpreter("bash")
   * @param {String} name
   * @return {Icon}
   */
  matchInterpreter(name) {
    const cached = cache.interpreter.get(name)
    if (cached) return cached
    const icons = this.fileIcons.byInterpreter
    for (let i = 0, l = icons.length; i < l; ++i) {
      const icon = icons[i]
      if (icon.interpreter.test(name)) {
        cache.interpreter.set(name, icon)
        return icon
      }
    }
    return null
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

/**
 * Hash of maps to cache searches.
 * @property {Object} cachedMatches
 */
// Object.defineProperty(IconTables.prototype, 'cache', {
//   get: () => cache
// })

module.exports = new IconTables()
