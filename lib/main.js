'use strict'

class FileIcons {
  constructor() {
    this.db = require('./icons/icon-tables.js')
  }

  matchAll(name) {
    return /.+\/$/.test(name)
      ? this.db.matchName(name.replace(/\/$/, ''), true)
      : this.db.matchName(name, true) ||
          this.db.matchName(name) ||
          this.db.matchInterpreter(name) ||
          this.db.matchLanguage(name) ||
          this.db.matchScope(name)
  }

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
