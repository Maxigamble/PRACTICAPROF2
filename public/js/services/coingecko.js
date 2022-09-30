const url = "https://api.coingecko.com/api/v3"

export const GetMonedas = (callback) => {
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    fetch(`${url}/simple/supported_vs_currencies`, requestOptions)
        .then(response => response.json())
        .then(result => callback(result))
        .catch(error => console.log('error', error));
}

export const GetCryptos = (callback) => {
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    fetch(`${url}/coins`, requestOptions)
        .then(response => response.json())
        .then(result => callback(result))
        .catch(error => console.log('error', error));
}

export const GetSearch = (search, callback) => {
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };
    fetch(`${url}/search?query=${search}`, requestOptions)
        .then(response => response.json())
        .then(result => callback(result.coins))
        .catch(error => console.log('error', error));
}