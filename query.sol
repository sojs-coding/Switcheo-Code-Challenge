// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.4.16 <0.9.0;

contract QueryTokenBalances {
	function getBalances(string memory tempAddr, string[] memory tokens) public view returns (uint256){
		address addr = address(bytes20(bytes(tempAddr)));
		return addr.balance;
	}
}