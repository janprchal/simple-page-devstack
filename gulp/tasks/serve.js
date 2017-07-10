const config = require('../config');
const gulp = require('gulp');

// Task require
const gutil = require('gulp-util');
const browserSync = require('browser-sync');
const copyToClipboard = require('copy-paste').copy;
const runSequence = require('run-sequence');
//, ['prepare']
gulp.task('serve', () => {
    browserSync({
        port: config.BS_PORT,
        server: {
            baseDir: config.BS_BASE_DIR
        },
        open: true
    }, () => copyToClipboard('localhost:' + config.BS_PORT, () => gutil.log(gutil.colors.green('Local server address has been copied to your clipboard'))));


   /* Ready for addition tasks */
   gulp.watch(config.SCSS_ALL, ['styles']);
   // gulp.watch(config.TEMPLATES_ALL);
   // gulp.watch(config.TEMPLATES_ALL).on('change', browserSync.reload());
   // watch(config.JS_ALL, () => browserSync.reload());

    // watch(config.CSS_ALL, () => runSequence(['styles', 'styleguide']));
    // watch(config.JS_ALL, ['eslint:app']);
    // watch(config.IMAGES_ALL, ['images', 'tpl']);
    // watch(config.SVG_SPRITE_ALL, ['svg', 'tpl']);
    // watch(config.TEMPLATE_ALL, ['tpl']);
});
