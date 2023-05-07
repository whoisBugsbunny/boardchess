const board = document.getElementsByClassName("boardbox");
setupTheBoard();

function setupTheBoard() {
    for (let i = 1; i <= (64 + 7); i++) {
        if (i % 9 == 0) {
            continue;
        }
        if (i % 2 == 0) {
            board[0].innerHTML += '<div class="square dark"></div>';
        } else {
            board[0].innerHTML += '<div class="square light"></div>';
        }
    }
}

//initializing the position of pieces
const square = document.getElementsByClassName("square");
setupThePieces();

// placing the pawns
function setupThePieces() {
    for (let i = 0; i < 64; i++) {
        col = i < 31 ? 'd' : 'l';
        if (i == 0 || i == 7 || i == 56 || i == 63) {
            square[i].innerHTML = '<img src="/image/pieces/Chess_r' + col + 't60.png" alt="">';
        } else if (i == 1 || i == 6 || i == 57 || i == 62) {
            square[i].innerHTML = '<img src="/image/pieces/Chess_n' + col + 't60.png" alt="">';
        } else if (i == 2 || i == 5 || i == 58 || i == 61) {
            square[i].innerHTML = '<img src="/image/pieces/Chess_b' + col + 't60.png" alt="">';
        } else if ((i >= 8 && i < 16) || (i >= 48 && i < 56)) {
            square[i].innerHTML = '<img src="/image/pieces/Chess_p' + col + 't60.png" alt="">';
        }
        if (i == 4 || i == 60) {
            square[i].innerHTML = '<img src="/image/pieces/Chess_k' + col + 't60.png" alt="">';
        }
        if (i == 3 || i == 59) {
            square[i].innerHTML = '<img src="/image/pieces/Chess_q' + col + 't60.png" alt="">';
        }
    }
}