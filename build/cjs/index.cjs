'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var os = require('os');
var fs = require('fs');

// browser bundle will not have fs module working as browserify does not support fs
// demo functions
function getHostName() {
    const hName = os.hostname();
    return hName;
}
function checkDirExists(dirname) {
    return fs.existsSync(dirname);
}

exports.checkDirExists = checkDirExists;
exports.getHostName = getHostName;
