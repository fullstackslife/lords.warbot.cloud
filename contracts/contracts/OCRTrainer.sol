// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/security/Pausable.sol";

contract OCRTrainer is ERC20, Ownable, Pausable {
    struct Task {
        address user;
        uint256 reward;
        bool verified;
        uint256 accuracy;
        uint256 timestamp;
    }

    mapping(uint256 => Task) public tasks;
    mapping(address => uint256) public userReputation;
    mapping(address => uint256) public userTasksCompleted;
    mapping(address => uint256) public userAccuracy;

    uint256 public taskCount;
    uint256 public constant MIN_REPUTATION = 10;
    uint256 public constant MAX_REWARD = 1000;
    uint256 public constant BASE_REWARD = 100;

    event TaskSubmitted(uint256 indexed taskId, address indexed user, uint256 reward);
    event TaskVerified(uint256 indexed taskId, address indexed user, uint256 accuracy);
    event TokensClaimed(address indexed user, uint256 amount);

    constructor() ERC20("OCR Training Token", "OCRT") {
        _mint(msg.sender, 1000000 * 10**decimals()); // Initial supply
    }

    function submitTask(uint256 _accuracy) external whenNotPaused {
        require(_accuracy <= 100, "Invalid accuracy");
        
        uint256 reward = calculateReward(msg.sender, _accuracy);
        uint256 taskId = taskCount++;

        tasks[taskId] = Task({
            user: msg.sender,
            reward: reward,
            verified: false,
            accuracy: _accuracy,
            timestamp: block.timestamp
        });

        emit TaskSubmitted(taskId, msg.sender, reward);
    }

    function verifyTask(uint256 _taskId, uint256 _accuracy) external onlyOwner {
        Task storage task = tasks[_taskId];
        require(task.user != address(0), "Task does not exist");
        require(!task.verified, "Task already verified");

        task.verified = true;
        task.accuracy = _accuracy;

        address user = task.user;
        userTasksCompleted[user]++;
        userAccuracy[user] = (userAccuracy[user] * (userTasksCompleted[user] - 1) + _accuracy) / userTasksCompleted[user];
        
        if (_accuracy >= 90) {
            userReputation[user] += 1;
        }

        emit TaskVerified(_taskId, user, _accuracy);
    }

    function claimTokens(uint256 _taskId) external {
        Task storage task = tasks[_taskId];
        require(task.user == msg.sender, "Not task owner");
        require(task.verified, "Task not verified");
        require(task.reward > 0, "No tokens to claim");

        uint256 amount = task.reward;
        task.reward = 0;

        _transfer(owner(), msg.sender, amount);
        emit TokensClaimed(msg.sender, amount);
    }

    function calculateReward(address _user, uint256 _accuracy) public view returns (uint256) {
        uint256 baseReward = BASE_REWARD;
        uint256 reputationBonus = userReputation[_user] * 10;
        uint256 accuracyBonus = (_accuracy * 2);
        
        uint256 totalReward = baseReward + reputationBonus + accuracyBonus;
        return totalReward > MAX_REWARD ? MAX_REWARD : totalReward;
    }

    function getUserStats(address _user) external view returns (
        uint256 reputation,
        uint256 tasksCompleted,
        uint256 accuracy,
        uint256 pendingRewards
    ) {
        reputation = userReputation[_user];
        tasksCompleted = userTasksCompleted[_user];
        accuracy = userAccuracy[_user];
        
        uint256 totalPending = 0;
        for (uint256 i = 0; i < taskCount; i++) {
            if (tasks[i].user == _user && tasks[i].verified && tasks[i].reward > 0) {
                totalPending += tasks[i].reward;
            }
        }
        pendingRewards = totalPending;
    }

    function pause() external onlyOwner {
        _pause();
    }

    function unpause() external onlyOwner {
        _unpause();
    }
} 