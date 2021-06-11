/*Stwórz program z narzędziami. Będzie on pozwalał jako argument podać "Kalkulator" lub "Paint".
    W zależności od wybranej akcji uruchom program calc.exe lub mspaint.exe. Są to programy okienkowe.

    Sprawdź co się dzieje z Twoim programem kiedy uruchamiasz te programy. Działają one nieco inaczej.
    A co dzieje się z nimi gdy ubijesz proces swojego programu (Ctrl+C w konsoli)? Ma to jakiś wpływ?*/


const exec = require('child_process').execFile;
const programToRun = process.argv[2];

exec(programToRun, function(err, data) {
    console.log(err)
    console.log(data.toString());
});
