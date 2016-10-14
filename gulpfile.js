var gulp      = require('gulp');
var pug       = require('gulp-pug');
var sass      = require('gulp-sass');
var rename    = require('gulp-rename');
var prettify  = require('gulp-html-prettify');
var browser   = require('browser-sync').create();

var paths = {
    dest: './dist',
    static: './dist/static',
    pug: './src/index.pug',
    sass: './src/sass/imports.sass',
    js: './src/js/*.js'
}

gulp.task('browser', function() {
    browser.init({
        server: {
            baseDir: "./dist"
        }
    });
});

gulp.task('pug', function () {
    return gulp.src(paths.pug)
    .pipe(pug())
    .pipe(prettify({indent_char: ' ', indent_size: 2}))
    .pipe(rename('/index.html'))
    .pipe(gulp.dest(paths.dest));
});

gulp.task('sass', function () {
    return gulp.src(paths.sass)
    .pipe(sass().on('error', sass.logError))
    .pipe(rename('/main.css'))
    .pipe(gulp.dest(paths.static));
});

gulp.task('js', function () {
    return gulp.src(paths.js)
    .pipe(gulp.dest(paths.static));
});

gulp.task('default', ['pug', 'sass', 'browser'], function () {
    gulp.watch('src/sass/**/*.*', ['sass']);
    gulp.watch('src/**/*.pug', ['pug']);
    gulp.watch('src/js/*.js', ['js']);
    gulp.watch('dist/**/*.*').on('change', browser.reload);
});
