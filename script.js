const gameBoard = (() => {
  let gameBoardArray = ["X", "O"];
  let playerMarker = "";
  let computerMarker = "";

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
    const makerBoxDiv = document.querySelectorAll(".game-board div");
    makerBoxDiv.forEach((box) => {
      box.textContent = "";
    });
  }

  function restart() {
    const restartButton = document.querySelector(".button-restart > button");
    restartButton.addEventListener("click", () => {
      this.gameBoardArray = [];
      this.playerMarker = "";
      this.computerMarker = "";
      clearDisplay();
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
    });
    markerO.addEventListener("click", () => {
      this.playerMarker = "O";
      this.computerMarker = "X";
    });
  }

  return {
    fillGameBoard,
    restart,
    gameBoardArray,
    playerMarker,
    computerMarker,
    markerSelect,
  };
})();

gameBoard.fillGameBoard();
gameBoard.restart();
gameBoard.markerSelect();
