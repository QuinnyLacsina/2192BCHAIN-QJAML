// SPDX-License-Identifier: MIT
pragma solidity ^0.8.3;

contract GradeContract {
    address public owner;

    enum GradeStatus { Pending, Pass, Fail}

   
        string public name;
        uint8 public prelimGrade;
        uint8 public midtermGrade;
        uint8 public finalGrade;
        GradeStatus status;
  

   
    
    event GradeComputed(string name, GradeStatus status);

    modifier onlyOwner() {
        require(msg.sender == owner, "Only the owner can call this function");
        _;
    }

    modifier validGrade(uint8 grade) {
        require(grade >= 0 && grade <= 100, "Invalid grade. Grade must be between 0 and 100");
        _;
    }

    constructor() {
        owner = msg.sender;
    }

    function setStudentName(string calldata _name) external {
        name = _name;
    }

    function setPrelimGrade(uint8 _prelimGrade) external onlyOwner validGrade(_prelimGrade){
        prelimGrade = _prelimGrade;
    }

    function setMidtermGrade(uint8 _midtermGrade) external onlyOwner validGrade(_midtermGrade){
        midtermGrade = _midtermGrade;
    }

    function setFinalGrade(uint8 _finalGrade) external onlyOwner validGrade(_finalGrade){
        finalGrade = _finalGrade;
    }

    function calculateGrade() external onlyOwner {
        uint256 overallGrade = (prelimGrade + midtermGrade + finalGrade) / 3;

        if (overallGrade >= 50) {
            status = GradeStatus.Pass;
        } else {
            status = GradeStatus.Fail;
        }

        emit GradeComputed(name, status);
        
    }

    function gradeStatus() public view returns (GradeStatus) {
        return status;
    }

}