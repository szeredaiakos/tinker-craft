const path = require('path');
const fs = require('fs');

const entries = [];
const entryFolder = path.normalize(`${ process.cwd() }/src`);

function traverseRecursively(folder) {
  const folderFiles = fs.readdirSync(folder).map(file => path.join(folder, file));

  for (const filefolder of folderFiles) {
    const normalPath = path.normalize(filefolder);
    const stat = fs.lstatSync(normalPath);

    if (stat.isFile() && (
      normalPath.includes('.index.ts') &&
      normalPath.includes('.index.tsx')
    )) {
      entries.push(normalPath);
    }

    if (stat.isDirectory()) {
      traverseRecursively(normalPath);
    }
  }
}

traverseRecursively(entryFolder);

module.exports = entries;