var gulp = require('gulp'),
	htmlmin = require('gulp-htmlmin'),
	cssmin = require('gulp-minify-css'),
	jsmin = require('gulp-uglify'),
	imgmin = require('gulp-imagemin'),
	concat = require('gulp-concat'),
	rename = require('gulp-rename');

gulp.task('myhtml',function(){
	return gulp.src('./*.html')
		.pipe(htmlmin({collapseWhitespace: true}))
		.pipe(gulp.dest('.'));
});

gulp.task('mycss',function(){
	return gulp.src('./css/*.css')
		.pipe(cssmin())
		.pipe(concat('style.css'))
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest('./css'));
});

gulp.task('myjs',function(){
	return gulp.src('./js/*.js')
		.pipe(jsmin())
		.pipe(concat('main.js'))
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest('./js'));
});

gulp.task('myimgs',function(){
	return gulp.src('./images/*.*')
		.pipe(imgmin())
		.pipe(gulp.dest('./images'));
});

gulp.task('default',['myhtml','mycss','myjs','myimgs']);