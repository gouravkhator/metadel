import { hostname } from 'os';
import { existsSync } from 'fs';

// browser bundle will not have fs module working as browserify does not support fs
// demo functions
function getHostName() {
    const hName = hostname();
    return hName;
}
function checkDirExists(dirname) {
    return existsSync(dirname);
}

export { checkDirExists, getHostName };
