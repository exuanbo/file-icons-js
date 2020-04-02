class FileIcons {
  constructor() {
    this.db = require('./icon-tables.js')
  }

  matchAll(name) {
    const isDirectory = !/.+\..+/.test(name)
    const match =
      this.db.matchName(name, isDirectory) ||
      this.db.matchLanguage(name) ||
      this.db.matchScope(name) ||
      this.db.matchInterpreter(name)

    return match
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
