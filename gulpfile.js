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
  constructor(format) {
    this.input = 'lib/main.js'
    this.output = { format: format }
    this.plugins = [commonjs()]
  }
}

function cjs() {
  const options = new Option('cjs')
  return rollupStream(options)
    .pipe(source('file-icons.js'))
    .pipe(dest('dist/js'))
}

function es() {
  const options = new Option('es')
  return rollupStream(options)
    .pipe(source('file-icons.mjs'))
    .pipe(dest('dist/js'))
    .pipe(buffer())
    .pipe(sourcemaps.init())
    .pipe(uglify())
    .pipe(rename({ extname: '.es.min.js' }))
    .pipe(sourcemaps.write('.'))
    .pipe(dest('dist/js'))
}

function browser() {
  const b = browserify()
  b.require('./lib/main.js', { expose: 'file-icons-js' })

  return b
    .bundle()
    .pipe(source('file-icons.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init())
    .pipe(uglify())
    .pipe(rename({ extname: '.min.js' }))
    .pipe(sourcemaps.write('.'))
    .pipe(dest('dist/js'))
}

function css() {
  return src(['styles/icons.less'])
    .pipe(less({ paths: [path.join(__dirname, 'styles')] }))
    .pipe(rename('file-icons.css'))
    .pipe(dest('dist/css'))
    .pipe(sourcemaps.init())
    .pipe(cleanCSS())
    .pipe(rename({ extname: '.min.css' }))
    .pipe(sourcemaps.write('.'))
    .pipe(dest('dist/css'))
}

function cssCDN() {
  return src(['dist/css/file-icons.css'])
    .pipe(
      replace(
        /\.\./g,
        'https://cdn.jsdelivr.net/npm/@exuanbo/file-icons-js@latest'
      )
    )
    .pipe(rename('file-icons-cdn.css'))
    .pipe(dest('dist/css'))
    .pipe(sourcemaps.init())
    .pipe(cleanCSS())
    .pipe(rename({ extname: '.min.css' }))
    .pipe(sourcemaps.write('.'))
    .pipe(dest('dist/css'))
}

function fonts() {
  return src(['fonts/*']).pipe(dest('dist/fonts'))
}

exports.default = series(
  clean,
  parallel(cjs, es, browser, series(css, cssCDN), fonts)
)
