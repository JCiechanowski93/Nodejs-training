/*Przyjmuj w argumencie do swojego programu nazwę pliku txt, który będziesz modyfikować.

Argument możesz użyć uruchamiając program np. tak:
node ./index.js plik.txt

Aby go odczytać użyj
process.argv

Następnie zmieniaj litery zgodnie z poniższą tabelą i zachowaj kopię pliku pod nazwą oryginalną + '.leet.txt'.
*/
const {writeFile} = require('fs');

function modifyFile() {
    (async () => {
        await writeFile(`./data/${process.argv[2]}leet.txt`,'costam', err => {
            if (err === null) {
                console.log('Plik zostal zapisany');
            } else {
                console.log(err);
            }
        });
    })();
}

modifyFile();