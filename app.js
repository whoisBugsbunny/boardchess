const board = document.getElementsByClassName("boardbox");

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

//initializing the position of pieces
const square = document.getElementsByClassName("square");
// placing the pawns
for (let i = 0; i < 64; i++) {
    if (i == 0 || i == 7 || i == 56 || i == 63) {
        if (i < 31) {
            square[i].innerHTML = '<img src="/image/pieces/Chess_rdt60.png" alt="">';
        } else {
            square[i].innerHTML = '<img src="/image/pieces/Chess_rlt60.png" alt="">';
        }
    } else if (i == 1 || i == 6 || i == 57 || i == 62) {
        if (i < 31) {
            square[i].innerHTML = '<img src="/image/pieces/Chess_ndt60.png" alt="">';
        } else {
            square[i].innerHTML = '<img src="/image/pieces/Chess_nlt60.png" alt="">';
        }
    } else if (i == 2 || i == 5 || i == 58 || i == 61) {
        if (i < 31) {
            square[i].innerHTML = '<img src="/image/pieces/Chess_bdt60.png" alt="">';
        } else {
            square[i].innerHTML = '<img src="/image/pieces/Chess_blt60.png" alt="">';
        }
    } else if (i >= 8 && i < 16) {
        square[i].innerHTML = '<img src="/image/pieces/Chess_pdt60.png" alt="">';
    } else if (i >= 48 && i < 56) {
        square[i].innerHTML = '<img src="/image/pieces/Chess_plt60.png" alt="">';
    }
    if (i == 4 || i == 60) {
        if (i < 31) {
            square[i].innerHTML = '<img src="/image/pieces/Chess_kdt60.png" alt="">';
        } else {
            square[i].innerHTML = '<img src="/image/pieces/Chess_klt60.png" alt="">';
        }
    }
    if (i == 3 || i == 59) {
        if (i < 31) {
            square[i].innerHTML = '<img src="/image/pieces/Chess_qdt60.png" alt="">';
        } else {
            square[i].innerHTML = '<img src="/image/pieces/Chess_qlt60.png" alt="">';
        }
    }
}