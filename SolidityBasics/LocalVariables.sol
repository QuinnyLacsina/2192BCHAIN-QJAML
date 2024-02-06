// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract LocalVariables {
    uint public i;
    bool public b;
    uint public a;
    address public myAddress;

    function foo() external {
        uint x = 123;
        uint y = 567;
        bool f = false;

        //more code
        x += 456;
        y += x;
        f = true;

        i = 123;
        a = x; //456 + 123
        b = true;
        myAddress = address(1);
        
    }
}

//When you are not yet clicking the foo, the values that appears are false or 0. Then by clicking the it
//will show the values of each variables. Upon clicking the variable a, it gets the sum of 456 and 123. 
//While upon clicking the variable b the result will became true and upon clicking the variable i it will
//appear the value of i and if you click the myAddress it will appear its value.