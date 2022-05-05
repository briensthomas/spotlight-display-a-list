// import functions and grab DOM elements
import { goblinsArray } from './goblins-data.js';
import { renderGoblins } from './utils.js';

import { landscapesArray } from './landscape-data.js';
import { renderLandscape } from './utils.js';

const goblinsListEl = document.getElementById('goblins-list');

const landscapesListEl = document.getElementById('landscapes-list');
// let state

for (let goblin of goblinsArray) {
    const goblinDiv = renderGoblins(goblin);
    goblinsListEl.append(goblinDiv);
}


for (let landscape of landscapesArray) {
    const landscapeDiv = renderLandscape(landscape);
    landscapesListEl.append(landscapeDiv);
}
// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state