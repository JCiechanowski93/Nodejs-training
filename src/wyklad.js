const {readFile, writeFile, access} = require('fs');
const {constants} = require('fs');
const {promisify} = require('util');
const {readdir} = require('fs').promises;

(async () =>{
    try {
        const files = await readdir('.');
        console.log(files);
    } catch (err) {

    }
})();

(async () =>{
    try {
   await access('./file.txt', constants.R_OK)

    } catch (err) {
        throw new Error('Nie ma dostępu do pliku');
    }
})();

writeFile('.file.txt', 'Hey', err => {
   if (err === null) {
       console.log('Zapisano')
   } else {
       console.log('Dupa', err);
   }
});