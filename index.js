class FileIcons {
  constructor () {
    this.db = require('./lib/icon-tables.js')
    this.option = {
      color: true,
      array: false
    }
  }

  matchAll (name) {
    const isDirectory = !/.+\..+/.test(name)
    const match =
      this.db.matchName(name, isDirectory) ||
      this.db.matchLanguage(name) ||
      this.db.matchScope(name) ||
      this.db.matchInterpreter(name) ||
      this.db.matchSignature(name)

    return match
  }

  getClass (name, options) {
    for (const i in options) {
      this.option[i] = options[i]
    }
    const colorMode = this.option.color ? 0 : null
    const asArray = this.option.array
    const icon = this.matchAll(name)

    return icon ? icon.getClass(colorMode, asArray) : null
  }
}

module.exports = new FileIcons()
