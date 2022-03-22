import { getDog } from '../fetch-utils.js';
import { renderDogDetail } from '../render-utils.js';

const dogDetailContainer = document.getElementById('dog-detail-container');

window.addEventListener('load', async() => {
// on load
    const data = new URLSearchParams(window.location.search);
    const dogId = data.get('id');
// get the id from URL
    const singleDog = await getDog(dogId);
// use the id to fetch the dog
    const currentDog = renderDogDetail(singleDog);
// render and append this dog's details to the container
    dogDetailContainer.append(currentDog);
});

