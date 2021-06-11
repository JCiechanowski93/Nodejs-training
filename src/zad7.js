const {dirname, basename, extname} = require('path');

function getPathInformation(fileName) {

        console.log("File name:", fileName);
        console.log("Directory name:", dirname(fileName));
        console.log("Base name:", basename(fileName));
        console.log("Ext:", extname(fileName));

}

getPathInformation(__filename);