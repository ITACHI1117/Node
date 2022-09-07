//  Common JS - every file is a module (by default)
//  Modules - Encapsulated Code (only share minimum)

const names = require("./name");
const sayHi = require("./nameFunction");
console.log(names);

const data = require("./alternative");
// console.log(data);
require("./mindGrenade");
sayHi(`Joe`);
sayHi(names.john);
sayHi(names.peter);
