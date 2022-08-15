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
    body: document.querySelector('body'),
}

refs.input.addEventListener('input', debounce(searchCountries, DEBOUNCE_DELAY));

for (let e of document.getElementsByTagName("body")) {
    e.style.color = "#ffffff";
    e.style.background = "#7a6450";
    e.style.backgroundImage = "url('https://cdn.pixabay.com/photo/2017/07/22/11/46/adventure-2528477_960_720.jpg')";
    e.style.backgroundRepeat = "no-repeat";
    e.style.backgroundSize = "cover";
    }

function searchCountries(e) {
    const nameCountry = e.target.value.trim();
    if (nameCountry === '') {
        return (refs.list.innerHTML = ''), (refs.info.innerHTML = '');
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
