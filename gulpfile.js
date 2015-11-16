
var gulp = require('gulp');
var concat = require('gulp-concat');
var minifyCSS = require('gulp-minify-css');
var size = require('gulp-size')

var paths = {
	source: ['./src/index.html', './src/build.html'],
	dest: './build',
  css: './src/css/**/*.css',
  extCss: './src/ext/css/**/*.css',
  buildDir: './build',
  cssBuild: './build/css'
}

gulp.task('watch-folder', function() {  
  gulp.watch(paths.source, ['copy-folder']);
});

gulp.task('copy-folder', function() {  
  gulp.src(paths.source)
    .pipe(gulp.dest(paths.dest));
});

gulp.task('bundle-css', function () {
    return gulp.src([paths.extCss, paths.css])
        .pipe(concat('bundle.css'))
        .pipe(minifyCSS())
        .pipe(size())
        .pipe(gulp.dest(paths.cssBuild));
});

gulp.task('default', ['bundle-css', 'watch-folder'], function() {
})
