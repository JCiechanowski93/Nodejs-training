const {readFile, writeFile} = require('fs');

(async () => {
    const data = await readFile('./data/input1.json');
    const arr = JSON.parse(data);
    const total = arr.reduce((a, b) => a + b, 0);
    await writeFile('./data/sum.txt', total.toString(), err => {
        if (err === null) {
            console.log('Plik zostal zapisany');
        } else {
            console.log(err);
        }
    });
})();

