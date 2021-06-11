/*Budujemy bazę wiedzy Star Wars ;) Użyj tego API:
https://swapi.dev/
Wszystko jest tam dokładnie opisane.
Pobierz listę wszystkich postaci (/people/), następnie stwórz w katalogu programu dla każdej osoby plik .txt o
nazwie odpowiadającej nazwie postaci.
W każdym z pliku zapisz notkę:
{name} is {gender} born on {birth_year}. He weights {mass} and his height is {height}.
He has {eye_color} eyes, {skin_color} skin and {hair_color} hair.
*/
const axios = require('axios');
const {writeFile} = require('fs');

function getStarWarsCharacters() {
    (async () => {
        try {
            const {results} = (await axios.get("https://swapi.dev/api/people/")).data;
            results.forEach(function(character) {
                const {name, gender, birth_year, mass, height, eye_color, skin_color, hair_color} = character;
                (async () => {
                    await writeFile(`./data/${name}.txt`,`${name} is ${gender} born on ${birth_year}. He weights ${mass} and his height is ${height}.He has ${eye_color} eyes, ${skin_color} skin and ${hair_color} hair.`, err => {
                        if (err === null) {
                            console.log(`Plik ${name}.txt zostal zapisany`);
                        } else {
                            console.log(err);
                        }
                    });
                })();
            });
        } catch(e) {
            console.log(e);
        }
    })();
}

getStarWarsCharacters();