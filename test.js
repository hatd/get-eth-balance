import GetEthBalance from './index.js';

const getEthBlance = new GetEthBalance()
getEthBlance.getBalance("0x65DB1a5ac48d4A97dC0A104D8276d7017208A975").then(balance => { console.log(balance) })
