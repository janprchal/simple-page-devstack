const config = require('./gulp/config');
const gulp = require('gulp');
const requireDir = require('require-dir');

requireDir('./gulp/tasks');

gulp.task('default', ['serve']);
gulp.task('build', ['scripts-build', 'styles-build', 'images-build', 'svg-build', 'templates-build', 'favicon-build', 'fonts']);
