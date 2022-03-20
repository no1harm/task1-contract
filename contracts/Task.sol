// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Task is ERC20, Ownable {
    uint256 constant _initial_supply = 10000 * 10**18;
    uint256 claimNumber = 50 * 10**18;
    uint32 time = uint32(block.timestamp);
    mapping(address => bool) public claimUsers;

    constructor() ERC20("TASK 1 TOKEN", "T1T") {
        _mint(owner(), _initial_supply);
        approve(address(this),_initial_supply);
    }

    function claim() external {
        require(block.timestamp < (time + 365 days), "Claim Timeout,Sorry");
        require(!isClaimed(msg.sender), "Claimed");
        claimUsers[msg.sender] = true;
        this.transferFrom(owner(), msg.sender, claimNumber);
    }

    function isClaimed(address _address) public view returns (bool) {
        return claimUsers[_address];
    }
}
