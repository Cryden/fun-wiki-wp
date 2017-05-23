var gulp = require('gulp');

var sass = require('gulp-sass');

var webpack = require('webpack');
var gulpWebpack = require('gulp-webpack');

gulp.task('sass', function(){
  return gulp.src('source/sass/*.sass')
  .pipe(sass())
  .pipe(gulp.dest('../theme/css'))
});

gulp.task('fonts', function() {
  gulp.src('source/assets/fonts/**/*.{ttf,woff,eof,svg}')
  .pipe(gulp.dest('../theme/fonts'));
});

gulp.task('pug', function() {
  gulp.src('source/jade/**/*.pug')
  .pipe(gulp.dest('../theme/templates'));
});

gulp.task('webpack', function(){
  return gulp.src('source/js/main.js')
    .pipe(gulpWebpack(require('./webpack.config.js'), webpack))
    .pipe(gulp.dest('../theme/js'))
});

gulp.task('dev', ['pug', 'sass', 'fonts', 'webpack'], function() {
  gulp.watch('source/sass/**/*.sass', ['sass']);
  gulp.watch('source/jade/**/*.*', ['pug']);
  gulp.watch('source/js/**/*.{js,vue}', ['webpack']);
  //gulp.watch('js/*.js', browserSync.reload);
});

gulp.task('default', ['dev']);