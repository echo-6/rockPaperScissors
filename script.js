function playGame(userSelect, computerSelect) {
  const gameResult = document.querySelector(".game-result");
  const comSelect = document.querySelector(".com-select");

  if (userSelect === computerSelect) {
    gameResult.textContent = "무승부";
    comSelect.textContent = computerSelect;
  } else if (
    (userSelect === "✌️" && computerSelect === "✋") ||
    (userSelect === "👊" && computerSelect === "✌️") ||
    (userSelect === "✋" && computerSelect === "👊")
  ) {
    gameResult.textContent = "YOU WIN";
    comSelect.textContent = computerSelect;
  } else {
    gameResult.textContent = "YOU LOSE";
    comSelect.textContent = computerSelect;
  }
}

function resetGame() {
  const userSelect = document.querySelector(".user-select");
  const comSelect = document.querySelector(".com-select");
  const gameResult = document.querySelector(".game-result");

  userSelect.textContent = "";
  comSelect.textContent = "";
  gameResult.textContent = "대기중";
}

function game() {
  const resetBtn = document.querySelector("#btn-reset");
  const scissorsBtn = document.querySelector("#scissors");
  const rockBtn = document.querySelector("#rock");
  const paperBtn = document.querySelector("#paper");

  const gameResult = document.querySelector(".game-result");
  gameResult.textContent = "대기중";

  resetBtn.addEventListener("click", resetGame);

  scissorsBtn.addEventListener("click", function () {
    const userSelect = "✌️";
    document.querySelector(".user-select").textContent = userSelect;
    const computerSelect = ["✌️", "👊", "✋"][Math.floor(Math.random() * 3)];
    playGame(userSelect, computerSelect);
  });

  rockBtn.addEventListener("click", function () {
    const userSelect = "👊";
    document.querySelector(".user-select").textContent = userSelect;
    const computerSelect = ["✌️", "👊", "✋"][Math.floor(Math.random() * 3)];
    playGame(userSelect, computerSelect);
  });

  paperBtn.addEventListener("click", function () {
    const userSelect = "✋";
    document.querySelector(".user-select").textContent = userSelect;
    const computerSelect = ["✌️", "👊", "✋"][Math.floor(Math.random() * 3)];
    playGame(userSelect, computerSelect);
  });
}

game();
