// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Task is ERC20 {
    uint256 constant _initial_supply = 10000 * 10**18;
    uint256 claimNumber = 50;
    uint32 time = uint32(block.timestamp);
    mapping(address => bool) public claimUsers;

    constructor() ERC20("TASK 1 TOKEN", "T1T") {
        _mint(0x5100F54Ad9Fb0653327D523Cf62C30BD1543388a, _initial_supply / 2);
    }

    function claim() public {
        require(block.timestamp > (time + 365 days), "claim timeout,sry");
        require(!isClaimed(msg.sender), "claimed");
        claimUsers[msg.sender] = true;
        _mint(msg.sender, claimNumber);
    }

    function isClaimed(address _address) public view returns (bool) {
        return claimUsers[_address];
    }
}
