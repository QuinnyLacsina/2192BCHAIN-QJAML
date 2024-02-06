// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract GlobalVariables {
    function globalVars() external view returns (address, uint, uint, address, uint) {
        address sender =  msg.sender;
        uint timestamp = block.timestamp;
        uint blockNum = block.number;
        address coinbase = block.coinbase;
        uint gasprice = tx.gasprice;
        return (sender, timestamp,blockNum, coinbase, gasprice);
    }
}

//In this global variable that you declare it will return its constant value.