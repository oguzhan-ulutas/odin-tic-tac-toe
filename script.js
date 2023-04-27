const gameBoard = (() => {
  let gameBoardArray = [];
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
      div.textContent = this.computerMarker;
    }
  }

  function gameScore() {
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
  }

  function gameFlow() {
    restart();
    markerSelect();

    if (playerMarker === "X") {
      playerSelection();
    } else {
      computerSelection();
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
    gameFlow,
  };
})();

gameBoard.gameFlow();
