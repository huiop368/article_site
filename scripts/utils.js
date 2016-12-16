'use strict';

const fs = require('fs');
const path = require('path');
const R = require('ramda');

const isMDFile = R.compose(R.equals('.md'), path.extname);
exports.findMDFile = function findMDFile(fileName, shallow) {
  const filePaths = Array.isArray(fileName) ? fileName : [fileName];
  let mds = [];

  R.forEach((filePath) => {
    const stat = fs.statSync(filePath);
    if (stat.isFile() && isMDFile(filePath)) {
      mds.push(filePath);
    }
    if (stat.isDirectory()) {
      const indexFile = path.join(filePath, 'index.md');
      let hasIndexFile = false;
      hasIndexFile = fs.existsSync(indexFile);
      if (shallow && hasIndexFile) {
        mds.push(indexFile);
      } else {
        const subFiles = fs.readdirSync(filePath)
          .map((subFile) => path.join(filePath, subFile));
        mds = mds.concat(findMDFile(subFiles, shallow));
      }
    }
  }, filePaths);

  return mds;
};

exports.getCodeChildren = function getCodeChildren(element) {
  return element && element[2][1];
};

exports.isCode = function isCode(element) {

  const type = element[0];
  const lang = element[1].lang;
  const ret = ['jsx','vue','javascript','weex'];
  return type === 'pre' && ret.indexOf(lang) !== -1;

};

exports.isWeex = function(element){

  const type = element[0];
  const lang = element[1].lang;

  return type === 'pre' && lang === 'weex';
}
