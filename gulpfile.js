var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
 
sass.compiler = require('node-sass');
 
gulp.task('scss', function () {
    return gulp.src([
        './src/all.scss',
        './stylesheets/main.scss',
    ])
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('style.css'))
        .pipe(gulp.dest('./'));
});

gulp.task('autoprefixer', function () {
    return gulp.src('./style.css')
        .pipe(postcss([ autoprefixer() ]))
        .pipe(gulp.dest('./'));
});

gulp.task('scss:watch', function () {
    gulp.watch(['./src/*.scss', './stylesheets/main.scss'], [ 'scss' ]);
});

gulp.task('default', [ 'scss', 'scss:watch' ]);
gulp.task('production', [ 'scss', 'autoprefixer' ]);
