import bitcoin from '../../jsonschema/bitcoin.json';

class Schemas {
    bitcoinSchema() {
        return bitcoin;
    }
}

export const schemas = new Schemas();
