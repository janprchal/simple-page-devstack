const
    DEVELOPMENT = true,

    /* PATH IS TAKEN FROM GULPFILE.JS */
    /* SVG */
    SVG_ALL_SOURCE = './www/svg-source/*.svg',
    SVG_BUILD = './www/svg/',
    SVG_SPRITE_NAME = 'svg-sprite',

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

    TEMPLATES_ALL = './**/*.html',

    IMAGES_ALL = './www/img',

    FAVICON_SOURCE = './favico.svg',
    FAVICON_JSON = 'faviconData.json';

module.exports = {
    DEVELOPMENT,

    SVG_ALL_SOURCE,
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
    IMAGES_ALL,

    FAVICON_SOURCE,
    FAVICON_JSON
};
