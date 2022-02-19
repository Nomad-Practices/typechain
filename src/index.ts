import * as CryptoJS from 'crypto-js'

interface IBlock {
  index: number
  hash: string
  previousHash: string
  data: string
  timestamp: number
}

class Block {
  public index: number
  public hash: string
  public previousHash: string
  public data: string
  public timestamp: number
  constructor({ index, hash, previousHash, data, timestamp }: IBlock) {
    this.index = index
    this.hash = hash
    this.previousHash = previousHash
    this.data = data
    this.timestamp = timestamp
  }

  static caculateBlockHash(
    index: number,
    previousHash: string,
    timestamp: number,
    data: string
  ): string {
    return CryptoJS.SHA256(index + previousHash + timestamp + data).toString()
  }

  static validateStructure(aBlock: Block): boolean {
    return (
      typeof aBlock.index === 'number' &&
      typeof aBlock.hash === 'string' &&
      typeof aBlock.previousHash === 'string' &&
      typeof aBlock.data === 'string' &&
      typeof aBlock.timestamp === 'number'
    )
  }
}

const genisBlock: Block = new Block({
  index: 0,
  hash: '2341909878678',
  previousHash: '',
  data: 'hello',
  timestamp: 123456,
})

let blockChain: Array<Block> = [genisBlock]

const getBlockChain = (): Array<Block> => blockChain
const getLatestBlock = (): Block => getBlockChain()[blockChain.length - 1]
const getNewTimestamp = (): number => Math.round(new Date().getTime() / 1000)
const createNewBlock = (data: string): Block => {
  const previousBlock: Block = getLatestBlock()
  const newIndex: number = previousBlock.index + 1
  const nextTimestamp: number = getNewTimestamp()
  const newHash: string = Block.caculateBlockHash(
    newIndex,
    previousBlock.hash,
    nextTimestamp,
    data
  )
  const newBlock: Block = new Block({
    index: newIndex,
    hash: newHash,
    previousHash: previousBlock.hash,
    timestamp: nextTimestamp,
    data,
  })
  addBlock(newBlock)
  return newBlock
}

const getHashForBlock = (aBlock: Block): string =>
  Block.caculateBlockHash(
    aBlock.index,
    aBlock.previousHash,
    aBlock.timestamp,
    aBlock.data
  )

const isBlockValid = (candidateBlock: Block, previousBlock: Block): boolean =>
  Block.validateStructure(candidateBlock) &&
  previousBlock.index + 1 === candidateBlock.index &&
  previousBlock.hash === candidateBlock.previousHash &&
  getHashForBlock(candidateBlock) === candidateBlock.hash

const addBlock = (candidateBlock: Block): void => {
  if (isBlockValid(candidateBlock, getLatestBlock())) {
    blockChain.push(candidateBlock)
  }
}

createNewBlock('second Block')
createNewBlock('third Block')
createNewBlock('fourth Block')

console.log(blockChain)

export {}
