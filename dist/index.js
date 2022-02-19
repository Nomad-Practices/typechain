"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const CryptoJS = __importStar(require("crypto-js"));
class Block {
    constructor({ index, hash, previousHash, data, timestamp }) {
        this.index = index;
        this.hash = hash;
        this.previousHash = previousHash;
        this.data = data;
        this.timestamp = timestamp;
    }
    static caculateBlockHash(index, previousHash, timestamp, data) {
        return CryptoJS.SHA256(index + previousHash + timestamp + data).toString();
    }
    static validateStructure(aBlock) {
        return (typeof aBlock.index === 'number' &&
            typeof aBlock.hash === 'string' &&
            typeof aBlock.previousHash === 'string' &&
            typeof aBlock.data === 'string' &&
            typeof aBlock.timestamp === 'number');
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
const getBlockChain = () => blockChain;
const getLatestBlock = () => getBlockChain()[blockChain.length - 1];
const getNewTimestamp = () => Math.round(new Date().getTime() / 1000);
const createNewBlock = (data) => {
    const previousBlock = getLatestBlock();
    const newIndex = previousBlock.index + 1;
    const nextTimestamp = getNewTimestamp();
    const newHash = Block.caculateBlockHash(newIndex, previousBlock.hash, nextTimestamp, data);
    return new Block({
        index: newIndex,
        hash: newHash,
        previousHash: previousBlock.hash,
        timestamp: nextTimestamp,
        data,
    });
};
const isBlockValid = (candidateBlock, previousBlock) => Block.validateStructure(candidateBlock) &&
    previousBlock.index + 1 === candidateBlock.index &&
    previousBlock.hash === candidateBlock.previousHash;
console.log(createNewBlock('hello world'));
console.log(createNewBlock('new worlde'));
//# sourceMappingURL=index.js.map