var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
 
sass.compiler = require('node-sass');
 
gulp.task('scss', function () {
    return gulp.src('./src/all.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('style.css'))
        .pipe(gulp.dest('./'));
});

gulp.task('scss:watch', function () {
    gulp.watch('./src/*.scss', ['scss']);
});

gulp.task('default', [ 'scss', 'scss:watch' ]);
