/*Stwórz kolejny program, przyjmujący jako argumenty dowolną ilość adresów IP.
Pamiętaj koniecznie, aby przyjmować dokładnie adresy IP. Odpowiednie RegExpy
znajdziesz w sieci.
Pinguj te adresy IP zaczynając jednocześnie i zaczekaj aż wszystkie się skończą.
Jeżeli któryś zajmuje dłużej niż 5 sekund - przerwij działanie.
Poczekaj na zakończenie wykonywania wszystkich pingów. Na końcu zbiorczo wyświetl wszystkie logi.
*/

const {exec} = require('child_process');
const ipAdresses = process.argv.slice(2); // 95.166.196.230 111.136.121.150 139.130.4.5

ipAdresses.forEach(function(ipAdress){
    if (ValidateIPaddress(ipAdress)) {
        const cp = exec(`ping ${ipAdress}`, {timeout: 5000}, (error, stdout, stderr) => {
            console.log(stdout);
            if (error && error.signal === 'SIGTERM') {
                console.log(error);
            }
        });
    }
});

function ValidateIPaddress(ipaddress) {
    if (/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(ipaddress)) {
        return (true)
    }
    console.log("You have entered an invalid IP address!");
    return (false)
}

