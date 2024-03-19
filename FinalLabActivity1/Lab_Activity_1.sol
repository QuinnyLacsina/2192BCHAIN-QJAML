// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

contract EtherWallet{
    address payable public owner;

    constructor() {
        owner = payable(msg.sender);
    }

    receive() external payable {
        //receive ether
    }

    function withdraw(uint256 _amount)  public {
        require(msg.sender == owner, "Only owner can withdraw");
        // require(address(this).balance >= _amount, "Insufficient balance");
        owner.transfer(_amount);
    }

    function getBalance() external view returns (uint256){
        return address(this).balance;
    }
}

//Lacsina, Quinny Joyce Ann M.
//This shows the basic functionality for simple Ethereum wallet contract. It's crucial to thoroughly test and review smart contracts before
//deploying t5hem on the blockchain, especially for handling financial assets like Ether.