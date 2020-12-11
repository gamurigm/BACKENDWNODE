gulp.task('serve', function(cb) {
    gulp.src('www')
        .pipe(server({
            livereload: true,
            open: true
            
        }));
});