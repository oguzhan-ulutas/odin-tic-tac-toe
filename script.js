const gameBoard = (() => {
  let gameBoardArray = [];
  let playerMarker = "X";
  let computerMarker = "O";
  const makerBoxDiv = document.querySelectorAll(".game-board div");

  // Add restart button functionality
  const clearDisplay = () => {
    makerBoxDiv.forEach((box) => {
      box.textContent = "";
    });
  };

  const restart = () => {
    const restartButton = document.querySelector(".button-restart > button");
    restartButton.addEventListener("click", () => {
      gameBoard.gameBoardArray = [];
      gameBoard.playerMarker = "X";
      gameBoard.computerMarker = "O";
      clearDisplay();
    });
  };

  // Choosing marker
  const markerSelect = () => {
    const markerX = document.querySelector(
      ".buttons-marker > button:first-child"
    );
    const markerO = document.querySelector(
      ".buttons-marker > button:last-child"
    );
    markerX.addEventListener("click", () => {
      gameBoard.playerMarker = "X";
      gameBoard.computerMarker = "O";
      gameBoard.gameBoardArray = [];
      clearDisplay();
      playerSelection();
    });
    markerO.addEventListener("click", () => {
      gameBoard.playerMarker = "O";
      gameBoard.computerMarker = "X";
      gameBoard.gameBoardArray = [];
      clearDisplay();
      computerSelection();
    });
  };

  // Filling gameBoardArray with selection of the player and  the computer
  // And filling the gameboard with markers
  const playerSelection = () => {
    makerBoxDiv.forEach((box) => {
      box.addEventListener("click", (e) => {
        let index = Number(e.target.classList.value[3]);

        if (gameBoard.gameBoardArray[index] === undefined) {
          gameBoard.gameBoardArray[index] = gameBoard.playerMarker;
          box.textContent = gameBoard.playerMarker;
          if (
            gameBoard.gameBoardArray.includes(undefined) ||
            gameBoard.gameBoardArray.length !== 9
          ) {
            computerSelection();
          } else {
            setTimeout(gameScore, 100);
          }
        }
      });
    });
  };

  const _getRandomInt = () => {
    return Math.floor(Math.random() * 9);
  };

  const computerSelection = () => {
    let randomInt = _getRandomInt();

    while (gameBoard.gameBoardArray[randomInt] !== undefined) {
      randomInt = _getRandomInt();
    }

    gameBoard.gameBoardArray[randomInt] = gameBoard.computerMarker;
    const div = document.querySelector(`.div${randomInt}`);
    div.textContent = gameBoard.computerMarker;
    setTimeout(gameScore, 100);
  };

  const gameScore = () => {
    let comparisonPlayerMarker = Array(3).fill(gameBoard.playerMarker).join();
    let comparisonComputerMarker = Array(3)
      .fill(gameBoard.computerMarker)
      .join();

    if (
      // Column control
      gameBoard.gameBoardArray.slice(0, 3).join() === comparisonPlayerMarker ||
      gameBoard.gameBoardArray.slice(3, 6).join() === comparisonPlayerMarker ||
      gameBoard.gameBoardArray.slice(6).join() === comparisonPlayerMarker ||
      // Row control
      gameBoard.gameBoardArray.filter((v, i) => i % 3 === 0).join() ===
        comparisonPlayerMarker ||
      gameBoard.gameBoardArray.filter((v, i) => i % 3 === 1).join() ===
        comparisonPlayerMarker ||
      gameBoard.gameBoardArray.filter((v, i) => i % 3 === 2).join() ===
        comparisonPlayerMarker ||
      // Diagonal control
      gameBoard.gameBoardArray.filter((v, i) => i % 4 === 0).join() ===
        comparisonPlayerMarker ||
      [
        gameBoard.gameBoardArray[2],
        gameBoard.gameBoardArray[4],
        gameBoard.gameBoardArray[6],
      ].join() === comparisonPlayerMarker
    ) {
      alert("You win!!");
      clearDisplay();
      gameBoard.playerMarker = "X";
      gameBoard.computerMarker = "O";
      gameBoard.gameBoardArray = [];
    } else if (
      // Column control
      gameBoard.gameBoardArray.slice(0, 3).join() ===
        comparisonComputerMarker ||
      gameBoard.gameBoardArray.slice(3, 6).join() ===
        comparisonComputerMarker ||
      gameBoard.gameBoardArray.slice(6).join() === comparisonComputerMarker ||
      // Row control
      gameBoard.gameBoardArray.filter((v, i) => i % 3 === 0).join() ===
        comparisonComputerMarker ||
      gameBoard.gameBoardArray.filter((v, i) => i % 3 === 1).join() ===
        comparisonComputerMarker ||
      gameBoard.gameBoardArray.filter((v, i) => i % 3 === 2).join() ===
        comparisonComputerMarker ||
      // Diagonal control
      gameBoard.gameBoardArray.filter((v, i) => i % 4 === 0).join() ===
        comparisonComputerMarker ||
      [
        gameBoard.gameBoardArray[2],
        gameBoard.gameBoardArray[4],
        gameBoard.gameBoardArray[6],
      ].join() === comparisonComputerMarker
    ) {
      alert("AI wins!!!");
      clearDisplay();
      gameBoard.playerMarker = "X";
      gameBoard.computerMarker = "O";
      gameBoard.gameBoardArray = [];
    } else if (
      gameBoard.gameBoardArray.length === 9 &&
      !gameBoard.gameBoardArray.includes(undefined)
    ) {
      alert("It is a tie!!!");
      clearDisplay();
      gameBoard.playerMarker = "X";
      gameBoard.computerMarker = "O";
      gameBoard.gameBoardArray = [];
    }
  };

  const gameFlow = () => {
    restart();
    markerSelect();
    playerSelection();
  };

  return {
    restart,
    gameBoardArray,
    playerMarker,
    computerMarker,
    markerSelect,
    playerSelection,
    computerSelection,
    gameFlow,
  };
})();

gameBoard.gameFlow();
