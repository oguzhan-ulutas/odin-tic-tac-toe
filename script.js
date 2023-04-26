const gameBoard = (() => {
  const makerBoxDiv = document.querySelectorAll(".game-board div");
  const markerX = document.querySelector(
    ".buttons-marker > button:first-child"
  );
  const markerO = document.querySelector(".buttons-marker > button:last-child");
  let gameBoardArray = ["X", "O"];

  //Filling the game board with gameBoardArray itims.
  function fillGameBoard() {
    for (let index in gameBoardArray) {
      const div = document.querySelector(`.div${index}`);
      div.textContent = gameBoardArray[index];
    }
  }

  // makerBoxDiv.forEach((box) => {
  //   box.addEventListener("click", () => {
  //     index = Number(box.classList.value);
  //     if (!gameBoardArray[index] == "X" || !gameBoardArray[index] == "O") {
  //       gameBoardArray[index] = box.textContent;
  //     }
  //   });
  // });

  // function Restart() {
  //   const restartButtun = document.querySelector(".restart-button > button");
  // }
  return { makerBoxDiv, gameBoardArray, fillGameBoard };
})();

gameBoard.fillGameBoard();

// let arr = ["a", "b"];

// for (const i of arr) {
//   console.log(i);
// }
