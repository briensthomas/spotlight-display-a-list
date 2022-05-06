// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { renderGoblins, renderLandscape, renderMovie } from '../utils.js';
import { goblinsArray } from '../goblins-data.js';
import { landscapesArray } from '../landscape-data.js';
import { moviesArray } from '../movie-data.js';

const test = QUnit.test;

test('test goblin render function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<div class="goblin"><h2>Bob</h2><h3>5 HP</h3><img src="./assets/goblin.png"><p>Goblins are the enemy!</p></div>`;
    
    //Act <div class="goblins-list">


    // Call the function you're testing and set the result to a const
    const actual = renderGoblins(goblinsArray[0]);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});

test('test landscape render function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<div class="landscape"><h2>Forest</h2><img src="./assets/Forest.jpg"><p>Shy thinks this is a 10/10 spot to visit</p></div>`;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderLandscape(landscapesArray[0]);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});

test('test movie render function with nested array', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<div class="movie"><h2>The Gentlemen</h2><img src="./assets/The-Gentlemen.jpg"><h4 class="genre">Genre: </h4><ul class="genre"><li>Comedy</li><li>Crime</li><li>Drama</li></ul><ul class="actors"><li>Matthew McConaughey, </li><li>Charlie Hunnam, </li><li>Michelle Dockery, </li><li>Jeremy Strong, </li><li>Lyne Renee, </li><li>Colin Farrell </li></ul></div>`;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderMovie(moviesArray[0]);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});