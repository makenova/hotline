var gulp = require('gulp');
var uglify = require('gulp-uglify');

gulp.task('ugly', function() {
  gulp.src('./src/app.js')
  .pipe(uglify())
  .pipe(gulp.dest('./dist/'));
});

gulp.task('watch', function() {
  gulp.watch('./src/*', function(){
    gulp.run('ugly');
  });
});

gulp.task('default', ['ugly', 'watch']);
