WebdriverIO is a test automation framework that allows you to run tests based on the [Webdriver](https://w3c.github.io/webdriver/webdriver-spec.html) protocol and [Appium](http://appium.io/) automation technology. It provides support for your favorite BDD/TDD test framework and will run your tests locally or in the cloud using Sauce Labs, BrowserStack, TestingBot or LambdaTest.

## :office: WebdriverIO for Enterprise

Available as part of the Tidelift Subscription.

The maintainers of WebdriverIO and thousands of other packages are working with Tidelift to deliver commercial support and maintenance for the open source dependencies you use to build your applications. Save time, reduce risk, and improve code health, while paying the maintainers of the exact dependencies you use. [Learn more.](https://tidelift.com/subscription/pkg/npm-webdriverio?utm_source=npm-webdriverio&utm_medium=referral&utm_campaign=enterprise&utm_term=repo)

## :package: Packages

This repository contains some of the core packages of the WebdriverIO project. There are many wonderful [curated resources](https://github.com/webdriverio-community/awesome-webdriverio) the WebdriverIO community has put together.

__Did you build a WebdriverIO service or reporter?__ That's awesome! Please add it to our configuration wizard and docs (e.g. like in [this example commit](https://github.com/webdriverio/webdriverio/commit/3cb5937b968dfe93cf78871589019736a6c98d9e)) as well as to our [awesome-webdriverio](https://github.com/webdriverio-community/awesome-webdriverio) list. Thank you! 🙏 ❤️

### Core

- [webdriver](https://github.com/webdriverio/webdriverio/tree/main/packages/webdriver) - A Node.js bindings implementation for the W3C WebDriver and Mobile JSONWire Protocol
- [devtools](https://github.com/webdriverio/webdriverio/tree/main/packages/devtools) - A Chrome DevTools protocol binding that maps WebDriver commands into Chrome DevTools commands using Puppeteer
- [webdriverio](https://github.com/webdriverio/webdriverio/blob/main/packages/webdriverio) - Next-gen browser and mobile automation test framework for Node.js
- [@wdio/cli](https://github.com/webdriverio/webdriverio/tree/main/packages/wdio-cli) - A WebdriverIO testrunner command line interface

### Helper

- [@wdio/config](https://github.com/webdriverio/webdriverio/blob/main/packages/wdio-config) - A helper utility to parse and validate WebdriverIO options
- [@wdio/logger](https://github.com/webdriverio/webdriverio/tree/main/packages/wdio-logger) - A helper utility for logging of WebdriverIO packages
- [@wdio/protocols](https://github.com/webdriverio/webdriverio/tree/main/packages/wdio-protocols) - Utility package providing information about automation protocols
- [@wdio/repl](https://github.com/webdriverio/webdriverio/tree/main/packages/wdio-repl) - A WDIO helper utility to provide a repl interface for WebdriverIO
- [@wdio/reporter](https://github.com/webdriverio/webdriverio/tree/main/packages/wdio-reporter) - A WebdriverIO utility to help reporting all events
- [@wdio/runner](https://github.com/webdriverio/webdriverio/tree/main/packages/wdio-runner) - A WebdriverIO service that runs tests in arbitrary environments
- [@wdio/sync](https://github.com/webdriverio/webdriverio/tree/main/packages/wdio-sync) - A WebdriverIO plugin. Helper module to run WebdriverIO commands synchronously
- [@wdio/utils](https://github.com/webdriverio/webdriverio/tree/main/packages/wdio-utils) - A WDIO helper utility to provide several utility functions used across the project

### Reporter

- [@wdio/allure-reporter](https://github.com/webdriverio/webdriverio/tree/main/packages/wdio-allure-reporter) - A WebdriverIO reporter plugin to create Allure Test Reports
- [@wdio/concise-reporter](https://github.com/webdriverio/webdriverio/tree/main/packages/wdio-concise-reporter) - A WebdriverIO reporter plugin to create concise test reports
- [@wdio/dot-reporter](https://github.com/webdriverio/webdriverio/tree/main/packages/wdio-dot-reporter) - A WebdriverIO plugin to report in dot style
- [@wdio/junit-reporter](https://github.com/webdriverio/webdriverio/tree/main/packages/wdio-junit-reporter) - A WebdriverIO reporter that creates test results in XML format
- [@wdio/spec-reporter](https://github.com/webdriverio/webdriverio/tree/main/packages/wdio-spec-reporter) - A WebdriverIO plugin to report in spec style
- [@wdio/sumologic-reporter](https://github.com/webdriverio/webdriverio/tree/main/packages/wdio-sumologic-reporter) - A WebdriverIO reporter that sends test results to Sumologic for data analyses

### Services

- [@wdio/appium-service](https://github.com/webdriverio/webdriverio/tree/main/packages/wdio-appium-service) - A WebdriverIO service to start & stop Appium Server
- [@wdio/browserstack-service](https://github.com/webdriverio/webdriverio/tree/main/packages/wdio-browserstack-service) - A WebdriverIO service that provides a better integration into Browserstack
- [@wdio/crossbrowsertesting-service](https://github.com/webdriverio/webdriverio/tree/main/packages/wdio-crossbrowsertesting-service) - A WebdriverIO service that provides a better integration into CrossBrowserTesting
- [@wdio/devtools-service](https://github.com/webdriverio/webdriverio/tree/main/packages/wdio-devtools-service) - A WebdriverIO service that allows you to run Chrome DevTools commands in your tests
- [@wdio/firefox-profile-service](https://github.com/webdriverio/webdriverio/tree/main/packages/wdio-firefox-profile-service) - A WebdriverIO service that lets you define your Firefox profile in your wdio.conf.js
- [@wdio/sauce-service](https://github.com/webdriverio/webdriverio/tree/main/packages/wdio-sauce-service) - A WebdriverIO service that provides a better integration into Sauce Labs
- [@wdio/selenium-standalone-service](https://github.com/webdriverio/webdriverio/tree/main/packages/wdio-selenium-standalone-service) - A WebdriverIO service that automatically sets up a selenium standalone server
- [@wdio/shared-store-service](https://github.com/webdriverio/webdriverio/tree/main/packages/wdio-shared-store-service) - A WebdriverIO service to exchange data across processes
- [@wdio/testingbot-service](https://github.com/webdriverio/webdriverio/tree/main/packages/wdio-testingbot-service) - A WebdriverIO service that provides a better integration into TestingBot

### Runner

- [@wdio/local-runner](https://github.com/webdriverio/webdriverio/tree/main/packages/wdio-local-runner) - A WebdriverIO runner to run tests locally

### Framework Adapters

- [@wdio/cucumber-framework](https://github.com/webdriverio/webdriverio/tree/main/packages/wdio-cucumber-framework) - Adapter for [Cucumber](https://cucumber.io/) testing framework
- [@wdio/jasmine-framework](https://github.com/webdriverio/webdriverio/tree/main/packages/wdio-jasmine-framework) - Adapter for [Jasmine](https://jasmine.github.io/) testing framework
- [@wdio/mocha-framework](https://github.com/webdriverio/webdriverio/tree/main/packages/wdio-mocha-framework) - Adapter for [Mocha](https://mochajs.org/) testing framework.

### Others

- [eslint-plugin-wdio](https://github.com/webdriverio/webdriverio/tree/main/packages/eslint-plugin-wdio) - Eslint rules for WebdriverIO
- [@wdio/smoke-test-reporter](https://github.com/webdriverio/webdriverio/tree/main/packages/wdio-smoke-test-reporter) - A WebdriverIO utility to smoke test reporters for internal testing purposes
- [@wdio/smoke-test-service](https://github.com/webdriverio/webdriverio/tree/main/packages/wdio-smoke-test-service) - A WebdriverIO utility to smoke test services for internal testing purposes
- [@wdio/webdriver-mock-service](https://github.com/webdriverio/webdriverio/tree/main/packages/wdio-webdriver-mock-service) - A WebdriverIO service to stub all endpoints for internal testing purposes
