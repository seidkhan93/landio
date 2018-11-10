var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');
 
sass.compiler = require('node-sass');
 
gulp.task('scss', function () {
    return gulp.src([
        './src/all.scss',
        './stylesheets/main.scss',
    ])
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('./build/main.css'))
        .pipe(gulp.dest('./'));
});

gulp.task('autoprefixer', function () {
    return gulp.src('./build/main.css')
        .pipe(postcss([ autoprefixer() ]))
        .pipe(gulp.dest('./build/'));
});

gulp.task('minify', function () {
    gulp.src('./build/main.css')
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./build'));
});

gulp.task('scss:watch', function () {
    gulp.watch(['./src/*.scss', './stylesheets/main.scss'], [ 'scss' ]);
});

gulp.task('default', [ 'scss', 'scss:watch' ]);
gulp.task('production', [ 'scss', 'autoprefixer', 'minify' ]);
