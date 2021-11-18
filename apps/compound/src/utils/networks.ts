enum CHAINS {
  MAINNET = 1,
  MORDEN = 2,
  ROPSTEN = 3,
  RINKEBY = 4,
  GOERLI = 5,
  KOVAN = 42,
  XDAI = 100,
  POLYGON = 137,
  ENERGY_WEB_CHAIN = 246,
  VOLTA = 73799,
}

const networkByChainId: {
  [key in CHAINS]: string;
} = {
  [CHAINS.MAINNET]: 'MAINNET',
  [CHAINS.MORDEN]: 'MORDEN',
  [CHAINS.ROPSTEN]: 'ROPSTEN',
  [CHAINS.RINKEBY]: 'RINKEBY',
  [CHAINS.GOERLI]: 'GOERLI',
  [CHAINS.KOVAN]: 'KOVAN',
  [CHAINS.XDAI]: 'XDAI',
  [CHAINS.POLYGON]: 'POLYGON',
  [CHAINS.ENERGY_WEB_CHAIN]: 'ENERGY_WEB_CHAIN',
  [CHAINS.VOLTA]: 'VOLTA',
};

export { CHAINS, networkByChainId };