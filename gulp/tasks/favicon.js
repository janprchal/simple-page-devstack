const config = require('../config');
const gulp = require('gulp');
const fs = require('fs');
const realFavicon = require('gulp-real-favicon');

gulp.task("favicon-build", (done) => {
  realFavicon.generateFavicon({
    masterPicture: config.FAVICON_SOURCE,
    dest: "./dist/favicons/",
    iconsPath: "favicons/",
    design: {
      ios: {
        pictureAspect: 'noChange',
        assets: {
          ios6AndPriorIcons: false,
          ios7AndLaterIcons: false,
          precomposedIcons: false,
          declareOnlyDefaultIcon: true
        }
      },
      desktopBrowser: {},
      windows: {
        pictureAspect: 'noChange',
        backgroundColor: '#ffffff',
        onConflict: 'override',
        assets: {
          windows80Ie10Tile: false,
          windows10Ie11EdgeTiles: {
            small: false,
            medium: true,
            big: false,
            rectangle: false
          }
        }
      },
      androidChrome: {
      pictureAspect: 'noChange',
      themeColor: '#ffffff',
      manifest: {
       name: 'Enrian Partners a.s.',
       display: 'standalone',
       orientation: 'notSet',
       onConflict: 'override',
       declared: true
      },
      assets: {
       legacyIcon: false,
       lowResolutionIcons: false
      }
      },
      safariPinnedTab: {
       pictureAspect: 'blackAndWhite',
       threshold: 75,
       themeColor: '#ffffff'
    }
    },
    settings: {
      scalingAlgorithm: 'Mitchell',
      errorOnImageTooSmall: false
    },
    markupFile: config.FAVICON_JSON
  }, () => {
      done();
  });
});

// Inject the favicon markups in your HTML pages. You should run
// this task whenever you modify a page. You can keep this task
// as is or refactor your existing HTML pipeline.
gulp.task('inject-favicon-markups', () => {
  gulp.src(config.FAVICON_JSON)
    .pipe(realFavicon.injectFaviconMarkups(JSON.parse(fs.readFileSync(config.FAVICON_JSON)).favicon.html_code))
    .pipe(gulp.dest('./favicons/markup'));
});
