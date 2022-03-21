import { getDogs, searchDogs } from './fetch-utils.js';
import { renderDogCard } from './render-utils.js';

const dogListContainer = document.getElementById('dog-list-container');
const inputEl = document.querySelector('#dog-search');
const searchButton = document.getElementById('button');

window.addEventListener('load', async() => {
// on load
    const allDogs = await getDogs();
// fetch all dogs
    for (let dog of allDogs){
        const dogsEl = renderDogCard(dog);
// render and append all dog cards to the container
        dogListContainer.append(dogsEl);
    }
});

searchButton.addEventListener('click', async() => {
    dogListContainer.textContent = '';

    const name = inputEl.value;
    if (name === ''){
        const allDogs = await getDogs();
// fetch all dogs
        for (let dog of allDogs){
            const dogsEl = renderDogCard(dog);
// render and append all dog cards to the container
            dogListContainer.append(dogsEl);
            inputEl.value = '';
        }
    } else {
        const dogSearch = await searchDogs(name);

        const dogsEL = renderDogCard(dogSearch);

        dogListContainer.append(dogsEL);
        inputEl.value = '';
    }
});

