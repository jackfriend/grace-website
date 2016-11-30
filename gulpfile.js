var gulp      = require('gulp');
var sass      = require('gulp-sass');
var rename    = require('gulp-rename');
var prettify  = require('gulp-html-prettify');
var run       = require('gulp-run');
var browser   = require('browser-sync').create();

var paths = {
    dest: './dist',
    static: './dist/static',
    sass: './src/sass/imports.sass',
    js: './src/js/*.js',
    html: './src/**/*.html'
}

gulp.task('browser', function() {
    browser.init({
        server: {
            baseDir: "./dist"
        }
    });
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

gulp.task('html', function () {
    return gulp.src(paths.html)
    .pipe(gulp.dest(paths.dest));
});

gulp.task('prod', function () {
    gulp.start('html', 'sass', 'js');
});

gulp.task('default', ['html', 'sass', 'browser'], function () {
    gulp.watch('src/sass/**/*.*', ['sass']);
    gulp.watch('src/**/*.html', ['html']);
    gulp.watch('src/js/*.js', ['js']);
    gulp.watch('dist/**/*.*').on('change', browser.reload);
});
