import { setDefaultTimeout, After, Before } from '@cucumber/cucumber';
import request from 'supertest';

setDefaultTimeout(60 * 1000);

Before({ timeout: 60 * 1000 }, function () {});

After(function (scenarioResult) {});
