const BASE_URL = `https://restcountries.com/v3.1`;
const RESPONSE = `name,capital,population,languages,flags`;

export function fetchCountries(name) {
    return fetch(`${BASE_URL}/name/${name}?fields=${RESPONSE}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.status);
            }
            return response.json()
        })
        .catch(error => console.log(error))
}