import { getDogs } from './fetch-utils.js';
import { renderDogCard } from './render-utils.js';

const dogListContainer = document.getElementById('dog-list-container');

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


