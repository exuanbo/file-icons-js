const gulp = require('gulp')
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
    .pipe(gulp.dest('dist'))
}

function css () {
  return gulp.src(['./styles/icons.less'])
    .pipe(less({
      paths: [path.join(__dirname, 'styles')]
    }))
    .pipe(cleanCSS())
    .pipe(rename('file-icons.min.css'))
    .pipe(gulp.dest('dist'))
}

exports.default = gulp.parallel(js, css)
