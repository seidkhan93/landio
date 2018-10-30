var gulp = require('gulp');
var sass = require('gulp-sass');
 
sass.compiler = require('node-sass');
 
gulp.task('scss', function () {
    return gulp.src('./src/all.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./style.css'));
});

gulp.task('scss:watch', function () {
    gulp.watch('./src/*.scss', ['scss']);
});

gulp.task('default', [ 'scss:watch' ]);
