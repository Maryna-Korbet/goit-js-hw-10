const BASE_URL = `https://restcountries.com/v3.1/all`;
const RESPONSE = `name,capital,population,languages,flags`;

export function fetchCountries(name) {
    return fetch(`${BASE_URL}/name/${name}?field=${RESPONSE}`)
        .then((response) => response.json())
        .catch((error) => {
            console.log("error", error);
        });
}

