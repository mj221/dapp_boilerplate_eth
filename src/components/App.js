import React, { Component, useState } from 'react';

import detectEthereumProvider from '@metamask/detect-provider'

import './App.css';

var Web3 = require('web3');

// function App() {
//   const[count , setCount]=useState(0);
//   return (
//     <div className="App">
      
//     </div>
//   );
// }
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      account: '',
      loading: true
    }
  }

  componentDidMount = async () =>{
    provider = await detectEthereumProvider()
    if(provider){
      window.ethereum.sendAsync({
        method: "eth_accounts",
        params: [],
        jsonrpc: "2.0",
        id: new Date().getTime()
        } , async (error, result) =>{
            // console.log(result);
            if (result["result"].toString() !== "") {
              await this.loadWeb3();//addresses found. result["result"] contains wallet address
            }else {console.log("MetaMask account may not be connected");}//found not address, which mean this wallet is not logged in
        });
    }
    ethereum.on('accountsChanged', (accounts) => {
      // console.log("Account changed: ", accounts) 
      if (accounts[0] != null){
        this.setState({account: accounts[0]})  
      } else{
        this.setState({account: ''})
      }
    });

    ethereum.on('chainChanged', (chainId) => {
      window.location.reload();
    });
  }

  async loadWeb3 () {
    provider = await detectEthereumProvider()
    if(provider){
      const accounts = await ethereum.request({ method: 'eth_requestAccounts' })
                                      .catch((error) => {
                                        if (error.code === 4001) {
                                          console.log("User denied MetaMask. Please connect MetaMask again.")
                                          // User rejected request
                                        }
                                      });
      if(accounts !== null){
        console.log("Account:", accounts[0])
        this.setState({account: accounts[0]})
        this.loadBlockchainData()
      }
    }else{
      window.alert("Non-Ethereum browser detected. Try using MetaMask.")
    }
  }

  async loadBlockchainData(){
    const networkId = await ethereum.request({ method: 'eth_chainId' });
    let networkId_decimal = web3.utils.hexToNumberString(networkId);

    ///// Put rest of code here
  }

  render(){
    return(
      <div>
        <Navbar account={this.state.account} loadWeb3= {this.loadWeb3.bind(this)}/>
        
      </div>
    );
  }
}

export default App;
