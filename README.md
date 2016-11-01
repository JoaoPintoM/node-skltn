# DEVELOPMENT

I encourage you to use Node Version Manager a.k.a [NVM](https://github.com/creationix/nvm) to handle Node version on your computer.

This application has been written using __Node v7.0.0__

You must insall [gulp](http://gulpjs.com/) to use npm scripts.

```
npm install gulp -g
cd PROJECT_ROOT
npm run watch
npm start
```

# CONTRIBUTE

Please use [gitflow](https://github.com/nvie/gitflow) if you need to update/hotfix some stuff here. Thanks a lot !

Contact me for any PR at __maxime.sahroui@gmail.com__

# GULP

__Available commands__ :

* gulp
* gulp clean
* gulp build
* gulp watch

```
gulp.task('clean', () => del([codePath.destination]));
gulp.task('transpile source', (done) => transpile(codePath, done));
gulp.task('build', ['transpile source'], () => {});
gulp.task('default', ['transpile source', 'watch'], () => {});
gulp.task('watch', () => {
  gulp.watch(codePath.source, ['transpile source']);
});
```

# NPM SCRIPTS

__Available commands__ :

* npm start
* npm run watch
* npm run clean
* npm run build
* npm run prepublish
* npm run test
