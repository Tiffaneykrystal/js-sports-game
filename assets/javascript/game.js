let teamOneShoot = document.querySelector("#teamone-numshots");
let buttonOne = document.querySelector("#teamone-shoot-button");
let teamOneGoals = document.querySelector("#teamone-numgoals");

let teamTwoShoot = document.querySelector("#teamtwo-numshots");
let buttonTwo = document.querySelector("#teamtwo-shoot-button");
let teamTwoGoals = document.querySelector("#teamtwo-numgoals");

let gameReset = document.querySelector("#reset-button");
let resetCount = document.querySelector("#num-resets");

gameReset.addEventListener("click", function () {
  let newResetCount = Number(resetCount.innerHTML) + 1;
  teamOneShoot.innerHTML = 0;
  teamOneGoals.innerHTML = 0;
  teamTwoShoot.innerHTML = 0;
  teamTwoGoals.innerHTML = 0;
  resetCount.innerHTML = newResetCount;
});

buttonOne.addEventListener("click", function () {
  let newTeamOneShots = Number(teamOneShoot.innerHTML) + 1;
  let x = Math.floor(Math.random() * 10);
  if (x % 2 == 0) {
    x = Number(teamOneGoals.innerHTML) + 1;
    teamOneGoals.innerHTML = x;
  }
  teamOneShoot.innerHTML = newTeamOneShots;
});

buttonTwo.addEventListener("click", function () {
  let newTeamTwoShots = Number(teamTwoShoot.innerHTML) + 1;
  let x = Math.floor(Math.random() * 10);
  if (x % 2 == 0) {
    x = Number(teamTwoGoals.innerHTML) + 1;
    teamTwoGoals.innerHTML = x;
  }
  teamTwoShoot.innerHTML = newTeamTwoShots;
});

console.log(buttonOne);
console.log(buttonTwo);
console.log(gameReset);
