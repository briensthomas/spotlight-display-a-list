// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { renderGoblins } from '../utils.js';
import { goblinsArray } from '../goblins-data.js';

const test = QUnit.test;

test('test goblin render function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<div class="goblin"><h2>Goblin Name</h2><h3>5</h3><img src="./assets/goblin.png"><p>Goblins are the enemy!</p></div>`;
    
    //Act <div class="goblins-list">


    // Call the function you're testing and set the result to a const
    const actual = renderGoblins(goblinsArray[0]);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});

// test('time to test a function', (expect) => {
//     //Arrange
//     // Set up your arguments and expectations
//     const expected = true;
    
//     //Act 
//     // Call the function you're testing and set the result to a const
//     const actual = true;

//     //Expect
//     // Make assertions about what is expected versus the actual result
//     expect.equal(actual.outerHTML, expected);
// });