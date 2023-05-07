const board = document.getElementsByClassName("boardbox");
setupTheBoard();

function setupTheBoard() {
    for (let i = 1; i <= (64 + 7); i++) {
        if (i % 9 == 0) {
            continue;
        }
        col = (i % 2 == 0) ? 'dark' : 'light';
        board[0].innerHTML += '<div class="square ' + col + '"></div>';
    }
}

//initializing the position of pieces
const square = document.getElementsByClassName("square");
setupThePieces();

function setupThePieces() {
    for (let i = 0; i < 64; i++) {
        col = i < 31 ? 'd' : 'l';
        if (i == 0 || i == 7 || i == 56 || i == 63) {
            square[i].innerHTML = '<img class="pieces" src="/image/pieces/Chess_r' + col + 't60.png" alt="" draggable="true">';
        } else if (i == 1 || i == 6 || i == 57 || i == 62) {
            square[i].innerHTML = '<img class="pieces" src="/image/pieces/Chess_n' + col + 't60.png" alt="" draggable="true">';
        } else if (i == 2 || i == 5 || i == 58 || i == 61) {
            square[i].innerHTML = '<img class="pieces" src="/image/pieces/Chess_b' + col + 't60.png" alt="" draggable="true">';
        } else if ((i >= 8 && i < 16) || (i >= 48 && i < 56)) {
            square[i].innerHTML = '<img class="pieces" src="/image/pieces/Chess_p' + col + 't60.png" alt="" draggable="true">';
        }
        if (i == 4 || i == 60) {
            square[i].innerHTML = '<img class="pieces" src="/image/pieces/Chess_k' + col + 't60.png" alt="" draggable="true">';
        }
        if (i == 3 || i == 59) {
            square[i].innerHTML = '<img class="pieces" src="/image/pieces/Chess_q' + col + 't60.png" alt="" draggable="true">';
        }
    }
}

setEventToPieces();
function setEventToPieces() {
    let pieces = document.querySelectorAll('.pieces');
    pieces.forEach(piece => {
        piece.addEventListener('dragstart', copyLink);
        piece.addEventListener('dragend', pasteLink);
        piece.addEventListener('drop', pasteLink);
    });

    for (let i = 0; i < square.length; i++) {
        square[i].addEventListener('dragover', dragOver);
        square[i].addEventListener('dragenter', dragEnter);
        square[i].addEventListener('dragleave', dragLeave);
        square[i].addEventListener('drop', drop);
    };
};

var pieceSelectedURL = '';
function copyLink(event) {
    console.log("copy");
    pieceSelectedURL = event.target.src;
    event.target.style.opacity = '0.5';
}
function pasteLink(event) {
    console.log("paste");
    console.log(event.target.src);
    event.target.style.opacity = '1';
    event.target.src = '';
}
function dragOver(event) {
    event.preventDefault();
    // console.log(event.target);
    // event.target.style.background = 'red';

}

function dragEnter(event) {
    event.target.style.background = 'rgba(226, 43, 43, 0.5)';
}

function dragLeave(event) {
    event.target.style.background = '';
}

function drop(event) {
    // event.preventDefault();
    // let data = event.dataTransfer.getData('text/plain');
    // let sourceElement = document.getElementById(data);
    // event.currentTarget.appendChild(sourceElement);
    console.log("target");
    console.log(event.target);
    event.target.innerHTML = '<img class="pieces" src="' + pieceSelectedURL + '" alt="" draggable="true">';
    setEventToPieces();
}
// gpt
// let pieces = document.querySelectorAll('.pieces');

// pieces.forEach(piece => {
//     piece.addEventListener('dragstart', dragStart);
//     piece.addEventListener('dragend', dragEnd);
// });

// function dragStart(event) {
//     event.dataTransfer.setData('text/plain', event.target.id);
//     event.currentTarget.style.opacity = '0.5';
// }

// function dragEnd(event) {
//     event.currentTarget.style.opacity = '1';
// }
// pieces.forEach(element => {
//     element.addEventListener('dragover', dragOver);
//     element.addEventListener('dragenter', dragEnter);
//     element.addEventListener('dragleave', dragLeave);
//     element.addEventListener('drop', drop);
// });

// function dragOver(event) {
//     event.preventDefault();
// }

// function dragEnter(event) {
//     event.currentTarget.classList.add('highlight');
// }

// function dragLeave(event) {
//     event.currentTarget.classList.remove('highlight');
// }

// function drop(event) {
//     event.preventDefault();
//     let data = event.dataTransfer.getData('text/plain');
//     let sourceElement = document.getElementById(data);
//     event.currentTarget.appendChild(sourceElement);
//     event.currentTarget.classList.remove('highlight');
// }
