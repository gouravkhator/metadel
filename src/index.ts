import { hostname } from "os";
import { existsSync } from "fs";
// browser bundle will not have fs module working as browserify does not support fs

// demo functions
export function getHostName(): string {
  const hName: string = hostname();
  return hName;
}

export function checkDirExists(dirname: string): boolean {
  return existsSync(dirname);
}
