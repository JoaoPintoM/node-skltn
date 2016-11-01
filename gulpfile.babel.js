import { default as gulp } from 'gulp';
import { default as sourcemaps } from 'gulp-sourcemaps';
import { default as babel } from 'gulp-babel';
import { default as del } from 'del';

const codeFolder = 'src';
const buildFolder = 'build';

const codeFiles = '/**/*.js';

const codePath = {
  source: codeFolder + codeFiles,
  destination: buildFolder,
};

function transpile({ source, destination, sourceRoot }, done) {
  gulp.src(source)
    .pipe(sourcemaps.init())
    .pipe(babel({}))
    .on('error', (error) => {
      // emit here
      console.log(error);
      this.emit('end');
      throw error;
    })
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(destination))
    .on('end', done);
}

gulp.task('clean', () => del([codePath.destination]));
gulp.task('transpile source', (done) => transpile(codePath, done));
gulp.task('build', ['transpile source'], () => {});
gulp.task('default', ['transpile source', 'watch'], () => {});
gulp.task('watch', () => {
  gulp.watch(codePath.source, ['transpile source']);
});
