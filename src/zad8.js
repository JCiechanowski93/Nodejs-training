/*2. Bezpieczna ścieżka
Przyjmuj w argumencie do kolejnego programu nazwę pliku. Zadbaj o to, aby musiał to być plik znajdujący się w katalogu programu, nie poza nim.
Sprawdź czy Twój program jest odporny na następujące sztuczki:
../../../../../../../../Windows/System32/Drivers/etc/hosts
~/Me.jpg
C:\systeminfo
LPT1 - co się dzieje w tym przypadku? Jest ok? Spróbuj zapisać taki plik.
*/
const path = require('path');

function safeJoin(base, target) {
    const targetPath = '.' + path.posix.normalize('/' + target)
    return path.posix.resolve(base, targetPath);
}
//test
