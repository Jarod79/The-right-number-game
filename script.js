// Variable for html
const formulaire = document.getElementById("my-form");
const playerName = document.getElementById(`player-name`);
const numberPlayer = document.getElementById(`value`);
const valid = document.getElementById(`valid`);
const player = document.getElementById(`player`);
const replay = document.getElementById("reset");

// Style of Body
body.style.backgroundImage = `url(https://www.transparenttextures.com/patterns/brushed-alum.png)`;
body.style.backgroundColor = `dark`;
body.style.display = `flex`;
body.style.flexDirection = `column`;
body.style.marginTop = `2%`;
body.style.alignItems = `center`;
body.style.textAlign = `center`;
body.style.fontSize = `2rem`;

// Style of form
formulaire.style.width = `100vh`;
formulaire.style.margin = `auto`;
formulaire.style.textAlign = `center`;
formulaire.style.display = `flex`;
formulaire.style.flexDirection = `column`;

//Style of all input
for (const entry of document.querySelectorAll(`input`)) {
  entry.style.borderRadius = `8px`;
  entry.style.width = "50vh";
  entry.style.height = "30px";
  entry.style.textAlign = "center";
  entry.style.border = `2px solid Orange`;
  entry.style.margin = `auto`;
  entry.style.boxShadow = `5px 5px orange`;
}
//Style of number entry input
numberPlayer.style.marginBottom = `20px`;
numberPlayer.style.marginTop = `10px`;

// Style of Button valid
valid.style.color = `white`;
valid.style.backgroundColor = `blue`;
valid.style.border = `2px solid shadow`;
valid.style.margin = `auto`;
valid.style.width = `20vh`;
valid.style.height = `25px`;
valid.style.boxShadow = `5px 5px 5px black`;

//Diplay of Name to player
//Create h1
let displayName = document.createElement(`h1`);
//style text size
displayName.style.fontSize = `4rem`;
//Place to HTML
player.appendChild(displayName);

//Button to modified player name in party
//Create button
const change = document.createElement(`button`);
//Place to HTML
player.appendChild(change);
//Adding name on button
change.innerHTML = `Modify Name`;
//Style of button
change.style.display = `none`;
change.style.margin = `auto`;
change.style.marginBottom = `5vh`;
change.style.boxShadow = `5px 5px 5px black`;

// Function to hide the input entry
valid.addEventListener(`click`, (event) => {
  //diplay name of player
  if (playerName.value !== "") {
    playerName.style.display = `none`;
    displayName.innerHTML = `Let's start, ${playerName.value} ! `;
    change.style.display = `block`;
  }
  //display if the player don't have enter a value
  else {
    change.style.display = `none`;
    displayName.innerHTML = `Enter your name please !`;
  }

  //function to modified the name in party
});
change.addEventListener(`click`, (event) => {
  event.preventDefault();
  playerName.style.display = `block`;
});

// Random number to find
const random = Math.floor(Math.random() * 100) + 1;

// Info for player to game instant
//Create h1
let resultat = document.createElement(`h1`);
//PLace to HTML
formulaire.appendChild(resultat);

// Style of display Info
resultat.style.fontSize = `4rem`;
resultat.style.color = `red`;

//Variable count number of try
let countTry = 0;

// Function who calculate the result and write on html
valid.addEventListener("click", (event) => {
  event.preventDefault();
  countTry++;
  console.log(random);
  if (numberPlayer.value < 1 || numberPlayer.value > 100) {
    resultat.innerHTML = `Type a number between 1 and 100!`;
  }
  // if number are more of the random.
  else if (numberPlayer.value < random) {
    resultat.innerHTML = `It is more than ${numberPlayer.value}`;
    //reset entry to input
    numberPlayer.value = "";
  }

  // if the number are less of the random.
  else if (numberPlayer.value > random) {
    resultat.innerHTML = `It is less than ${numberPlayer.value}`;
    //reset entry to input
    numberPlayer.value = "";
  }

  // If found the wonderfull number.
  else {
    resultat.style.color = `#2FFE25`;
    resultat.style.textShadow = `3px 1px 3px black`;
    numberPlayer.style.display = `none`;
    valid.innerHTML = `Replay`;
    valid.addEventListener(`click`, (event) => {
      window.location.reload(playerName);
    });
    playerName.style.display = `none`;
    displayName.style.display = `none`;
    change.style.display = `none`;
    body.style.backgroundImage = `url("https://www.transparenttextures.com/patterns/old-map.png")`;
    resultat.innerHTML = `Congratulation ${playerName.value} , you win in ${countTry} try !!!`;
  }
});
