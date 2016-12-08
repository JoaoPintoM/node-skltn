# DEVELOPMENT

I encourage you to use Node Version Manager a.k.a [NVM](https://github.com/creationix/nvm) to handle Node version on your computer.

Also, I recently move on [yarn](https://yarnpkg.com) instead of npm. You can see some example why it's more usefull [here](https://www.sitepoint.com/yarn-vs-npm/).

This application has been written using __Node lts/boron (v6.9.1)__

You must install [gulp](http://gulpjs.com/) to use scripts.

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

# YARN SCRIPTS

__Available commands__ :

* yarn start
* yarn test
* yarn run watch
* yarn run clean
* yarn run build
* yarn run prepublish
* yarn run cover
