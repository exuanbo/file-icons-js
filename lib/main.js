'use strict'

const db = require('./icons/icon-tables.js')

/**
 *
 * @param {String} name
 * @return {Icon}
 * @private
 */
const bestMatch = name => {
  if (name.endsWith('/')) {
    return db.matchName(name.slice(0, -1), true)
  }

  const matches = [
    db.matchName(name, true),
    db.matchName(name),
    db.matchInterpreter(name),
    db.matchLanguage(name),
    db.matchScope(name)
  ]
  const match = []

  for (let i = 0; i < matches.length; ++i) {
    if (matches[i]) {
      match.push(matches[i])
    }
  }

  match.sort((a, b) => b.priority - a.priority)
  return match[0]
}

class FileIcons {
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

    const { color, array } = outOptions

    const icon = bestMatch(name)
    const fallback = array ? ['icon', 'default-icon'] : 'icon default-icon'
    return icon ? icon.getClass(color ? 0 : null, array) : fallback
  }
}

module.exports = new FileIcons()
