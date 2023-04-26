const gameBoard = (() => {
  const makerBoxDiv = document.querySelectorAll(".game-board div");
  const markerX = document.querySelector(
    ".buttons-marker > button:first-child"
  );
  const markerO = document.querySelector(".buttons-marker > button:last-child");
  let gameBoardArray = ["X", "O"];

  //Filling the game board with gameBoardArray items.
  function fillGameBoard() {
    if (gameBoardArray === []) {
      makerBoxDiv.forEach((box) => {
        box.textContent = "";
      });
    } else {
      for (let index in gameBoardArray) {
        const div = document.querySelector(`.div${index}`);
        div.textContent = gameBoard.gameBoardArray[index];
      }
    }
  }

  // Add restart button functionality
  const restartButton = document.querySelector(".button-restart > button");
  restartButton.addEventListener("click", () => {
    gameBoard.gameBoardArray = [];
    fillGameBoard();
  });

  return { makerBoxDiv, gameBoardArray, fillGameBoard };
})();

gameBoard.fillGameBoard();

// gameBoard.makerBoxDiv.forEach((box) => {
//   console.log(box.textContent);
// });
