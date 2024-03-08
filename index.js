import Web3 from 'web3';
import Web3HttpProvider from 'web3-providers-http';

const DEFAULT_RPC = 'https://rpc.ankr.com/eth'

class GetEthBalance {
    async getBalance(address, rpc = DEFAULT_RPC, libName = undefined) {
        const web3 = new Web3(new Web3HttpProvider(rpc));
        const balance = await web3.eth.getBalance(address)
        return web3.utils.fromWei(balance, 'ether')
    }
}

export default GetEthBalance;
