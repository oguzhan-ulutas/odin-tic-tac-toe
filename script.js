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
      playerMarker = "X";
      computerMarker = "O";
    });
  }

  return { fillGameBoard, restart, gameBoardArray };
})();

gameBoard.fillGameBoard();
gameBoard.restart();
