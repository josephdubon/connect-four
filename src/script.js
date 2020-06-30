// Test connection to index.html
console.log("Get script-y wit it. Na-Na Na Na N-Na Na.")

/*  

Co-authored by:
    - Joseph Dubon < josephdubon@pm.me >
    - Isabella Brooks < isabellabrooks333@gmail.com >
    - Shavonne Carson < ongyoustupid @icloud.com >

Starter code with help from the code structure in Randy 's demos.
Development plan with help from Randy 's demo.

Dev plan:
1. Initialize the game
    - Players
    - Board display
    - Board model
    - Current player tracker
    - Click handlers for each column

2. Take player input
    - Know which player is dropping a disc
    - Which column are we dropping into ?
    - is that column already full / populated with any discs ?
    - Drop the disc into the top of the column

3. Check for game end conditions
    - Tie
    - Win
    - Announce that the game is over

Order of execution:

- start game
- run event listener
- run click handler
- get column number
- check if col is full
- is full? do not let player drop disc here
- if not? let player drop disc
- check for win or tie
- check game status / check for four in a row
- tie? then display tie message
- win? then display win message
- if no win or tie then switch to next player

-- repeat steps until end game condition is reached

*/

// Game board model
const boardModel = [
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
]

// Declare variables and give some data
let currentPlayer, numberOfDiscsDropped

// Track current player
currentPlayer = 1 // 1 or 2
// Track number of discs dropped
numberOfDiscsDropped = 0

// Send data to message area in html
const displayMessage = function (message) {
    // TODO: Clear out the message div

    // TODO: Add new message to div

}

// Display current player
const displayCurrentPlayer = function (playerNum) {
    displayMessage("Current player: " + playerNum)
}

// Check if column is full
const isColFull = function (colNum) {
    // TODO: Look at the boardModel to determine if col is full
    // for loop here?
    return false // or true
}

// Add AKA drop disc to to column
const dropDisc = function () {
    // TODO: Add a disc to the DOM for the current player
    // <div class="disc red"></div>
    // TODO: Add a disc to the boardmodel
    numberOfDiscsDropped++
}

// Check for game status
const isGameOver = function (model) {
    // TODO: Check for a win
    // TODO: Check for a tie (numberOfDiscsDropped === 42)
    return false // false, "tie", or "win"
}

// Display tie message
const displayTieMessage = function () {
    displayMessage("It is a tie game, friends!")
}

// Display win message
const displayWinMessage = function () {
    displayMessage("There is a win and that win belongs to _____")
}

// Switch to next player after turn
const switchToNextPlayer = function () {
    // TODO: Toggle currentPlayer variable 1 <--> 2
}

// Main click handler function
const colClickHandler = function (eventObj) {
    // Get selected col
    const selectedCol = eventObj.currentTarget
    // Remove col# from div id
    const colNum = Number(selectedCol.id.slice(-1))
    // Check if selected col is full
    if (isColFull(colNum)) {
        // Display a message saying they can't drop there
    } else {
        // Allow player to drop disc in column
        dropDisc(colNum)

        // Check game status after disc drop
        const gameStatus = isGameOver(boardModel)
        // If a tie, display tie message
        if (gameStatus === "tie") {
            displayTieMessage()
        }
        // If a win, display win message 
        else if (gameStatus === "win") {
            displayWinMessage()
        }
        // If not a tie or a win then switch players turn
        else {
            switchToNextPlayer()
        }
    }
}

// Reference HTML real things and set them up as click handlers
const setUpEventListeners = function () {
    document.querySelector('#col0').addEventListener('click', colClickHandler)
    document.querySelector('#col1').addEventListener('click', colClickHandler)
    document.querySelector('#col2').addEventListener('click', colClickHandler)
    document.querySelector('#col3').addEventListener('click', colClickHandler)
    document.querySelector('#col4').addEventListener('click', colClickHandler)
    document.querySelector('#col5').addEventListener('click', colClickHandler)
    document.querySelector('#col6').addEventListener('click', colClickHandler)
}

// Game start function
const initGame = function () {
    setUpEventListeners()
    displayCurrentPlayer()
}

// START GAME!
initGame()