// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract MyFinalActivity2{
    address payable public owner;
    uint256 public creationTime;
    uint256 public constant INITIAL_ETH_AMOUNT = 2 ether;
    uint256 public remainingEth;

    event EtherReceived(address indexed sender, uint256 amount);
    event EtherSent(address indexed recipient, uint256 amount);

    modifier onlyOwner{
        require(msg.sender == owner, "Only the owner can call this function");
        _;
    }

    constructor() {
        owner = payable(msg.sender);
        creationTime = block.timestamp;
        remainingEth = INITIAL_ETH_AMOUNT;
    }

    receive() external payable { 
        emit EtherReceived(msg.sender, msg.value);
    }

    function ReceivedAndEmit() external payable {

    }

    function getBalance() external view returns (uint256){
        return address(this).balance;
    }

    function sendEther(address payable _recipient, uint256 _amount) external onlyOwner{
        require(_amount <= remainingEth, "Insufficient balance");
        _recipient.transfer(_amount);
        remainingEth -= _amount;
        emit EtherSent(_recipient, _amount);
    }

    function destroy() external onlyOwner{
        selfdestruct(owner);
    }
    
}

//Lacsina, Quinny Joyce Ann M.
//This shows us about handling transactions and ending contracts in Ethereum. 
//It shows us how crucial it is to control ownership and keep records of events for clear communication. 
//Including a self-destruct option reminds us to close contracts carefully and manage assets responsibly, 
//highlighting the critical need for security and trust in decentralized systems.