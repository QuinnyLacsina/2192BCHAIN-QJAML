// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract MQuizContract {
    address public owner;
    uint256 public age;
    uint256 public hoursWorked;
    uint256 public hourlyRate;
    uint256 public totalSalary;

    modifier onlyOwner() {
        require(msg.sender == owner, "Only the owner can call this function.");
        _;
    }

    modifier validHourlyRate(uint256 _rate) {
        require(_rate > 0, "Hours rate must be larger than 0.");
        _;
    }

    modifier validHoursWorked(uint256 _hrs) {
        require(_hrs > 0, "Hours worked must be greater than 0.");
        _;
    }

    constructor() {
        owner = msg.sender;
    }

    function setAge(uint256 _age) external {
        age = _age;
    }

    function setHrsWrk(uint256 _hrs) external validHoursWorked(_hrs){
        hoursWorked = _hrs;
    }

    function setRate(uint256 _rate) external validHourlyRate(_rate) onlyOwner() {
        hourlyRate = _rate;
    }

    function calculateTotSal() external onlyOwner {
        require(hourlyRate > 0 && hoursWorked > 0, "HOURLY RATE and HOURS WORKED must be greater than 0.");
        totalSalary = hourlyRate * hoursWorked;
    }

}