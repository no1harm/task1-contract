// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "erc721a/contracts/ERC721A.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "./Task.sol";

contract TASKNFT is ERC721A, Ownable {
    enum Status {
        Finished
    }

    Status public status;
    string public baseURI;
    uint256 public constant MAX_MINT_PER_ADDR = 1;
    uint256 public constant MAX_SUPPLY = 1000;
    uint256 public constant PRICE = 0;
    uint32 time = uint32(block.timestamp);
    ERC20 public token;

    event Minted(address minter, uint256 amount);
    event StatusChanged(Status status);
    event BaseURIChanged(string newBaseURI);

    constructor(string memory initBaseURI) ERC721A("TASKNFT", "TASKNFT") {
        baseURI = initBaseURI;
        token = ERC20(0xDbCd3d2547730A295D71Eceb25790D6E4F4F4874);
    }

    function _baseURI() internal view override returns (string memory) {
        return baseURI;
    }

    function mint(uint256 quantity) external payable {
        uint256 userBalance = token.balanceOf(msg.sender);
        bool approve = token.approve(address(this), 50 * 10**18);
        uint256 allowance = token.allowance(msg.sender, address(this));
        require(approve, "TASKNFT: have to approve");
        require(
            userBalance >= 50 * 10**18,
            "TASKNFT: you have at least 50 TASK"
        );
        require(allowance <= userBalance, "TASKNFT: check the token allowance");
        require(block.timestamp < (time + 365 days), "TASKNFT: end.");
        require(tx.origin == msg.sender, "TASKNFT: can't.");
        require(
            numberMinted(msg.sender) + quantity <= MAX_MINT_PER_ADDR,
            "TASKNFT: max mint per addr is 1."
        );
        require(totalSupply() + quantity <= MAX_SUPPLY, "TASKNFT: sold out.");
        _safeMint(msg.sender, quantity);
        refundIfOver(PRICE * quantity);
        token.transferFrom(msg.sender, address(this), 50 * 10**18);

        emit Minted(msg.sender, quantity);
    }

    function numberMinted(address owner) public view returns (uint256) {
        return _numberMinted(owner);
    }

    function refundIfOver(uint256 price) private {
        require(msg.value >= price, "TASKNFT: refund.");
        if (msg.value > price) {
            payable(msg.sender).transfer(msg.value - price);
        }
    }

    function setStatus(Status _status) external onlyOwner {
        status = _status;
        emit StatusChanged(status);
    }

    function setBaseURI(string calldata newBaseURI) external onlyOwner {
        baseURI = newBaseURI;
        emit BaseURIChanged(newBaseURI);
    }

    function withdraw(address payable recipient) external onlyOwner {
        uint256 balance = address(this).balance;
        uint256 tokenBalance = address(this).balance;
        token.transferFrom(address(this), msg.sender, tokenBalance);
        (bool success, ) = recipient.call{value: balance}("");
        require(success, "TASKNFT: withdraw.");
    }

    function checkTotalMined() public view returns (uint256) {
        return _totalMinted();
    }
}
