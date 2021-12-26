const shell = require("shelljs");  // 执行文件操作
const commit = new Date();

// 执行git拉取命令
shell.exec(`git pull`);

// 执行git暂存命令
shell.exec('git add .');

// 执行git提交命令
shell.exec(`git commit -m "${commit}"`);

// 执行git push命令
shell.exec('git push');