// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

//Data types - values and references

contract ValueTypes {
    bool public b = true;
    uint public u = 123; //uint = uint256 0 to 2**256 - 1
                         //       uint8   0 to 2**8 - 1
                         //       uint16  0 to 2**16 - 1

    int public i = -123;//int = int256     -2**256 to 2**255 -1
                        //      int128     -2**127 to 2**127 -1
    int public minInt = type(int).min;
    int public maxInt = type(int).max;

    address public addr = 0xf9139890d955447575F496a9fa1d2A2D5dE59241;
    bytes32 public b32 = 0xe5ec4da6e7bec3c3a6f4bf427985bbe60172efdc400c31ec43bc97311a5b27a1;
}

//Upon clicking the buttons inside the contract value types, the values of each variables will appear.
