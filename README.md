# DEVELOPMENT

I encourage you to use Node Version Manager a.k.a [NVM](https://github.com/creationix/nvm) to handle Node version on your computer.

Also, I recentrly move on [yarn](https://yarnpkg.com) instead of npm.

This application has been written using __Node v7.0.0__

You must insall [gulp](http://gulpjs.com/) to use scripts.

```
yarn add gulp -g
cd PROJECT_ROOT
yarn run watch
yarn start
```

```
yarn run prepublish
yarn test
```

# CONTRIBUTE

Please use [gitflow](https://github.com/nvie/gitflow) if you need to update/hotfix some stuff here. Thanks a lot !

You can contact me directly on github or at __maxime.sahroui@gmail.com__.

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
