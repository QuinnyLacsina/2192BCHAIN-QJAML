// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract MappingExample {
    //Mapping Demo
    mapping(address => uint256) public valueMapping;

    //Constructor
    constructor() {
        valueMapping[msg.sender] = 100;
    }

    //Modifier Demo
    modifier nonZeroValue(uint256 _value) {
        require(_value != 0, "Value cannot be zero");
       _;
    }

    modifier valueHasBeenSet() {
        //Error Handling Demo
        require(valueMapping[msg.sender] != 0, "No value set for sender");
       _;
    }

    function setValue(uint256 _value) public nonZeroValue(_value) {
        //Condition
        if (_value > valueMapping[msg.sender]){
        valueMapping[msg.sender] = _value; 
        }
    }
    
    function getValue() public view valueHasBeenSet returns (uint256) {
        return valueMapping[msg.sender];
    }
    
}