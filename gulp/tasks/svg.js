const config = require('../config');
const gulp = require('gulp');

// Task require
const path = require('path');
const rename = require('gulp-rename');
const browserSync = require('browser-sync');
const svgmin = require('gulp-svgmin');
const svgstore = require('gulp-svgstore');

gulp.task('svg-sprite', () => {
    var spriteName = config.SVG_SPRITE_NAME;

    return gulp.src(config.SVG_ALL_SOURCE)

        .pipe(svgmin((file) => {
            const prefix = path.basename(file.relative, path.extname(file.relative));
            /* dynamicke jmeno sprite folter name */
            // spriteName = path.dirname(file.relative);

            return {
              plugins: [{
                  cleanupIDs: {
                      // prefix pro id jednotlivych casti svg
                      prefix: prefix + '-',
                      minify: false
                  }
              }]
          };
        }))
        .pipe(svgstore({
            inlineSvg: true
        }))
        .pipe(rename((file) => {
            file.basename = spriteName;
            return file;
        }))
        .pipe(gulp.dest(config.SVG_BUILD))
        .pipe(browserSync.stream());
});

gulp.task('svg-build', () => {
    return gulp.src(config.SVG_BUILD + '/*.svg')
        .pipe(gulp.dest('./dist/www/svg'));
});

gulp.task('svg', ['svg:sprite']);
