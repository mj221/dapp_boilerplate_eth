const _  = artifacts.require("_");

const Web3 = require('web3');
const web3 = new Web3('http://127.0.0.1:7545');

const wait = (seconds) => {
  const milliseconds = seconds * 1000
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}

// seeding exchange
module.exports = async function(callback) {
  
  try{
    const accounts = await web3.eth.getAccounts()



  }catch(error){
    console.log(error)
  }

  callback()
};


// truffle exec scripts/script1.js