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
currentPlayer = 1 // or 2
numberOfDiscsDropped = 0

// Send data to message area in html
const messageArea = document.querySelector("#messageArea");
// Needed to change msg - Isabella wazz here ;) :3 
// Declare const message for use outside of function, test will console.log
const message = " "
const displayMessage = function (message) {
    messageArea.innerHTML = "<p>" + message + "</p>"
}
// Test function -remove comment and turn off gameInit to run this test
// displayMessage()

// Display current player
const playerArea = document.querySelector("#playerArea")
const displayCurrentPlayer = function (playerNum) {
    playerNum = currentPlayer
    playerArea.innerHTML = "<p>" + "Player " + playerNum + " just made a move." + "</p>"
}

// Display next players turn
const displayNextPlayersTurn = function () {
    displayCurrentPlayer()
    displayMessage("Next player's turn.")
}

// Display tie message
const displayTieMessage = function () {
    displayMessage("It is a tie game, friends!")
}

// Display win message
const displayWinMessage = function (playerNum) {
    displayMessage("There is a win and that win belongs to player " + playerNum)
    playerArea.innerHTML = "<p>" + "Congratulations player " + playerNum + "!!" + "</p>"
}

// Check if column is full
const isColFull = function (colNum, colNode) {
    // Get number of discs on column
    numberOfDiscsDropped = colNode.children.length
    // console.log(numberOfDiscsDropped)
    // If less than 6 discs in column, true
    if (numberOfDiscsDropped === 6) {
        // console.log("true")
        return true
    } else {
        // console.log("false")
        return false
    }
}

// Add AKA drop disc to to column
const redDisc = "<div class='disc red'></div>"
const blackDisc = "<div class='disc black'></div>"
const dropDisc = function (colNum, rowNum, colNode, currentPlayer) {
    // TODO: Add a disc to the DOM colNode for the current player
    if (currentPlayer === 1) {
        colNode.innerHTML += blackDisc
        let rowNum = 0
        // Loop over boardmodel
        for (let i = 0; i < 6; i++) {
            if (colNum !== 0 ?
                boardModel[colNum - 1][i] === null : boardModel[colNum][i] === null) {
                // console.log("rowNum", i)
                rowNum = i
            }
        }
        // Update the board model
        if (colNum !== 0 ? boardModel[colNum - 1][rowNum] = currentPlayer : boardModel[colNum][rowNum] = currentPlayer)
            // console.log(boardModel)
            currentPlayer = 2
        numberOfDiscsDropped++
    } else if (currentPlayer === 2) {
        colNode.innerHTML += redDisc
        let rowNum = 0
        // Loop over boardmodel
        for (let k = 0; k < 6; k++) {
            if (colNum !== 0 ?
                boardModel[colNum - 1][k] === null : boardModel[colNum][k] === null) {
                // console.log("rowNum", i)
                rowNum = k
                currentPlayer === 2
            }
        }
        // Update the board model
        if (colNum !== 0 ? boardModel[colNum - 1][rowNum] = currentPlayer : boardModel[colNum][rowNum] = currentPlayer)
            // console.log(boardModel)
            numberOfDiscsDropped++
    }
}

// Check for Horizontal 4 in a Row
const winnerHorizontal = function (model) {
    for (let colNum = 0; colNum < 3; colNum++) {
        for (let rowNum = 0; rowNum < model[colNum].length; rowNum++) {
            if (model[colNum][rowNum] === model[colNum + 1][rowNum] &&
                model[colNum][rowNum] === model[colNum + 2][rowNum] &&
                model[colNum][rowNum] === model[colNum + 3][rowNum] &&
                model[colNum][rowNum] !== null) {
                return true
            }
        }
    }
    return false
}

// Check for Vertical 4 in a Row
const winnerVertical = function (model) {
    for (let colNum = 0; colNum < 3; colNum++) {
        for (let rowNum = 0; rowNum < model[colNum].length; rowNum++) {
            if (model[colNum][rowNum] === model[colNum][rowNum + 1] &&
                model[colNum][rowNum] === model[colNum][rowNum + 2] &&
                model[colNum][rowNum] === model[colNum][rowNum + 3] &&
                model[colNum][rowNum] !== null) {
                return true
            }
        }
    }
    return false
}

// Check for Diagnol Up 4 in a Row
const winnerDiagnolUp = function (model) {
    for (let colNum = 0; colNum < 3; colNum++) {
        for (let rowNum = 0; rowNum < model[colNum].length; rowNum++) {
            if (model[colNum][rowNum] === model[colNum][rowNum + 1] &&
                model[colNum][rowNum] === model[colNum + 1][rowNum] &&
                model[colNum][rowNum] === model[colNum][rowNum + 2] &&
                model[colNum][rowNum] === model[colNum + 2][rowNum] &&
                model[colNum][rowNum] === model[colNum][rowNum + 3] &&
                model[colNum][rowNum] === model[colNum + 3][rowNum] &&
                model[colNum][rowNum] !== null) {
                return true
            }
        }
    }
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
// // Test
// testGameOver()

// Switch to next player after turn
const switchToNextPlayer = function (evt) {
    if (currentPlayer === 1) {
        disc = document.createElement('div')
        // colNode.innerHTML += "<div class='disc black'></div>"
        currentPlayer = 2
        return disc
    } else if (currentPlayer === 2) {
        disc = document.createElement('div')
        // colNode.innerHTML += "<div class='disc red'></div>"
        currentPlayer = 1
        return disc
    }
}

// Main event listener function
const colClickHandler = function (eventObj) {
    // Get selected col
    const selectedCol = eventObj.currentTarget
    // Remove col# from div id and output col#
    const colNum = Number(selectedCol.id.slice(-1))
    // console.log("Click on Column" + colNum)
    // Get row number
    const rowNum = boardModel[colNum]
    // console.log(rowNum)
    // Check if selected col is full
    if (isColFull(colNum, selectedCol)) {
        // Display a message saying they can't drop there
        displayMessage("Can't drop a disc in a full column. <br> <br> Please choose a different column.")
    } else {
        displayNextPlayersTurn(currentPlayer)
        // Allow player to drop disc in column
        dropDisc(colNum, rowNum, selectedCol, currentPlayer)
        // Check game status after disc drop
        const gameStatus = isGameOver(boardModel)
        // If a tie, display tie message
        if (gameStatus === "tie") {
            displayTieMessage()
        }
        // If a win, display win message 
        else if (gameStatus === "win") {
            displayCurrentPlayer("hello")
            displayWinMessage(currentPlayer)
        }
        // If not a tie or a win then switch players turn
        else {
            switchToNextPlayer(currentPlayer)
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
    displayMessage("Player 1, please click on a column to start.")
}

// START GAME!
initGame()