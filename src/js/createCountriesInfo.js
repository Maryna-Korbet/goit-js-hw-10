export function createCountriesInfo(countries) {
    const markupInfo = countries
        .map(({ flags, name, capital, population, languages }) => {
            return `
            <img src="${flags.svg}" alt="Flag of ${name.official}" width = 50px height = 50px>
            <h2>${name.official}</h2>
            <ul>
            <li><b>Capital: </b>${capital}</li>
            <li><b>Population: </b>${population}</li>
            <li><b>languages: </b>${Object.values(languages)}</li>
            </ul>`
        })
        .join('')
    return markupInfo;
}




