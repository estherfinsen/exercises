const buttons = document.querySelector("#buttons");
const player1 = document.querySelector("#player1");
const player2 = document.querySelector("#player2");
const winText = document.querySelector("#win");
const loseText = document.querySelector("#lose");
const drawText = document.querySelector("#draw");
let playerschoice;
let computerschoice;

//Knapper event listeners
buttons.addEventListener("click", function (e) {
  resetGame();
  console.log(e.target.className);
  player1.classList.add("shake");
  player2.classList.add("shake");

  // Wait for the shake animation to end before changing the hand image
  player1.addEventListener("animationend", function onAnimationEnd() {
    player1.removeEventListener("animationend", onAnimationEnd); // Remove the event listener to avoid multiple executions

    if (e.target.className == "rock") {
      playerschoice = "rock";
      player1.style.backgroundImage = "url(hand_rock.png)";
    } else if (e.target.className == "paper") {
      playerschoice = "paper";
      player1.style.backgroundImage = "url(hand_paper.png)";
    } else if (e.target.className == "scissors") {
      playerschoice = "scissors";
      player1.style.backgroundImage = "url(hand_scissors.png)";
    }
    console.log("playerschoice is " + playerschoice);

    computerChoose();
    playGame();

    // Remove the shake class after finishing the hand change
    player1.classList.remove("shake");
    player2.classList.remove("shake");
  });
});

function computerChoose() {
  let number = Math.floor(Math.random() * 3);
  if (number == 0) {
    computerschoice = "rock";
    player2.style.backgroundImage = "url(hand_rock.png)";
  } else if (number == 1) {
    computerschoice = "paper";
    player2.style.backgroundImage = "url(hand_paper.png)";
  } else if (number == 2) {
    computerschoice = "scissors";
    player2.style.backgroundImage = "url(hand_scissors.png)";
  }
  console.log("Computerchoice is " + computerschoice);
  return computerschoice;
}

function playGame() {
  document.getElementById("win").classList.add("hidden");
  document.getElementById("lose").classList.add("hidden");
  document.getElementById("draw").classList.add("hidden");
  var resultElement = document.getElementById("result");

  if (playerschoice === computerschoice) {
    console.log("draw");
    document.getElementById("draw").classList.remove("hidden");
  } else if ((playerschoice === "rock" && computerschoice === "scissors") || (playerschoice === "paper" && computerschoice === "rock") || (playerschoice === "scissors" && computerschoice === "paper")) {
    console.log("win");
    document.getElementById("win").classList.remove("hidden");
  } else {
    console.log("loss");
    document.getElementById("lose").classList.remove("hidden");
  }
}

function resetGame() {
  playerschoice = null;
  computerschoice = null;

  winText.classList.add("hidden");
  loseText.classList.add("hidden");
  drawText.classList.add("hidden");

  player1.style.backgroundImage = "url(hand_rock.png)";
}
