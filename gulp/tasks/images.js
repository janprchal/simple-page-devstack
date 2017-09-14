const config = require('../config');
const gulp = require('gulp');
const imagemin = require('gulp-imagemin');

gulp.task('images-build', () => {
    return gulp.src(config.IMAGES_ALL + '/**/*.{jpg,jpeg,png,gif,svg}')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/www/img/'));
});
