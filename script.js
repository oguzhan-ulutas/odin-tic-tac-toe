const gameBoard = (() => {
  let _gameBoardArray = [];
  let _playerMarker = "X";
  let _computerMarker = "O";
  const _makerBoxDiv = document.querySelectorAll(".game-board div");

  const _setMarkers = () => {
    gameBoard._gameBoardArray = [];
    gameBoard._playerMarker = "X";
    gameBoard._computerMarker = "O";
  };

  // Add _restart button functionality
  const _clearDisplay = () => {
    _makerBoxDiv.forEach((box) => {
      box.textContent = "";
    });
  };

  const _restart = () => {
    const restartButton = document.querySelector(".button-restart > button");
    restartButton.addEventListener("click", () => {
      gameBoard._gameBoardArray = [];
      gameBoard._playerMarker = "X";
      gameBoard._computerMarker = "O";
      _clearDisplay();
    });
  };

  // Choosing marker
  const _markerSelect = () => {
    const markerX = document.querySelector(
      ".buttons-marker > button:first-child"
    );
    const markerO = document.querySelector(
      ".buttons-marker > button:last-child"
    );
    markerX.addEventListener("click", () => {
      gameBoard._playerMarker = "X";
      gameBoard._computerMarker = "O";
      gameBoard._gameBoardArray = [];
      _clearDisplay();
      _playerSelection();
    });
    markerO.addEventListener("click", () => {
      gameBoard._playerMarker = "O";
      gameBoard._computerMarker = "X";
      gameBoard._gameBoardArray = [];
      _clearDisplay();
      _computerSelection();
    });
  };

  // Filling _gameBoardArray with selection of the player and  the computer
  // And filling the gameboard with markers
  const _playerSelection = () => {
    _makerBoxDiv.forEach((box) => {
      box.addEventListener("click", (e) => {
        let index = Number(e.target.classList.value[3]);

        if (gameBoard._gameBoardArray[index] === undefined) {
          gameBoard._gameBoardArray[index] = gameBoard._playerMarker;
          box.textContent = gameBoard._playerMarker;
          if (
            gameBoard._gameBoardArray.includes(undefined) ||
            gameBoard._gameBoardArray.length !== 9
          ) {
            _computerSelection();
          } else {
            setTimeout(_gameScore, 100);
          }
        }
      });
    });
  };

  const _getRandomInt = () => {
    return Math.floor(Math.random() * 9);
  };

  const _computerSelection = () => {
    let randomInt = _getRandomInt();

    while (gameBoard._gameBoardArray[randomInt] !== undefined) {
      randomInt = _getRandomInt();
    }

    gameBoard._gameBoardArray[randomInt] = gameBoard._computerMarker;
    const div = document.querySelector(`.div${randomInt}`);
    div.textContent = gameBoard._computerMarker;
    setTimeout(_gameScore, 100);
  };

  const _gameScore = () => {
    let comparison_playerMarker = Array(3).fill(gameBoard._playerMarker).join();
    let comparison_computerMarker = Array(3)
      .fill(gameBoard._computerMarker)
      .join();

    if (
      // Column control
      gameBoard._gameBoardArray.slice(0, 3).join() ===
        comparison_playerMarker ||
      gameBoard._gameBoardArray.slice(3, 6).join() ===
        comparison_playerMarker ||
      gameBoard._gameBoardArray.slice(6).join() === comparison_playerMarker ||
      // Row control
      gameBoard._gameBoardArray.filter((v, i) => i % 3 === 0).join() ===
        comparison_playerMarker ||
      gameBoard._gameBoardArray.filter((v, i) => i % 3 === 1).join() ===
        comparison_playerMarker ||
      gameBoard._gameBoardArray.filter((v, i) => i % 3 === 2).join() ===
        comparison_playerMarker ||
      // Diagonal control
      gameBoard._gameBoardArray.filter((v, i) => i % 4 === 0).join() ===
        comparison_playerMarker ||
      [
        gameBoard._gameBoardArray[2],
        gameBoard._gameBoardArray[4],
        gameBoard._gameBoardArray[6],
      ].join() === comparison_playerMarker
    ) {
      alert("You win!!");
      _clearDisplay();
      gameBoard._playerMarker = "X";
      gameBoard._computerMarker = "O";
      gameBoard._gameBoardArray = [];
    } else if (
      // Column control
      gameBoard._gameBoardArray.slice(0, 3).join() ===
        comparison_computerMarker ||
      gameBoard._gameBoardArray.slice(3, 6).join() ===
        comparison_computerMarker ||
      gameBoard._gameBoardArray.slice(6).join() === comparison_computerMarker ||
      // Row control
      gameBoard._gameBoardArray.filter((v, i) => i % 3 === 0).join() ===
        comparison_computerMarker ||
      gameBoard._gameBoardArray.filter((v, i) => i % 3 === 1).join() ===
        comparison_computerMarker ||
      gameBoard._gameBoardArray.filter((v, i) => i % 3 === 2).join() ===
        comparison_computerMarker ||
      // Diagonal control
      gameBoard._gameBoardArray.filter((v, i) => i % 4 === 0).join() ===
        comparison_computerMarker ||
      [
        gameBoard._gameBoardArray[2],
        gameBoard._gameBoardArray[4],
        gameBoard._gameBoardArray[6],
      ].join() === comparison_computerMarker
    ) {
      alert("AI wins!!!");
      _clearDisplay();
      gameBoard._playerMarker = "X";
      gameBoard._computerMarker = "O";
      gameBoard._gameBoardArray = [];
    } else if (
      gameBoard._gameBoardArray.length === 9 &&
      !gameBoard._gameBoardArray.includes(undefined)
    ) {
      alert("It is a tie!!!");
      _clearDisplay();
      gameBoard._playerMarker = "X";
      gameBoard._computerMarker = "O";
      gameBoard._gameBoardArray = [];
    }
  };

  const gameFlow = () => {
    _setMarkers();
    _restart();
    _markerSelect();
    _playerSelection();
  };

  return { gameFlow };
})();

gameBoard.gameFlow();
