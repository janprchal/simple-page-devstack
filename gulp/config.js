const
    DEVELOPMENT = true,

    /* PATH IS TAKEN FROM GULPFILE.JS */
    /* SVG */
    SVG_ALL_PATH = './www/svg/*.svg',
    SVG_BUILD = './www/svg-build/',
    SVG_SPRITE_NAME = 'sprite',

    /* browserSync */
    BS_PORT = 3000,
    BS_BASE_DIR = './',

    /* SCSS  */
    SCSS_ENTRY = './www/scss/main.scss',
    SCSS_ALL = './www/scss/**/*.scss',

    /* JS VENDORS */
    JS_ALL = './www/js/',
    JS_VENDOR = './www/js/vendor/**/*.js',
    JS_MAIN = './www/js/*.js',

    /* CSS */
    CSS_BUILD = './www/css/',

    TEMPLATES_ALL = './templates/**/*.html',

    IMAGES_ALL = './www/img';

module.exports = {
    DEVELOPMENT,

    SVG_ALL_PATH,
    SVG_BUILD,
    SVG_SPRITE_NAME,

    BS_PORT,
    BS_BASE_DIR,

    SCSS_ENTRY,
    SCSS_ALL,

    JS_ALL,
    JS_VENDOR,
    JS_MAIN,

    CSS_BUILD,

    TEMPLATES_ALL,
    IMAGES_ALL
};
