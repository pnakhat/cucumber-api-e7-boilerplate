import { Given, When, Then } from '@cucumber/cucumber';
import { expect, should } from 'chai';
import * as chai from 'chai';
import { BitcoinService } from '../services/Bitcoin.service';
import _, { map } from 'underscore';
import { common } from '../support/common';
chai.use(require('chai-things'));
chai.use(require('chai-like'));

let bitcoinService = new BitcoinService();
let response;

Given('I have valid bitcoin service', function () {});

When('I attempt to get the latest price', async function () {
    response = await bitcoinService.getPrice();
    this.log(response);
});

Then('I should be able to get the price', function () {
    let prices = JSON.parse(response);
    let USDprice = Number(prices.bpi.USD.rate.replace(',', ''));
    expect(USDprice).to.be.above(0);
});

Then('the schema matches', function () {
    expect(common.validateBitcoinSchema().errors).to.have.lengthOf(0);
});
