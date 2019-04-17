const config = require('../config');
const gulp = require('gulp');

const babel = require('gulp-babel');
const sourcemaps = require('gulp-sourcemaps');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');

gulp.task('scripts-vendors', () =>  {
    return gulp.src(config.JS_VENDOR)
        .pipe(sourcemaps.init())
        .pipe(babel({presets: ['es2015']}))
        .pipe(concat('vendors.js'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(config.JS_ALL));
});

gulp.task('scripts-build', () => {
    return gulp.src([config.JS_ALL + '!(main)*.js', config.JS_ALL + 'main.js'])
        .pipe(babel({presets: ['es2015']}))
        .pipe(concat('app.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./dist/www/js/'));
});
