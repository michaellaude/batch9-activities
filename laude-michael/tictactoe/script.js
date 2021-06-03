const X_CLASS = 'x'
const CIRCLE_CLASS = 'circle'
const WINNING_COMBINATIONS = [
    [0,1,2], 
    [3,4,5], 
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
] 
const cellElements = document.querySelectorAll('[data-cell]')
const board = document.getElementById('board')
const winningMessageElement = document.getElementById('winningMessage')
const restartButton = document.getElementById ('restartButton')
const winningMessageTextElement = document.querySelector('[data-winning-message-text')
const previousButton = document.getElementById('previousButton')
let previousHistory = []
let afterHistory = []
let circleTurn

startGame()

restartButton.addEventListener ('click', startGame)
previousButton.addEventListener ('click', previousMove)
afterButton.addEventListener ('click', afterMove)

function previousMove () {
    if (previousHistory.length !=0) {
        let prevMove = previousHistory[previousHistory.length - 1];
        let cell = prevMove.history;
        let currentClass = prevMove.current;
        deleteMark(cell, currentClass);
        afterHistory.push(prevMove);
        previousHistory.pop();
    }
}

function afterMove () {
    if (afterHistory.length !=0) {
        let afterMove = afterHistory[afterHistory.length - 1];
        let cell = afterMove.history;
        let currentClass = afterMove.current;
        placeMark(cell, currentClass);
        previousHistory.push(afterMove);
        afterHistory.pop();
    }
}

function startGame() {
    circleTurn = false
    cellElements.forEach(cell => {
        cell.classList.remove(X_CLASS)
        cell.classList.remove(CIRCLE_CLASS)
        cell.removeEventListener('click', handleClick)
        cell.addEventListener('click', handleClick, { once: true } )
    })
    setBoardHoverClass()
    winningMessageElement.classList.remove('show')
}

function handleClick(e) {
    const cell = e.target
    const currentClass = circleTurn ? CIRCLE_CLASS : X_CLASS
    placeMark(cell, currentClass)
    let storeMove = {};
    storeMove.history = cell;
    storeMove.current = currentClass;
    previousHistory.push(storeMove);
    if (checkWin(currentClass)) {
        endGame(false)
    } else if (isDraw()) {
        endGame(true)
    } else {
        swapTurns()
        setBoardHoverClass()
    }
}

function endGame(draw) {
    if (draw) {l
        winningMessageTextElement.innerText = 'tictacTIE'
    } else {
        winningMessageTextElement.innerText = `${circleTurn ? "O's" : "X's"} Wins!`;
        cellElements.forEach(cell => {
            cell.removeEventListener('click', handleClick)
        })
    }
    winningMessageElement.classList.add('show')
}

function isDraw() {
    return [...cellElements].every(cell => {
        return cell.classList.contains(X_CLASS) || 
        cell.classList.contains(CIRCLE_CLASS)
    })
}

function placeMark(cell, currentClass) {
    cell.classList.add(currentClass)
}

function deleteMark(cell,currentClass) {
    cell.classList.remove(currentClass)
}

function swapTurns() {
    circleTurn = !circleTurn
}

function setBoardHoverClass() {
    board.classList.remove(X_CLASS)
    board.classList.remove(CIRCLE_CLASS)
    if (circleTurn) {
        board.classList.add(CIRCLE_CLASS)
    } else {
        board.classList.add(X_CLASS)
    }
}

function checkWin(currentClass) {
    return WINNING_COMBINATIONS.some(combination => {
        return combination.every(index => {
            return cellElements[index].classList.contains(currentClass)
        })
    })
}
