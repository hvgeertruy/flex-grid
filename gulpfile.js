var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer');

gulp.task('styles', function() {
    gulp.src('style/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(gulp.dest('build'));
});

gulp.task('watch', function() {
    gulp.watch('style/style.scss', ['styles']);
});