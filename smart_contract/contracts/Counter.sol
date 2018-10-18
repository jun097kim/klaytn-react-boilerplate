pragma solidity ^0.4.24;

contract Counter {
    address private owner;
    uint public count;

    constructor() public {
        owner = msg.sender;
        count = 0;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can call this function.");
        _;
    }

    function plus() public {
        count = count + 1;
    }

    function minus() public {
        count = count - 1;
    }

    function reset() public onlyOwner {
        count = 0;
    }
}