const { src, dest, series, parallel } = require('gulp')
const del = require('del')
const source = require('vinyl-source-stream')
const buffer = require('vinyl-buffer')
const rollupStream = require('@rollup/stream')
const commonjs = require('@rollup/plugin-commonjs')
const browserify = require('browserify')
const sourcemaps = require('gulp-sourcemaps')
const uglify = require('gulp-uglify-es').default
const path = require('path')
const replace = require('gulp-replace')
const less = require('gulp-less')
const cleanCSS = require('gulp-clean-css')
const rename = require('gulp-rename')

function clean() {
  return del(['dist'])
}

class Option {
  constructor(fm) {
    this.input = 'lib/main.js'
    this.output = { format: fm }
    this.plugins = [commonjs()]
  }
}

function cjs() {
  const options = new Option('cjs')
  return rollupStream(options).pipe(source('file-icons.js')).pipe(dest('dist'))
}

function es() {
  const options = new Option('es')
  return rollupStream(options)
    .pipe(source('file-icons.es.js'))
    .pipe(dest('dist'))
    .pipe(rename({ extname: '.min.js' }))
    .pipe(buffer())
    .pipe(sourcemaps.init())
    .pipe(uglify())
    .pipe(sourcemaps.write('.'))
    .pipe(dest('dist'))
}

function browser() {
  const b = browserify()
  b.require('./lib/main.js', { expose: 'file-icons-js' })

  return b
    .bundle()
    .pipe(source('file-icons.min.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init())
    .pipe(uglify())
    .pipe(sourcemaps.write('.'))
    .pipe(dest('dist'))
}

function css() {
  return src(['styles/icons.less'])
    .pipe(less({ paths: [path.join(__dirname, 'styles')] }))
    .pipe(rename('file-icons.css'))
    .pipe(cleanCSS())
    .pipe(rename({ extname: '.min.css' }))
    .pipe(dest('dist'))
    .pipe(
      replace(
        /\.\./g,
        'https://cdn.jsdelivr.net/npm/@exuanbo/file-icons-js@latest'
      )
    )
    .pipe(
      rename({ basename: 'file-icons', suffix: '-cdn', extname: '.min.css' })
    )
    .pipe(dest('dist'))
}

exports.default = series(clean, parallel(cjs, es, browser, css))
