/**
 * Created by vagrant on 5/12/16.
 */

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename');

gulp.task('scripts', function () {
    return gulp.src(['bower_components/angular/angular.min.js','bower_components/angular-ui-router/release/angular-ui-router.min.js','bower_components/jquery/dist/jquery.min.js','bower_components/bootstrap/dist/js/bootstrap.min.js'])
        .pipe(concat('dependencies.js'))
        .pipe(gulp.dest('public/js'));
});

gulp.task('sass-css', function () {
    return gulp.src('public/scss/main.scss')
        .pipe(sass())
        .pipe(gulp.dest('public/css'));
});

gulp.task('copy-css', function () {
    return gulp.src('bower_components/bootstrap/dist/css/bootstrap.min.css')
        .pipe(gulp.dest('public/css'));
});

gulp.task('default', ['scripts', 'sass-css', 'copy-css']);