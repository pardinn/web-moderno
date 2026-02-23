const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const watch = require('gulp-watch');

function servidor() {
  browserSync.init({
    server: {
      baseDir: 'build',
    },
    port: 8080,
    open: true,
    ui: false,
  });
  return undefined;
}

function monitorarArquivos(cb) {
  watch('src/**/*.html', () => {
    gulp.series('appHTML')();
    browserSync.reload('*.html');
  });
  watch('src/**/*.scss', () => {
    gulp.series('appCSS')();
    browserSync.reload('*.css');
  });
  watch('src/**/*.js', () => {
    gulp.series('appJS')();
    browserSync.reload('*.js');
  });
  watch('src/assets/imgs/*.*', () => {
    gulp.series('appIMG')();
    browserSync.reload('*.html');
  });
  return cb();
}

module.exports = {
  monitorarArquivos,
  servidor,
};
