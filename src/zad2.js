function fakeAPI(url) {
    return new Promise(function (resolve, reject) {
        const data = {
            7: {
                city: 'Katowice',
                temp: 26,
                weather: 'sunny',
            },
            40: {
                city: 'Kraków',
                temp: 29,
                weather: 'partly-cloudy',
            },
            101: {
                city: 'Warszawa',
                temp: 27,
                weather: 'sunny',
            },
        };

        const urlParts = url.split('/');
        const lastPart = urlParts[urlParts.length - 1];
        if (lastPart === 'list') {
            resolve(Object.keys(data));
        } else if (data.hasOwnProperty(lastPart)) {
            resolve(data[lastPart]);
        } else {
            reject(new Error('Invalid operation on this API!'));
        }
    });
}

fakeAPI('https://fake.weather.api/get/list')
    .then(response => fakeAPI(`https://fake.weather.api/get/${response[0]}`))
    .then(response => console.log(`W miescie ${response.city} jest obecnie ${response.temp}.`))
    .catch(error => console.log(error));

(async () => {
    try {
        const getList = await fakeAPI('https://fake.weather.api/get/list');
        const getCity = await fakeAPI(`https://fake.weather.api/get/${getList[0]}`);
        console.log(`W miescie ${getCity.city} jest obecnie ${getCity.temp}.`)
    } catch (err) {
        console.log(err);
    }
})();