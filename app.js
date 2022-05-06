// import functions and grab DOM elements
import { goblinsArray } from './goblins-data.js';
import { landscapesArray } from './landscape-data.js';
import { moviesArray } from './movie-data.js';

import { renderGoblins, renderMovie, renderLandscape } from './utils.js';

const goblinsListEl = document.getElementById('goblins-list');

const landscapesListEl = document.getElementById('landscapes-list');

const moviesListEl = document.getElementById('movies-list');
// let state

for (let goblin of goblinsArray) {
    const goblinDiv = renderGoblins(goblin);
    goblinsListEl.append(goblinDiv);
}


for (let landscape of landscapesArray) {
    const landscapeDiv = renderLandscape(landscape);
    landscapesListEl.append(landscapeDiv);
}

for (let movie of moviesArray) {
    const movieDiv = renderMovie(movie);
    moviesListEl.append(movieDiv);
}

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state