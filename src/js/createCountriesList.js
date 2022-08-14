export function createCountriesList(countries) {
    const markupList = countries
        .map(({ flags, name }) => {
            return `
            <li>
            <img src="${flags.svg}" alt="Flag of ${name.official}" width = 50px height = 50px>
            <h2>${name.official}</h2>
            </li>`
        })
        .join('')
    return markupList;
}
    



