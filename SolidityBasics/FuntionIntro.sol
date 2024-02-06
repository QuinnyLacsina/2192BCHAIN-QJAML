// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

    //declares the start of a Solidity contract named "Functionintro"
contract FunctionIntro {
    //Functions can return multiple values.
    function add(uint x, uint y) external pure returns (uint) {
        return (x + y);
    }

    function sub(uint x, uint y) external pure returns (uint) {
        return (x - y);
    }

    function product(uint x, uint y) external pure returns (uint) {
        return (x * y);
    }

    function quotient(uint x, uint y) external pure returns (uint) {
        return (x / y);
    }
}

//Each functions returns a values.