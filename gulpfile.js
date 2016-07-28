const eslint = require('gulp-eslint');
const gulp = require('gulp');

const ignoreList = [
  '!**/node_modules/**/*',
];

const files = {
  js: [
    '**/src/*.js',
    'index.ios.js',
  ],
};

gulp.task('lint-js', () =>
  gulp.src(files.js.concat(ignoreList))
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())
);

gulp.task('default', ['lint-js']);
