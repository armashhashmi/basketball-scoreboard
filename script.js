let homeScore = 0;
let guestScore = 0;

let homeScoreEl = document.getElementById("home-score");
let guestScoreEl = document.getElementById("guest-score");
homeScoreEl.textContent = homeScore;
guestScoreEl.textContent = guestScore;

function incrementhome1() {
  homeScore += 1;
  homeScoreEl.textContent = homeScore;
}
function incrementhome2() {
  homeScore += 2;
  homeScoreEl.textContent = homeScore;
}
function incrementhome3() {
  homeScore += 3;
  homeScoreEl.textContent = homeScore;
}
function incrementguest1() {
  guestScore += 1;
  guestScoreEl.textContent = guestScore;
}
function incrementguest2() {
  guestScore += 2;
  guestScoreEl.textContent = guestScore;
}
function incrementguest3() {
  guestScore += 3;
  guestScoreEl.textContent = guestScore;
}

function newGame() {
  homeScore = 0;
  homeScoreEl.textContent = homeScore;
  guestScore = 0;
  guestScoreEl.textContent = guestScore;
}
