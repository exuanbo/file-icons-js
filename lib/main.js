'use strict'

/**
 * @property {IconTables} db
 * @class
 */
class FileIcons {
  constructor() {
    this.db = require('./icons/icon-tables.js')
  }

  /**
   *
   * @param {String} name
   * @return {Icon}
   * @private
   */
  bestMatch(name) {
    if (name.endsWith('/')) {
      return this.db.matchName(name.slice(0, -1), true)
    }

    const matches = [
      this.db.matchName(name, true),
      this.db.matchName(name),
      this.db.matchInterpreter(name),
      this.db.matchLanguage(name),
      this.db.matchScope(name)
    ]
    const match = []

    for (let i = 0; i < matches.length; ++i) {
      if (matches[i] !== null) {
        match.push(matches[i])
      }
    }

    match.sort((a, b) => b.priority - a.priority)
    return match[0]
  }

  /**
   *
   * @param {String} name
   * @param {Object} options
   * @return {String|String[]}
   */
  getClass(name, options) {
    const outOptions = {
      color: true,
      array: false
    }

    if (options) {
      for (const i in options) {
        outOptions[i] = options[i]
      }
    }

    const colorMode = outOptions.color ? 0 : null
    const asArray = outOptions.array

    const icon = this.bestMatch(name)
    const fallback = asArray ? ['icon', 'default-icon'] : 'icon default-icon'
    return icon ? icon.getClass(colorMode, asArray) : fallback
  }
}

module.exports = new FileIcons()
