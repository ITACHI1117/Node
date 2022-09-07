// npm - global command, comes wit node
//  npm --version

// local dependecy - use it only in this particualar project
// npm i <packagename>

// global dependency - use it in any project
//  npm install -g <packageName>

// package.json - manifest file (stores important info about project/package)
// manual approcah (create package.json in the root, create properties etc)
//  npm init (step by step, press eneter to skip)
// npm init -y (everything default)

const _ = require("lodash");

const items = [1, [2, [3, [4]]]];
const newItems = _.flattenDeep(items);
console.log(newItems);
