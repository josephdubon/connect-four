## Assessment: Connect Four Team Project
Assessment: Connect Four

In Connect Four, one player is assigned Red and the other player is assigned Black. Players alternate inserting their pieces into one of the 7 columns of a 7x6 grid. The first player to get four of their pieces in a row (horizontal, vertical, or diagonal), wins.

In the physical world, the grid is placed perpendicular to the playing table, such that the pieces fall to the bottom and stack upon each other. Your digital version of the game should yield the same end result (the falling animation is optional).

The game can end in a tie, meaning all cells are filled but no player achieved four-in-a-row.

Implement Connect Four using HTML, CSS, and JavaScript. In each game, the players will be sitting at the same mouse & keyboard, alternating turns.
Submission Details

You will work in groups to complete your Connect Four implementation. You should all code individually, but work together in building the layout and functionality of your game.

As a member of a group, you will have to meet certain performance expectations. Your performance will be evaluated by the other members of your group, so be sure to try to contribute equally to the project! You can read more here: Guidelines for Individuals on a Team

The project lead will submit the project. This will be a project you include in your portfolio, so make it look nice, and use GitLab's Pages feature to host your finished game so that anyone can play it.

## GitLab Pages URL
https://josephdubon.gitlab.io/assessment-connect-four-team-project

## Project Team Members
SE April 2020 PST / Group C

- Joseph Dubon - Project Lead
- Shavonne Carson
- Melissa Gutierrez
- Isabella Brooks

### Assessment Development Plan
Steps
7x6 grid



    Display a red or black disc.
        declare 2 variables
            1. let redDisc, blackDisc

    Stack red and black discs in a column using a flex box layout.
        1. Create class for cols 
            discCol { 
                display: flex;
                // rest of code here
            }

    Display a full board consisting of 7 columns.
        1. Create container/div with 7 cols
            div id="stuff"

    Set a click handler function for each column that adds an additional disc.
        const element 
        element.clickHandler = functionName

    function functionName() = {
        // code in here
    }



    Take turns! Toggle the color of each successive disc added.
    how to toggle between 2 classes?
    toggle() <-- jquery stuff? alternative?

    Keep track of what color disc is at each position in the board. You should be able to console.log() debugging output after each move showing the state of the board.
    
    let currentDisc

    console.log(currentDisc) // test to let us know current disc state
    console.log(nameOfMazeNestedArrays)

    Once a column is full (has 6 discs), don't allow any more discs to be added.

    if (currentColDiscCount === 6) {
        // do something
    }
    else {
        // don't allow more discs in the col
    }


    Check whether the last disc added completed a four-in-a-row within the column (vertically).
    if (colDiscCount === 4 && fourInARowVertically) {
        // do something
    }
    else {
        // keep going
    }

    Check whether the last disc added completed four-in-a-row horizontally.
    if (colDiscCount === 4 && fourInARowHorizontally) {
        // do something
    }
    else {
        // keep going
    }


    Check whether the last disc added completed four-in-a-row on either an upward- or downward-sloping diagonal.
    if (colDiscCount === 4 && fourInARowOneDiagonalUpward) {
        // do something
    }
    else {
        // keep going
    }

    if (colDiscCount === 4 && fourInARowOneDiagonalDownward) {
        // do something
    }
    else {
        // keep going
    }


    ---------




    1.
        a.
        b.
        c.
    2.
        a.
        b.
        c.
    3.
        a.
        b.
        c.
    4.
        a.
        b.
        c.

#### How to Break Down a Project

1. Read the requirements document in detail.
	a. Take notes of important points.
	b. Write down your questions.
2. Answer your questions!
3. Make a development plan.
	a. Describe the entire behavior of the program in 3 (or at most 4) steps. Don't use any JavaScript words!
	b. Break down each item into 4 (or 4) smaller steps by asking the question, "How?".
	c. Repeat until it's obvious how to turn the step into JS code.
4. Write the code!

#### License
MIT License

Copyright (c) [2020] [Joseph Adonay Dubon]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.