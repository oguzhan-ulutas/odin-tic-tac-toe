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
      gameBoardArray = [];
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
      playerMarker = "X";
      computerMarker = "O";
      gameBoardArray = [];
      clearDisplay();
      playerSelection();
    });
    markerO.addEventListener("click", () => {
      playerMarker = "O";
      computerMarker = "X";
      gameBoardArray = [];
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

        if (gameBoardArray[index] === undefined) {
          gameBoardArray[index] = playerMarker;
          box.textContent = playerMarker;
          if (
            gameBoardArray.includes(undefined) ||
            gameBoardArray.length !== 9
          ) {
            computerSelection();
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
    console.log(randomInt);

    while (gameBoardArray[randomInt] !== undefined) {
      randomInt = _getRandomInt();
    }

    console.log(randomInt);
    gameBoardArray[randomInt] = computerMarker;
    const div = document.querySelector(`.div${randomInt}`);
    div.textContent = computerMarker;
  };

  const gameScore = () => {
    let comparisonPlayerMarker = Array(3).fill(playerMarker).join();
    let comparisonComputerMarker = Array(3).fill(computerMarker).join();

    if (
      // Column control
      gameBoardArray.slice(0, 3).join() === comparisonPlayerMarker ||
      gameBoardArray.slice(3, 6).join() === comparisonPlayerMarker ||
      gameBoardArray.slice(6).join() === comparisonPlayerMarker ||
      // Row control
      gameBoardArray.filter((v, i) => i % 3 === 0).join() ===
        comparisonPlayerMarker ||
      gameBoardArray.filter((v, i) => i % 3 === 1).join() ===
        comparisonPlayerMarker ||
      gameBoardArray.filter((v, i) => i % 3 === 2).join() ===
        comparisonPlayerMarker ||
      // Diagonal control
      gameBoardArray.filter((v, i) => i % 4 === 0).join() ===
        comparisonPlayerMarker ||
      [gameBoardArray[2], gameBoardArray[4], gameBoardArray[6]].join() ===
        comparisonPlayerMarker
    ) {
      alert("You win!!");
    } else if (
      // Column control
      gameBoardArray.slice(0, 3).join() === comparisonComputerMarker ||
      gameBoardArray.slice(3, 6).join() === comparisonComputerMarker ||
      gameBoardArray.slice(6).join() === comparisonComputerMarker ||
      // Row control
      gameBoardArray.filter((v, i) => i % 3 === 0).join() ===
        comparisonComputerMarker ||
      gameBoardArray.filter((v, i) => i % 3 === 1).join() ===
        comparisonComputerMarker ||
      gameBoardArray.filter((v, i) => i % 3 === 2).join() ===
        comparisonComputerMarker ||
      // Diagonal control
      gameBoardArray.filter((v, i) => i % 4 === 0).join() ===
        comparisonComputerMarker ||
      [gameBoardArray[2], gameBoardArray[4], gameBoardArray[6]].join() ===
        comparisonComputerMarker
    ) {
      alert("AI wins!!!");
    } else if (gameBoardArray.length === 9) {
      alert("It is a tie!!!");
    }
  };

  const gameFlow = () => {
    restart();
    markerSelect();
    playerSelection();

    // if (playerMarker === "X") {
    //   this.playerSelection();
    // } else {
    //   this.computerSelection();
    // }
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

// gameBoard.markerSelect();
