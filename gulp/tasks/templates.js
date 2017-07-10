const config = require('../config');
const gulp = require('gulp');

const htmlmin = require('gulp-htmlmin');

gulp.task('templates-build', () => {
    return gulp.src(['./*.html', './templates/**/*.html'])
    .pipe(htmlmin({
        collapseWhitespace: true,
        minifyCSS: true,
    }))
    .pipe(gulp.dest('./dist/'));
});
