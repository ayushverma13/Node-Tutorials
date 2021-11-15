const fs = require('fs');
const chalk = require('chalk');
fs.writeFileSync("notes.txt","This file was created by nodejs");
console.log(chalk.blue('Hello ji '));