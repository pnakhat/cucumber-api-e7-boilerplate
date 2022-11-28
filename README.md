cucumber-api-e7-boilerplate

=================

These tests are developed in JS with [Supertest](https://github.com/visionmedia/supertest) and [Cucumber](https://cucumber.io/)  

Requirements
---------------

- node >= 10.15.x - [how to install Node](https://nodejs.org/en/download/)
- yarn >= 1.16.x - [how to install Yarn](https://yarnpkg.com/en/docs/install#debian-stable)

Getting Started
---------------

Install the dependencies:

```bash
yarn install
```
```

```bash
yarn tests:bdd
```



Reports
---------------


Run this command to generate the allure report in the directory `./test-report/allure-report`:

```bash
yarn report:generate
```

You can run this command to start a server on your machine and open the allure report on the browser:

```bash
yarn report:open
```

Also, you can see [Timeline report](https://github.com/QualityOps/wdio-timeline-reporter) in `./test-report/timeline`

Eslint and Prettier
---------------

Run check lint:

```bash
yarn code:check
```

Run format lint:

```bash
yarn code:format
```
