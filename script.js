const gameBoard = (() => {
  let gameBoardArray = ["X", "O"];
  let playerMarker = "";
  let computerMarker = "";
  const makerBoxDiv = document.querySelectorAll(".game-board div");

  //Filling the game board with gameBoardArray items.
  function fillGameBoard() {
    for (let index in gameBoardArray) {
      const div = document.querySelector(`.div${index}`);
      div.textContent = gameBoardArray[index];
    }
  }

  // function controlFunction() {
  //   console.log("working");
  // }

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
      this.playerMarker = "";
      this.computerMarker = "";
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
  const getRandomInt = () => Math.floor(Math.random() * 10);

  function playerSelection() {
    makerBoxDiv.forEach((box) => {
      box.addEventListener("click", (e) => {
        let index = Number(e.target.classList.value[3]);
        if (this.gameBoardArray[index] === undefined) {
          this.gameBoardArray[index] = this.playerMarker;
        }
      });
    });
  }

  return {
    fillGameBoard,
    restart,
    gameBoardArray,
    playerMarker,
    computerMarker,
    markerSelect,
    playerSelection,
  };
})();

gameBoard.fillGameBoard();
gameBoard.restart();
gameBoard.markerSelect();
gameBoard.playerSelection();
