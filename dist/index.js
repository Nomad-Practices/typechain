"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Block {
    constructor({ index, hash, previousHash, data, timestamp }) {
        this.index = index;
        this.hash = hash;
        this.previousHash = previousHash;
        this.data = data;
        this.timestamp = timestamp;
    }
}
const genisBlock = new Block({
    index: 0,
    hash: '2341909878678',
    previousHash: '',
    data: 'hello',
    timestamp: 123456,
});
let blockChain = [genisBlock];
console.log(blockChain);
//# sourceMappingURL=index.js.map