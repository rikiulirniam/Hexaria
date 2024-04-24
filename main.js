const iButton = document.querySelector(".instruction_button");
let currentIns = false;
iButton.addEventListener("click", (e) => {
  if (!currentIns) {
    document.querySelector(".instruction").classList.add("animated_insc");
  } else {
    document.querySelector(".instruction").classList.remove("animated_insc");
  }
  currentIns = !currentIns;
});

const userInput = document.querySelector("#username");
const botInput = document.querySelector("#botname");

function disabling() {
  if (!userInput.value || !botInput.value) {
    document.querySelector(".play_button").disabled = true;
  } else if (userInput.value && botInput.value) {
    document.querySelector(".play_button").disabled = false;
  }
}

const playButton = document.querySelector("#play_button");
playButton.addEventListener("click", (e) => {
  localStorage.setItem("username", userInput.value);
  localStorage.setItem("botname", botInput.value);

  document.querySelector("#game_screen").style.display = "flex";
  document.querySelector("#welcome_screen").style.display = "none";
});
function initGame() {}
initGame();

document.querySelector(".leaderboard > h1").addEventListener("click", (e) => {
  console.log(e);
});
