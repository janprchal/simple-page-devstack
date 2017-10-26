const config = require('../config');
const gulp = require('gulp');

// Task require
const gulpif = require('gulp-if');
const rename = require('gulp-rename');
const autoprefixer = require('autoprefixer');
const browserSync = require('browser-sync');
const cssnano = require('cssnano');
const flexbugsFixes = require('postcss-flexbugs-fixes');
const postcss = require('gulp-postcss');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const concat = require('gulp-concat-css');
const split =  require('postcss-split');

gulp.task('styles', () => {
    const postCssPlugins = [
        flexbugsFixes,
        autoprefixer({
            browsers: ['last 6 version', 'IE 10', 'IE 11', 'iOS >=7']
        })
    ];

    return gulp.src(config.SCSS_ENTRY)
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss(postCssPlugins))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(config.CSS_BUILD))
        .pipe(browserSync.stream());
});


//  TODO - critical CSS
gulp.task('styles-build', ['styles'], () => {
    const postcssDistPlugins = [
        cssnano({
            autoprefixer: { browsers: ['last 6 version', 'IE 10', 'IE 11', 'iOS >=7'] },
            save: true
        })
    ];

    return gulp.src(config.CSS_BUILD + '*.css')
        .pipe(postcss(postcssDistPlugins))
        .pipe(gulp.dest('./dist/www/css/'));
});


gulp.task('fonts', () => {
    return gulp.src('./www/fonts/**/*')
        .pipe(gulp.dest('./dist/www/fonts/'));
});
