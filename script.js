const gameBoard = (() => {
  let gameBoardArray = ["X"];
  let playerMarker = "X";
  let computerMarker = "O";
  const makerBoxDiv = document.querySelectorAll(".game-board div");

  //Filling the game board with gameBoardArray items.
  function fillGameBoard() {
    for (let index in gameBoardArray) {
      const div = document.querySelector(`.div${index}`);
      div.textContent = gameBoardArray[index];
    }
  }

  // Add restart button functionality

  function clearDisplay() {
    makerBoxDiv.forEach((box) => {
      box.textContent = "";
    });
  }

  function restart() {
    const restartButton = document.querySelector(".button-restart > button");
    restartButton.addEventListener("click", () => {
      clearDisplay();
      this.playerMarker = "X";
      this.computerMarker = "O";
      this.gameBoardArray = [];
    });
  }

  // Choosing marker
  function markerSelect() {
    const markerX = document.querySelector(
      ".buttons-marker > button:first-child"
    );
    const markerO = document.querySelector(
      ".buttons-marker > button:last-child"
    );
    markerX.addEventListener("click", () => {
      this.playerMarker = "X";
      this.computerMarker = "O";
      this.gameBoardArray = [];
      clearDisplay();
    });
    markerO.addEventListener("click", () => {
      this.playerMarker = "O";
      this.computerMarker = "X";
      this.gameBoardArray = [];
      clearDisplay();
    });
  }

  // Filling gameBoardArray with selection of the player and  the computer
  // And filling the gameboard with markers
  function playerSelection() {
    makerBoxDiv.forEach((box) => {
      box.addEventListener("click", (e) => {
        let index = Number(e.target.classList.value[3]);
        if (this.gameBoardArray[index] === undefined) {
          this.gameBoardArray[index] = this.playerMarker;
          box.textContent = this.playerMarker;
        }
      });
    });
  }

  function _getRandomInt() {
    return Math.floor(Math.random() * 9);
  }

  function computerSelection() {
    let randomInt = _getRandomInt();
    const div = document.querySelector(`.div${randomInt}`);
    console.log(randomInt);

    if (gameBoardArray[randomInt] === undefined) {
      this.gameBoardArray[randomInt] = this.computerMarker;
      div.textContent = computerMarker;
    }
  }

  return {
    fillGameBoard,
    restart,
    gameBoardArray,
    playerMarker,
    computerMarker,
    markerSelect,
    playerSelection,
    computerSelection,
  };
})();

gameBoard.fillGameBoard();
gameBoard.restart();
gameBoard.markerSelect();
gameBoard.playerSelection();
gameBoard.computerSelection();
