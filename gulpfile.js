const { src, dest, series, parallel } = require('gulp')
const del = require('del')
const browserify = require('browserify')
const source = require('vinyl-source-stream')
const streamify = require('gulp-streamify')
const uglify = require('gulp-uglify-es').default
const path = require('path')
const replace = require('gulp-replace')
const less = require('gulp-less')
const cleanCSS = require('gulp-clean-css')
const rename = require('gulp-rename')

function clean() {
  return del(['dist'])
}

function js() {
  const b = browserify()
  b.require('./lib/main.js', { expose: 'file-icons-js' })

  return b
    .bundle()
    .pipe(source('file-icons.min.js'))
    .pipe(streamify(uglify()))
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

exports.default = series(clean, parallel(js, css))
