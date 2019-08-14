const config = require('./gulp/config');
const gulp = require('gulp');
const requireDir = require('require-dir');

requireDir('./gulp/tasks');

// Default, create vendors, svg-sprite and runs server
gulp.task('default', gulp.series('scripts-vendors', 'svg-sprite', 'serve'));
gulp.task('build', gulp.series('scripts-build', 'styles-build', 'images-build', 'svg-build', 'templates-build', 'favicon-build', 'fonts'));
