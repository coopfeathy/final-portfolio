const player = "X";
const computer = "O";

let board_full = false;
let play_board = ["", "", "", "", "", "", "", "", ""];

const board_container = document.querySelector(".play-area");

const winner_statement = document.getElementById("winner");

check_board_complete = () => {
  let flag = true;
  play_board.forEach(element => {
    if (element != player && element != computer) {
      flag = false;
    }
  });
  board_full = flag;
};

const check_line = (a, b, c) => {
  return (
    play_board[a] == play_board[b] &&
    play_board[b] == play_board[c] &&
    (play_board[a] == player || play_board[a] == computer)
  );
};

const check_match = () => {
  for (i = 0; i < 9; i += 3) {
    if (check_line(i, i + 1, i + 2)) {
      document.querySelector(`#block_${i}`).classList.add("win");
      document.querySelector(`#block_${i + 1}`).classList.add("win");
      document.querySelector(`#block_${i + 2}`).classList.add("win");
      return play_board[i];
    }
  }
  for (i = 0; i < 3; i++) {
    if (check_line(i, i + 3, i + 6)) {
      document.querySelector(`#block_${i}`).classList.add("win");
      document.querySelector(`#block_${i + 3}`).classList.add("win");
      document.querySelector(`#block_${i + 6}`).classList.add("win");
      return play_board[i];
    }
  }
  if (check_line(0, 4, 8)) {
    document.querySelector("#block_0").classList.add("win");
    document.querySelector("#block_4").classList.add("win");
    document.querySelector("#block_8").classList.add("win");
    return play_board[0];
  }
  if (check_line(2, 4, 6)) {
    document.querySelector("#block_2").classList.add("win");
    document.querySelector("#block_4").classList.add("win");
    document.querySelector("#block_6").classList.add("win");
    return play_board[2];
  }
  return "";
};

const check_for_winner = () => {
  let res = check_match()
  if (res == player) {
    winner.innerText = "Player wins!";
    winner.classList.add("playerWin");
    board_full = true
  } else if (res == computer) {
    winner.innerText = "Computer wins!";
    winner.classList.add("computerWin");
    board_full = true
  } else if (board_full) {
    winner.innerText = "Draw!";
    winner.classList.add("draw");
  }
};


const render_board = () => {
  board_container.innerHTML = ""
  play_board.forEach((e, i) => {
    board_container.innerHTML += `<div id="block_${i}" class="block" onclick="addPlayerMove(${i})">${play_board[i]}</div>`
  });
};

const game_loop = () => {
  render_board();
  check_board_complete();
  check_for_winner();
}

const addPlayerMove = e => {
  if (!board_full && play_board[e] == "") {
    play_board[e] = player;
    game_loop();
    addComputerMove();
  }
};

const addComputerMove = () => {
  if (!board_full) {
    var selected;
    if(1 == 2){
      console.log("this is impossible");

    // ---------------------- OFFENCE ----------------------
    // ---------------------- ROWS ----------------------
    } else if (play_board[0] == computer && play_board[1] == computer && play_board[2] == "") {
      selected = 2;
    } else if (play_board[0] == computer && play_board[2] == computer && play_board[1] == "") {
      selected = 1;
    } else if (play_board[1] == computer && play_board[2] == computer && play_board[0] == "") {
      selected = 0;

    } else if (play_board[3] == computer && play_board[4] == computer && play_board[5] == "") {
      selected = 5;
    } else if (play_board[4] == computer && play_board[5] == computer && play_board[3] == "") {
      selected = 3;
    } else if (play_board[3] == computer && play_board[5] == computer && play_board[4] == "") {
      selected = 4;

    } else if (play_board[6] == computer && play_board[7] == computer && play_board[8] == "") {
      selected = 8;
    } else if (play_board[6] == computer && play_board[8] == computer && play_board[7] == "") {
      selected = 7;
    } else if (play_board[7] == computer && play_board[8] == computer && play_board[6] == "") {
      selected = 6;
      
    // ---------------------- COLUMNS ----------------------
    } else if (play_board[0] == computer && play_board[3] == computer && play_board[6] == "") {
      selected = 6;
    } else if (play_board[0] == computer && play_board[6] == computer && play_board[3] == "") {
      selected = 3;
    } else if (play_board[3] == computer && play_board[6] == computer && play_board[0] == "") {
      selected = 0;

    } else if (play_board[1] == computer && play_board[4] == computer && play_board[7] == "") {
      selected = 7;
    } else if (play_board[1] == computer && play_board[7] == computer && play_board[4] == "") {
      selected = 4;
    } else if (play_board[4] == computer && play_board[7] == computer && play_board[1] == "") {
      selected = 1;

    } else if (play_board[2] == computer && play_board[5] == computer && play_board[8] == "") {
      selected = 8;
    } else if (play_board[2] == computer && play_board[8] == computer && play_board[5] == "") {
      selected = 5;
    } else if (play_board[5] == computer && play_board[8] == computer && play_board[2] == "") {
      selected = 2;
    // ---------------------- ZAGGZ ----------------------
    } else if (play_board[0] == computer && play_board[4] == computer && play_board[8] == "") {
      selected = 8;
    } else if (play_board[0] == computer && play_board[8] == computer && play_board[4] == "") {
      selected = 4;
    } else if (play_board[4] == computer && play_board[8] == computer && play_board[0] == "") {
      selected = 0;

    } else if (play_board[6] == computer && play_board[4] == computer && play_board[2] == "") {
      selected = 2;
    } else if (play_board[6] == computer && play_board[2] == computer && play_board[4] == "") {
      selected = 4;
    } else if (play_board[4] == computer && play_board[2] == computer && play_board[6] == "") {
      selected = 6;

      // ---------------------- DEFENSE ----------------------

      // ---------------------- ROWS ----------------------
    } else if (play_board[0] == player && play_board[1] == player && play_board[2] == "") {
      selected = 2;
    } else if (play_board[0] == player && play_board[2] == player && play_board[1] == "") {
      selected = 1;
    } else if (play_board[1] == player && play_board[2] == player && play_board[0] == "") {
      selected = 0;

    } else if (play_board[3] == player && play_board[4] == player && play_board[5] == "") {
      selected = 5;
    } else if (play_board[4] == player && play_board[5] == player && play_board[3] == "") {
      selected = 3;
    } else if (play_board[3] == player && play_board[5] == player && play_board[4] == "") {
      selected = 4;

    } else if (play_board[6] == player && play_board[7] == player && play_board[8] == "") {
      selected = 8;
    } else if (play_board[6] == player && play_board[8] == player && play_board[7] == "") {
      selected = 7;
    } else if (play_board[7] == player && play_board[8] == player && play_board[6] == "") {
      selected = 6;
      
    // ---------------------- COLUMNS ----------------------
    } else if (play_board[0] == player && play_board[3] == player && play_board[6] == "") {
      selected = 6;
    } else if (play_board[0] == player && play_board[6] == player && play_board[3] == "") {
      selected = 3;
    } else if (play_board[3] == player && play_board[6] == player && play_board[0] == "") {
      selected = 0;

    } else if (play_board[1] == player && play_board[4] == player && play_board[7] == "") {
      selected = 7;
    } else if (play_board[1] == player && play_board[7] == player && play_board[4] == "") {
      selected = 4;
    } else if (play_board[4] == player && play_board[7] == player && play_board[1] == "") {
      selected = 1;

    } else if (play_board[2] == player && play_board[5] == player && play_board[8] == "") {
      selected = 8;
    } else if (play_board[2] == player && play_board[8] == player && play_board[5] == "") {
      selected = 5;
    } else if (play_board[5] == player && play_board[8] == player && play_board[2] == "") {
      selected = 2;
    // ---------------------- ZAGGZ ----------------------
    } else if (play_board[0] == player && play_board[4] == player && play_board[8] == "") {
      selected = 8;
    } else if (play_board[0] == player && play_board[8] == player && play_board[4] == "") {
      selected = 4;
    } else if (play_board[4] == player && play_board[8] == player && play_board[0] == "") {
      selected = 0;

    } else if (play_board[6] == player && play_board[4] == player && play_board[2] == "") {
      selected = 2;
    } else if (play_board[6] == player && play_board[2] == player && play_board[4] == "") {
      selected = 4;
    } else if (play_board[4] == player && play_board[2] == player && play_board[6] == "") {
      selected = 6;
    } else if(play_board[4] == ""){
      random = Math.random() >= 0.4 // %60 probability of get "true"
      if(random){
        selected = 4;
        console.log(true);
      } else {
        console.log(false);
      }
    }
    while (play_board[selected] != "") {
      selected = Math.floor(Math.random() * 9);
      console.log(selected);
    };
    play_board[selected] = computer;
    game_loop();
  }
};

const reset_board = () => {
  play_board = ["", "", "", "", "", "", "", "", ""];
  board_full = false;
  winner.classList.remove("playerWin");
  winner.classList.remove("computerWin");
  winner.classList.remove("draw");
  winner.innerText = "In case you are bored";
  render_board();
};

//initial render
render_board();