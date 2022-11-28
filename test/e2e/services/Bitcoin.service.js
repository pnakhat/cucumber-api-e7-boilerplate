import request from 'supertest';
import { common } from '../support/common';
export class BitcoinService {
    async getPrice() {
        return await common.getCall('bpi/currentprice.json');
    }
}
