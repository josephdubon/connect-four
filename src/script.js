// Test connection to index.html
// console.log("Get script-y wit it. Na-Na Na Na N-Na Na.")

/*  

Co-authored by:
    - Joseph Dubon < josephdubon@pm.me >
    - Isabella Brooks < isabellabrooks333@gmail.com >
    - Shavonne Carson < ongyoustupid @icloud.com >
    - Mellisa Gutierrez < >

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

currentPlayer = 1 // 1 or 2
numberOfDiscsDropped = 0

// Send data to message area in html
const messageArea = document.querySelector("#messageArea");
// Needed to change msg - Isabella wazz here ;) :3 
// Declare const message for use outside of function, test will console.log
const message = "test message"
const displayMessage = function (message) {
    messageArea.innerHTML = message
}
// Test function -remove comment and turn off gameInit to run this test
// displayMessage()

// Display current player
const displayCurrentPlayer = function (playerNum) {
    displayMessage("Current player: " + playerNum)
}

// Display tie message
const displayTieMessage = function () {
    displayMessage("It is a tie game, friends!")
}

// Display win message
const displayWinMessage = function () {
    displayMessage("There is a win and that win belongs to _____")
}

// Check if column is full
const isColFull = function (colNum) {
    for (let i = 0; i < boardModel.length; i++) {
        let col = boardModel[i][i] // this will just bring the first of the first array we need to reference the col
        // Test to check top value
        console.log(colNum)
        console.log(col)
        if (col === null) {
            // Test
            console.log(false)
            // Return false
            return false
        } else {
            // Test
            console.log(true)
            // Return true
            return true
        }
    }
}

// Add AKA drop disc to to column
const dropDisc = function (colNum, colNode, playerNum) {
    // TODO: Add a disc to the DOM colNode for the current player

    // <div class="disc red"></div>
    // TODO: Add a disc to the boardmodel
    numberOfDiscsDropped++
}

// Check for Vertical 4 in a Row
const winnerVertical = function (model) {
    for (let rowNum = 0; rowNum < 3; rowNum++) {
        for (let colNum = 0; colNum < model[rowNum].length; colNum++) {
            if (model[rowNum][colNum] === model[rowNum + 1][colNum] &&
                model[rowNum][colNum] === model[rowNum + 2][colNum] &&
                model[rowNum][colNum] === model[rowNum + 3][colNum] &&
                model[rowNum][colNum] !== null) {
                return true
            }
        }
    }
    return false
}

// Check for Horizontal 4 in a Row
const winnerHorizontal = function (model) {
    return false
}

// Check for Diagnol Up 4 in a Row
const winnerDiagnolUp = function (model) {
    return false
}

// Check for Diagnol Down 4 in a Row
const winnerDiagnolDown = function (model) {
    return false
}

// Check for Tie
const isATie = function (model) {
    return false
}

// Check for game status
const isGameOver = function (model) {
    if (isATie(model)) {
        return "tie"
    }
    // TODO: Check for a win
    if (winnerVertical(model) ||
        winnerHorizontal(model) ||
        winnerDiagnolUp(model) ||
        winnerDiagnolDown(model)) {
        return "win"
    }
    return false // false, "tie", or "win"
}

// const testGameOver = function () {
//     console.log("The board is currently empty: " + (isGameOver([
//         [null, null, null, null, null, null, null],
//         [null, null, null, null, null, null, null],
//         [null, null, null, null, null, null, null],
//         [null, null, null, null, null, null, null],
//         [null, null, null, null, null, null, null],
//         [null, null, null, null, null, null, null],
//     ]) === false))

//     console.log("Player 1 win on Column 1 : " + (isGameOver([
//         [null, null, null, null, null, null, null],
//         [null, null, null, null, null, null, null],
//         [1, null, null, null, null, null, null],
//         [1, null, null, null, null, null, null],
//         [1, null, null, null, null, null, null],
//         [1, null, null, null, null, null, null],
//     ]) === "win"))

//     console.log("Player 2 win on Column 7 : " + (isGameOver([
//         [null, null, null, null, null, null, null],
//         [null, null, null, null, null, null, null],
//         [null, null, null, null, null, null, 2],
//         [null, null, null, null, null, null, 2],
//         [null, null, null, null, null, null, 2],
//         [null, null, null, null, null, null, 2],
//     ]) === "win"))
// }
// Test
// testGameOver()

// Switch to next player after turn
const switchToNextPlayer = function () {
    // TODO: Toggle currentPlayer variable 1 <--> 2
}

// Main click handler function
const colClickHandler = function (eventObj) {
    // Get selected col
    const selectedCol = eventObj.currentTarget
    // Remove col# from div id and output col#
    const colNum = Number(selectedCol.id.slice(-1))
    // console.log("Click on Column" + colNum)
    // Check if selected col is full
    if (isColFull(colNum)) {
        // Display a message saying they can't drop there
        displayMessage("Can't drop a disc in a full column.")
    } else {
        // Allow player to drop disc in column
        dropDisc(colNum, selectedCol, currentPlayer)
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
    // Test
    // console.log(colNum)
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