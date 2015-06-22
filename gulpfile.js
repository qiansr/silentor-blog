var gulp = require('gulp')
var minifyCss = require('gulp-minify-css')
var uglify = require('gulp-uglify')

DEST = 'vendor';
console.log(process.env);
var IS_DEV = process.env || false;

gulp.task('minify-css', function() {
    if (IS_DEV) {
        gulp.src('src/*.css')
            .pipe(gulp.dest(DEST));
    } else {
        gulp.src('src/*.css')
            .pipe(minifyCss())
            .pipe(gulp.dest(DEST));
    }

});

gulp.task('compress', function() {
    if (IS_DEV) {
        gulp.src('src/*.js')
            .pipe(gulp.dest(DEST));
    } else {
        gulp.src('src/*.js')
            .pipe(uglify())
            .pipe(gulp.dest(DEST));
    }

});

gulp.task('watch', ['minify-css', 'compress'], function() {
    gulp.watch('src/*', ['minify-css', 'compress'])
});

gulp.task('watch-dev', function() {
    IS_DEV = true;
    gulp.watch('src/*', ['minify-css', 'compress'])
});

gulp.task('default', ['watch'])