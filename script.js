var img = document.createElement("img");

var array = [
  {
    //0
    image: "images/dice-1.png",
  },
  {
    //1
    image: "images/dice-2.png",
  },
  {
    //2
    image: "images/dice-3.png",
  },
  {
    //3
    image: "images/dice-4.png",
  },
  {
    //4
    image: "images/dice-5.png",
  },
  {
    //5
    image: "images/dice-6.png",
  },
];

var player1CN = document.getElementById("player1CN");
var player2CN = document.getElementById("player2CN");
var player1 = document.getElementById("player1");
var player2 = document.getElementById("player2");
var start = document.getElementById("start");
start.addEventListener("click", () => {
  document.getElementById("hold").style.display = "block";
  start.innerText = "🎲 Roll Dice";
});
//////////////////////////////////////////////////////////////
var block = document.getElementById("x");
function roll() {
  var random = Math.floor(Math.random() * 6);
  img.src = array[random].image;
  block.appendChild(img);
  img.style.display = "block";
  /////////////////////////////////////////////////////
  if (random == 0) {
    player2.classList.toggle("active");
    player1CN.innerText = 0;
    player2CN.innerText = 0;
  } else {
    var player1 = document.getElementById("player1");
    player1.classList.add("avtive1");
  }
  /////////////////////////////////////////////////////////////////
  var active = player2.className;
  if (random > 0) {
    if (active == "active") {
      var counter = random + 1;
      var z = parseInt(player2CN.textContent);
      var sum1 = z + counter;
      player2CN.innerText = sum1;
      player1CN.innerText = 0;
    } else if (active !== "active") {
      var current = random + 1;
      var y = parseInt(player1CN.textContent);
      var sum = y + current;
      player1CN.innerText = sum;
      player2CN.innerText = 0;
    }
  }
}
////////////////////////////////////////
var newgamebtn = document.getElementById("winnerbtn");
var btndiv = document.getElementById("btndiv");
var score = document.getElementById("realscore");
var inscore = document.getElementById("realscore2");
var winner = document.getElementById("winnerh1");
document.getElementById("hold").addEventListener("click", () => {
  // player 1
  var x = parseInt(player1CN.textContent);
  var s = parseInt(score.textContent);
  var realscore = s + x;
  score.innerText = realscore;
  player1CN.innerText = 0;
  player2.classList.toggle("active");
  // player 2
  var holdscore = parseInt(player2CN.textContent);
  var inner = parseInt(inscore.textContent);
  var text = inner + holdscore;
  inscore.innerText = text;
  player2CN.innerText = 0;
  // endGame
  if (score.textContent >= 100 || inscore.textContent >= 100) {
    btndiv.style.display = "none";
    newgamebtn.style.display = "block";
    if (score.textContent >= 100) {
      winner.innerText = "PLAYER 1 has won the game";
    } else if (inscore.textContent >= 100) {
      winner.innerText = "PLAYER 2 has won the game";
    }
  }
});
function newgame() {
  score.innerText = 0;
  inscore.innerText = 0;
  winner.style.display = "none";
  newgamebtn.style.display = "none";
  btndiv.style.display = "flex";
}

/* function hold1(){
    var x = parseInt(player1CN.textContent);
    var score = document.getElementById("realscore");
    var s = parseInt(score.textContent);
    var realscore = s + x;
    score.innerText = realscore;
    player1CN.innerText = 0;
    player2.classList.add("active");

};
function hold2() {
    var holdscore = parseInt(player2CN.textContent);
    var inscore = document.getElementById('realscore2');
    var inner = parseInt(inscore.textContent);
    var text = inner + holdscore;
    inscore.innerText = text;
    player2CN.innerText = 0;     

};    */
