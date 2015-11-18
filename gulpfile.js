
var gulp = require('gulp');
var concat = require('gulp-concat');
var minifyCSS = require('gulp-minify-css');
var size = require('gulp-size')

var paths = {
	htmlSource: ['./src/index.html', './src/build.html'],
  cssSource: './src/css/**/*.css',
  extCss: './src/ext/css/**/*.css',
  jsSource: './src/js/**/*.js',
  htmlBuild: './build',
  jsBuild: './build/js',
  cssBuild: './build/css'
}

gulp.task('watch-folder', function() {  
  gulp.watch(paths.htmlSource, ['copy-html']);
});

gulp.task('copy-html', function() {  
  gulp.src(paths.htmlSource)
    .pipe(gulp.dest(paths.htmlBuild));
});

gulp.task('copy-js', function() {  
  gulp.src(paths.jsSource)
    .pipe(gulp.dest(paths.jsBuild));
});

gulp.task('bundle-css', function () {
    return gulp.src([paths.extCss, paths.cssSource])
        .pipe(concat('bundle.css'))
        .pipe(minifyCSS())
        .pipe(size())
        .pipe(gulp.dest(paths.cssBuild));
});

gulp.task('default', ['copy-html', 'copy-js', 'bundle-css', 'watch-folder'], function() {
})
