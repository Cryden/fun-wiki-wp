const gulp = require('gulp');

const sass = require('gulp-sass');

const imagemin = require('gulp-imagemin');

const webpack = require('webpack');
var gulpWebpack = require('webpack-stream');

const browserSync = require('browser-sync');

const ngrok = require('ngrok');

gulp.task('sass', function(){
  return gulp.src('source/sass/*.sass')
  .pipe(sass())
  .pipe(gulp.dest('../theme/css'))
  .pipe(browserSync.reload({stream: true}));
});

gulp.task('fonts', function() {
  return gulp.src('source/assets/fonts/**/*.{ttf,woff,eof,svg}')
  .pipe(gulp.dest('../theme/fonts'));
});

gulp.task('pug', function() {
  return gulp.src('source/jade/**/*.pug')
  .pipe(gulp.dest('../theme/templates'));
});

gulp.task('webpack', function(){
  return gulp.src('source/js/main.js')
    .pipe(gulpWebpack(require('./webpack.config.js'), webpack))
    .pipe(gulp.dest('../theme/js'))
});

gulp.task('images', function(cb) {
  return gulp.src('source/assets/images/**/*.{png,jpg,gif,jpeg}')
    .pipe(imagemin())
    .pipe(gulp.dest('../theme/images'))
});

gulp.task('browser-sync', function() {
    console.log ('http://fun-wiki.loc/');
    browserSync.init ({
        proxy: 'http://fun-wiki.loc/',
        notify: false
    }, function (err, bs) {
      ngrok.connect(bs.options.get('port'), function (err, url) {
        console.log ('Your site here ' + url);
      //open('https://developers.google.com/speed/pagespeed/insights/?url='+url);
      })
    })
});


gulp.task('dev', ['pug', 'sass', 'fonts', 'webpack', 'images', 'browser-sync'], function() {
  gulp.watch('source/sass/**/*.sass', ['sass']);
  gulp.watch('source/jade/**/*.*', ['pug', browserSync.reload]);
  gulp.watch('source/js/**/*.{js,vue}', ['webpack', browserSync.reload]);
  //gulp.watch('js/*.js', browserSync.reload);
});

gulp.task('default', ['dev'])