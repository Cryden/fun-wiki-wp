var ngrok = require('ngrok'); // http tunnel
var browserSync = require('browser-sync');
var gulp = require('gulp');
var open = require("open"); // Open file in browser
var jade = require('gulp-pug');
var htmlPrettify = require('gulp-html-prettify');
var htmlv = require('gulp-html-validator'); // html5 validator - https://github.com/hoobdeebla/gulp-html-validator
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');
var notify = require("gulp-notify");

 var webpack = require("webpack");
 var webpackConfig = require("./webpack.config.js");
 var stream = require('webpack-stream');


gulp.task('dev:browser-sync', function(){
  browserSync.init ({
    server: './public'
	}, function (err, bs) {
   	ngrok.connect(bs.options.get('port'), function (err, url) {
   		console.log ('Your site here ' + url);
   			//open('https://developers.google.com/speed/pagespeed/insights/?url='+url);
   	}); 
	});
});

/*
gulp.task('dev:jade', function () {
	return gulp.src('src/jade/*.*')
	.pipe(jade().on('error',  notify.onError(
    {
      title:   "JADE ERROR",
      message: "Error: <%= error.message %>"
    }
  )))
  .pipe(htmlPrettify({indent_char: ' ', indent_size: 4}))
	.pipe(gulp.dest("./public"))
  //.pipe(htmlv({format: 'html'}))
  //.pipe(gulp.dest('./out'));
  .pipe(browserSync.reload({stream: true}));
});
*/

gulp.task('dev:sass', function(){
  return gulp.src('src/sass/*.sass')
  .pipe(sass().on('error',  notify.onError(
    {
      title:   "SASS ERROR",
      message: "Error: <%= error.message %>"
    }
  )))
  .pipe(gulp.dest('../fun-wiki/css'))
  .pipe(browserSync.reload({stream: true}));
});

gulp.task('dev:webpack', function(){
  return gulp.src('./src/js/main.js')
    .pipe(plumber())
    .pipe(stream(webpackConfig)).on('error',  notify.onError(
    {
      title:   "JavaScript ERROR",
      message: "Error: <%= error.message %>"
    }
  ))
    .pipe(gulp.dest('js'))
});

gulp.task('dev:fonts', function() {
  gulp.src('src/assets/fonts/**/*.{ttf,woff,eof,svg}')
  .pipe(gulp.dest('fonts'));
});

gulp.task('dev', ['dev:browser-sync', 'dev:sass', 'dev:fonts', 'dev:webpack'], function() {
  console.log('development_mode');
  gulp.watch('src/sass/**/*.sass', ['dev:sass']);
  //gulp.watch('src/jade/**/*.*', ['dev:jade']);
  gulp.watch('src/js/**/*.{js,vue}', ['dev:webpack']);
  gulp.watch('js/*.js', browserSync.reload);
});