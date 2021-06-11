/*Stwórz program, który będzie przyjmował katalog do śledzenia do argumentow i będzie tam tworzył backup plików.

    Polega to na tym, że najpierw wyszukujesz wszystkie pliki w zadanym katalogu.

    Następnie, jeżeli plik nie ma rozszerzenia .backup1 lub .backup2 to tworzysz jego kopię (fs.cp())
    właśnie doklejając mu rozszerzenie .backup1. Nie robisz tego dla katalogów, wyłącznie do plików.

    Obserwuj zmiany wszystkich plików w tej ścieżce. Jeżeli plik się zmieni to zapisujesz zawartość
    .backup1 do kopii .backup2, a do kopii .backup1 aktualną zawartość pliku.
    Ignoruj zmiany w plikach .backup1 i .backup2 - inaczej zrobisz pętlę nieskończoną!*/
