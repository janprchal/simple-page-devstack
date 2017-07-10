const config = require('../config');
const gulp = require('gulp');

const favicons = require("gulp-favicons");
const gutil = require('gulp-util');

gulp.task("favicon-build", function () {
    return gulp.src("favico.png").pipe(favicons({
        appName: "Ariadna",
        appDescription: "Let your website do the talking",
        developerName: "Enrian Partners s.r.o.",
        developerURL: "http://enrian.com/",
        background: "#ffffff",
        path: "favicons/",
        url: "http://enrian.com/",
        display: "standalone",
        orientation: "portrait",
        start_url: "",
        version: 1.0,
        logging: false,
        online: false,
        html: "index.html",
        pipeHTML: true,
        replace: true
    }))
    .on("error", gutil.log)
    .pipe(gulp.dest("./dist/favicons/"));
});
