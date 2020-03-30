const { src, dest, parallel } = require('gulp')
const browserify = require('browserify')
const source = require('vinyl-source-stream')
const streamify = require('gulp-streamify')
const uglify = require('gulp-uglify-es').default
const path = require('path')
const less = require('gulp-less')
const cleanCSS = require('gulp-clean-css')
const rename = require('gulp-rename')

function js () {
  const b = browserify()
  b.require('./index.js', { expose: 'file-icons-js' })

  return b.bundle()
    .pipe(source('file-icons.min.js'))
    .pipe(streamify(uglify()))
    .pipe(dest('dist'))
}

function css () {
  return src(['./styles/icons.less'])
    .pipe(less({
      paths: [path.join(__dirname, 'styles')]
    }))
    .pipe(rename('file-icons.css'))
    .pipe(dest('dist'))
    .pipe(cleanCSS())
    .pipe(rename({ extname: '.min.css' }))
    .pipe(dest('dist'))
}

exports.default = parallel(js, css)
