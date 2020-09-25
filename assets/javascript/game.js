let teamoneshoot = document.querySelector("#teamone-numshots");
let teamtwoshoot = document.querySelector("#teamtwo-numshots");
let buttoneone = document.querySelector("#teamone-shoot-button");
let buttontwo = document.querySelector("#teamtwo-shoot-button");
let teamonegoals = document.querySelector("#teamone-numgoals");
let teamtwogoals = document.querySelector("#teamtwo-numgoals");
let reset = document.querySelector("#reset-button");
let buttonone = Math.random();

reset.addEventListener("click", function () {
  resetButton.innerHTML = reset;
  resetButton = reset;
});
buttonone.addEventListener("click", function () {
  shoot = Math.random();
  if (shoot < 0.4) {
    teamonegoals += 1;
    teamoneshoot += 1;
  } else {
  }
});

buttontwo.addEventListener("click", function () {});
console.log(buttoneone);
console.log(buttontwo);
console.log(reset);
