const url = "https://api.coingecko.com/api/v3"


export const GetMonedas = () => {
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    fetch(`${url}/simple/supported_vs_currencies`, requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));



}


export const GetCryptos = () => {

    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    fetch(`${url}/coins`, requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
}
