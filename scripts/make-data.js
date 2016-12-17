'use strict';

const fs = require('fs');
const path = require('path');
const R = require('ramda');
const mkdirp = require('mkdirp');
const exec = require('child_process').exec
const utils = require('./utils');
const MT = require('mark-twain');

function buildCommon(dirs, outputFile, flag) {
  const mds = utils.findMDFile(dirs, true)
          .filter((file) => !/\/demo$/i.test(path.dirname(file)));

  const addedMd = [];
 if(!flag){

  let content = 'module.exports = {';

  mds.forEach((fileName) => {
    const localeId = path.basename(fileName, '.md').split('.')[1];
    const simplifiedFileName = fileName.replace(`.${localeId}`, '');
    if (addedMd.indexOf(simplifiedFileName) > -1) return;

    const requirePath = path.relative(path.dirname(outputFile), fileName);
    content += `\n  '${simplifiedFileName}': require('${requirePath}'),`;
  });

  content += '\n};';

  fs.writeFile(outputFile, content);

 }else{

    let content = 'module.exports = [';
    mds.forEach(fileName => {
        const localeId = path.basename(fileName, '.md').split('.')[1];
        const simplifiedFileName = fileName.replace(`.${localeId}`, '');
        content += `'${simplifiedFileName}',`;
    });
    content += '\n]';

    fs.writeFile(outputFile, content);
 }

};


const isDemo = R.compose(R.test(/\/demo$/i), path.dirname);
function buildDemosList(dirs, outputPath) {
  const mds = utils.findMDFile(dirs);
  const demos = R.filter(isDemo, mds);
  const groupedDemos = R.groupBy((fileName) => {
    const parts = fileName.split(path.sep);
    const demoIndex = parts.indexOf('demo');
    const relativeIndex = path.join(parts.slice(0, demoIndex).join(path.sep), 'index.md');
    return relativeIndex;
  }, demos);

  let content =
    'const React  = require("react");\n' +
    'const ReactDOM = require("react-dom");\n' +
    'module.exports = {';

  Object.keys(groupedDemos).forEach((key) => {
    content += `\n  '${key}': [`;
    groupedDemos[key].forEach((fileName) => {
      const requirePath = path.relative(path.dirname(outputPath), fileName);
      content += `\n    require('${requirePath}'),`;
    });
    content += '\n  ],';
  });
  content += '\n};\n';

  content +=
    'Object.keys(module.exports).map((key) => module.exports[key])\n' +
    '  .forEach((demos) => {\n' +
    '    demos.forEach((demo) => {\n' +
    '      if (typeof demo.preview !== "function") return;\n' +
    '      demo.preview = demo.preview(React, ReactDOM);\n' +
    '    });\n' +
    '  });';

  fs.writeFile(outputPath, content);
};



// run script
~function(){

    mkdirp.sync('./_data');

    buildCommon([
        './components',
        './docs/react',
        //'./CHANGELOG.md',
      ], './_data/components-list.js');

    const extra = ['design', 'practice', 'pattern', 'spec', 'resource'];

    extra.forEach( r => {
      if (fs.existsSync(`./docs/${r}`)) {
        buildCommon(`./docs/${r}`, `./_data/${r}.js`);
      }
    });

    // Build demo list
    buildDemosList([
        './components'
      ], './_data/demos-list.js');

}()
