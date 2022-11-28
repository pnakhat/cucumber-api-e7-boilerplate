import { context } from '../../data/Context';
import _, { constant, map } from 'underscore';
import request from 'supertest';
import { schemas } from '../constants/schema';
import { World } from '@cucumber/cucumber';
import jsonSchema from 'jsonschema';
const validate = jsonSchema.validate;
let apiToken;
let userResponse;

class Common {
    validateBitcoinSchema(response, schemaName) {
        const errorInfo = validate(response, schemas.bitcoinSchema());
        return errorInfo;
    }

    async getCall(uri) {
        return request(process.env.API_URL)
            .get(uri)
            .expect(200)
            .then((res) => {
                return res.text;
            });
    }
}

export const common = new Common();
