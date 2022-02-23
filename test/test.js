// import {tokens, EVM_REVERT} from './helpers'
const {tokens, EVM_REVERT, ETHER_ADDRESS, ether} = require('./helpers')

const _ = artifacts.require("./_")

require('chai').use(require('chai-as-promised')).should()


contract('_', ([deployer, user1]) => {
	let _

	beforeEach(async()=>{
		_ = await _.new()
	})

	describe('deployment', () => {
		it('Success', async () => {
			
		})
	})

})