import { ethers } from "ethers";

const provider = ethers.getDefaultProvider("mainnet");

let listOfAccounts: string[] = ['0xb5d4f343412dc8efb6ff599d790074d0f1e8d430', '0x0020c5222a24e4a96b720c06b803fb8d34adc0af', '0xd1d8b2aae2ebb2acf013b803bc3c24ca1303a392'];

async function showBalance() {
	for (let acc of listOfAccounts) {
		getBalance(acc).then(console.log);
	}
}

const getBalance = async (acc : string) => {
	
  const balances = await provider.getBalance(acc);
	
	return balances;
};

showBalance().then(console.log);