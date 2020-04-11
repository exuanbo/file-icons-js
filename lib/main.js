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
  matchAll(name) {
    if (/.+\/$/.test(name)) {
      return this.db.matchName(name.replace(/\/$/, ''), true)
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
    const option = {
      color: true,
      array: false
    }

    for (const i in options) {
      option[i] = options[i]
    }

    const colorMode = option.color ? 0 : null
    const asArray = option.array
    const icon = this.matchAll(name)
    const fallback = asArray ? ['icon', 'default-icon'] : 'icon default-icon'
    return icon ? icon.getClass(colorMode, asArray) : fallback
  }
}

module.exports = new FileIcons()
