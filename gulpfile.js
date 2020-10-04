const { exec } = require('child_process')
const path = require('path')
const { src, dest, series, parallel } = require('gulp')
const source = require('vinyl-source-stream')
const buffer = require('vinyl-buffer')
const rename = require('gulp-rename')
const uglify = require('gulp-uglify-es').default
const replace = require('gulp-replace')
const less = require('gulp-less')
const cleanCSS = require('gulp-clean-css')
const rollupStream = require('@rollup/stream')
const commonjs = require('@rollup/plugin-commonjs')
const browserify = require('browserify')

function clean() {
  return exec('rm -rf dist')
}

class Option {
  constructor(format) {
    this.input = 'lib/main.js'
    this.output = {
      format: format,
      exports: 'auto'
    }
    this.plugins = [commonjs()]
  }
}

function cjs() {
  return rollupStream(new Option('cjs'))
    .pipe(source('file-icons.js'))
    .pipe(dest('dist/js'))
}

function es() {
  return rollupStream(new Option('es'))
    .pipe(source('file-icons.esm.js'))
    .pipe(dest('dist/js'))
    .pipe(buffer())
    .pipe(uglify())
    .pipe(rename({ extname: '.min.js' }))
    .pipe(dest('dist/js'))
}

function browser() {
  const b = browserify()
  b.require('./lib/main.js', { expose: 'file-icons-js' })

  return b
    .bundle()
    .pipe(source('file-icons.js'))
    .pipe(buffer())
    .pipe(uglify())
    .pipe(rename({ extname: '.min.js' }))
    .pipe(dest('dist/js'))
}

function css() {
  return src(['styles/icons.less'])
    .pipe(less({ paths: [path.join(__dirname, 'styles')] }))
    .pipe(rename('file-icons.css'))
    .pipe(dest('dist/css'))
    .pipe(cleanCSS())
    .pipe(rename({ extname: '.min.css' }))
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
    .pipe(cleanCSS())
    .pipe(rename({ extname: '.min.css' }))
    .pipe(dest('dist/css'))
}

function fonts() {
  return src(['fonts/*']).pipe(dest('dist/fonts'))
}

exports.default = series(
  clean,
  parallel(cjs, es, browser, series(css, cssCDN), fonts)
)
