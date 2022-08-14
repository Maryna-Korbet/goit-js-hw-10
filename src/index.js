import './css/styles.css';
import { fetchCountries } from './js/fetchCountries';
import { createCountriesList } from './js/createCountriesList';
import { createCountriesInfo } from './js/createCountriesInfo';
import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';

const DEBOUNCE_DELAY = 300;

const refs = {
    input: document.querySelector('#search-box'),
    list: document.querySelector('.country-list'),
    info: document.querySelector('.country-info'),
}

refs.input.addEventListener('input', debounce(searchCountries, DEBOUNCE_DELAY));

function searchCountries(e) {
    const nameCountry = e.target.value.trim();
    if (nameCountry === '') {
        return;
    }
    fetchCountries(nameCountry)
        .then(data => {
            if (data.length > 10) {
                Notiflix.Notify.info(`Too many matches found. Please enter a more specific name`);
            }
            if (data.length <= 10) {
                refs.list.innerHTML = createCountriesList(data);
            }
            if (data.length === 1) {
                refs.list.innerHTML = '';
                refs.info.innerHTML = createCountriesInfo(data);
            }
        })
        .catch(error => Notiflix.Notify.failure(`Oops, there is no country with that name`));
}
