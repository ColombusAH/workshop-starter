// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

contract Wallet {
    address owner;
    mapping(address => uint256) allowance;
    address[] public allowanceOwners;
    uint256 public allowanceCount = 0;

    modifier onlyOwnerOrAllowed(uint256 _amount) {
        require(
            msg.sender == owner || allowance[msg.sender] >= _amount,
            "You are not allowed"
        );
        _;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "You are not allowed");
        _;
    }

    constructor() payable {}

    function getAllowanceCount() external view returns (uint256) {
        return allowanceCount;
    }

    function withdraw(address payable _to, uint256 _amount)
        public
        onlyOwnerOrAllowed(_amount)
    {}

    function addAllowance(address _to, uint256 _amount) public onlyOwner {}

    receive() external payable {}

    // fallback() external payable {}
}
