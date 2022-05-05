// import functions and grab DOM elements
import { goblinsArray } from './goblins-data.js';
import { renderGoblins } from './utils.js';

const goblinsListEl = document.getElementById('goblins-list');
// let state

for (let goblin of goblinsArray) {
    const goblinDiv = renderGoblins(goblin);
    goblinsListEl.append(goblinDiv);
}
// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state