const fs = require('fs');



(async () => {
await fs.readdir(__dirname,
    { withFileTypes: true },
    (err, files) => {
        if (err)
            console.log(err);
        else {
           files.forEach(file => {
                fs.stat(file.name, (error, stats) => {
                   if (error) {
                       console.log(error);
                   }
                   else {
                       console.log(file);
                     if (stats.isDirectory()) {
                         fs.readdir(`./${file.name}`, (err, elemenents) => {
                             if (err)
                                 console.log(err);
                             else {
                                 console.log("\nCurrent directory filenames:");
                                 elemenents.forEach(file => {
                                     console.log(file);
                                 })
                             }
                         })
                     }
                   }
               });
            });
        }
    })
})();