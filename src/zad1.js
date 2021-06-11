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

fakeAPI('https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise')
    .then(response => console.log(response))
    .catch(error => console.log(error));