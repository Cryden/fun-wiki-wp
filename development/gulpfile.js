var gulp = require('gulp');

var sass = require('gulp-sass');

var webpack = require('webpack-stream');


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
    .pipe(webpack(require("./webpack.config.js")))
    .pipe(gulp.dest('../theme/js'))
});

gulp.task('dev', ['pug', 'sass', 'fonts', 'webpack'], function() {
  console.log('development_mode');
  //gulp.watch('src/sass/**/*.sass', ['dev:sass']);
  //gulp.watch('src/jade/**/*.*', ['dev:jade']);
  //gulp.watch('src/js/**/*.{js,vue}', ['dev:webpack']);
  //gulp.watch('js/*.js', browserSync.reload);
});