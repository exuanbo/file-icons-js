'use strict'

/**
 * Immutable hash of icon data.
 *
 * These objects are accessed through {@link IconDelegate} instances, and
 * generated at startup from precomposed data by the {@link IconCompiler}.
 *
 * @class
 */
class Icon {
  /**
   * Create a new icon object.
   *
   * @param {Number}  index - Index of the icon's appearance in the enclosing array
   * @param {String}  icon - Icon's CSS class (e.g., "js-icon")
   * @param {Array}   colour - Icon's colour classes
   * @param {RegExp}  match - Pattern for matching names or pathnames
   * @param {Number}  [priority=1] - Numeric priority that determined icon's order of appearance
   * @param {RegExp}  [interpreter=null] - RegExp to match executable names in hashbangs
   * @param {RegExp}  [scope=null] - RegExp to match grammar scope-names
   * @param {RegExp}  [lang=null] - RegExp to match alias patterns
   * @see {@link IconTables#read}
   * @constructor
   */
  constructor(
    index,
    icon,
    colour,
    match,
    priority = 1,
    interpreter = null,
    scope = null,
    lang = null
  ) {
    this.index = index
    this.icon = icon
    this.colour = colour
    this.match = match
    this.priority = priority

    this.interpreter = interpreter || null
    this.scope = scope || null
    this.lang = lang || null
  }

  /**
   * Return the CSS classes for displaying the icon.
   *
   * @param {Number|null} colourMode
   * @param {Boolean} asArray
   * @return {String}
   */
  getClass(colourMode, asArray) {
    // No colour needed or available
    if (colourMode === null || this.colour[0] === null) {
      return asArray ? ['icon', this.icon] : 'icon' + ' ' + this.icon
    }

    return asArray
      ? ['icon', this.icon, this.colour[colourMode]]
      : 'icon' + ' ' + this.icon + ' ' + this.colour[colourMode]
  }
}

module.exports = Icon
