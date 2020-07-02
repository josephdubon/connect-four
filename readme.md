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
- Mellisa Gutierrez

### Assessment Development Plan
Development plan with help from Randy's demo:

    1. Initialize the game
        - Players
        - Board display
        - Board model
        - Current player tracker
        - Click handlers for each column

    2. Take player input
        - Know which player is dropping a disc
        - Which column are we dropping into?
        - is that column already full/populated with any discs?
        - Drop the disc into the top of the column

    3. Check for game end conditions
        - Tie
        - Win
        - Announce that the game is over

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
SOFTWARE.\




Tasks for 6/30/2020:

Isabella - Start at line 71 in JS file

// Send data to message area in html

const displayMessage = function (message) {

    // TODO: Clear out the message div

    // TODO: Add new message to div

}

---

Shavonne - Start at line 84 in JS file

// Check if column is full
const isColFull = function (colNum) {
    // TODO: Look at the boardModel to determine if col is full
    // for loop here?
    return false // or true
}

-------

Joe - 

Setup starter code
Flex box to show board and elements


// Add AKA drop disc to to column
const dropDisc = function () {
    // TODO: Add a disc to the DOM for the current player
    // <div class="disc red"></div>
    // TODO: Add a disc to the boardmodel
    numberOfDiscsDropped++
}

-------

Joe - 

// Check for game status
const isGameOver = function (model) {
    // TODO: Check for a win
    // TODO: Check for a tie (numberOfDiscsDropped === 42)
    return false // false, "tie", or "win"
}

------

Mellisa

// Switch to next player after turn
const switchToNextPlayer = function () {
    // TODO: Toggle currentPlayer variable 1 <--> 2
}

code from mellisa: 

const otherPlayer=2
// Switch to next player after turn
const switchToNextPlayer = function (currentPlayer) {
    // TODO: Toggle currentPlayer variable 1 <--> 2
      // Switch players
    if (currentPlayer === '1') ? '2' : '1'
    currentPlayerNameEl.classList.remove(switchToNextPlayer.otherPlayer)
      currentPlayerNameEl.classList.add(switchToNextPlayer.currentPlayer)
      currentPlayerNameEl.textContent = currentPlayerName
      otherPlayerNameEl.classList.remove(switchToNextPlayer.currentPlayer)
      otherPlayerNameEl.classList.add(switchToNextPlayer.otherPlayer)
      otherPlayerNameEl.textContent = otherPlayerName


-------


HTML
<div class="result">
             <p>Test Message</p> 
             <!--This should be an empty string once we get everything working that way it won't display anything until you win/lose. -->
        </div>

CSS
.result{
    font-size: 40px;
    color: black;
}

.result p{
    text-align: center;
    font-weight: bold;
}

JavaScript
const messageArea = document.querySelector(".messageArea > p"); //Needed to change msg - Isabella wazz here ;) :3 

const displayMessage = function (message) {
    // TODO: Clear out the message div
    messageArea.innerHTML = "It works!"
    // TODO: Add new message to div
    
} //we should really only use this to lay out how the code will work because we want to write the message out in the win/lose functions.



_____

joe

added starter code from randys demos
added comments, order or execution
created css styles
with flex box created the game area
- message area
- board area
- col area
- discs
    -red
    -black


------

isabella

created message function to display win, tie, etc to user through the message area in HTML
-next step is to create win, tie, etc messages

-------

Shavonne 

will show us what she worked on next meeting

--------

Mel
