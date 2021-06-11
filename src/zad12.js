/*Stwórz program, który przyjmuje jako argumenty ścieżkę absolutną w stylu Windowsa (C:\plik.txt).
Znormalizuj ścieżkę/upewnij się że jest wyłącznie ścieżką i jest poprawna.
Dla ścieżki - wykonaj Windowsową komendę - dir - bez argumentów i ustaw jej folder roboczy na ten podany jako argument.
Wyświetl wynik jej działania.
*/
const path = require('path');
const {exec} = require('child_process');
const fileName = process.argv[2];
const {mkdir} = require('fs');

function safeJoin(base, target) {
    const targetPath = '.' + path.normalize('/' + target)
    return path.resolve(base, targetPath);
}

const filePath = safeJoin(__dirname, fileName);
(async () => {
    await mkdir(filePath, { recursive: true }, (err) => {
        if (err) throw err;
    });
})();

const cp = exec(`type ${filePath}`);
cp.stdout.on('data', data => console.log(data));