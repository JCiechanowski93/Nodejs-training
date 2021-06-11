const chokidar = require('chokidar');
const fs = require('fs');

function watchChanges(path) {
    chokidar.watch(`${path}/**/*.js`, { ignored: './**/*node_modules',
        awaitWriteFinish: true})
        .on('add', function(path) {
            console.log(`File ${path} has been added`);
            readFile(path);
        })
        .on('change', function(path) {
            console.log(`File ${path} has been changed`);
           readFile(path);
        })
        .on('unlink', path => console.log(`File ${path} has been removed`));
}

function readFile(path) {
    (async () => {
        await fs.readFile(path, 'utf8' , (err, data) => {
            if (err) {
                console.error(err);
                return;
            }
            console.log(data);
        })
    })();
}

watchChanges(process.argv[2]); //zad9.js C:\Users\NobleProg\Desktop\PROJEKTY\Pierwszy

