'use strict'

const db = require('./icons/icon-tables.js')

/**
 *
 * @param {String} name
 * @return {Promise}
 * @private
 */
const bestMatch = name =>
  new Promise((resolve, reject) => {
    if (name.endsWith('/')) {
      resolve(db.matchName(name.slice(0, -1), true))
    }

    const matches = [
      db.matchName(name, true),
      db.matchName(name),
      db.matchInterpreter(name),
      db.matchLanguage(name),
      db.matchScope(name)
    ]

    Promise.all(matches).then(matchList => {
      const matched = matchList.filter(el => el !== null)
      const matchCount = matched.length
      if (matchCount) {
        if (matchCount > 1) matched.sort((a, b) => b.priority - a.priority)
        resolve(matched[0])
      }
      resolve(null)
    })
  })

class FileIcons {
  /**
   *
   * @param {String} name
   * @param {Object} options
   * @return {String|String[]}
   */
  async getClass(name, { color = true, array = false } = {}) {
    const icon = await bestMatch(name)
    const fallback = array ? ['icon', 'default-icon'] : 'icon default-icon'
    return icon ? icon.getClass(color ? 0 : null, array) : fallback
  }
}

module.exports = new FileIcons()
