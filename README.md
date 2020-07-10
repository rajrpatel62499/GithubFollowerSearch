# Install this app
  -> download project
  -> cd project
  -> npm install
  -> ng serve
  
# Deploy app to Github Pages
  -> first install angular-cli-ghpages using npm
        -> npm  install -g angular-cli-ghpages
  -> ng build --prod --base-href=https://rajrpatel62499.github.io/GithubFollowerSearch/ --output-path dist
  -> >ngh [will automatically deploy to github repo wiht ghpages branch]
  [ For Short version]
  add "deploy:gh": "ng build --prod --base-href=https://rajrpatel62499.github.io/GithubFollowerSearch/ --output-path dist && ngh"
  then npm run deploy:gh

# Firebase Deploy
  npm install -g firebase-tools
  firebase login
  firebase init
  ng build --prod --output-path dist
  firebase deploy

# AngularLearn

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.9.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
