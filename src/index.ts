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
}

const genisBlock: Block = new Block({
  index: 0,
  hash: '2341909878678',
  previousHash: '',
  data: 'hello',
  timestamp: 123456,
})

let blockChain: Array<Block> = [genisBlock]
console.log(blockChain)
export {}
