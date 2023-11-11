document.addEventListener('DOMContentLoaded', function () {
    const gameBoard = document.getElementById('game-board');

    // Function to update the game board on the frontend
    function updateBoard(board) {
        // Update the game board based on the provided board state
        // You may use a loop to generate the HTML for the game board
    }

    // Function to make a move and update the game board
    function makeMove(cellIndex) {
        // Send an asynchronous request to the backend to make a move
        fetch('/make_move', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                move: cellIndex,
            }),
        })
        .then(response => response.json())
        .then(data => {
            // Update the game board on the frontend based on the new state
            updateBoard(data.board);
        });
    }

    // Attach click event listeners to each cell on the game board
    gameBoard.addEventListener('click', function (event) {
        const cellIndex = event.target.dataset.index;
        if (cellIndex !== undefined) {
            makeMove(cellIndex);
        }
    });

    // Initial setup - fetch the initial game state from the backend
    fetch('/make_move', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            move: null,
        }),
    })
    .then(response => response.json())
    .then(data => {
        // Update the game board on the frontend based on the initial state
        updateBoard(data.board);
    });
});
